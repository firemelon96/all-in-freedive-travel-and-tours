import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { AvatarFallback } from '@/components/ui/avatar';

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
      <p className='text-xl italic line-clamp-3'>{text}</p>

      <div className='flex flex-col gap-2'>
        <div className='flex'>
          <p className='mr-2'>Google Review</p>
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className='mr-1'>
              ⭐️
            </span>
          ))}
        </div>
        <div className='flex gap-2'>
          <Avatar>
            <AvatarImage src={profileImage} alt='diver' />
            <AvatarFallback />
          </Avatar>
          <div className='flex flex-col'>
            <p>{name}</p>
            <span className='text-xs text-secondary'>{description}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
