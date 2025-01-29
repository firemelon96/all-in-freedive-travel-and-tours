import { Button } from '@/components/ui/button';
import { Headline } from './headlines';
import Link from 'next/link';

export const Contact = () => {
  return (
    <section className='relative bg-blue-600/30'>
      <div
        className='h-screen z-0 bg-cover overflow-hidden bg-center bg-fixed bg-no-repeat'
        style={{
          backgroundImage: `url(/turtle.gif)`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='flex flex-col items-center justify-center w-full space-y-4 text-white absolute inset-y-0 mx-2'>
        <Headline
          label='Contact us'
          heading='Start Your Journey with Us Today'
        />
        <p className='sm:max-w-xl text-center'>
          Your next adventure is just a message away—contact us today and
          let&apos;s make it unforgettable!
        </p>
        <Button variant='primary' asChild>
          <Link href='/contact'>Get Started</Link>
        </Button>
      </div>
    </section>
  );
};
