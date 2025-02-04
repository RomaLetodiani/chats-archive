export type CHAT_PK = 'retain' | 'chat-demo' | 'talktome';

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
