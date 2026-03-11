/** GOOD - 1.1.0

1.  Add T&C Capabilities

 */
'use client';

import { useState } from 'react';


export function CopyRight() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className='p-6 border-t border '>
      <div className='flex items-center gap-2 justify-center text-(--text-secondary) text-xs tracking-widest uppercase glow-text'>
        <p className=''>&copy; 2026 CE206</p>
        
        {/*<Link href='/T&Cs'>T&C</Link>

        <span className='text-(--text-secondary) text-xs tracking-widest uppercase glow-text mx-2'>
          |
        </span>*/}
        <p className='hidden sm:block'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ><span className='text-(--text-secondary) text-xs tracking-widest uppercase glow-text mx-2'>
          |
        </span>
          {isHovered ? (
            <span className='glitch-hover text-[10px] text-(--text-tertiary) cursor-default text-center'>
              Unauthorized duplication is a violation of system integrity.
            </span>
          ) : (
            <span className='text-(--text-secondary) text-xs tracking-widest uppercase glow-text'>
              Operational Protocol v1.0
            </span>
          )}
        </p>
      </div>
    </footer>
  );
}
