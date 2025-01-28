import { getServiceByType } from '@/lib/helper';
import { CourseCard } from './course-card';
import { Headline } from './headlines';

// const courses = [
//   {
//     title: 'Snorkeling and Skin Diving',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//     url: '/snorkeling.jpg',
//   },
//   {
//     title: 'Technical Diving Course',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//     url: '/diver-not-in-water.jpg',
//   },
//   {
//     title: 'Underwater Photography',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//     url: '/manturtle.jpg',
//   },
//   {
//     title: 'Cave Diving Course',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//     url: '/diver-with-fish.jpg',
//   },
// ];

export const Courses = () => {
  const courses = getServiceByType('course');
  return (
    <section className='bg-sky-950 py-20 space-y-4' id='courses'>
      <Headline
        label='Courses and Certifications'
        heading='Explore the Depths with Expert Scuba Diving Courses'
      />
      <div className='container mx-auto text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-2'>
          {courses.map((course, i) => (
            <CourseCard
              key={i}
              title={course.title}
              description={course.description[0]}
              url={course.images[0]}
              slug={course.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
