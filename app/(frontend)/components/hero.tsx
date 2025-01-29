import { Button } from '@/components/ui/button';
import { Headline } from './headlines';

const Hero = () => {
  return (
    <section className='relative'>
      <div
        className=' md:h-screen h-[600px] w-full z-0 bg-cover bg-center bg-fixed bg-no-repeat'
        style={{
          backgroundImage: `url(/hero.avif)`,
        }}
      ></div>
      <div className='flex flex-col items-center justify-center w-full space-y-4 text-white absolute inset-y-0'>
        <Headline
          className=''
          label="All'in Freediving and Tour Services"
          heading='Travel Beyond Limits, Dive Beyond Depths.'
        />

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
