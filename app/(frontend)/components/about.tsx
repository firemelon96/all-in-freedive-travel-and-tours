import { Button } from '@/components/ui/button';
import { ImageCard } from './image-card';
import { TextCard } from './text-card';
import Link from 'next/link';

export const About = () => {
  return (
    <div className='relative scroll-mt-10' id='about'>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:grid-rows-3 rounded-2xl overflow-hidden'>
          <div className='row-span-2 col-span-2 h-64 md:h-full'>
            <ImageCard url='/about-img00.png' />
          </div>
          <div className='row-span-2 col-span-2 space-y-2'>
            <span className='uppercase text-xl'>About us</span>
            <h1 className='text-5xl font-bold'>
              Dicover Our Deep-Sea Passion.
            </h1>
            <p className='text-xl text-justify'>
              At All In Travel and Freediving Tour Services, we specialize in
              crafting unforgettable, premium travel experiences across the
              Philippines. Whether you&apos;re seeking the thrill of freediving
              in crystal-clear waters, exploring stunning islands on a luxurious
              island-hopping tour, or embarking on scenic land adventures, we
              offer the best of both land and sea. Our bespoke tours are
              designed to bring you closer to the unparalleled beauty and
              culture of this tropical paradise.
            </p>
            <Button variant='outline' asChild>
              <Link href='/about-us'>Read more...</Link>
            </Button>
          </div>
          <div className='col-span-1'>
            <TextCard count={1900} label='Happy Clients' />
          </div>
          <div className='col-span-1'>
            <TextCard count={5} label='Years in Service' />
          </div>
          <div className='col-span-2 h-44'>
            <ImageCard url='/about-img01.png' />
          </div>
        </div>
      </div>
    </div>
  );
};
