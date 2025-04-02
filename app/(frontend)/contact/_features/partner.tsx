import { Card } from '@/components/ui/card';
import FadeInWrapper from '../../components/fade-in-wrapper';
import Image from 'next/image';

const whyPartnerWithUs = [
  {
    title: 'Expand Your Reach',
    description:
      'Tap into a growing community of freedivers, adventure seekers, and ocean lovers.',
  },
  {
    title: 'Enhance Your Offerings',
    description:
      'Add high-quality freediving and tour services to your business.',
  },
  {
    title: 'Expert-Led Experiences',
    description:
      'Work with a team of certified professionals passionate about safety and adventure.',
  },
  {
    title: 'Sustainable Tourism',
    description:
      'Partner with us in promoting eco-friendly and responsible travel.',
  },
];

const opportunities = [
  {
    category: 'Travel & Tourism Agencies',
    description: 'Offer our freediving and adventure tours to your clients.',
  },
  {
    category: 'Resorts & Hotels',
    description:
      'Enhance your guest experiences with exclusive freediving packages.',
  },
  {
    category: 'Freediving & Watersports Brands',
    description:
      'Promote your products through professional use and endorsements.',
  },
  {
    category: 'Event & Expedition Partners',
    description:
      'Co-host freediving events, workshops, retreats and expeditions.',
  },
];

const partners = [
  {
    logo: '/res/partner-logo/amlak.JPG',
    name: 'AMLAK Freediving',
  },
  {
    logo: '/res/partner-logo/wetified.webp',
    name: 'Wetified Freediver',
  },
  {
    logo: '/res/partner-logo/seangle.JPG',
    name: 'Seangle Breath',
  },
];

export const Partner = () => {
  return (
    <>
      <section className='container mx-auto my-10 p-4'>
        <div className='space-y-10'>
          <h5 className='md:text-5xl text-3xl font-bold text-center text-sky-700'>
            Partner with Us
          </h5>
          <p className='text-center tracking-widest md:text-2xl text-xl'>
            At All In Freediving and Tour Services, we believe in the power of
            collaboration to create extraordinary experiences. Whether you’re a
            dive shop, travel agency, resort, or brand looking to connect with
            ocean enthusiasts, we’d love to work with you!
          </p>

          <h6 className='text-sky-700 font-semibold tracking-wider text-2xl text-center'>
            Why Partner with Us?
          </h6>

          <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 items-center justify-center gap-4'>
            {whyPartnerWithUs.map((info, i) => (
              <FadeInWrapper
                key={info.title}
                delay={i * 400}
                className='h-full'
              >
                <Card className='p-4 h-full border-none shadow-sm bg-sky-700'>
                  <div className='space-y-2 text-stone-100 text-center'>
                    <p className='text-xl font-bold'>{info.title}</p>
                    <p className='tracking-wide'>{info.description}</p>
                  </div>
                </Card>
              </FadeInWrapper>
            ))}
          </div>
          <div className='space-y-4'>
            <h6 className='text-sky-700 font-semibold tracking-wider text-2xl text-center'>
              Partnership Opportunities
            </h6>
            <p className='text-2xl text-center tracking-wider'>
              We welcome collaborations in areas such as:
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 items-center justify-center gap-4'>
            {opportunities.map((info, i) => (
              <FadeInWrapper
                key={info.category}
                delay={i * 400}
                className='h-full'
              >
                <Card className='p-4 h-full border-none shadow-sm bg-sky-700'>
                  <div className='space-y-2 text-stone-100 text-center'>
                    <p className='text-xl font-bold'>{info.category}</p>
                    <p className='tracking-wide'>{info.description}</p>
                  </div>
                </Card>
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </section>
      <section className='py-10 bg-gray-100 text-center'>
        <h2 className='text-2xl text-sky-700 font-bold mb-6'>Our Partners</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center'>
          {partners.map((partner, index) => (
            <div key={index} className='flex justify-center'>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
