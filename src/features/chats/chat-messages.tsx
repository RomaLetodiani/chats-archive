'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useChats } from './chats-context';

type ChatMessagesProps = {
  chatId: string;
};

export const ChatMessages = ({ chatId }: ChatMessagesProps) => {
  const { chats } = useChats();
  const chat = chats.find((chat) => chat.id === chatId);

  if (!chat) {
    return (
      <div className='flex h-full items-center justify-center'>
        <p className='text-gray-500'>Chat not found</p>
      </div>
    );
  }

  return (
    <div className='flex h-full flex-col'>
      <div className='border-b p-4'>
        <h2 className='font-semibold'>Chat #{chatId.slice(-4)}</h2>
        <p className='text-sm text-gray-500'>
          Started {format(new Date(chat.createdAt), 'MMM d, yyyy h:mm a')}
        </p>
      </div>

      <div
        className={cn(
          'flex flex-col gap-y-8 overflow-y-auto p-4',
          'scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-gray-700'
        )}
      >
        {chat.messages.map((message) => (
          <div
            key={message.createdAt}
            className={cn(
              'flex max-w-[80%] gap-3',
              message.isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'
            )}
          >
            <Avatar>
              <AvatarFallback>{message.isBot ? 'AI' : 'U'}</AvatarFallback>
            </Avatar>
            <div
              className={cn(
                'rounded-lg p-4',
                message.isBot
                  ? 'border bg-white dark:bg-gray-800'
                  : 'bg-blue-600 text-white dark:bg-gray-800'
              )}
            >
              <p className='whitespace-pre-wrap'>{message.message}</p>

              <div
                className={cn(
                  'mt-1 text-xs',
                  message.isBot
                    ? 'text-gray-500 dark:text-gray-400'
                    : 'text-blue-100 dark:text-blue-100'
                )}
              >
                {format(new Date(message.createdAt), 'h:mm a')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
