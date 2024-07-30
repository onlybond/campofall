import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
export default function Page() {
  return (
    <div className="h-[90vh] md:h-[700px] xl:h-[90vh] w-full flex items-center justify-center">
      <div className="w-[88%] xl:w-4/5 h-5/6  lg:h-5/6 flex rounded-[54px] bg-[#131313]">
        <div className="  w-full lg:w-3/6 h-full flex flex-col items-center justify-center ">
          <div className=" flex flex-col justify-center items-center">
            <Image src="/assets/logo.png" alt="" width={1000} height={0} className="h-[60px] w-full lg:h-[65px] xl:h-[80px]" />
            <p className="text-sm md:text-[16px] mt-1">We are glad to see you back with us</p>
          </div>
          <form className="w-full flex flex-col items-center">
            <Input type="text" placeholder="Username" className="w-8/12 lg:w-10/12 xl:w-8/12 mt-6" />
            <Input type="password" placeholder="Password" className="w-8/12 lg:w-10/12 xl:w-8/12 mt-3 lg:mt-4" />
            <Button type="submit" className="w-8/12 text-[1rem] lg:w-10/12 xl:w-8/12 mt-5">NEXT</Button>
          </form>
          <div className="flex justify-end w-8/12 lg:w-10/12 xl:w-8/12 mt-2">
            <p className="underline text-[1rem] text-[#ff6200] hover:cursor-pointer">Forgot Password?</p>
          </div>
          {/* <Button variant='outline' className="w-8/12 lg:w-10/12 xl:w-8/12 mt-6 text-sm border-[#ff6200] text-[#ff6200] bg-[#131313] login-with hover:text-[#ff6200]"><img src="/assets/google.png" alt="" className="mr-2" />&nbsp;Login with Google</Button> */}
          <Button variant='outline' className="w-8/12 lg:w-10/12 xl:w-8/12 mt-5 text-sm border-[#ff6200] text-[#ff6200] bg-[#131313]">Sign up</Button>
        </div>
        <div className="w-3/6 h-full  justify-center hidden lg:block ">
          <Image src="/assets/signin.png" alt="Not Found" width={1000} height={100} className="lg:h-full w-full px-6 xl:px-10 py-10 bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
}
