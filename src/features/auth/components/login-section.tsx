import Link from 'next/link';
import { GoogleSignInButton } from './google-auth-button';

export const LoginSection = () => (
  <div className='flex h-full items-center justify-center p-8'>
    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
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
);
