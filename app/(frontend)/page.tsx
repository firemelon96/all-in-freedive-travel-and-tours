import { About } from './components/about';
import { TravelTours } from './components/travel-tours';
import { Courses } from './components/courses';
import { Why } from './components/why';
import { Testimonial } from './components/testimonials';
import { Faq } from './components/faq';
import NewHero from './components/new-hero';

export default function Home() {
  return (
    <main>
      <NewHero />
      <About />
      <Courses />
      <TravelTours />
      {/* <Contact /> */}
      <Why />
      <Testimonial />
      <Faq />
    </main>
  );
}
