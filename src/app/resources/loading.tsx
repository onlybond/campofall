import React from 'react'

const loading = () => {
  return (
    <div className="flex container relative w-full items-center justify-center h-full ">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full">
        <div className='h-44 w-auto animate-pulse bg-[#fff5] rounded' />
        <div className='h-44 w-auto animate-pulse bg-[#fff5] rounded' />
        <div className='h-44 w-auto animate-pulse bg-[#fff5] rounded' />
        <div className='h-44 w-auto animate-pulse bg-[#fff5] rounded' />
        <div className='h-44 w-auto animate-pulse bg-[#fff5] rounded' />
        <div className='h-44 w-auto animate-pulse bg-[#fff5] rounded' />
      </div>
    </div>
  )
}

export default loading