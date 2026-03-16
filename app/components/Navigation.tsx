/**
 * 1. Remove some styling
 * 
 */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

export function Navigation({
  items,
}: {
  items: NavItem[];
}) {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className='relative'>
      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-4 text-4xl '>
        {items.map((item) => (
          <span className='nav-link' key={item.label}>
            <NavItem item={item} />
          </span>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className=' fixed top-4 right-4 md:hidden z-60 p-2 bg-(--bg-primary) border border-(--border) rounded-md cursor-pointer hover:text-(--text-secondary)'
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-(--bg-secondary) border-l border-(--border) p-6 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex flex-col gap-2 mt-5'>
          {items.map((item) => (
            <span key={item.label} className='menu-item'>
              <NavItem
                
                item={item}
                onNav={() => setOpen(false)}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Background Overlay */}
      {open && (
        <div
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}

// Internal Helper to keep the main nav clean
function NavItem({
  item,
  onNav,
}: {
  item: NavItem;
 
  onNav?: () => void;
}) {
  const defaultHref =
    item.href ||
    (item.label === 'Home'
      ? '/'
      : `/${item.label.toLowerCase().replace(/\s+/g, '-')}`);

  if (item.dropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='gap-2'>
            {item.label} <ChevronDown size={14} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='bg-(--bg-secondary) border-(--border)'
        >
          {item.dropdown.map((drop) => (
            <DropdownMenuItem key={drop.label} asChild>
              <Link
                href={drop.href}
                onClick={onNav}
                className='w-full text-(--text-secondary)'
              >
                {drop.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href={defaultHref}
      onClick={onNav}
      className=''
    >
      {item.label}
    </Link>
  );
}
