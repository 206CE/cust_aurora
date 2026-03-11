/** GOOD - 1.0.0

1. Add flexibility to aspect ratio.

 */

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  compStyling: string;
  text: string;
  imgPath?: string;
  size: number;
  href?: string;
}

export function Logo({
  text,
  imgPath = '@/src/app/icon.ico',
  size,
  href = '/',
  compStyling = '',
}: LogoProps) {
  return (
    <div
      className={`gap-2 text-2xl font-extrabold  ${compStyling}`}
    >
      <Link href={href || ''}>
        <div className='flex flex-row items-center  gap-2 mr-4'>
          <Image
            src={imgPath}
            alt={text}
            width={size}
            height={size}
            style={{ width: size, height: size }}
            priority
          />
          <span className=' lg:block'>{text}</span>
        </div>
      </Link>
    </div>
  );
}
