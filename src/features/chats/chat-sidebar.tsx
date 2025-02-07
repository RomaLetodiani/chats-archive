'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Chat } from '@/types/chats.types';
import { format } from 'date-fns';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ChatsSidebarProps = {
  chats: Chat[];
};

export const ChatsSidebar = ({ chats }: ChatsSidebarProps) => {
  const pathname = usePathname();

  return (
    <Card
      className={cn(
        'mr-5 h-full min-w-72 max-w-72 overflow-y-auto p-0',
        'scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-gray-700'
      )}
    >
      <div className='border-b p-4'>
        <h2 className='text-lg font-semibold'>Conversations</h2>
      </div>
      <div>
        {chats
          .sort(
            (a, b) =>
              new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
          )
          .map((chat) => {
            const isActive = pathname === `/dashboard/chats/${chat.id}`;
            const lastMessage = chat.messages[chat.messages.length - 1];

            return (
              <Link key={chat.id} href={`/dashboard/chats/${chat.id}`}>
                <div
                  className={cn(
                    'border-b p-4 transition-colors',
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                  )}
                >
                  <div className='mb-1 flex items-start justify-between'>
                    <h3 className='truncate font-medium'>
                      Chat #{chat.id.slice(-4)}
                    </h3>
                    <span className='text-xs text-gray-500'>
                      {format(new Date(chat.endTime), 'MMM d, h:mm a')}
                    </span>
                  </div>
                  <p className='truncate text-sm'>{lastMessage.message}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </Card>
  );
};
