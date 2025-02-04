import { PageContainer } from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { PropsWithChildren } from 'react';

const ChatsLayout = ({ children }: PropsWithChildren) => {
  return (
    <PageContainer scrollable={false}>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title='Chats' description='Manage chats' />
        </div>
        {children}
      </div>
    </PageContainer>
  );
};

export default ChatsLayout;
