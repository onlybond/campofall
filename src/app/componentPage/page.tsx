import React from 'react';
import Gallery from './component/componentCard';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import ResourceCard from '../resources/components/ResourceCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex justify-center items-center w-full bg-[#363636] h-20'>
        <Button variant='outline' className='border-[#F37121] bg-inherit rounded-3xl text-xl px-20 py-6'>Filter</Button>
        <div className='flex mx-8'>
          <div className='bg-white rounded-[50%] w-[50px] h-[50px] p-2 mx-3'>
            <img src="/assets/figma.png" alt="Figma" />
          </div>
          <div className='bg-white rounded-[50%] w-[50px] h-[50px] p-2 mx-3'>
            <img src="/assets/physics.png" alt="Physics" />
          </div>
          <div className='bg-white rounded-[50%] w-[50px] h-[50px] p-2 mx-3'>
            <img src="/assets/vue.png" alt="Vue.js" />
          </div>
          <div className='bg-white rounded-[50%] w-[50px] h-[50px] p-2 mx-3'>
            <img src="/assets/tailwind.png" alt="Tailwind CSS" />
          </div>
        </div>
      </div>
      <div id='child' className='flex w-[90%] p-5'>
        <div id='sidebar' className='bg-[#131313] w-[20%] h-fit rounded-3xl p-8 m-3'>
          <h1 className='text-xl font-bold mb-4'>Fig Components</h1>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="c1" />
            <Label htmlFor="c1">Collections</Label>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="c2" />
            <Label htmlFor="c2">Categories</Label>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="c3" />
            <Label htmlFor="c3">UI Kits</Label>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="c4" />
            <Label htmlFor="c4">Popular</Label>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="c5" />
            <Label htmlFor="c5">New</Label>
          </div>
          <h1 className='text-xl font-bold mt-6 mb-4'>Filter</h1>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="free" />
            <Label htmlFor="free">Free</Label>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="pro" />
            <Label htmlFor="pro">Pro</Label>
          </div>
          <h1 className='text-xl font-bold mt-6 mb-4'>Topic/Style</h1>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="industry" />
            <Label htmlFor="industry">Industry</Label>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <Checkbox id="design-style" />
            <Label htmlFor="design-style">Design Style</Label>
          </div>
          <h1 className='text-xl font-bold mt-6 mb-4'>All Components</h1>
          <div className="flex items-center justify-between space-x-2 my-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="website" />
              <Label htmlFor="website">Website</Label>
            </div>
            <span className='bg-[#363636] text-[#F37121] rounded-[25px]  px-2'>110</span>
          </div>
          <div className="flex items-center justify-between space-x-2 my-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="section" />
              <Label htmlFor="section">Section</Label>
            </div>
            <span className='bg-[#363636] text-[#F37121] rounded-[25px]  px-2'>110</span>
          </div>
          <div className="flex items-center justify-between space-x-2 my-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="landing-page" />
              <Label htmlFor="landing-page">Landing Page</Label>
            </div>
            <span className='bg-[#363636] text-[#F37121] rounded-[25px]  px-2'>110</span>
          </div>
          <div className="flex items-center justify-between space-x-2 my-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="iphone" />
              <Label htmlFor="iphone">IPhone</Label>
            </div>
            <span className='bg-[#363636] text-[#F37121] rounded-[25px]  px-2'>110</span>
          </div>
          <div className="flex items-center justify-between space-x-2 my-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="apple" />
              <Label htmlFor="apple">Apple</Label>
            </div>
            <span className='bg-[#363636] text-[#F37121] rounded-[25px]  px-2'>110</span>
          </div>
          <div className="flex items-center justify-between space-x-2 my-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="mobile" />
              <Label htmlFor="mobile">Mobile</Label>
            </div>
            <span className='bg-[#363636] text-[#F37121] rounded-[25px]  px-2'>110</span>
          </div>
          <div className="flex items-center justify-between space-x-2 my-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="dark" />
              <Label htmlFor="dark">Dark</Label>
            </div>
            <span className='bg-[#363636] text-[#F37121] rounded-[25px]  px-2'>110</span>
          </div>
        </div>
        <div id='compo' className='flex-grow w-[80%] m-3'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-[#FE7121] font-bold'>Free Figma Component Library</h2>
            <p className='w-[70%]'>We&apos;ve curated the best Figma components in one place. Discover, copy and paste UI components in Figma with the most efficient way to build designs. Get all the essentials for any design project in one place. From buttons to data visualizations, you&apos;ll find the perfect component here with a few clicks.</p>
            <Gallery />
          </div>
          
        </div>
      </div>
      <div className="flex flex-col gap-5 py-6 h-fit w-[80%]">
        <div className="flex gap-y-4 items-center w-full justify-between">
          <h1 className="text-6xl font-thin">
            <span className="font-semibold">Resource</span> Links
          </h1>

          <div className="flex flex-row gap-x-4 items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-primary" />
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
          <ResourceCard title="CampOfall" description="Design and collaborate all in the browser" link="" tags={['tools','tech']} type="Design Tools" subscription={false}/>
          <ResourceCard title="CampOfall" description="Design and collaborate all in the browser" link="" tags={['tools','tech']} type="Design Tools" subscription={false}/>
          <ResourceCard title="CampOfall" description="Design and collaborate all in the browser" link="" tags={['tools','tech']} type="Design Tools" subscription={false}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
