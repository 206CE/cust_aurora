import {
  Briefcase,
  GraduationCap,
  Code,
  MapPin,
  LucideIcon,
} from 'lucide-react';

// 1. Map types to specific icons
const TYPE_ICONS: Record<string, LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
  project: Code,
};

export function TimeLine({ title, data }: { title: string; data: any[] }) {
  return (
    <section className='pb-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-16 text-center text-(--text-primary)'>
        {title}
      </h2>

      <div className='relative'>
        {/* Central Vertical line */}
        <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-(--border) transform md:-translate-x-1/2' />

        {data.map((entry, index) => {
          // 2. Determine which icon to use for this specific entry
          const Icon =
            TYPE_ICONS[entry.type as keyof typeof TYPE_ICONS] || Briefcase;

          return (
            <div
              key={index}
              className={`relative -mb-15 flex flex-col md:flex-row items-start md:items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dynamic Icon/Date bubble */}
              <div className='flex items-center justify-center w-20 h-20 rounded-full bg-(--bg-secondary) border-4 border-(--border) shadow-lg z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
                <div className='flex flex-col items-center justify-center'>
                  <Icon className='h-6 w-6 text-(--text-tertiary) mb-1' />
                  <span className='text-[10px] font-bold text-(--text-secondary) block px-2 leading-tight text-center'>
                    {entry.year}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-5/12 bg-(--bg-secondary) shadow-md p-7 border border-(--border) transition-all hover:shadow-xl rounded-lg ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className='flex flex-col mb-2'>
                  <span className='text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-1'>
                    {entry.type}
                  </span>
                  <h3 className='text-xl font-bold text-(--text-primary)'>
                    {entry.role}
                  </h3>
                </div>

                <p className='text-[var(--text-secondary)] font-medium mb-2 text-sm'>
                  {entry.company}
                  {entry.location && (
                    <span className='inline-flex items-center gap-1 ml-3 text-xs text-[var(--text-tertiary)]'>
                      <MapPin className='h-3 w-3' /> {entry.location}
                    </span>
                  )}
                </p>
                <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                  {entry.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
