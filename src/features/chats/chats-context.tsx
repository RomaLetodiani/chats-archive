'use client';

import { Chat } from '@/types/chats.types';
import { createContext, ReactNode, useContext } from 'react';

interface ChatsContextValue {
  chats: Chat[];
}

const ChatsContext = createContext<ChatsContextValue | undefined>(undefined);

type ChatsProviderProps = {
  children: ReactNode;
  initialChats: Chat[];
};

export function ChatsProvider({ children, initialChats }: ChatsProviderProps) {
  const value: ChatsContextValue = {
    chats: initialChats
  };

  return (
    <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>
  );
}

export function useChats() {
  const context = useContext(ChatsContext);
  if (context === undefined) {
    throw new Error('useChats must be used within a ChatsProvider');
  }
  return context;
}
