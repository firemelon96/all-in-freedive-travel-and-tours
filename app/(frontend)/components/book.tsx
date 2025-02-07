import { Button } from '@/components/ui/button';
import { Award, Banknote, Calendar, MapPinIcon } from 'lucide-react';
import Image from 'next/image';

type Props = {
  location: string;
  price?: string;
  duration: string;
  certification?: string;
  icon?: string;
};
export const Book = ({
  icon,
  location,
  price,
  duration,
  certification,
}: Props) => {
  return (
    <>
      <div className='bg-sky-100 space-y-2 p-2 text-xl rounded-sm relative'>
        <p className='flex items-center text-sky-700'>
          <MapPinIcon className='size-4 mr-2' /> <span>{location}</span>
        </p>
        {price && (
          <p className='flex items-center text-sky-700'>
            <Banknote className='size-4 mr-2' /> <span>{price}</span>
          </p>
        )}
        <p className='flex items-center text-sky-700'>
          <Calendar className='size-4 mr-2' /> <span>{duration}</span>
        </p>
        {certification && (
          <p className='flex items-center text-sky-700'>
            <Award className='size-4 mr-2' /> <span>{certification}</span>
          </p>
        )}
        {icon && (
          <div className='absolute top-0 right-2 size-20'>
            <Image src={icon} alt='icon' fill />
          </div>
        )}
        <Button className='font-semibold w-full' variant='primary'>
          BOOK NOW
        </Button>
      </div>
    </>
  );
};
