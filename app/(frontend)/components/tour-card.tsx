import { Card } from '@/components/ui/card';
import { ellipsis } from '@/lib/helper';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  description: string;
  image: string;
  title: string;
};

export const TourCard = ({ title, slug, description, image }: Props) => {
  return (
    <Link href={`/travel-and-tour-services/${slug}`}>
      <Card className='p-0 overflow-hidden w-72'>
        <Image
          src={image || '/dive-up.jpg'}
          height={300}
          width={300}
          alt='dive up'
          className='object-cover h-72'
        />
        <div className='flex flex-col p-2 text-center gap-2 py-4'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <p className=''>{ellipsis(description, 90)}</p>
        </div>
      </Card>
    </Link>
  );
};
