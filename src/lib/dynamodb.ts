// Create service client module using ES6 syntax.
import { env } from '@/env';
import { DynamoDB, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  DynamoDBDocument,
  GetCommand,
  PutCommand,
  UpdateCommand
} from '@aws-sdk/lib-dynamodb';
import { logger } from './logger';

const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY
  },
  region: env.AWS_REGION
};

export const ddbDocClient = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true
  }
});

export const TABLE_NAME = 'chat-demo';

/* CRUD Operations Implementation */

// Create an item in DynamoDB
export async function createItem<T extends Object>(item: T): Promise<T> {
  try {
    await ddbDocClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: item
      })
    );
    return item;
  } catch (error) {
    logger.error('Error creating item:', error);
    throw error;
  }
}

// Delete an item from DynamoDB
export async function deleteItem<T extends Object>(
  key: Record<string, string>
): Promise<T | undefined> {
  try {
    const result = await ddbDocClient.send(
      new DeleteCommand({
        TableName: TABLE_NAME,
        Key: key,
        ReturnValues: 'ALL_OLD' // Return the deleted item details
      })
    );
    return result.Attributes as T | undefined;
  } catch (error) {
    logger.error('Error deleting item:', error);
    throw error;
  }
}

// List all items in the table using Scan (use with caution for large tables)
export async function listItems<T extends Object>(): Promise<T[]> {
  try {
    const result = await ddbDocClient.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'pk = :pk',
      ExpressionAttributeValues: {
        ':pk': 'retain'
      }
    });
    logger.info('result', { result });
    return (result.Items as T[]) || [];
  } catch (error) {
    logger.error('Error listing items:', error);
    throw error;
  }
}

// Add get and update operations needed by the adapter
export async function getItem<T>(
  key: Record<string, string>,
  mapper: (raw: Record<string, any>) => T
): Promise<T | undefined> {
  try {
    const result = await ddbDocClient.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: key
      })
    );
    return result.Item ? mapper(result.Item) : undefined;
  } catch (error) {
    logger.error('Error getting item:', error);
    throw error;
  }
}

export async function updateItem<T>(
  key: Record<string, string>,
  updates: Partial<T>
): Promise<T | undefined> {
  try {
    const updateExpressions: string[] = [];
    const expressionAttributeValues: Record<string, any> = {};
    const expressionAttributeNames: Record<string, string> = {};

    Object.entries(updates).forEach(([key, value], index) => {
      const attributeName = `#attr${index}`;
      const attributeValue = `:val${index}`;
      updateExpressions.push(`${attributeName} = ${attributeValue}`);
      expressionAttributeNames[attributeName] = key;
      expressionAttributeValues[attributeValue] = value;
    });

    const result = await ddbDocClient.send(
      new UpdateCommand({
        TableName: TABLE_NAME,
        Key: key,
        UpdateExpression: `SET ${updateExpressions.join(', ')}`,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: 'ALL_NEW'
      })
    );
    return result.Attributes as T | undefined;
  } catch (error) {
    logger.error('Error updating item:', error);
    throw error;
  }
}
