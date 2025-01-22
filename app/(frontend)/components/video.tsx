type Props = {
  videoUrl: string;
};

export default function PortraitVideoCard({ videoUrl }: Props) {
  return (
    <div className='w-full mx-auto rounded-none'>
      <div>
        <div className='aspect-[9/16] relative overflow-hidden'>
          <video
            className='absolute inset-0 w-full h-full object-cover'
            controls
            loop
            muted
            playsInline
            autoPlay
          >
            <source src={videoUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
