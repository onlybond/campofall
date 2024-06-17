import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return(
    <div className="flex container justify-center items-center h-screen">
      <div className="flex w-[70%] h-[480px] p-[20px] rounded-[25px] bg-[#131313]">
        <div className="w-[50%] h-full rounded-[20px]">
            <img src="/assets/sign-up.png" alt="Not Found" className="h-full" />
        </div>
        <div className="w-[50%] h-full rounded-[20px] px-[40px] py-[10px] ">
            <div className="h-[40px] flex flex-col justify-center items-center mt-4">
            <img src="/assets/logo.png" alt="" className="h-full"/>
            <p className="text-[9px]">We are glad to see you back with us</p>
            </div>
            <Input type="text" placeholder="Username" className="mt-[2rem]"/>
            <Input type="password" placeholder="Password" className="mt-[10px]"/>
            <Input type="password" placeholder="Re-enter Password" className="mt-[10px]"/>
            <Button className="w-full mt-[20px]">NEXT</Button>
            <div className="flex justify-end">
              <p className="underline text-[0.75rem] text-[#ff6200]">Forgot Password?</p>
            </div>
            <Button variant='outline' className="w-full mt-[20px] border-[#ff6200] text-[#ff6200] bg-[#131313] login-with hover:text-[#ff6200]"><img src="/assets/google.png" alt="" /><span className="text-white">&nbsp;Login with&nbsp;</span>Google</Button>
            <Button variant='outline' className="w-full mt-[20px] border-[#ff6200] text-[#ff6200] bg-[#131313]">Sign in</Button>
          </div>
      </div>
    </div>
  ) 
}