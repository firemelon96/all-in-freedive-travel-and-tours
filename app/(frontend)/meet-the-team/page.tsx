import { Card } from '@/components/ui/card';
import { ImageCard } from '../components/image-card';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: 'Michael Morales',
    title: 'Founder & CEO | Lead Freediving Instructor',
    photo: '/res/team/michael.jpg',
    description: [
      'Michael Morales is the founder and heart of All In Travel and Freediving Tour Services. A competitive instructor, and underwater photographer, Michael brings a unique blend of expertise to every tour. With years of experience in travel industry and freediving, both as an athlete and an instructor, Michael’s deep connection to the ocean allows him to craft exceptional experiences for divers of all levels.',
      'As an underwater photographer, Michael has captured stunning images of the Philippines’ vibrant marine life, bringing attention to the beauty and fragility of the underwater world. His passion for sharing this beauty is reflected in every dive, where guests are not only immersed in the magic of freediving but are also encouraged to capture unforgettable moments of the ocean’s wonders.',
      'Michael’s commitment to sustainable tourism and his dedication to ensuring every guest has a safe, thrilling, and educational experience underwater is central to our philosophy. With his extensive knowledge of the Philippines’ top dive sites, he guarantees an unforgettable adventure, whether you’re a seasoned freediver or a first-time explorer.',
    ],
  },
  {
    name: 'Eddie Novero Jr.',
    title: 'Tour Operations Manager',
    photo: '/res/team/eddie.jpg',
    description: [
      'Eddie Novero Jr. is the cornerstone of our operations, responsible for ensuring that every aspect of your tour is seamless and memorable. With a deep knowledge of the Philippines’ diverse regions, Eddie designs customized itineraries that perfectly blend relaxation, adventure, and cultural immersion. Beyond his logistical expertise, Eddie is an avid spearfisher, with a wealth of knowledge about sustainable spearfishing practices and the Philippines’ incredible marine life. His dedication to both the environment and guest satisfaction makes him the perfect person to help you make the most of your time in paradise. Eddie is also your go-to contact for any special requests or details during your trip.',
    ],
  },
  {
    name: 'Joven Edoria',
    title: 'Senior Tour Guide',
    photo: '/res/team/joven.jpg',
    description: [
      'A seasoned guide with extensive knowledge of the Philippines’ natural wonders, history, and local culture, Joven Edoria brings a wealth of experience and passion to every tour in Coron and Busuanga. Whether leading island-hopping excursions, scenic land tours, or cultural exploration, Joven ensures each guest has an authentic, immersive, and unforgettable experience. His deep connection to his island home and dedication to providing a personal touch make him an invaluable part of our team. With Joven, you’ll not only explore the beauty of the Philippines but also learn about its fascinating history and diverse ecosystems.',
    ],
  },
];

const TeamPage = () => {
  return (
    <>
      <div className='h-36 bg-sky-100 flex items-center justify-center'>
        <h1 className='text-4xl text-sky-700 font-bold'>Meet the Team</h1>
      </div>
      <section className='container mx-auto'>
        <p className='text-2xl text-center mt-10'>
          At All In Freediving and Tour Services, our team is made up of
          passionate travel experts, experienced freediving instructor, and
          knowledgeable local guides. We share a deep love for the Philippines
          and are dedicated to offering premium, immersive travel experiences
          that showcase the beauty and culture of this tropical paradise.
        </p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 my-10'>
          {team.map((person) => (
            <Card key={person.name} className='h-fit'>
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
                      <CollapsibleContent>
                        <p
                          key={desc}
                          className='mb-4 text-slate-700 text-justify'
                        >
                          {desc}
                        </p>
                      </CollapsibleContent>
                    ))}
                  </Collapsible>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className='text-center my-10 space-y-4'>
          <h3 className='text-4xl text-sky-800 font-bold'>
            Local Guides & Support Team
          </h3>
          <p className='text-2xl text-center'>
            In addition to our core team, we have a dedicated group of local
            guides, certified safety diver and support staff who are passionate
            about sharing the beauty and culture of their regions. From the
            remote islands of Batanes to the stunning surf spots of Siargao, our
            local experts provide insights into the unique traditions,
            landscapes, and ecosystems of the Philippines. With their help,
            every tour becomes an authentic journey of discovery.
          </p>
        </div>
        <div className='text-center my-10 space-y-4'>
          <h4 className='text-4xl text-sky-800 font-bold'>
            Why Travel with Us?
          </h4>
          <p className='text-2xl text-center'>
            Our team’s expertise, passion, and commitment to excellence ensure
            that your travel experience is truly exceptional. At All In Travel
            and Freediving Tours, you’re not just a traveler—you’re a part of
            our family, and we are here to create a personalized, unforgettable
            journey tailored just for you.
          </p>
          <p className='text-2xl text-center'>
            Come meet us, and let’s embark on an adventure that blends the best
            of nature, culture, and luxury.
          </p>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
