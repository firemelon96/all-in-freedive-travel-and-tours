'use client';

import { TypeItem } from './type-item';

type Props = {
  items: string[];
};

export const TourType = ({ items }: Props) => {
  return (
    <div className='space-x-4'>
      {items.map((item) => (
        <TypeItem key={item} name={item} />
      ))}
    </div>
  );
};
