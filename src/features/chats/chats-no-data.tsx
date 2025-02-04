import { BrainCircuit } from 'lucide-react';

export const ChatsNoData = () => (
  <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
    <div className='relative z-20 flex items-center text-lg font-medium'>
      <div className='rounded-lg bg-white/10 p-2 backdrop-blur-md'>
        <BrainCircuit className='h-6 w-6 text-blue-400' />
      </div>
      <span className='mx-6 text-xl font-semibold tracking-tight'>
        Supernova
      </span>
      <div className='rotate-180 transform rounded-lg bg-white/10 p-2 backdrop-blur-md'>
        <BrainCircuit className='h-6 w-6 text-blue-400' />
      </div>
    </div>
    <p className='text-lg font-medium'>No Chats Found</p>
  </div>
);
