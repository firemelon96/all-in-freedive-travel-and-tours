import { Headline } from './headlines';
import { ImageCard } from './image-card';
import { WhyCard } from './why-card';

export const Why = () => {
  return (
    <section className='container mx-auto scroll-mt-10' id='why-choose-us'>
      <div className='py-10 mx-4'>
        <div className='flex flex-col md:flex-row rounded-2xl gap-4 overflow-hidden'>
          <div className='flex flex-col-reverse md:flex-col gap-2 md:w-1/2 w-full'>
            <div className='h-64 md:h-full'>
              <ImageCard url='/contact-model.png' />
            </div>
            <div className='col-span-2'>
              <Headline
                className='text-slate-700 text-center md:text-start'
                label='Why Choose Us'
                heading='Why Choose Us for Your Dive'
              />
            </div>
          </div>
          <div className='flex flex-col md:w-1/2 gap-2 w-full'>
            <WhyCard
              count={1}
              title='Customizable Itineraries'
              description='Whether youre looking for relaxation, adventure, or a mix of both, we tailor every tour to suit your interests.'
            />
            <WhyCard
              count={2}
              title='Expert Guides'
              description='Our team consists of certified freedivers/tourguides that are knowledgeable and dedicated in ensuring a safe, enjoyable, and educational journey.'
            />
            <WhyCard
              count={3}
              title='Premium Experiences'
              description='From seamless transfers, elegant and budget accommodations to exclusive island-hopping and local food excursions, we ensure every detail of your tour is designed for the discerning traveler.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
