import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Page() {
  return(
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="w-4/5 h-5/6  lg:h-5/6 flex rounded-[54px] bg-[#131313]">
        <div className="w-3/6 h-full  justify-center hidden lg:block">
          <Image src="/assets/sign-up.png" alt="Not Found" width={1000} height={100} className="h-full w-full p-10"/>
        </div> 
        <div className="  w-full lg:w-3/6 h-full flex flex-col items-center justify-center">
         <div className=" flex flex-col justify-center items-center">
            <img src="/assets/logo.png" alt="" className="h-[50px] lg:h-[70px]"/>
            <p className="text-xs md:text-[12px] mt-1">We are glad to see you back with us</p>
          </div>
          <form className="w-full flex flex-col items-center">
          <Input type="text" placeholder="Username" className="w-8/12 md:w-7/12 mt-[10px] text-black"/>
          <Input type="password" placeholder="Password" className="w-8/12 md:w-7/12 mt-[10px] text-black"/>
          <Input type="password" placeholder="Re-enter Password" className="w-8/12 md:w-7/12 mt-[10px] text-black"/>
          <Button type="submit" className="w-8/12 md:w-7/12 mt-[20px]">NEXT</Button>
          </form>
          <div className="flex justify-end w-8/12 md:w-7/12 mt-[5px]">
            <p className="underline text-[0.75rem] text-[#ff6200] hover:cursor-pointer">Forgot Password?</p>
          </div>
          <Button variant='outline' className="w-8/12 md:w-7/12 mt-[20px] border-[#ff6200] text-[#ff6200] bg-[#131313] login-with hover:text-[#ff6200]"><img src="/assets/google.png" alt="" /><span className="text-white">&nbsp;Login with&nbsp;</span>Google</Button>
          <Button variant='outline' className="w-8/12 md:w-7/12 mt-[20px] border-[#ff6200] text-[#ff6200] bg-[#131313]">Sign in</Button>
        </div>       
      </div>
    </div>
  ) 
}