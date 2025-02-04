import { Card } from '@/components/ui/card';
import { ChatMessages } from '@/features/chats/chat-messages';
import { ChatIdParams } from '@/types/params.types';

type ChatPageProps = ChatIdParams;

const ChatPage = async ({ params }: ChatPageProps) => {
  const { chatId } = await params;
  return (
    <Card className='h-[calc(100vh-6rem)] w-full'>
      <ChatMessages chatId={chatId} />
    </Card>
  );
};

export default ChatPage;
