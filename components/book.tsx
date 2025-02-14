'use client';

import { Button } from '@/components/ui/button';
import { Award, Banknote, Calendar, Luggage, MapPinIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';
// import { useTransition } from 'react';

type Props = {
  location?: string;
  price?: string;
  duration?: string;
  certification?: string;
  isHiddenTitle?: boolean;
  title?: string;
};
export const Book = ({
  location,
  price,
  duration,
  certification,
  title,
  isHiddenTitle = false,
}: Props) => {
  const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  const onSubmit = () => {
    const textMessage = `
    Inquiry:
    Title: ${title}
    Price: ${price ? price : 'Request quote'}
    `;

    const encodedText = encodeURIComponent(textMessage);

    const whatsAppAPIUrl = 'https://api.whatsapp.com/send/?phone=639524777904';

    router.push(`${whatsAppAPIUrl}&text=${encodedText}`);
    // startTransition(() => {
    //   bookAction()
    // }))
  };

  const removedPackageName = title?.split('-')[1];
  return (
    <>
      <div className='bg-sky-100 items-center flex justify-center md:justify-start md:items-start flex-col space-y-2 p-2 text-xl rounded-sm relative'>
        {!isHiddenTitle && title && (
          <h2 className='flex items-center text-xl font-semibold text-sky-700'>
            <Luggage className='size-4 mr-2' />
            <span className='flex-1'>{removedPackageName || title}</span>
          </h2>
        )}

        {location && (
          <p className='flex items-center text-sky-700'>
            <MapPinIcon className='size-4 mr-2' /> <span>{location}</span>
          </p>
        )}
        {price && (
          <div className='flex flex-col md:flex-row justify-center items-center text-sky-700'>
            <p className='flex items-center justify-center'>
              <Banknote className='size-4 mr-2' />
              <span className='flex-1 mr-2'>{price.split('(')[0]}</span>
            </p>
            {price.includes('(') && (
              <Badge variant='outline'>{price.split('(')[1].split(')')}</Badge>
            )}
          </div>
        )}
        {duration && (
          <p className='flex items-center text-sky-700'>
            <Calendar className='size-4 mr-2' /> <span>{duration}</span>
          </p>
        )}
        {certification && (
          <p className='flex items-center text-sky-700'>
            <Award className='size-4 mr-2' /> <span>{certification}</span>
          </p>
        )}

        <Button
          onClick={onSubmit}
          className='font-semibold w-full'
          variant='primary'
        >
          BOOK NOW
        </Button>
      </div>
    </>
  );
};
