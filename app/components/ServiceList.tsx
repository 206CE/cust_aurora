import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export type ServiceItem = {
  title: string;
  description: string;
  icon?: ReactNode;
  imgUrl?: string;
  imgSize?: number;
  link?: string;
};

type ServiceListProps = {
  heading?: string;
  subheading?: string;
  services: ServiceItem[];
  itemStyle?: string;
  layout?: 'grid' | 'list';
  columns?: number;
};

export function ServiceList({
  heading,
  subheading,
  services,
  itemStyle = '',
  layout = 'grid',
  columns = 3,
}: ServiceListProps) {
  const gridCols =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    }[columns] || 'grid-cols-1';

  return (
    <section className='p-8 text-[var(--text-primary)]'>
      {/* Heading Container */}
      {(heading || subheading) && (
        <div className='text-center mb-12'>
          {heading && (
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              {heading}
            </h2>
          )}
          {subheading && (
            <p className='text-lg text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto'>
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Services Container */}
      <div
        className={`${
          layout === 'grid' ? `grid ${gridCols}` : 'flex flex-col space-y-8'
        } gap-8 max-w-7xl mx-auto`}
      >
        {services.map((service, idx) => (
          <article
            key={idx}
            className={`
              p-8 border border-[var(--border)] shadow-sm hover:shadow-xl 
              transition-all duration-300 bg-[var(--bg-secondary)] rounded-xl
              flex flex-col items-center text-center group
              ${itemStyle}
            `}
          >
            {/* Wrapper for Link logic */}
            {service.link ? (
              <Link
                href={service.link}
                className='flex flex-col items-center w-full'
              >
                <ServiceContent service={service} />
              </Link>
            ) : (
              <ServiceContent service={service} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

// Sub-component to keep code clean and handle centering
function ServiceContent({ service }: { service: ServiceItem }) {
  return (
    <>
      {service.icon && (
        <div className='mb-6 text-[var(--text-primary)] group-hover:scale-110 transition-transform duration-300'>
          {service.icon}
        </div>
      )}

      {service.imgUrl && (
        <div className='relative mb-6 flex justify-center'>
          <Image
            src={service.imgUrl}
            alt={service.title}
            height={service.imgSize || 60}
            width={service.imgSize || 60}
            className='object-contain'
          />
        </div>
      )}

      {service.title && (
        <h3 className='text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors'>
          {service.title}
        </h3>
      )}

      {service.description && (
        <p className='text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs'>
          {service.description}
        </p>
      )}
    </>
  );
}
