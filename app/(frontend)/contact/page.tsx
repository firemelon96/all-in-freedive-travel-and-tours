import { BannerImage } from '@/components/banner-image';
import { Card } from '@/components/ui/card';
import { ContactForm } from './_features/contact-form';
import { Phone } from 'lucide-react';
import FadeInWrapper from '../components/fade-in-wrapper';

const ContactPage = () => {
  return (
    <>
      <BannerImage
        title='Contact Us'
        imageUrl='https://res.cloudinary.com/dutkzg9la/image/upload/v1738146307/GRNT-0663_clvsfu.avif'
      />
      <section className='container my-10 mx-auto space-y-4'>
        <FadeInWrapper className='space-y-4 mx-4'>
          <h1 className='text-3xl font-semibold text-sky-800'>Contact Us</h1>
          <p>
            Want to get in touch? Wed love to hear from you. Heres how you can
            reach us.
          </p>
        </FadeInWrapper>
        <div className='flex mx-4 flex-col md:flex-row gap-4'>
          <FadeInWrapper
            direction='left'
            delay={500}
            className='w-full md:w-1/2 '
          >
            <Card className='p-4 items-center justify-center flex flex-col gap-4'>
              <Phone className='size-10' />
              <p>Message us using email and number</p>
              <span>09524777904</span>
              <span>allintravel@email.com</span>
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
