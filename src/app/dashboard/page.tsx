import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect('/');
  } else {
    redirect('/dashboard/overview');
  }
};

export default Dashboard;
