'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Headline } from './headlines';
import { ImageCard } from './image-card';
import { ReviewCard } from './review-card';
import AutoPlay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export const Testimonial = () => {
  const plugin = useRef(AutoPlay({ delay: 5000, stopOnInteraction: false }));
  return (
    <section className='container mx-auto scroll-mt-10' id='testimonials'>
      <div className='py-10 mx-2'>
        <div className='grid md:grid-cols-4 gap-4 md:grid-rows-3 rounded-2xl overflow-hidden'>
          <div className='row-span-3 col-span-2 bg-red-50 h-96 md:h-full'>
            <ImageCard url='/testimonial.jpg' />
          </div>
          <div className='col-span-2 flex flex-col justify-start gap-4'>
            <Headline
              label='Testimonial'
              heading='What our Client are Saying'
              className='text-slate-700 text-start'
            />
          </div>
          <div className='col-span-2 row-span-2'>
            <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, i) => (
                  <CarouselItem className='' key={i}>
                    <ReviewCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
