import { LoginViewPage } from '@/features/auth/components/login-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

const LoginPage = () => <LoginViewPage />;

export default LoginPage;
