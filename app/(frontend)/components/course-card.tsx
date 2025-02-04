import { Card } from '@/components/ui/card';
import { ImageCard } from './image-card';
import Link from 'next/link';
import { ellipsis } from '@/lib/helper';

type Props = {
  title: string;
  description: string;
  url: string;
  slug: string;
};

export const CourseCard = ({ slug, title, description, url }: Props) => {
  return (
    <Link href={`/courses-and-certifications/${slug}`}>
      <Card className='p-2 bg-transparent flex flex-col md:flex-row gap-2 text-white md:max-h-56'>
        <div className='flex flex-col gap-1 md:w-2/3 w-full'>
          <h2 className='sm:text-3xl font-semibold'>{title}</h2>
          <p className='text-sm text-slate-300'>{ellipsis(description, 150)}</p>
        </div>
        <div className='overflow-hidden relative rounded-md md:h-52 h-40 w-full'>
          <ImageCard url={url} />
        </div>
      </Card>
    </Link>
  );
};
