import { whys } from '@/app/data/why-choose-us';
import FadeInWrapper from './fade-in-wrapper';
import { Headline } from './headlines';
import { ImageCard } from './image-card';
import { WhyCard } from './why-card';

export const Why = () => {
  return (
    <section className='container mx-auto scroll-mt-10' id='why-choose-us'>
      <div className='py-10 mx-4'>
        <div className='flex flex-col md:flex-row rounded-2xl gap-4 overflow-hidden'>
          <div className='flex flex-col-reverse md:flex-col gap-2 md:w-1/2 w-full'>
            <FadeInWrapper
              delay={200}
              direction='left'
              className='h-64 md:h-full'
            >
              <ImageCard url='/contact-model.png' />
            </FadeInWrapper>
            <div className='col-span-2'>
              <Headline
                className='text-slate-700 my-2 text-center md:text-start'
                heading='Why Choose Us'
              />
            </div>
          </div>
          <div className='flex flex-col md:w-1/2 gap-2 w-full'>
            {whys.map((why, i) => (
              <FadeInWrapper delay={i * 300} key={i}>
                <WhyCard
                  count={i + 1}
                  title={why.title}
                  description={why.description}
                />
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
