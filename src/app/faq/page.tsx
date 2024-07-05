import React from 'react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const FAQ = () => {
    const faqData1 = [
        {
            question: "What is Webflow and why is it the best website builder?",
            answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
        },
        {
            question: "What is your favorite template from BRIX Templates?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "How do you clone a template from the Showcase?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "Why is BRIX Templates the best Webflow agency?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "When was Webflow officially launched?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "How do you integrate Jetboost with Webflow?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];
    const faqData2 = [
        {
            question: "What is Webflow and why is it the best website builder?",
            answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
        },
        {
            question: "What is your favorite template from BRIX Templates?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "How do you clone a template from the Showcase?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "Why is BRIX Templates the best Webflow agency?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "When was Webflow officially launched?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "How do you integrate Jetboost with Webflow?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];

    return (
        <section className='w-[100%]'>
            <main className="flex flex-col gap-[80px] items-center justify-center pt-[80px] pb-[148px]">
                <div className='h-[140px] w-[200px] text-center text-[65px] font-bold leading-[23.784px] bg-cover bg-center'
                    style={{ backgroundImage: 'url("/assets/faq.png")' }}></div>
                <div className='w-[90%] flex  justify-around'>
                    <div className=' h-full w-[40%]'>
                        <Accordion type="single" collapsible>
                            {faqData1.map((item, index) => (
                                <div key={index} >
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger className="text-[18.687px]">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[15.29px]">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                    <div className=' h-full w-[40%]'>
                        <Accordion type="single" collapsible>
                            {faqData2.map((item, index) => (
                                <div key={index} >
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger className="text-[18.687px]">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[15.29px]">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </main>

            <footer className="px-[152px] py-[80px] w-full bg-[#131313]">
                <div className="flex items-center justify-around w-full">
                    <div className='w-6/12'>
                        <p className="text-[40px]">Do you have</p>
                        <p className="text-[40px]">any questions?</p>
                        <p className='pt-[16px] pb-[40px]'>Feel free to send us your questions or request a free consultation.</p>
                        <Button className="text-white">Send a message</Button>
                    </div>
                    <div className='w-4/12'>
                        <p className='text-base'><span className=" text-[#F37121] text-[28.28px]">/</span>It is necessary to wash the car before tinting, as it affects the quality of the work.</p>
                    </div>
                </div>
                <div className='pt-16'></div>
                {/* <div className='px-10'><hr /></div> */}
                <div className='px-14'><hr /></div>
                <div className='pt-4 px-14'><p>Disclaimer +</p></div>
                <div className="flex items-center justify-around w-full pt-[96px]">
                    <div className='w-4/12'>
                        <p className="pb-12">Contacts</p>
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
                            <p className='opacity-60 pb-3 pt-12'>Email</p>
                            <p>info@campofall.com</p>
                        </div>
                    </div>
                    <div className='w-6/12 flex flex-col justify-end items-end'>
                        <Image src="/assets/logo.png" alt="campofall" width={320} height={80} className="pb-4" />
                        <p className='opacity-60 w-6/12 p-2 text-right'>Don't know where to get your car tinted? Logoipsum — practical, safe, and affordable.</p>
                        <p className='opacity-60'>© 2023 — Copyright</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default FAQ;
