'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { User, Ellipsis } from 'lucide-react';
import { Spinner } from './ui/spinner';
import { useState, useEffect } from 'react';

export function Profile() {
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (isLoading) return <Spinner fontSize={20} />;

  return (
    <div className='cursor-pointer nav-item fixed top-6 right-16'>
      {user ? (
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button className=''>
              <Ellipsis className=' cursor-pointer' />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className='w-48' align='end'>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>{user.name}</p>
                <p className='text-xs leading-none text-muted-foreground'>
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href='/dashboard' className='w-full'>
                  Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href='/api/auth/logout' className='w-full text-red-600'>
                Log Out
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <a href='/api/auth/login' aria-label='Login'>
          <User size={20} />
        </a>
      )}

      {/* Manual Overlay (Only if you want a custom mobile look) */}
      {open && (
        <div className='fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden' />
      )}
    </div>
  );
}