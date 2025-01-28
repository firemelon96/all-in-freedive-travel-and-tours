import { LucideIcon } from 'lucide-react';

type Props = {
  label: string;
  items: string[];
  icon: LucideIcon;
};

export const ListBox = ({ label, items, icon: Icon }: Props) => {
  return (
    <div className='p-2 space-y-3'>
      <h2 className='text-xl text-sky-800 font-semibold'>{label}</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className='flex gap-2 items-start text-xl text-slate-700'
          >
            <Icon className='' /> <p className='flex-1'>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
