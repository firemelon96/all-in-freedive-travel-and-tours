import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

type Props = {
  name: string;
  text: string;
  rating: number;
  profileImage: string;
  description: string;
};

export const ReviewCard = ({
  name,
  text,
  rating,
  profileImage,
  description,
}: Props) => {
  return (
    <Card className='p-4 h-full flex gap-2 flex-col justify-between bg-sky-800 text-white'>
      <p className='text-xl italic flex'>
        {text}
        <span>
          <Quote className='size-4' />
        </span>
      </p>
      <div>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className='mr-1'>
            ⭐️
          </span>
        ))}
      </div>
      <div className='flex gap-2 items-center'>
        <Avatar>
          <AvatarImage src={profileImage} alt='diver' />
          <AvatarFallback />
        </Avatar>
        <div className='flex flex-col'>
          <p>{name}</p>
          <span className='text-xs text-secondary'>{description}</span>
        </div>
      </div>
    </Card>
  );
};
