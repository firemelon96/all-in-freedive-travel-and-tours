import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Headline } from './headlines';
import { TourCard } from './tour-card';
import { tours } from '@/app/data/tours';
import FadeInWrapper from './fade-in-wrapper';
import Image from 'next/image';

export const TravelTours = () => {
  return (
    <section className='h-[700px] relative scroll-mt-10' id='expeditions'>
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='/ocean-depth.jpg' // Replace with your image path
          alt='Background'
          fill
          className='object-cover'
        />
      </div>
      <div className='flex z-10 items-center justify-center gap-6 w-full absolute inset-y-0 flex-col'>
        <Headline heading='Explore Our Travel and Tour Packages' />
        <Carousel className='w-full container mx-auto'>
          {/* TODO: add a filter tour hekhek */}
          <CarouselContent className=''>
            {tours.map((tour, i) => (
              <CarouselItem
                className='flex items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
                key={i}
              >
                <FadeInWrapper delay={i * 200}>
                  <TourCard
                    title={tour.title}
                    description={tour.description}
                    slug={tour.slug}
                    image={tour.images[0]}
                  />
                </FadeInWrapper>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
