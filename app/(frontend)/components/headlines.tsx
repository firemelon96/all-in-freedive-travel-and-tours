import { cn } from '@/lib/utils';
// import { Dancing_Script } from 'next/font/google';
import localFont from 'next/font/local';
import FadeInWrapper from './fade-in-wrapper';

// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
//   weight: '600',
// });

const jatayu = localFont({
  src: './../../fonts/Jatayu.otf',
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
      <FadeInWrapper>
        {label && (
          <span className={cn('text-lg sm:text-2xl', className)}>{label}</span>
        )}
      </FadeInWrapper>
      <FadeInWrapper delay={300}>
        <h1
          className={cn(
            `xl:text-6xl text-4xl sm:text-5xl font-bold max-w-xl mx-auto`,
            className,
            jatayu.className
          )}
        >
          {heading}
        </h1>
      </FadeInWrapper>
    </div>
  );
};
