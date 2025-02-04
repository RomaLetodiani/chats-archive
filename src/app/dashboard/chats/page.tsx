import { Card } from '@/components/ui/card';

const ChatsPage = () => {
  return <ChatsNoData />;
};

export default ChatsPage;

export const ChatsNoData = () => (
  <Card className='flex h-full w-full flex-col items-center justify-center gap-8'>
    <p className='text-lg font-medium'>No Chats Found</p>
  </Card>
);
