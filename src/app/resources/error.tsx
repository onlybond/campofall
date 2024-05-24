
"use client"
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  

  return (
    <div className='container flex gap-4 flex-col w-full h-full justify-center items-center'>
      <h1 className='text-2xl'>{error.message}</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
