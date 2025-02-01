import { ScrollArea } from '@/components/ui/scroll-area';
import { PropsWithChildren } from 'react';

type PageContainerProps = {
  scrollable?: boolean;
} & PropsWithChildren;

export const PageContainer = ({
  children,
  scrollable = true
}: PageContainerProps) =>
  scrollable ? (
    <ScrollArea className='h-[calc(100dvh-52px)]'>
      <div className='flex flex-1 p-4 md:px-6'>{children}</div>
    </ScrollArea>
  ) : (
    <div className='flex flex-1 p-4 md:px-6'>{children}</div>
  );
