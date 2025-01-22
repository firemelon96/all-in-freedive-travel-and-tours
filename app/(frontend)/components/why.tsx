import { whys } from '@/app/data/why-choose-us';
import { Headline } from './headlines';
import { ImageCard } from './image-card';
import { WhyCard } from './why-card';

export const Why = () => {
  const whyUs = whys.map((why, i) => ({
    count: i + 1,
    title: why.title,
    description: why.description,
  }));
  return (
    <section className='container mx-auto scroll-mt-10' id='why-choose-us'>
      <div className='py-10'>
        <div className='grid md:grid-cols-4 gap-4 md:grid-rows-3 rounded-2xl overflow-hidden'>
          <div className='row-span-2 col-span-2 h-64 md:h-full'>
            <ImageCard url='/contact-model.png' />
          </div>
          <div className='col-span-2 flex flex-col justify-start gap-4'>
            <WhyCard
              count={whyUs.at(0)?.count!}
              title={whyUs.at(0)?.title!}
              description={whyUs.at(0)?.description!}
            />
          </div>
          <div className='col-span-2'>
            <WhyCard
              count={whyUs.at(1)?.count!}
              title={whyUs.at(1)?.title!}
              description={whyUs.at(1)?.description!}
            />
          </div>
          <div className='col-span-2'>
            <Headline
              className='text-slate-700 text-start'
              label='Why Choose Us'
              heading='Why Choose Us for Your Dive'
            />
          </div>
          <div className='col-span-2'>
            <WhyCard
              count={whyUs.at(2)?.count!}
              title={whyUs.at(2)?.title!}
              description={whyUs.at(2)?.description!}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
