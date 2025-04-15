'use client';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { ReviewCard } from './review-card';

type ReviewType = {
  author_name: string;
  author_url: string;
  language: string;
  original_languange: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

interface Props {
  reviews: ReviewType[];
}

export const ReviewCarousel = ({ reviews }: Props) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem className='' key={review.author_name}>
            <ReviewCard
              name={review.author_name}
              text={review.text}
              rating={review.rating}
              description={review.relative_time_description}
              profileImage={review.profile_photo_url}
            />
          </CarouselItem>
        ))}
        <CarouselItem>
          <Card className='h-full flex items-center justify-center'>
            <p className='text-xl'>
              Leave us a{' '}
              <a
                className='underline text-sky-500'
                href='https://search.google.com/local/writereview?placeid=ChIJ2Svn8pkdujMRQuh0-SubenA'
              >
                Google Review
              </a>
            </p>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
