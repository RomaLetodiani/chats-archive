'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2025-01-01', messages: 222, sessions: 150 },
  { date: '2025-01-02', messages: 97, sessions: 180 },
  { date: '2025-01-03', messages: 167, sessions: 120 },
  { date: '2025-01-04', messages: 242, sessions: 260 },
  { date: '2025-01-05', messages: 373, sessions: 290 },
  { date: '2025-01-06', messages: 301, sessions: 340 },
  { date: '2025-01-07', messages: 245, sessions: 180 },
  { date: '2025-01-08', messages: 409, sessions: 320 },
  { date: '2025-01-09', messages: 59, sessions: 110 },
  { date: '2025-01-10', messages: 261, sessions: 190 },
  { date: '2025-01-11', messages: 327, sessions: 350 },
  { date: '2025-01-12', messages: 292, sessions: 210 },
  { date: '2025-01-13', messages: 342, sessions: 380 },
  { date: '2025-01-14', messages: 137, sessions: 220 },
  { date: '2025-01-15', messages: 120, sessions: 170 },
  { date: '2025-01-16', messages: 138, sessions: 190 },
  { date: '2025-01-17', messages: 446, sessions: 360 },
  { date: '2025-01-18', messages: 364, sessions: 410 },
  { date: '2025-01-19', messages: 243, sessions: 180 },
  { date: '2025-01-20', messages: 89, sessions: 150 },
  { date: '2025-01-21', messages: 137, sessions: 200 },
  { date: '2025-01-22', messages: 224, sessions: 170 },
  { date: '2025-01-23', messages: 138, sessions: 230 },
  { date: '2025-01-24', messages: 387, sessions: 290 },
  { date: '2025-01-25', messages: 215, sessions: 250 },
  { date: '2025-01-26', messages: 75, sessions: 130 },
  { date: '2025-01-27', messages: 383, sessions: 420 },
  { date: '2025-01-28', messages: 122, sessions: 180 },
  { date: '2025-01-29', messages: 315, sessions: 240 },
  { date: '2025-01-30', messages: 454, sessions: 380 },
  { date: '2025-01-31', messages: 165, sessions: 220 },
  { date: '2025-02-01', messages: 293, sessions: 310 },
  { date: '2025-02-03', messages: 247, sessions: 190 },
  { date: '2025-02-04', messages: 385, sessions: 420 },
  { date: '2025-02-05', messages: 481, sessions: 390 },
  { date: '2025-02-06', messages: 498, sessions: 520 },
  { date: '2025-02-07', messages: 388, sessions: 300 },
  { date: '2025-02-08', messages: 149, sessions: 210 },
  { date: '2025-02-09', messages: 227, sessions: 180 },
  { date: '2025-02-10', messages: 293, sessions: 330 },
  { date: '2025-02-11', messages: 335, sessions: 270 },
  { date: '2025-02-12', messages: 197, sessions: 240 },
  { date: '2025-02-13', messages: 197, sessions: 160 },
  { date: '2025-02-14', messages: 448, sessions: 490 },
  { date: '2025-02-15', messages: 473, sessions: 380 },
  { date: '2025-02-16', messages: 338, sessions: 400 },
  { date: '2025-02-17', messages: 499, sessions: 420 },
  { date: '2025-02-18', messages: 315, sessions: 350 },
  { date: '2025-02-19', messages: 235, sessions: 180 },
  { date: '2025-02-20', messages: 177, sessions: 230 },
  { date: '2025-02-21', messages: 82, sessions: 140 },
  { date: '2025-02-22', messages: 81, sessions: 120 },
  { date: '2025-02-23', messages: 252, sessions: 290 },
  { date: '2025-02-24', messages: 294, sessions: 220 },
  { date: '2025-02-25', messages: 201, sessions: 250 },
  { date: '2025-02-26', messages: 213, sessions: 170 },
  { date: '2025-02-27', messages: 420, sessions: 460 },
  { date: '2025-02-28', messages: 233, sessions: 190 },
  { date: '2025-02-29', messages: 78, sessions: 130 },
  { date: '2025-02-30', messages: 340, sessions: 280 },
  { date: '2025-02-31', messages: 178, sessions: 230 },
  { date: '2025-03-01', messages: 178, sessions: 200 },
  { date: '2025-03-02', messages: 470, sessions: 410 },
  { date: '2025-03-03', messages: 103, sessions: 160 },
  { date: '2025-03-04', messages: 439, sessions: 380 },
  { date: '2025-03-05', messages: 88, sessions: 140 },
  { date: '2025-03-06', messages: 294, sessions: 250 },
  { date: '2025-03-07', messages: 323, sessions: 370 },
  { date: '2025-03-08', messages: 385, sessions: 320 },
  { date: '2025-03-09', messages: 438, sessions: 480 },
  { date: '2025-03-10', messages: 155, sessions: 200 },
  { date: '2025-03-11', messages: 92, sessions: 150 },
  { date: '2025-03-12', messages: 492, sessions: 420 },
  { date: '2025-03-13', messages: 81, sessions: 130 },
  { date: '2025-03-14', messages: 426, sessions: 380 },
  { date: '2025-03-15', messages: 307, sessions: 350 },
  { date: '2025-03-16', messages: 371, sessions: 310 },
  { date: '2025-03-17', messages: 475, sessions: 520 },
  { date: '2025-03-18', messages: 107, sessions: 170 },
  { date: '2025-03-19', messages: 341, sessions: 290 },
  { date: '2025-03-20', messages: 408, sessions: 450 },
  { date: '2025-03-21', messages: 169, sessions: 210 },
  { date: '2025-03-22', messages: 317, sessions: 270 },
  { date: '2025-03-23', messages: 480, sessions: 530 },
  { date: '2025-03-24', messages: 132, sessions: 180 },
  { date: '2025-03-25', messages: 141, sessions: 190 },
  { date: '2025-03-26', messages: 434, sessions: 380 },
  { date: '2025-03-27', messages: 448, sessions: 490 },
  { date: '2025-03-28', messages: 149, sessions: 200 },
  { date: '2025-03-29', messages: 103, sessions: 160 },
  { date: '2025-03-30', messages: 446, sessions: 400 }
];

const chartConfig = {
  sessions: {
    label: 'Sessions',
    color: 'hsl(var(--chart-1))'
  },
  messages: {
    label: 'Messages',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('sessions');

  const total = React.useMemo(
    () => ({
      messages: chartData.reduce((acc) => acc + 0, 0),
      sessions: chartData.reduce((acc) => acc + 0, 0)
    }),
    []
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Total Messages</CardTitle>
          <CardDescription>
            Showing total messages for the last 3 months
          </CardDescription>
        </div>
        <div className='flex'>
          {['messages', 'sessions'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            // if (!chart || total[key as keyof typeof total] === 0) return null;
            if (!chart) return null;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className='relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                onClick={() => setActiveChart(chart)}
              >
                <span className='text-xs text-muted-foreground'>
                  {chartConfig[chart].label}
                </span>
                <span className='text-lg font-bold leading-none sm:text-3xl'>
                  {/* {total[key as keyof typeof total]?.toLocaleString()} */}0
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[280px] w-full'
        >
          <BarChart
            accessibilityLayer
            data={chartData.map((item) => ({
              ...item,
              [activeChart]: 0
            }))}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='views'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
