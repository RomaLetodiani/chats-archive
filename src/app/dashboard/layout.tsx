import KBar from '@/components/kbar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { auth } from '@/lib/auth';
import { getUserByEmail } from '@/lib/dynamodb';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Supernova Chats Dashboard',
  description: 'Supernova Chats Dashboard'
};

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
  const session = await auth();

  if (!session?.user?.email) {
    redirect('/login');
  }

  const user = await getUserByEmail(session?.user?.email);

  if (!user) {
    redirect('/login');
  }

  return (
    <KBar>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar role={user.role} />
        <SidebarInset>
          <Header />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </KBar>
  );
};

export default DashboardLayout;
