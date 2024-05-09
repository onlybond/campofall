import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RiShareBoxLine } from 'react-icons/ri'
const ResourceCard = () => {
  return (
    <div className='bg-[#131313] w-96 h-40 relative rounded-md overflow-hidden'>
      <div className='p-4 space-y-1'>
      <Image src="/assets/logoiso.png" alt="alt" width={24} height={24} />
      <h1 className='text-2xl font-bold'>CampOfall</h1>
      <p className='text-xs'>Design and collaborate all in the browser</p>
      </div>
      <div className='bg-[#363636] absolute bottom-0 w-full flex justify-between items-center py-2 px-4'>
        <Button variant={"outline"} className='bg-[#363636] h-fit text-xs py-1'>Design tools</Button>
        <RiShareBoxLine className='w-4 h-4 fill-[#F37121]'/>
      </div>
    </div>
  )
}

export default ResourceCard