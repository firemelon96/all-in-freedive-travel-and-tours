const SvgDividerBottom = () => {
  return (
    <div className='absolute inset-x-0 md:-bottom-72 bottom-0'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='w-full'
      >
        {/* <path
          fill='currentColor'
          className='text-sky-500'
          d='M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,48C672,32,768,32,864,64C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        /> */}
        <path
          fill='currentColor'
          className='text-white'
          fillOpacity='1'
          d='M0,190C120,180,360,160,720,160C1080,160,1320,180,1440,190L1440,0L0,0Z'
        ></path>
      </svg>
    </div>
  );
};

export default SvgDividerBottom;
