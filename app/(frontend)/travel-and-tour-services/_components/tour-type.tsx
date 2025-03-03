'use client';

import { TypeItem } from './type-item';

type Props = {
  items: string[];
};

export const TourType = ({ items }: Props) => {
  return (
    <div className='flex gap-2'>
      {items.map((item) => (
        <TypeItem key={item} name={item} />
      ))}
    </div>
  );
};
