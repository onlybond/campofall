import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const sponsor = () => {

    return (
        <section className='w-[100%] flex flex-col items-center'>

            <main className="grid gap-16  pt-[3%] pb-[10%] w-[70%]"> 
                <div>
                <div className='h-[140px] w-[240px] bg-cover bg-center ml-[-2%]'style={{ backgroundImage: 'url("/assets/sponsor.png")' }}></div>
                <p className="text-[20px] w-[90%]">Get your product in front of thousands of engaged product designers, developers and support Design Resources at the same time.</p>
                </div>

                <h3 className="text-[32px] font-bold">What you get ?</h3>
                <div>
                    <h4 className="text-[24px] font-semibold">Website feature</h4>
                    <p className="text-[20px] w-[75%] mt-5">Your product will show on the homepage as the fourth item. It will stay there for the agreed period.</p>
                </div>
                <div>
                    <h4 className="text-[24px] font-semibold">Newsletter feature</h4>
                    <p className="text-[20px] w-[75%] mt-5">Your product will be highlighted in its own section at the top of our  weekly email. It will be in each email for the agreed period.</p>
                </div>
                <div className='border-b border-gray-300'></div>

                <h3 className="text-[32px] font-bold">Stats</h3>
                <table className="text-[24px] w-[80%] mx-[%]">
                    <tbody>
                        <tr className="border-b border-gray-300">
                            <td>Subscribers</td>
                            <td className='text-end py-4 pr-[5%]'>1625</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td>Top Regions</td>
                            <td className='text-end py-4 pr-[5%]'>USA, UK, FR, ES, CA</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td>Average open rate</td>
                            <td className='text-end py-4 pr-[5%]'>35.4%</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td>Average click rate</td>
                            <td className='text-end py-4 pr-[5%]'>7.9%</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="text-[32px] font-bold mt-[5%]">Get in touch</h3>
                <div>
                    <p className="text-[20px]">If you think you&apos;re a good match for our audience, reach out to us at</p>
                    <Button className="bg-white text-black mt-[2%] font-semibold text-2xl p-6 rounded-xl">Sponsor@campofall.com</Button>

                </div>
            </main>


            <footer className="w-full pb-[5%] pt-[5%] bg-[#131313]">
                <div className="flex items-center justify-between mx-[7%]">
                    <div>
                        <p className="text-[40px]">Do you have</p>
                        <p className="text-[40px]">any questions?</p>
                        <p className='pt-[16px] pb-[40px]'>Feel free to send us your questions or request a free consultation.</p>
                        <Button className="text-white">Send a message</Button>
                    </div>
                    <div className='w-[30%]'>
                        <p className='text-base'><span className=" text-[#F37121] text-[28.28px]">/</span>It is necessary to wash the car before tinting, as it affects the quality of the work.</p>
                    </div>
                </div>

                <div className='px-[5%] mt-[4%]'><hr /></div>
                <div className='pt-6 px-[5%]'><p>Disclaimer +</p></div>
                <p className="text-[20px] mx-[5%] mt-[4%]">Contacts</p>
                <div className="flex items-center justify-between mx-[5%] mt-[2.3%]">
                    <div className='w-[30%]'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='opacity-60 pb-3'>Sign up</p>
                                <p>+9142495738</p>
                            </div>
                            <div>
                                <p className='opacity-60 pb-3'>Opening hours</p>
                                <p>24/7</p>
                            </div>
                        </div>
                        <div>
                            <p className='opacity-60 pb-3 pt-[8%]'>Email</p>
                            <p>info@campofall.com</p>
                        </div>
                    </div>
                    <div className='w-6/12 flex flex-col justify-end items-end'>
                        <div><Image src="/assets/logo.png" alt="campofall" width={320} height={80} className="pb-[3%]" /></div>
                        <p className='opacity-60 w-6/12 p-2 text-right'>Don&apos;t know where to get your car tinted? Logoipsum — practical, safe, and affordable.</p>
                        <p className='opacity-60'>© 2023 — Copyright</p>
                    </div>
                </div>
            </footer>

        </section>
    );
}

export default sponsor;

