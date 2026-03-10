/** GOOD - 1.0.0

1.  Shadcn Components
2.  Next 16 useAction
3.  CSS Dependency

 */
'use client';

import { useState } from 'react';

export default function Contacts() {
  const [result, setResult] = useState('');


  const onSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult('Sending....');
    const formData = new FormData(e.currentTarget);
    
    const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (access_key) {
    formData.append('access_key', access_key);
    } else {
      console.error('Access key is missing in environment variables!');
    }
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('Form Submitted Successfully');
      e.currentTarget.reset();
    } else {
      setResult('Error');
    }
  };


  return (
    <section className='py-8 lg:py-16 px-4 mx-auto'>
      <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-(--text-primary)'>
        Contact Us
      </h2>
      <p className='mb-8 lg:mb-16 text-center text-(--text-secondary) sm:text-xl'>
        Please contact us...
      </p>
      <form className='' onSubmit={onSubmit}>
        <fieldset>
          <label
            className='block m-2 text-md font-medium text-(--text-secondary)'
            htmlFor='name'
          >
            Name:
          </label>
          <input
            className='shadow-md bg-(bg-secondary) text-(--text-secondary) text-md block w-full p-2.5 mb-3'
            type='text'
            id='name'
            required
            placeholder='John Smith'
            autoComplete='off'
          />
          <label
            className='block m-2 text-md font-medium text-(--text-secondary)'
            htmlFor='email'
          >
            Email:
          </label>
          <input
            className='shadow-md bg-(--bg-secondary) text-(--text-secondary) text-md block w-full p-2.5 mb-3'
            type='email'
            id='email'
            required
            placeholder='username@domain.com'
            autoComplete='off'
          />
          <label
            className='block m-2 text-md font-medium text-(--text-secondary)'
            htmlFor='message'
          >
            Message:
          </label>
          <textarea
            className='shadow-md bg-(--bg-secondary) text-(--text-secondary) text-md block w-full p-2.5 mb-3'
            id='message'
            required
            rows={3}
            placeholder='This is your message...'
          />
        </fieldset>
        <button className='btn-primary cursor-pointer w-full' type='submit'>
          Send
        </button>
      </form>
    </section>
  );
}
