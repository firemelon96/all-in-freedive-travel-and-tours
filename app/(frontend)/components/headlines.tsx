import { cn } from '@/lib/utils';

type Props = {
  label: string;
  heading: string;
  className?: string;
};

export const Headline = ({ label, heading, className }: Props) => {
  return (
    <div className='text-center text-white flex flex-col gap-4'>
      <span className={cn('uppercase text-xl', className)}>{label}</span>
      <h1 className={cn('text-5xl font-bold max-w-3xl mx-auto', className)}>
        {heading}
      </h1>
    </div>
  );
};
