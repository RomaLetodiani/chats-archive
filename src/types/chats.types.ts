export type CHAT_PK = 'retain' | 'chat-demo' | 'talktome';
export type CHAT_ROLE = 'USER' | 'ADMIN';

export const CHAT_ROLES = ['USER', 'ADMIN'] as const;
export const CHAT_COMPANIES = ['retain', 'chat-demo', 'talktome'] as const;

export type ChatMessage = {
  createdAt: string;
  chatId: string;
  sk: string;
  message: string;
  pk: CHAT_PK;
  isBot: boolean;
};

export type Chat = {
  id: string;
  createdAt: string;
  endTime: string;
  messages: ChatMessage[];
};
