import { Button } from '@/components/ui/button';
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
    <Card className='p-2 bg-transparent flex gap-2 text-white max-h-56'>
      <div className='flex flex-col gap-2 w-2/3'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className=''>{ellipsis(description, 150)}</p>
        <div>
          <Button variant='link' className='text-white pl-0' asChild>
            <Link href={`/courses-and-certifications/${slug}`}>
              Read more...
            </Link>
          </Button>
        </div>
      </div>
      <div className='overflow-hidden relative rounded-md h-52 w-96'>
        <ImageCard url={url} />
      </div>
    </Card>
  );
};
