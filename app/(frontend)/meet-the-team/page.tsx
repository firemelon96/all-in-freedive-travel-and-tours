import { Card } from '@/components/ui/card';
import { ImageCard } from '../components/image-card';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { Button } from '@/components/ui/button';
import { BannerImage } from '@/components/banner-image';
import { teams } from '@/app/data/teams';
import FadeInWrapper from '../components/fade-in-wrapper';

const TeamPage = () => {
  return (
    <>
      <BannerImage imageUrl='/team.avif' title='Meet the Team' />
      <section className='container mx-auto'>
        <FadeInWrapper delay={200} className='p-4'>
          <p className='md:text-2xl text-xl text-justify md:mt-10'>
            Our team is made up of passionate travel experts, experienced
            freediving instructor, and knowledgeable local guides. We share a
            deep love for the Philippines and are dedicated to offering premium,
            immersive travel experiences that showcase the beauty and culture of
            this tropical paradise.
          </p>
        </FadeInWrapper>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:my-10 p-4'>
          {teams.map((person, i) => (
            <FadeInWrapper delay={i * 400} key={person.name}>
              <Card className='h-fit'>
                <div className='p-4 space-y-4'>
                  <div className='overflow-hidden rounded-md h-72'>
                    <ImageCard url={person.photo} />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-sky-700'>
                      {person.name}{' '}
                    </p>
                    <span className='text-stone-600'>{person.title}</span>
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant='outline' className='w-full'>
                          About
                        </Button>
                      </CollapsibleTrigger>
                      {person.description.map((desc) => (
                        <CollapsibleContent key={desc}>
                          <p className='mb-4 text-slate-700 text-justify'>
                            {desc}
                          </p>
                        </CollapsibleContent>
                      ))}
                    </Collapsible>
                  </div>
                </div>
              </Card>
            </FadeInWrapper>
          ))}
        </div>
        <div className='text-center md:my-10 space-y-4 p-4'>
          <FadeInWrapper delay={500}>
            <h3 className='md:text-4xl text-2xl text-sky-800 font-bold'>
              Local Guides & Support Team
            </h3>
          </FadeInWrapper>
          <FadeInWrapper delay={600}>
            <p className='md:text-2xl text-xl text-justify'>
              In addition to our core team, we have a dedicated group of local
              guides, certified safety diver and support staff who are
              passionate about sharing the beauty and culture of their regions.
              From the remote islands of Batanes to the stunning surf spots of
              Siargao, our local experts provide insights into the unique
              traditions, landscapes, and ecosystems of the Philippines. With
              their help, every tour becomes an authentic journey of discovery.
            </p>
          </FadeInWrapper>
        </div>
        <div className='text-center md:my-10 space-y-4 p-4'>
          <FadeInWrapper delay={700}>
            <h4 className='md:text-4xl text-2xl text-sky-800 font-bold'>
              Why Travel with Us?
            </h4>
          </FadeInWrapper>
          <FadeInWrapper delay={800} className='space-y-4 '>
            <p className='md:text-2xl text-xl text-justify'>
              Our team’s expertise, passion, and commitment to excellence ensure
              that your travel experience is truly exceptional. At All In Travel
              and Freediving Tours, you’re not just a traveler—you’re a part of
              our family, and we are here to create a personalized,
              unforgettable journey tailored just for you.
            </p>
            <p className='md:text-2xl text-xl text-justify'>
              Come meet us, and let’s embark on an adventure that blends the
              best of nature, culture, and luxury.
            </p>
          </FadeInWrapper>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
