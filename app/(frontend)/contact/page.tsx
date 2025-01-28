import { BannerImage } from '@/components/banner-image';
import { Card } from '@/components/ui/card';
import { ContactForm } from './_features/contact-form';
import { Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <BannerImage title='Contact us' />
      <section className='container my-10 mx-auto '>
        <div className='space-y-4 mx-2'>
          <h1 className='text-3xl font-semibold text-sky-800'>Contact us</h1>
          <p>
            Want to get in touch? Wed love to hear from you. Heres how you can
            reach us.
          </p>
        </div>
        <div className='flex mx-2 flex-col md:flex-row gap-4'>
          <div className='w-full md:w-1/2 '>
            <Card className='p-4 items-center justify-center flex flex-col gap-4'>
              <Phone className='size-10' />
              <p>Message us using email and number</p>
              <span>09844</span>
              <span>allintravel@email.com</span>
            </Card>
          </div>
          <div className='w-full md:w-1/2'>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
