import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

type Props = {
  images: string[];
};

export function ImageCarousel({ images }: Props) {
  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card className='rounded-none'>
                <CardContent className='flex aspect-square items-center justify-center p-2'>
                  <Image
                    src={img}
                    height={120}
                    width={1200}
                    alt={`img-${index}`}
                    className='object-cover'
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
