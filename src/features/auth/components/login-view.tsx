import { Metadata } from 'next';
import { FeaturesSection } from './features-section';
import { LoginSection } from './login-section';
import { LogoSection } from './logo-section';
import { QuoteSection } from './quote-section';

export const metadata: Metadata = {
  title: 'Authentication - Supernova Chats',
  description: 'Chat with your customers using AI.'
};

export const LoginViewPage = () => (
  <div className='relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
    <div className='relative hidden h-full flex-col justify-around bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 p-10 text-white dark:border-r lg:flex'>
      <div className='absolute inset-0 bg-zinc-900/90 backdrop-blur-sm' />
      <LogoSection />
      <FeaturesSection />
      <QuoteSection />
    </div>
    <LoginSection />
  </div>
);
