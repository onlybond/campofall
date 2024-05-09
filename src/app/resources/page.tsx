import React from 'react'
import ResourceCard from './components/ResourceCard'

const page = () => {
  return (
    <div className='flex w-full items-center justify-center h-full '>
      <div className='grid grid-cols-3 gap-x-8 gap-y-6'>
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      </div>
    </div>
  )
}

export default page