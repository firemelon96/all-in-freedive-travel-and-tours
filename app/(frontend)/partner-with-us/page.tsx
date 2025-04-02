import { Card } from '@/components/ui/card';
import FadeInWrapper from '../components/fade-in-wrapper';
import Image from 'next/image';
import {
  Building,
  Flag,
  Globe,
  Leaf,
  MapPin,
  Package,
  Users,
  Waves,
} from 'lucide-react';

const whyPartnerWithUs = [
  {
    title: 'Expand Your Reach',
    description:
      'Tap into a growing community of freedivers, adventure seekers, and ocean lovers.',
    icon: Globe,
  },
  {
    title: 'Enhance Your Offerings',
    description:
      'Add high-quality freediving and tour services to your business.',
    icon: Package,
  },
  {
    title: 'Expert-Led Experiences',
    description:
      'Work with a team of certified professionals passionate about safety and adventure.',
    icon: Users,
  },
  {
    title: 'Sustainable Tourism',
    description:
      'Partner with us in promoting eco-friendly and responsible travel.',
    icon: Leaf,
  },
];

const opportunities = [
  {
    category: 'Travel & Tourism Agencies',
    description: 'Offer our freediving and adventure tours to your clients.',
    icon: MapPin,
  },
  {
    category: 'Resorts & Hotels',
    description:
      'Enhance your guest experiences with exclusive freediving packages.',
    icon: Building,
  },
  {
    category: 'Freediving & Watersports Brands',
    description:
      'Promote your products through professional use and endorsements.',
    icon: Waves,
  },
  {
    category: 'Event & Expedition Partners',
    description:
      'Co-host freediving events, workshops, retreats and expeditions.',
    icon: Flag,
  },
];

const partners = [
  {
    logo: '/res/partner-logo/wetified.webp',
    name: 'Wetified Freediver',
  },
  {
    logo: '/res/partner-logo/seangle.JPG',
    name: 'Seangle Breath',
  },
  {
    logo: '/res/partner-logo/freediveproject.jpeg',
    name: 'Freedive Project',
  },
  {
    logo: '/res/partner-logo/amlak.JPG',
    name: 'AMLAK Freediving',
  },
  {
    logo: '/res/partner-logo/divescapehub.jpg',
    name: 'Divescape Hub',
  },
  {
    logo: '/res/partner-logo/freedive-thailand.jpg',
    name: 'Freedive Thailand',
  },
];

const PartnerPage = () => {
  return (
    <>
      <section className='container mx-auto my-10 p-4'>
        <div className='space-y-10'>
          <FadeInWrapper>
            <h5 className='md:text-5xl text-3xl font-bold text-center text-sky-700'>
              Partner with Us
            </h5>
          </FadeInWrapper>
          <FadeInWrapper>
            <p className='text-center tracking-widest md:text-2xl text-xl'>
              We believe in the power of collaboration to create extraordinary
              experiences. Whether you’re a Freediving school, dive shop, travel
              agency, resort, or brand looking to connect with ocean
              enthusiasts, we’d love to work with you!
            </p>
          </FadeInWrapper>
          <FadeInWrapper>
            <h6 className='text-sky-700 font-semibold tracking-wider text-2xl text-center'>
              Why Partner with Us?
            </h6>
          </FadeInWrapper>

          <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 items-center justify-center gap-4'>
            {whyPartnerWithUs.map((info, i) => (
              <FadeInWrapper
                key={info.title}
                delay={i * 400}
                className='h-full'
              >
                <Card className='p-4 h-full border-none shadow-sm bg-sky-700'>
                  <div className='flex item-center gap-1 justify-center flex-col text-stone-100 text-center'>
                    <div className='flex items-center justify-center'>
                      <info.icon className='size-20' />
                    </div>
                    <p className='text-xl font-bold'>{info.title}</p>
                    <p className='tracking-wide'>{info.description}</p>
                  </div>
                </Card>
              </FadeInWrapper>
            ))}
          </div>
          <div className='space-y-4'>
            <FadeInWrapper>
              <h6 className='text-sky-700 font-semibold tracking-wider text-2xl text-center'>
                Partnership Opportunities
              </h6>
            </FadeInWrapper>
            <FadeInWrapper>
              <p className='text-2xl text-center tracking-wider'>
                We welcome collaborations in areas such as:
              </p>
            </FadeInWrapper>
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
                    <div className='flex items-center justify-center'>
                      <info.icon className='size-20' />
                    </div>
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
        <div className='container mx-auto'>
          <FadeInWrapper>
            <h2 className='text-2xl text-sky-800 font-bold mb-6'>
              Our Partners
            </h2>
          </FadeInWrapper>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2 items-center justify-center'>
            {partners.map((partner, index) => (
              <FadeInWrapper
                delay={index * 200}
                key={index}
                className='flex justify-center'
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className='object-contain'
                />
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerPage;
