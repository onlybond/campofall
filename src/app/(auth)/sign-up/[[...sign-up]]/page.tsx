import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex container justify-center items-center h-screen">
      <SignUp path="/sign-up" />
    </div>
  ) 
}