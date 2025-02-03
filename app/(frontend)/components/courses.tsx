import { getServiceByType } from '@/lib/helper';
import { CourseCard } from './course-card';
import { Headline } from './headlines';
import FadeInWrapper from './fade-in-wrapper';

export const Courses = () => {
  const courses = getServiceByType('course');
  return (
    <section className='bg-sky-950 py-20 space-y-4' id='courses'>
      <Headline
        label='Courses and Certifications'
        heading='Explore the Depths with Us'
      />
      <div className='container mx-auto text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-4'>
          {courses.map((course, i) => (
            <FadeInWrapper key={i} direction='left' delay={i * 500}>
              <CourseCard
                title={course.title}
                description={course.description[0]}
                url={course.images[0]}
                slug={course.slug}
              />
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
