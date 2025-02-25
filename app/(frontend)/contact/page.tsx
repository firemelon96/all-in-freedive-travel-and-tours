import { BannerImage } from '@/components/banner-image';
import { Card } from '@/components/ui/card';
import { ContactForm } from './_features/contact-form';
import { Mail } from 'lucide-react';
import FadeInWrapper from '../components/fade-in-wrapper';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Want to get in touch? Wed love to hear from you here in All in Freediving and Tour Services',
  openGraph: {
    title: 'Contact Us',
    description:
      'Want to get in touch? Wed love to hear from you here in All in Freediving and Tour Services',
    url: 'https://allinfreedivingandtourservices.com/about-us',
    siteName: 'All In Freediving and Tour Services',
    images: [
      'https://res.cloudinary.com/dutkzg9la/image/upload/v1738145286/GRNT-0711-2_odhkma.jpg',
    ], // Twitter Card Image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us',
    description:
      'Want to get in touch? Wed love to hear from you here in All in Freediving and Tour Services',
    images: [
      'https://res.cloudinary.com/dutkzg9la/image/upload/v1738145286/GRNT-0711-2_odhkma.jpg',
    ], // Twitter Card Image
  },
};

const ContactPage = () => {
  return (
    <>
      <BannerImage
        title='Contact Us'
        imageUrl='https://res.cloudinary.com/dutkzg9la/image/upload/v1738146307/GRNT-0663_clvsfu.avif'
      />
      <section className='container my-10 mx-auto space-y-4'>
        <div className='flex mx-4 flex-col md:flex-row gap-4'>
          <FadeInWrapper
            direction='left'
            delay={500}
            className='w-full md:w-1/2 space-y-4'
          >
            <FadeInWrapper className='space-y-4'>
              <h1 className='text-2xl font-semibold text-sky-800'>
                Want to get in touch? We&apos;d love to hear from you!
                Here&apos;s how you can reach us.
              </h1>
            </FadeInWrapper>
            <Card className='p-4 items-center justify-center flex flex-col gap-4'>
              <Link
                href='https://api.whatsapp.com/send/?phone=639524777904'
                className='flex gap-2 rounded-md underline'
              >
                <FaWhatsapp className='size-6' /> <span> +63952-477-7904</span>
              </Link>

              <Link
                href={'mailto:allinfreedivingandtourservices@gmail.com'}
                className='flex gap-2 rounded-md underline'
              >
                <Mail /> <span>allinfreedivingandtourservices@gmail.com</span>
              </Link>
            </Card>
          </FadeInWrapper>
          <FadeInWrapper
            delay={500}
            direction='right'
            className='w-full md:w-1/2'
          >
            <ContactForm />
          </FadeInWrapper>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
