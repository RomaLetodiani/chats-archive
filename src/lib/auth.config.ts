import { env } from '@/env';
import { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true
    })
  ],
  pages: {
    signIn: '/'
  }
} satisfies NextAuthConfig;

export default authConfig;
