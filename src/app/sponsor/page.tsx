import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const sponsor = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <main className="grid gap-12 md:gap-16 pt-[3%] pb-[12%] md:pb-[7%] w-[90%] md:w-[70%]">
        <div>
          <div
            className="h-[140px] w-[240px] bg-cover bg-center ml-[-5%] md:ml-[-3%]"
            style={{ backgroundImage: 'url("/assets/sponsor.png")' }}
          ></div>
          <p className="text-[18px] md:text-[20px] w-[90%] mt-[3%]">
            Get your product in front of thousands of engaged product designers,
            developers and support Design Resources at the same time.
          </p>
        </div>

        <h3 className="text-[32px] font-bold">What you get ?</h3>
        <div>
          <h4 className="text-[24px] font-semibold">Website feature</h4>
          <p className="text-[16px] md:text-[20px] w-[90%] md:w-[75%] mt-5">
            Your product will show on the homepage as the fourth item. It will
            stay there for the agreed period.
          </p>
        </div>
        <div>
          <h4 className="text-[24px] font-semibold">Newsletter feature</h4>
          <p className="text-[16px] md:text-[20px] w-[90%] md:w-[75%] mt-5">
            Your product will be highlighted in its own section at the top of
            our weekly email. It will be in each email for the agreed period.
          </p>
        </div>
        <div className="border-b border-gray-300"></div>

        <h3 className="text-[32px] font-bold">Stats</h3>
        <table className="text-[18px] md:text-[24px] w-[80%] mx-auto md:mx-[0px]">
          <tbody>
            <tr className="border-b border-gray-300">
              <td>Subscribers</td>
              <td className="text-end py-4 pr-[5%]">1625</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td>Top Regions</td>
              <td className="text-end py-4 pr-[5%]">USA, UK, FR, ES, CA</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td>Average open rate</td>
              <td className="text-end py-4 pr-[5%]">35.4%</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td>Average click rate</td>
              <td className="text-end py-4 pr-[5%]">7.9%</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-[32px] font-bold mt-[5%]">Get in touch</h3>
        <div className="mb-[5%]">
          <p className="text-[16px] sm:text-[20px]">
            If you think you&apos;re a good match for our audience, reach out to
            us at
          </p>
          <Button className="bg-white text-black mt-[5%] md:mt-[2%] font-semibold text-lg sm:text-xl md:text-2xl p-[2%] rounded-xl">
            Sponsor@campofall.com
          </Button>
        </div>
      </main>
    </section>
  );
};

export default sponsor;
