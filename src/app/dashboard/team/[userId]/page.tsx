import FormCardSkeleton from '@/components/form-card-skeleton';
import { PageContainer } from '@/components/layout/page-container';
import { TeamViewPage } from '@/features/team/components/team-view-page';
import { UserIdParams } from '@/types/params.types';
import { Suspense } from 'react';

export const metadata = {
  title: 'Dashboard : Team View'
};

type PageProps = UserIdParams;

export default async function Page({ params }: PageProps) {
  const { userId } = await params;
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <TeamViewPage userId={decodeURIComponent(userId)} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
