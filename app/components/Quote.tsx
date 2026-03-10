/** GOOD - 1.0.0

1. CSS Dependency

 */

import React from 'react';

interface QuoteProps {
  text: string;
  author?: string;
  title?: string; // e.g., "CEO of TechCorp"
  variant?: 'minimal' | 'bordered' | 'fancy';
}

export function Quote({
  text,
  author,
  title,
  variant = 'bordered',
}: QuoteProps) {
  // Styles based on the chosen variant
  const variants = {
    minimal: '',
    bordered: 'border-2 border-(--border) rounded-xl p-8 shadow-sm',
    fancy:
      'bg-gradient-to-br from-(--bg-secondary) to-(bg-tertiary) border-t-8 border-(--border) rounded-lg p-10 shadow-lg',
  };

  return (
    <blockquote className={`${variants[variant]} my-8 max-w-2xl`}>
      {/* Decorative Quote Mark for 'fancy' variant */}
      {variant === 'fancy' && (
        <span className='text-6xl text-(--secondary) block h-4 -mt-4 mb-4 select-none'>
          “
        </span>
      )}

      <p className='text-xl italic font-medium text-(--primary) leading-relaxed'>
        &quot;{text}&quot;
      </p>

      {(author || title) && (
        <footer className='mt-4 flex items-center gap-2'>
          <div className='h-px w-8 bg-(--bg-secondary)' />
          <div className='flex flex-row'>
            {author && (
              <cite className='not-italic font-bold text-(--secondary)'>
                {author}
              </cite>
            )}
            <p className='text-(--primary) px-4'>-</p>
            {title && <p className='text-sm text-(--tertiary)'>{title}</p>}
          </div>
        </footer>
      )}
    </blockquote>
  );
}
