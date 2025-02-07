'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Headline } from './headlines';
import { Button } from '@/components/ui/button';
import FadeInWrapper from './fade-in-wrapper';

export default function NewHero() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        setOffset(scrollY * 0.5); // Adjust speed for the parallax effect
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative w-full h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden'
    >
      {/* Parallax Background Image */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          transform: `translateY(${offset * 0.5}px)`, // Adjust the multiplier for effect strength
          transition: 'transform 0.1s linear',
        }}
      >
        <Image
          src='/hero.avif' // Replace with your image path
          alt='Background'
          fill
          className='object-cover'
        />
      </div>

      {/* Overlay for better readability */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Text Container */}
      <div className='relative z-10 space-y-4 text-center text-white mx-4 rounded-2xl'>
        <Headline
          className='tracking-wider'
          label='All In Freediving and Tour Services'
          heading='Travel Beyond Limits, '
          subHeading='Dive Beyond Depths.'
        />
        <FadeInWrapper delay={500}>
          <Button variant='primary'>Explore</Button>
        </FadeInWrapper>
      </div>
    </section>
  );
}
