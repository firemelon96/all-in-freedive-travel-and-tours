'use client';

// import { Map } from 'pigeon-maps';

export const BusinessMap = () => {
  return (
    <div className='w-full overflow-hidden flex items-center justify-center'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.3952026608931!2d120.20366567264165!3d11.999338564486074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba1d99f2e72bd9%3A0x707a9b2bf974e842!2sAll%20In%20Freediving%20and%20Tour%20Services!5e0!3m2!1sen!2sph!4v1743257562255!5m2!1sen!2sph'
        width='600'
        height='600'
        // style='border:0;'
        // allowfullscreen=''
        loading='lazy'
        // referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};
