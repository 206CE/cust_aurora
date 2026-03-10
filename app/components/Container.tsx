/* GOOD - 1.0.0

1.  Research

*/

import React, { ElementType } from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType; // Optional tag (div, section, main, etc.)
};

function Container({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}

export default Container;
