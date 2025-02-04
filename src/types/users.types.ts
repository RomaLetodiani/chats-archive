import { CHAT_PK } from './chats.types';

export const USER_START = 'USER#';
type USER_START = typeof USER_START;

export type User = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  sk: `${USER_START}${string}`;
  GSI1PK: `${USER_START}${string}`;
  GSI1SK: `${USER_START}${string}`;
  pk: `${USER_START}${string}`;
  emailVerified: null | boolean;
  type: 'USER';
  role: 'ADMIN' | 'USER';
  company: CHAT_PK;
};
