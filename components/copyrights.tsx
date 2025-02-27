import { Copyright } from 'lucide-react';

export const Copyrights = () => {
  return (
    <div className='flex h-10 items-center justify-center text-white/50 bg-blue-900'>
      <Copyright className='size-4 mr-2' />{' '}
      <span className='text-sm'>
        Copyright 2025 All Rights Reserved. All in Freediving and Tour Services
      </span>
    </div>
  );
};
