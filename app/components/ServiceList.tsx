import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type ServiceItem = {
  title: string;
  // UPDATED: Accept string or array of strings
  description?: string | string[];
  icon?: ReactNode;
  imgUrl?: string;
  imgSize?: number;
  link?: string;
};

type ServiceListProps = {
  heading?: string;
  subtitle?: string;
  services: ServiceItem[];
  itemStyle?: string;
  layout?: "grid" | "list";
  columns?: number;
};

export function ServiceList({
  heading,
  subtitle,
  services,
  itemStyle = "",
  layout = "grid",
  columns = 3,
}: ServiceListProps) {
  const gridCols =
    {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    }[columns] || "grid-cols-1";

  return (
    <section className="p-8 text-(--text-primary)">
      {(heading || subtitle) && (
        <div className="text-center mb-12">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {heading}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-(--text-secondary) mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className={`${
          layout === "grid" ? `grid ${gridCols}` : "flex flex-col space-y-8"
        } gap-8 max-w-7xl mx-auto`}
      >
        {services.map((service, idx) => (
          <article
            key={idx}
            className={`
              p-8 border border-white/5 shadow-sm hover:shadow-xl 
              transition-all duration-300 bg-(--bg-secondary) rounded-xl
              flex flex-col items-center text-center group
              ${itemStyle}
            `}
          >
            {service.link ? (
              <Link
                href={service.link}
                className="flex flex-col items-center w-full h-full"
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

function ServiceContent({ service }: { service: ServiceItem }) {
  return (
    <>
      {service.icon && (
        <div className="mb-6 text-(--sun-flare) group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
      )}

      {service.imgUrl && (
        <div className="relative mb-6 flex justify-center">
          <Image
            src={service.imgUrl}
            alt={service.title}
            height={service.imgSize || 60}
            width={service.imgSize || 60}
            className="object-contain"
          />
        </div>
      )}

      {service.title && (
        <h3 className="text-xl font-bold mb-3 group-hover:text-(--sun-core) transition-colors">
          {service.title}
        </h3>
      )}

      {service.description && (
        <div className="text-(--text-secondary) text-sm leading-relaxed max-w-xs w-full">
          {Array.isArray(service.description) ? (
            <ul className="space-y-2 text-left inline-block mx-auto">
              {service.description.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2"
                >
                  {/* Solar Bullet */}
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--sun-flare) shadow-[0_0_5px_var(--sun-flare)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>{service.description}</p>
          )}
        </div>
      )}
    </>
  );
}
