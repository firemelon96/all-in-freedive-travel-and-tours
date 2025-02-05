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
  subHeading?: string;
  className?: string;
};

export const Headline = ({ label, subHeading, heading, className }: Props) => {
  return (
    <div className='text-center text-white flex flex-col gap-2 md:gap-4 mx-4'>
      <FadeInWrapper>
        {label && (
          <span className={cn('text-base sm:text-2xl', className)}>
            {label}
          </span>
        )}
      </FadeInWrapper>
      <FadeInWrapper delay={300}>
        <p
          className={cn(
            `xl:text-6xl text-4xl font-bold max-w-xl mx-auto`,
            className,
            jatayu.className
          )}
        >
          {heading}
        </p>
        {subHeading && (
          <p
            className={cn(
              `xl:text-6xl text-4xl font-bold max-w-lg mx-auto`,
              className,
              jatayu.className
            )}
          >
            {' '}
            {subHeading}
          </p>
        )}
      </FadeInWrapper>
    </div>
  );
};
