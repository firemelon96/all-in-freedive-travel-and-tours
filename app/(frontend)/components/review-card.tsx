import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { AvatarFallback } from '@/components/ui/avatar';

export const ReviewCard = () => {
  return (
    <Card className='p-4 h-64 flex gap-4 flex-col justify-between bg-sky-950 text-white'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
      </p>
      <div className='flex gap-2 items-center'>
        <Avatar>
          <AvatarImage src='/diver.jpg' alt='diver' />
          <AvatarFallback />
        </Avatar>
        <div className='flex flex-col'>
          <p>FIRSTNAME LASTNAME</p>
          <span>title</span>
        </div>
      </div>
    </Card>
  );
};
