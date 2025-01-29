import { cn } from '@/lib/utils';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '600',
});

type Props = {
  label: string;
  heading: string;
  className?: string;
};

export const Headline = ({ label, heading, className }: Props) => {
  return (
    <div className='text-center text-white flex flex-col gap-4 mx-4'>
      <span className={cn(' text-3xl', className, dancingScript.className)}>
        {label}
      </span>
      <h1
        className={cn(
          `sm:text-6xl text-5xl font-bold max-w-xl mx-auto`,
          className,
          dancingScript.className
        )}
      >
        {heading}
      </h1>
    </div>
  );
};
