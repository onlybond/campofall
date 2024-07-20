import { Button } from '@/components/ui/button'
import React from 'react'

const notFound = () => {
  return (
    <div className='w-screen container h-screen flex items-center justify-center diagonal-div'>
      <div className='w-[25%] h-3/4'>
        <p className='text-7xl mt-4'>Page not</p>
        <p className='text-7xl mt-4'>found</p>
        <Button className='mt-4 rounded-[40px] w-1/2'>Retry</Button>
      </div>
      <div className='w-[60%] h-3/4 flex justify-center'>
        <img src="/assets/error.png" alt="" className='h-full'/>
      </div>
    </div>
  )
}

export default notFound