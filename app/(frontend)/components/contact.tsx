import { Button } from '@/components/ui/button';
import { Headline } from './headlines';

export const Contact = () => {
  return (
    <section className='h-screen relative bg-blue-600/30'>
      <div
        className='h-screen w-full z-0 bg-cover bg-center bg-fixed bg-no-repeat'
        style={{
          backgroundImage: `url(/turtle.gif)`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='flex flex-col items-center justify-center w-full space-y-4 text-white absolute inset-y-0'>
        <Headline
          label='Contact us'
          heading='Start Your Journey with Us Today'
        />
        <p className='max-w-xl text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Button className='bg-sky-500 text-white'>Get Started</Button>
      </div>
    </section>
  );
};
