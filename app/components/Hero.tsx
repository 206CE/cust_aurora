/* GOOD - 1.0.0

1. Remove CTA's
2. Testing

*/

'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export interface Cta {
  label: string;
  href: string;
}

interface HeroProps {
  title?: string;
  tagline?: string;
  ctas?: Cta[];
  itemFormat?: string;
  listformat?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSize?: number;
}

const Hero: React.FC<HeroProps> = ({
  title = 'Compute Everything',
  tagline = 'From Origin to Convergence. One Entity. Many Minds.',
  ctas,
  imageSrc,
  imageAlt = 'Alternate text',
  imageSize,

  itemFormat,
}) => {
  return (
    <section className='p-4 bg-(--bg-secondary) m-3 border-(--border) border-2'>
      <div className='flex-col items-center'>
        {/* Optional image display */}
        <div className='flex justify-center'>
          {imageSrc && (
            <div className='p-3'>
              <Image
                src={imageSrc}
                alt={imageAlt ?? 'Alternate Text'}
                className=''
                width={imageSize || 20}
                height={imageSize || 20}
                priority

              />
            </div>
          )}
        </div>
        <h1 className='flex justify-center text-4xl lg:text-6xl font-extrabold bg-linear-to-r pb-2 from-(--text-primary) via-(--text-tertiary) to-(--text-secondary) bg-clip-text text-transparent'>
          {title}
        </h1>

        {tagline && (
          <h2 className='flex justify-center mt-2 text-xl text-(--text-secondary) text-center'>
            {tagline}
          </h2>
        )}
        <ul className='mt-6 flex justify-center flex-wrap'>
          {(ctas ?? []).map((cta, idx) => (
            <li
              key={idx}
              className={`px-3 py-2  text-(--text-primary) ${itemFormat}`}
            >
              <Link
                href={cta.href}
                className='transition duration-300 transform hover:scale-110'
              >
                {cta.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
