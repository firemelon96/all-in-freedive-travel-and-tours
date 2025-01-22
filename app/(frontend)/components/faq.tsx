import { faqs } from '@/app/data/faqs';
import { FaqItem } from './faq-item';
import { Headline } from './headlines';

export const Faq = () => {
  return (
    <section className='bg-sky-50 py-10 scroll-mt-10' id='faqs'>
      <div className='container mx-auto space-y-6'>
        <Headline
          label="faq's"
          heading='Frequently Asked Question'
          className='text-slate-700'
        />

        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
