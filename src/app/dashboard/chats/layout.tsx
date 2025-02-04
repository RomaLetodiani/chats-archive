import { PageContainer } from '@/components/layout/page-container';
import { ChatsSidebar } from '@/features/chats/chat-sidebar';
import { ChatsProvider } from '@/features/chats/chats-context';
import { auth } from '@/lib/auth';
import { getChatMessages, getChatsFromChatMessages } from '@/lib/dynamodb';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const ChatsLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (!session?.user?.email) {
    redirect('/');
  }

  const chatMessages = await getChatMessages({ email: session.user.email });
  const chats = await getChatsFromChatMessages(chatMessages);

  return (
    <PageContainer scrollable={false}>
      <ChatsProvider initialChats={chats}>
        <ChatsSidebar chats={chats} />
        {children}
      </ChatsProvider>
    </PageContainer>
  );
};

export default ChatsLayout;
