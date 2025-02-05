import { BrainCircuit } from 'lucide-react';

export const LogoSection = () => (
  <div className='relative z-20 flex items-center text-lg font-medium'>
    <div className='rounded-lg bg-white/10 p-2 backdrop-blur-md'>
      <BrainCircuit className='h-6 w-6 text-blue-400' />
    </div>
    <span className='ml-3 text-xl font-semibold tracking-tight'>
      Supernova Chats
    </span>
  </div>
);
