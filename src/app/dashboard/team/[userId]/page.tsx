import FormCardSkeleton from '@/components/form-card-skeleton';
import { PageContainer } from '@/components/layout/page-container';
import { TeamViewPage } from '@/features/team/components/team-view-page';
import { Suspense } from 'react';

export const metadata = {
  title: 'Dashboard : Team View'
};

type PageProps = { params: Promise<{ userId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <TeamViewPage userId={params.userId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
