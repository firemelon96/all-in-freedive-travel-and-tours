import { Card } from '@/components/ui/card';

type Props = {
  count: number;
  label: string;
};

export const TextCard = ({ count, label }: Props) => {
  return (
    <Card className='bg-sky-800 text-white flex items-center justify-center h-full flex-col p-4'>
      <p className='text-3xl font-bold'>{count}</p>
      <span>{label}</span>
    </Card>
  );
};
