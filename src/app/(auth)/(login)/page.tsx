import { LoginViewPage } from '@/features/auth/components/login-view';
import { auth } from '@/lib/auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

const LoginPage = async () => {
  const session = await auth();

  if (session?.user) {
    redirect('/dashboard');
  }

  return <LoginViewPage />;
};

export default LoginPage;
