import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  image: string;
  title: string;
};

export const FreediveCard = ({ title, slug, image }: Props) => {
  return (
    <Link href={`/freediving-tour-services/freediving-tours/${slug}`}>
      <Card className='p-0 overflow-hidden w-full'>
        <div className='w-full relative h-64'>
          <Image
            src={image || '/dive-up.jpg'}
            fill
            alt='dive up'
            className='object-cover h-72'
          />
        </div>
        <div className='flex flex-col p-2 text-center gap-2 py-4'>
          <h2 className='text-sm text-sky-800 font-semibold'>{title}</h2>
        </div>
      </Card>
    </Link>
  );
};
