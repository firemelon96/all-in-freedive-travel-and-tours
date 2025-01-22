import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Headline } from './headlines';
import { ServicesCard } from './services-card';

export const TravelTours = () => {
  return (
    <section className='min-h-screen relative scroll-mt-10' id='expeditions'>
      <div
        className='h-screen w-full z-0 bg-cover bg-center bg-fixed bg-no-repeat'
        style={{
          backgroundImage: `url(/ocean-depth.jpg)`,
        }}
      ></div>
      <div className='flex items-center justify-center gap-6 w-full absolute inset-y-0 flex-col'>
        <Headline
          label='Travel and Tours'
          heading='Explore Our Travel and Tours Package'
        />
        <Carousel className='w-full container mx-auto'>
          <CarouselContent className=''>
            {Array.from({ length: 4 }).map((_, i) => (
              <CarouselItem
                className='pl-20 md:pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
                key={i}
              >
                <ServicesCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
