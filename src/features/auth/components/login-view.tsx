import { BrainCircuit } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FeaturesSection } from './features-section';
import { GoogleSignInButton } from './google-auth-button';

export const metadata: Metadata = {
  title: 'Authentication - Supernova Chats',
  description: 'Chat with your customers using AI.'
};

export const LoginViewPage = () => (
  <div className='relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
    <div className='relative hidden h-full flex-col justify-around bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 p-10 text-white dark:border-r lg:flex'>
      <div className='absolute inset-0 bg-zinc-900/90 backdrop-blur-sm' />

      {/* Logo Section */}
      <div className='relative z-20 flex items-center text-lg font-medium'>
        <div className='rounded-lg bg-white/10 p-2 backdrop-blur-md'>
          <BrainCircuit className='h-6 w-6 text-blue-400' />
        </div>
        <span className='ml-3 text-xl font-semibold tracking-tight'>
          Supernova Chats
        </span>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Quote Section */}
      <div className='relative z-20'>
        <blockquote className='space-y-2'>
          <p className='text-lg font-medium italic text-white/90'>
            &ldquo;Transform Possibilities into Realities with AI.&rdquo;
          </p>
        </blockquote>
      </div>
    </div>

    {/* Login Section */}
    <div className='flex h-full items-center justify-center p-8'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Welcome back
          </h1>
          <p className='text-sm text-muted-foreground'>
            Transform your content with AI-Powered Chats
          </p>
        </div>

        <GoogleSignInButton />

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Protected by SSL
            </span>
          </div>
        </div>

        <p className='px-8 text-center text-sm text-muted-foreground'>
          By continuing, you agree to our{' '}
          <Link
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
);
