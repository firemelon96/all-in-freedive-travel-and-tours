import Hero from './components/hero';
import { About } from './components/about';
import { TravelTours } from './components/services';
import { Courses } from './components/courses';
import { Contact } from './components/contact';
import { Why } from './components/why';
import { Testimonial } from './components/testimonials';
import { Faq } from './components/faq';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <TravelTours />
      <Contact />
      <Why />
      <Testimonial />
      <Faq />
    </main>
  );
}
