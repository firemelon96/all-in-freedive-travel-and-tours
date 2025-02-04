import { Button } from '@/components/ui/button';
import { ImageCard } from './image-card';
import { TextCard } from './text-card';
import Link from 'next/link';
import FadeInWrapper from './fade-in-wrapper';

export const About = () => {
  return (
    <div className='relative scroll-mt-10 mx-2' id='about'>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:grid-rows-3 mx-4 rounded-2xl overflow-hidden'>
          <FadeInWrapper
            delay={300}
            className='row-span-2 col-span-2 h-64 md:h-full'
          >
            <ImageCard url='/about-img00.png' />
          </FadeInWrapper>
          <FadeInWrapper
            delay={400}
            className='row-span-2 col-span-2 space-y-2 justify-items-center sm:justify-items-start text-center sm:text-start'
          >
            <span className='uppercase text-xl'>About us</span>
            <h1 className='sm:text-5xl text-3xl font-bold'>
              Where Journeys Meet the Depths of Discovery.
            </h1>
            <p className='text-xl font-light text-justify'>
              At All In Freediving and Tour Services, we specialize in crafting
              unforgettable, premium travel experiences across the Philippines.
              Whether you&apos;re seeking the thrill of freediving in
              crystal-clear waters, exploring stunning islands on a luxurious
              island-hopping tour, or embarking on scenic land adventures, we
              offer the best of both land and sea. Our bespoke tours are
              designed to bring you closer to the unparalleled beauty and
              culture of this tropical paradise.
            </p>
            <div className='w-full'>
              <Button variant='outline' asChild className='w-full md:w-auto'>
                <Link href='/about-us'>Read more...</Link>
              </Button>
            </div>
          </FadeInWrapper>
          <FadeInWrapper delay={500} className='col-span-1'>
            <TextCard count={1900} label='Happy Clients' />
          </FadeInWrapper>
          <FadeInWrapper delay={600} className='col-span-1'>
            <TextCard count={5} label='Years in Service' />
          </FadeInWrapper>
          <FadeInWrapper delay={700} className='col-span-2 h-44 md:h-full'>
            <ImageCard url='/about-img01.png' />
          </FadeInWrapper>
        </div>
      </div>
    </div>
  );
};
