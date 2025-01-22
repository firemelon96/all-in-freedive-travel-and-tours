import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ImageCard } from './image-card';

type Props = {
  title: string;
  description: string;
  url: string;
};

export const CourseCard = ({ title, description, url }: Props) => {
  return (
    <Card className='p-2 bg-transparent flex gap-2 text-white max-h-56'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p>{description}</p>
        <div>
          <Button variant='link' className='text-white pl-0'>
            Read more...
          </Button>
        </div>
      </div>
      <div className='overflow-hidden rounded-md h-52 w-full'>
        <ImageCard url={url} />
      </div>
    </Card>
  );
};
