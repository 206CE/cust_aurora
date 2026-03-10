/* GOOD - 0.1.0.0

1.  CSS dependencies

*/

// components/About.tsx

import Image from 'next/image';

type AboutSection = {
  heading: string;
  content: string;
  image?: string; // optional image URL
};

type AboutProps = {
  companyName: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  sections?: AboutSection[];
  heroImage?: string;
};

export default function About({
  companyName,
  tagline,
  description,
  mission,
  vision,
  values,
  sections = [],
  heroImage,
}: AboutProps) {
  return (
    <div className=' text-(--text-primary)'>
      {/* Hero */}
      <section className='py-16 px-4 text-center'>
        {heroImage && (
          <div className='mb-6'>
            <Image
              src={heroImage}
              alt={`${companyName} hero`}
              width={800}
              height={400}
              className='mx-auto '
              priority
            />
          </div>
        )}
        <h1 className='text-4xl font-bold mb-2'>{companyName}</h1>
        <p className='text-xl text-(--text-secondary)'>{tagline}</p>
      </section>

      {/* Description */}
      <section className='max-w-4xl mx-auto px-6 py-10'>
        <h2 className='text-2xl font-semibold mb-4'>About Us</h2>
        <p className='text-(--text-secondary) text-lg leading-relaxed'>
          {description}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className='py-10 px-6'>
        <div className='max-w-4xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2 '>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Our Mission</h3>
            <p className='text-(--text-secondary) text-md'>{mission}</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Our Vision</h3>
            <p className='text-(--text-secondary) text-md'>{vision}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='max-w-4xl mx-auto px-6 py-10'>
        <h3 className='text-2xl font-semibold mb-4'>Our Core Values</h3>
        <ul className='lg:list-disc space-y-10'>
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>

      {/* Additional Sections */}
      {sections.length > 0 && (
        <section className='max-w-4xl mx-auto px-6 py-10 space-y-12'>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className='text-2xl font-semibold mb-2'>{section.heading}</h3>
              <p className='mb-4 text-(--text-secondary) text-md'>
                {section.content}
              </p>
              {section.image && (
                <Image
                  src={section.image}
                  alt={section.heading}
                  width={800}
                  height={400}
                  className='rounded-lg shadow'
                />
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
