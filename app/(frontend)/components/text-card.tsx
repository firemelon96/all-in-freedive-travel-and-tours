'use client';
import CountUp from 'react-countup';
import { Card } from '@/components/ui/card';

type Props = {
  count: number;
  label: string;
};

export const TextCard = ({ count, label }: Props) => {
  return (
    <Card className='bg-sky-800 text-white flex items-center justify-center h-full flex-col p-4'>
      <CountUp end={count} duration={5} className='text-2xl font-bold' />
      <span>{label}</span>
    </Card>
  );
};
