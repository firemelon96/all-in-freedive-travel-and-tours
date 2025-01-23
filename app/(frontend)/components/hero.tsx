import { Button } from '@/components/ui/button';
import { Headline } from './headlines';

const Hero = () => {
  return (
    <section className='min-h-screen relative'>
      <div
        className=' h-screen w-full z-0 bg-cover bg-center bg-fixed bg-no-repeat'
        style={{
          backgroundImage: `url(/hero.avif)`,
        }}
      ></div>
      <div className='flex flex-col items-center justify-center w-full space-y-4 text-white absolute inset-y-0'>
        <Headline
          className=''
          label='All In Travel and Freediving Tour Services'
          heading='Travel Beyond Limits, Dive Beyond Depths.'
        />
        {/* <p className='pt-10 max-w-xl text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p> */}

        <Button
          variant='primary'
          size='lg'
          className='mt-5 font-semibold rounded-full'
        >
          Explore
        </Button>
      </div>
    </section>
  );
};

export default Hero;
