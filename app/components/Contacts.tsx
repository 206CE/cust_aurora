'use client';

import { useActionState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

// The Action Function (Next.js 16 Style)
async function submitContactForm(prevState: any, formData: FormData) {
  const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!access_key) {
    return {
      success: false,
      message: 'Configuration Error: Access Key missing.',
    };
  }

  formData.append('access_key', access_key);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message: "Message sent successfully! I'll be in touch soon.",
      };
    } else {
      return {
        success: false,
        message: data.message || 'Something went wrong. Please try again.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Network error. Please check your connection.',
    };
  }
}

export default function Contacts() {
  // useActionState handles the loading state (isPending) and the result automatically
const [state, formAction, isPending] = useActionState(submitContactForm, null);
const formRef = useRef<HTMLFormElement>(null);

useEffect(() => {
  if (state?.success) {
    formRef.current?.reset();
    toast.success(state.message);
  }
}, [state]);

  return (
    <section className='py-8 lg:py-16 px-4 mx-auto max-w-2xl'>
      <div className='text-center mb-8 lg:mb-12'>
        <h2 className='text-4xl tracking-tight font-extrabold text-(--text-primary)'>
          Contact Us
        </h2>
        <p className='mt-4 text-(--text-secondary) sm:text-xl'>
          Have a question? Drop a message below and I&apos;ll get back to you.
        </p>
      </div>

      <form action={formAction} ref={formRef} className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='name' className='text-(--text-secondary)'>
            Name
          </Label>
          <Input
            name='name' // Important: name matches FormData keys
            id='name'
            required
            placeholder='John Smith'
            className='bg-(--bg-secondary) border-(--border) text-(--text-primary)'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email' className='text-(--text-secondary)'>
            Email
          </Label>
          <Input
            name='email'
            id='email'
            type='email'
            required
            placeholder='username@domain.com'
            className='bg-(--bg-secondary) border-(--border) text-(--text-primary)'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='message' className='text-(--text-secondary)'>
            Message
          </Label>
          <Textarea
            name='message'
            id='message'
            required
            rows={4}
            placeholder='How can I help you?'
            className='bg-(--bg-secondary) border-(--border) text-(--text-primary)'
          />
        </div>

        <Button
          type='submit'
          disabled={isPending}
          className='w-full btn-primary transition-all cursor-pointer'
        >
          {isPending ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Sending...
            </>
          ) : (
            <>
              <Send className='mr-2 h-4 w-4' />
              Send Message
            </>
          )}
        </Button>
      </form>
    </section>
  );
}
