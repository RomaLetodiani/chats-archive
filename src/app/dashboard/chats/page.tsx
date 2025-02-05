'use client';

import { useChats } from '@/features/chats/chats-context';
import { ChatsNoData } from '@/features/chats/chats-no-data';
import { redirect } from 'next/navigation';

const ChatsPage = () => {
  const { chats } = useChats();

  if (chats.length === 0) {
    return <ChatsNoData />;
  }

  redirect(`/dashboard/chats/${chats[chats.length - 1].id}`);
};

export default ChatsPage;
