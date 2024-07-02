import React from 'react';
import Gallery from './component/componentCard';
import { Button } from '@/components/ui/button';
const Page: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center'>
    <div className='flex justify-center items-center w-full bg-[#363636] h-16 border-2 border-white'>
        <Button variant='outline' className='border-[#F37121] bg-inherit rounded-3xl px-8'>Filter</Button>
        <div className='flex mx-3'>
        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mx-1 p-2'><img src="/assets/figma.png" alt="" /></div>
        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mx-1 p-2'><img src="/assets/physics.png" alt="" /></div>
        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mx-1 p-2'><img src="/assets/vue.png" alt="" /></div>
        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mx-1 p-2'><img src="/assets/tailwind.png" alt="" /></div>
        </div>
    </div>
    {/* <div id='child' className='flex w-[90%] border-2 border-pink-500 h-[100vh]'>
        <div id='sidebar' className='bg-[#131313]'>
            <h1>Fig Components</h1>
        </div>
        <div id='compo'></div>
    </div> */}
    </div>
  );
};

export default Page;