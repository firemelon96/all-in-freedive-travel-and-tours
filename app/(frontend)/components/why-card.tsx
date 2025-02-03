import { Card } from '@/components/ui/card';

type Props = {
  count: number;
  title: string;
  description: string;
};

export const WhyCard = ({ count, title, description }: Props) => {
  return (
    <Card className='bg-sky-800 text-white flex items-center justify-center h-full px-7 py-4 gap-4'>
      <span className='sm:text-5xl text-3xl px-4 md:px-5 py-2 bg-blue-500 rounded-full font-semibold'>
        {count}
      </span>
      <div className='flex flex-col gap-1.5'>
        <p className='sm:text-3xl text-xl font-semibold'>{title}</p>
        <span className='text-sm md:text-xl text-slate-200 text-justify'>
          {description}
        </span>
      </div>
    </Card>
  );
};
