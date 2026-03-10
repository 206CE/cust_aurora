/** GOOD - 1.0.0
 * 

1. Expand person properties to solve multiple problems
2. CSS Dependencies

 */

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: string | number;
  name: string;
  role?: string;
  bio?: string;
  imgUrl?: string;
  size?: number | 50;
}

interface TeamMemberProps {
  heading: string;
  subheading?: string;
  listStyle?: string;
  cardStyle?: string;
  members: TeamMember[];
}

export  function Team({
  heading,
  subheading,
  listStyle,
  cardStyle,
  members,
}: TeamMemberProps) {
  return (
    <section className='p-2'>
      <div className='text-center mb-group space-y-4 p-2'>
        <h2 className='text-5xl text-(--primary)'>{heading}</h2>
        {subheading && (
          <h4 className='uppercase text-2xl text-(--secondary)'>
            {subheading}
          </h4>
        )}
      </div>
      <div className={`${listStyle}`}>
        {members.map((member, index) => (
          <div key={index} className={`${cardStyle}`}>
            {member.imgUrl && (
              <Image
                className=' rounded-xl'
                src={member.imgUrl}
                alt={`portrait of ${member.name}`}
                height={member.size}
                width={member.size}
              />
            )}
            <h5 className='mt-2 text-2xl font-bold'>{member.name}</h5>
            {member.role && (
              <p className='text-lg font-semibold mb-3'>{member.role}</p>
            )}
            {member.bio && (
              <p className='text-sm text-(--tertiary) text-balance'>
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
