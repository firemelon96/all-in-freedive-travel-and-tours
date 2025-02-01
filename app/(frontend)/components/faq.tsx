import { faqs } from '@/app/data/faqs';
import { FaqItem } from './faq-item';
import { Headline } from './headlines';
import FadeInWrapper from './fade-in-wrapper';

export const Faq = () => {
  return (
    <section className='bg-sky-50 py-10 scroll-mt-10' id='faqs'>
      <div className='container mx-auto space-y-6'>
        <Headline
          heading='Frequently Asked Questions'
          className='text-slate-700'
        />

        <div>
          {faqs.map((faq, i) => (
            <FadeInWrapper key={i} delay={i * 200}>
              <FaqItem question={faq.question} answer={faq.answer} />
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
