
import { Briefcase, Calendar, GraduationCap, MapPin, Code } from 'lucide-react';


// Reusable Component for the Timeline Logic

export function TimeLine({
  title,
  data,
  icon: Icon,
}: {
  title: string;
  data: any[];
  icon: any;
}) {
  return (
    <section className='pb-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-16 text-center text-(--text-primary) flex items-center justify-center gap-3'>
        <Icon className='h-8 w-8' /> {title}
      </h2>

      <div className='relative'>
        <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-(--border) transform md:-translate-x-1/2' />

        {data.map((entry, index) => (
          <div
            key={index}
            className={`relative mb-16 flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Date bubble */}
            <div className='flex items-center justify-center w-24 h-24 rounded-full bg-(--bg-secondary) border-4 border-(--border) shadow-lg z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
              <div className='text-center'>
                <span className='text-xs font-bold text-(--text-secondary) block px-2 leading-tight'>
                  {entry.year}
                </span>
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full md:w-5/12 bg-(--bg-secondary) shadow-md p-7 border border-(--border) transition-all hover:shadow-xl ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            >
              <h3 className='text-xl font-bold text-(--text-primary)'>
                {entry.role}
              </h3>
              <p className='text-(--text-secondary) font-medium mb-2'>
                {entry.company}
                {entry.location && (
                  <span className='inline-flex items-center gap-1 ml-3 text-sm text-[var(--text-tertiary)]'>
                    <MapPin className='h-4 w-4' /> {entry.location}
                  </span>
                )}
              </p>
              <p className='text-[var(--text-secondary)] text-sm'>
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
