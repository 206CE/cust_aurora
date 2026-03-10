/** GOOD - 1.0.0

 */

'use client'; // Must be lowercase

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Swapped to Lucide
import { Button } from './ui/button';

interface ContactInfoProps {
  cellphone?: string;
  email?: string;
  address?: string;
}

// Fixed the typing: Props are typed inside the parentheses
export function ContactInfo({ cellphone, email, address }: ContactInfoProps) {
  const [isPrivate, setIsPrivate] = useState(true);

  const togglePrivacy = () => setIsPrivate(!isPrivate);
  const maskData = (data: string) => (isPrivate ? '••••••••••••' : data);

  return (
    <address className='not-italic flex flex-wrap justify-center text-(--text-secondary) font-semibold m-5 gap-4'>
      {cellphone && (
        <div className='flex flex-row items-center space-x-2'>
          <Phone size={18} className='text-blue-500' />
          <span onClick={togglePrivacy} className='cursor-pointer'>
            {maskData(cellphone)}
          </span>
        </div>
      )}

      {email && (
        <div className='flex flex-row items-center space-x-2'>
          <Mail size={18} className='text-green-500' />
          <span onClick={togglePrivacy} className='cursor-pointer'>
            {maskData(email)}
          </span>
        </div>
      )}

      {address && (
        <div className='flex flex-row items-center space-x-2'>
          <MapPin size={18} className='text-red-500' />
          <span onClick={togglePrivacy} className='cursor-pointer'>
            {maskData(address)}
          </span>
        </div>
      )}

      {isPrivate && (
        <Button
          type='button'
          onClick={togglePrivacy}
          className='text-xs text-blue-400 underline hover:text-blue-600 transition'
        >
          Show Info
        </Button>
      )}
    </address>
  );
}
