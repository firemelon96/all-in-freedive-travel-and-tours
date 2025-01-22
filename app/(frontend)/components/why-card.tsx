import { Card } from '@/components/ui/card';

type Props = {
  count: number;
  title: string;
  description: string;
};

export const WhyCard = ({ count, title, description }: Props) => {
  return (
    <Card className='bg-sky-800 text-white flex items-center justify-center h-full px-7 py-4 gap-4'>
      <span className='text-5xl px-5 py-2 bg-blue-500 rounded-full font-semibold'>
        {count}
      </span>
      <div className='flex flex-col gap-1.5'>
        <p className='text-3xl font-semibold'>{title}</p>
        <span>{description}</span>
      </div>
    </Card>
  );
};
