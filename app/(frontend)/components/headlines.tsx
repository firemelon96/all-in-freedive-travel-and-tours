import { cn } from '@/lib/utils';
// import { Dancing_Script } from 'next/font/google';
import localFont from 'next/font/local';

// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
//   weight: '600',
// });

const jatayu = localFont({
  src: '../../fonts/jatayu.otf',
  display: 'swap',
  weight: '400',
});

type Props = {
  label?: string;
  heading: string;
  className?: string;
};

export const Headline = ({ label, heading, className }: Props) => {
  return (
    <div className='text-center text-white flex flex-col gap-4 mx-4'>
      {label && (
        <span className={cn(' text-3xl', jatayu.className, className)}>
          {label}
        </span>
      )}
      <h1
        className={cn(
          `sm:text-6xl text-5xl font-bold max-w-xl mx-auto`,
          className,
          jatayu.className
        )}
      >
        {heading}
      </h1>
    </div>
  );
};
