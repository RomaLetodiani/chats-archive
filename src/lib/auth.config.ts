import { env } from '@/env';
// import { DynamoDBAdapter } from '@auth/dynamodb-adapter';
import { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import { ddbDocClient } from './dynamodb';

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true
    })
  ],
  // adapter: DynamoDBAdapter(ddbDocClient, {
  //   tableName: 'chat-demo',
  //   partitionKey: 'pk',
  //   sortKey: 'sk',
  //   indexName: 'email-index',
  //   indexPartitionKey: 'email'
  // }),
  pages: {
    signIn: '/'
  }
  // session: {
  //   strategy: 'database'
  // },
  // callbacks: {
  //   session: ({ session, user }) => ({
  //     ...session,
  //     user: {
  //       ...session.user,
  //       id: user.id
  //     }
  //   })
  // }
} satisfies NextAuthConfig;

export default authConfig;
