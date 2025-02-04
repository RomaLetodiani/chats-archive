import { env } from '@/env';
import { DynamoDBAdapter } from '@auth/dynamodb-adapter';
import { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { ddbDocClient, getUserById, TABLE_NAME } from './dynamodb';
import { logger } from './logger';

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true
    })
  ],
  adapter: DynamoDBAdapter(ddbDocClient, {
    tableName: TABLE_NAME
  }),
  pages: {
    signIn: '/',
    error: '/404'
  },
  session: {
    strategy: 'database'
  },
  callbacks: {
    signIn: async ({ user }) => {
      try {
        if (!user.id) {
          return false;
        }

        const existingUser = await getUserById(user.id);

        if (!existingUser) {
          throw new Error('User not found');
        }

        return true;
      } catch (error) {
        logger.error(`Error signing in: ${error}`);
        return false;
      }
    },

    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id
      }
    })
  }
} satisfies NextAuthConfig;

export default authConfig;
