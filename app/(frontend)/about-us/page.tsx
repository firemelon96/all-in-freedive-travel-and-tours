import { Card } from '@/components/ui/card';
import { Footer } from '../components/footer';

const featuredPackages = [
  {
    name: 'Batanes',
    description:
      'Explore the stunning landscapes of the northernmost province, with its rolling hills, iconic stone houses, and breathtaking coastal views. Our Batanes Adventure Tour lets you discover the picturesque islands of Basco, Sabtang and Itbayat, experience traditional Ivatan culture, and enjoy unparalleled tranquility.',
  },
  {
    name: 'Boracay',
    description:
      'Known for its world-famous powder-white sands and vibrant nightlife, our Boracay Tours offer a perfect blend of relaxation and adventure from different beach activities to sunset cruises and luxurious resorts.',
  },
  {
    name: 'Siargao',
    description:
      'Surfing capital and island paradise, Siargao Tour Package takes you to the island’s pristine lagoons, secluded beaches, and world-class surf spots. Whether you’re a surfer or simply seeking to experience Siargaos laid-back charm, we offer the best island hopping and land tours around the island.',
  },
  {
    name: 'Cebu',
    description:
      'Home to both rich history and magnificent dive sites, our Cebu Tour Package combines cultural explorations of historical landmarks like Magellan’s Cross, taste the famous Lechon, and experience vibrant marine ecosystems at Moalboal, and go canyoneering at Badian.',
  },
  {
    name: 'Bohol',
    description:
      'From the iconic Chocolate Hills to the Tarsier Sanctuary, Bohol  Tour Package offers a combination of natural wonders and local culture. Take a river cruise with us along the Loboc River, explore the beautiful Panglao Island, and visit historical churches.',
  },
  {
    name: 'Balabac',
    description:
      'An untouched paradise, Balabac Tour Package showcases some of the Philippines’ most pristine beaches and crystal-clear waters. Enjoy a secluded escape with island-hopping tours to stunning spots like Onuk Island, perfect for snorkeling and exploring remote white-sand beaches and sparkling sandbars.',
  },
  {
    name: 'Puerto Princesa',
    description:
      'Explore the natural wonders of Puerto Princesa Tour Package with our Underground River & City Tour. Discover the UNESCO World Heritage-listed Underground River, go island hopping in Honda Bay, and explore the charming city life.',
  },
  {
    name: 'Coron',
    description:
      'Known for its dramatic limestone cliffs and pristine lagoons, our Coron Tour Package is perfect for those looking to explore shipwrecks, dive into vibrant coral gardens, and visit stunning spots like Kayangan Lake and Twin Lagoon.',
  },
  {
    name: 'El Nido',
    description:
      'One of the Philippines’ most iconic destinations, our El Nido Tour Package lets you discover hidden lagoons, secret beaches, and limestone cliffs. This paradise is perfect for those seeking adventure, relaxation, and breathtaking natural beauty.',
  },
];

const AboutPage = () => {
  return (
    <>
      <div className='h-36 bg-sky-100 flex items-center justify-center'>
        <h1 className='text-4xl text-sky-700 font-bold uppercase'>About us</h1>
      </div>
      <section className='container mx-auto '>
        <div className='space-y-4 text-2xl text-center'>
          <p className='mt-5'>
            At All In Travel and Freediving Tour Services, we specialize in
            crafting unforgettable, premium travel experiences across the
            Philippines. Whether you’re seeking the thrill of freediving in
            crystal-clear waters, exploring stunning islands on a luxurious
            island-hopping tour, or embarking on scenic land adventures, we
            offer the best of both land and sea. Our bespoke tours are designed
            to bring you closer to the unparalleled beauty and culture of this
            tropical paradise.
          </p>
          <p>
            We are passionate about showcasing the Philippines’ diversity,
            offering exclusive tours to the country’s top destinations,
            including Batanes, Boracay, Siargao, Cebu, Bohol, Balabac, Puerto
            Princesa, Coron, and El Nido. Each location is handpicked for its
            natural beauty, unique charm, and rich cultural heritage.
          </p>
        </div>
        <div className='space-y-5 mt-10'>
          <h3 className='text-4xl text-sky-800 font-semibold text-center'>
            Our Featured Tour Packages
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {featuredPackages.map((pax) => (
              <Card
                key={pax.name}
                className='p-2 border-none shadow-sm bg-sky-700'
              >
                <div className='space-y-2 text-stone-100 text-center'>
                  <p className='text-3xl font-bold'>{pax.name}</p>
                  <p className=''>{pax.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className='space-y-5 my-10 bg-slate-100 p-4'>
          <h3 className='text-4xl text-sky-800 font-semibold text-center'>
            Our Freediving Experience
          </h3>
          <div className='space-y-4 max-w-4xl mx-auto '>
            <p className='text-2xl text-center '>
              As specialists in freediving, we offer tailored tours to some of
              the best dive spots in the Philippines. Whether you’re a beginner
              or an experienced diver, our freediving tours will introduce you
              to the world’s most vibrant marine ecosystems, from the calm
              waters of Coron and Busuanga to Apo Reef and its stunning coral
              reefs.
            </p>
            <p className='text-2xl text-center'>
              With our expert safety diver/tour guides and commitment to safety
              and environmental conservation, you’ll experience the thrill of
              diving in some of the most biodiverse and pristine waters of
              Philippine's best.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
