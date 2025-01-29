import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

type Props = {
  name: string;
  title: string;
  profileImage: string;
  message: string;
};

export const ReviewCard = ({ name, title, profileImage, message }: Props) => {
  return (
    <Card className='p-4 h-full flex gap-2 flex-col justify-between bg-sky-950 text-white'>
      <p className='text-xl italic flex'>
        {message}
        <span>
          <Quote className='size-4' />
        </span>
      </p>
      <div className='flex gap-2 items-center'>
        <Avatar>
          <AvatarImage src={profileImage} alt='diver' />
          <AvatarFallback />
        </Avatar>
        <div className='flex flex-col'>
          <p>{name}</p>
          <span>{title}</span>
        </div>
      </div>
    </Card>
  );
};
