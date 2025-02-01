import { PageContainer } from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

const Dashboard = () => (
  <PageContainer>
    <div className='flex flex-1 flex-col space-y-4'>
      <Heading
        title='Text to Speech Converter'
        description='Convert text to speech'
      />
      <Separator />
    </div>
  </PageContainer>
);

export default Dashboard;
