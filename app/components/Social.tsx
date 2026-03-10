/** GOOD - 1.0.0

1. Remove CSS Dependencies

 */

'use client';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaGlobe,
  FaDiscord,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ReactElement } from 'react';
import Link from 'next/link';

interface SocialProps {
  urls: string[];
  linkStyle?: string;
}

const iconMap: { [key: string]: ReactElement } = {
  twitter: <FaXTwitter className='h-6 w-6' />,
  facebook: <FaFacebook className='h-6 w-6' />,
  instagram: <FaInstagram className='h-6 w-6' />,
  linkedin: <FaLinkedin className='h-6 w-6' />,
  github: <FaGithub className='h-6 w-6' />,
  youtube: <FaYoutube className='h-6 w-6' />,
  web: <FaGlobe className='h-6 w-6' />,
  discord: <FaDiscord className='h-6 w-6' />,
};

function getIcon(url: string) {
  if (url.includes('x.com')) return iconMap.twitter;
  if (url.includes('facebook.com')) return iconMap.facebook;
  if (url.includes('instagram.com')) return iconMap.instagram;
  if (url.includes('linkedin.com')) return iconMap.linkedin;
  if (url.includes('github.com')) return iconMap.github;
  if (url.includes('youtube.com')) return iconMap.youtube;
  if (url.includes('discord.com')) return iconMap.discord;
  return iconMap.web;
}

export  function Social({ urls, linkStyle }: SocialProps) {
  return (
    <div className='flex flex-wrap justify-center gap-4 items-center pb-3'>
      {urls.map((url) => (
        <Link
          key={url}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className={`${linkStyle} text-(--text-primary) hover:text-(--primary)`}
          area-label={iconMap}
        >
          {getIcon(url)}
        </Link>
      ))}
    </div>
  );
}
