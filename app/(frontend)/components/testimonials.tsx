'use client';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from '@/components/ui/carousel';
import { Headline } from './headlines';
import { ImageCard } from './image-card';
// import { ReviewCard } from './review-card';
// import AutoPlay from 'embla-carousel-autoplay';
// import { useRef } from 'react';
// import { testimonials } from '@/app/data/testimonial';
import FadeInWrapper from './fade-in-wrapper';
import Image from 'next/image';
import Link from 'next/link';

export const Testimonial = () => {
  // const plugin = useRef(AutoPlay({ delay: 5000, stopOnInteraction: false }));
  return (
    <section className='container mx-auto scroll-mt-10' id='testimonials'>
      <div className='py-10 mx-4'>
        <div className='flex flex-col-reverse  gap-4 md:flex-row rounded-2xl overflow-hidden'>
          <div className='flex flex-col gap-2 md:w-1/2 w-full'>
            <FadeInWrapper
              delay={200}
              direction='left'
              className=' bg-red-50 h-64 md:h-full'
            >
              <ImageCard url='/team.avif' />
            </FadeInWrapper>
          </div>
          <div className='flex flex-col md:w-1/2 w-full gap-2'>
            <Headline
              label='Testimonials'
              heading='Share Your Experience.'
              className='text-slate-700 '
            />
            {/* <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
              <CarouselContent>
                {testimonials.map((entry) => (
                  <CarouselItem className='' key={entry.name}>
                    <ReviewCard
                      name={entry.name}
                      title={entry.title}
                      message={entry.message}
                      profileImage={entry.profileImage}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel> */}
            <div className='flex w-full items-center justify-center'>
              <Link href='https://tinyurl.com/yzvmvcv6'>
                <div className='relative h-40 w-40'>
                  <Image src='/res/feedback.png' fill alt='qr code' />
                </div>
              </Link>
            </div>
          </div>
          {/* <div className='col-span-2 row-span-2'></div> */}
        </div>
      </div>
    </section>
  );
};
