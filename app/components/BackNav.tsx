/** GOOD - 0.1.0.0

1. Lucide

 */

'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { StepBack } from 'lucide-react';

export function BackNav() {
  const router = useRouter();

  return (
    <Button
    
      onClick={() => router.back()}
      className='text-2xl nav-link cursor-pointer '
    >
      <StepBack  />
    </Button>
  );
}
