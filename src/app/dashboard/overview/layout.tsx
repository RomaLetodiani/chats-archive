import { PageContainer } from '@/components/layout/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MessageSquare, StoreIcon, Users } from 'lucide-react';
import { ReactNode } from 'react';

type OverviewLayoutProps = {
  sales: ReactNode;
  pie_stats: ReactNode;
  bar_stats: ReactNode;
  area_stats: ReactNode;
};

const OverviewLayout = ({
  sales,
  pie_stats,
  bar_stats,
  area_stats
}: OverviewLayoutProps) => {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-col space-y-2'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-2xl font-bold tracking-tight'>
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Messages
              </CardTitle>
              <MessageSquare className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>15,489</div>
              <p className='text-xs text-muted-foreground'>
                +12.3% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Active Users
              </CardTitle>
              <Users className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1,234</div>
              <p className='text-xs text-muted-foreground'>
                +32.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Response Time
              </CardTitle>
              <Clock className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1.2s</div>
              <p className='text-xs text-muted-foreground'>
                -15% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Chat Sessions
              </CardTitle>
              <StoreIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>892</div>
              <p className='text-xs text-muted-foreground'>
                +45 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-8'>{bar_stats}</div>
          {/* <div className='col-span-4 md:col-span-3'> */}
          {/* sales arallel routes */}
          {/* {sales} */}
          {/* </div> */}
          {/* <div className='col-span-4'>{area_stats}</div> */}
          {/* <div className='col-span-4 md:col-span-3'>{pie_stats}</div> */}
        </div>
      </div>
    </PageContainer>
  );
};

export default OverviewLayout;
