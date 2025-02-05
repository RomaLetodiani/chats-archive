import { ChatMessages } from '@/features/chats/chat-messages';
import { ChatIdParams } from '@/types/params.types';

type ChatPageProps = ChatIdParams;

const ChatPage = async ({ params }: ChatPageProps) => {
  const { chatId } = await params;
  return (
    <div className='h-full w-full'>
      <ChatMessages chatId={chatId} />
    </div>
  );
};

export default ChatPage;
