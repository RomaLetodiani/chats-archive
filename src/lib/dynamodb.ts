// Create service client module using ES6 syntax.
import { env } from '@/env';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand
} from '@aws-sdk/lib-dynamodb';
import { logger } from './logger';

export const ddbClient = new DynamoDBClient({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY
  }
});

export const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

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
    const result = await ddbDocClient.send(
      new ScanCommand({
        TableName: TABLE_NAME
      })
    );
    return (result.Items as T[]) || [];
  } catch (error) {
    logger.error('Error listing items:', error);
    throw error;
  }
}
