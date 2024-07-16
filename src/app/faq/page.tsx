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
            question: "Q. I'm a new designer. What resources on Campofall can help me improve my skills?",
            answer: "Campofall offers a variety of resources for beginner designers, including design tutorials, UI component libraries, and curated inspiration galleries. You can also explore portfolios of experienced designers for inspiration and learning"
        },
        {
            question: "Q. How can I showcase my design work on Campofall to attract potential clients?",
            answer: "Create a strong profile on Campofall that highlights your design skills and experience. Include your portfolio showcasing your best work, along with relevant skills and software knowledge."
        },
        {
            question: "Q. I'm struggling to find design inspiration for my current project. Suggestions?",
            answer: "Campofall offers a vast collection of design inspiration galleries categorized by style, industry, and project type. You can also browse through user portfolios and discover design trends"
        },
        {
            question: "Q. Can I find unique design tools and plugins on Campofall?",
            answer: "Yes! Campofall provides access to various design tools and plugins, including free and premium options. You can filter them by category and software compatibility."
        },
        {
            question: "Q. How can I collaborate with other designers on Campofall?",
            answer: "Campofall offers collaboration tools that allow you to share design projects, leave comments, and provide feedback with other designers within your network."
        },
        {
            question: "Q. I'm interested in freelance design work. How can Campofall help find freelance gigs?",
            answer: "Campofall features a freelance marketplace with project listings from clients seeking design services. Create a strong profile and portfolio to attract potential clients, and actively browse projects that match your skills and experience."
        },
    ];
    const faqData2 = [
        {
            question: "Q. What kind of code libraries and plugins can I find on Campofall?",
            answer: "Campofall offers a comprehensive collection of open-source and premium code libraries and plugins across various programming languages and frameworks. You can easily search and download them to enhance your development workflow."
        },
        {
            question: "Q. I'm looking for a specific UI component for my web project. Does Campofall offer pre-built components?",
            answer: "Yes, Campofall provides a library of pre-built UI components for various frameworks. These components can save you development time and ensure consistency in your application design."
        },
        {
            question: "Q. How can I find freelance development work on Campofall?",
            answer: "Similar to designers, developers can utilize the freelance marketplace on Campofall. Browse project listings, showcase your skills and experience with a strong profile, and apply for projects that align with your expertise."
        },
        {
            question: "Q. I'm new to development. Does Campofall offer any resources to help me learn and grow?",
            answer: "While not directly focused on learning, Campofall offers access to code libraries and components with documentation and examples that can serve as learning resources for aspiring developers"
        },
        {
            question: "Q. Can I collaborate with other developers on Campofall on coding projects?",
            answer: "While Campofall doesn't offer a full-fledged collaborative coding environment, you can leverage the community features to connect with other developers, share code snippets, and discuss technical challenges."
        },
        {
            question: "Q. Are there any specific features on Campofall that benefit developers working with APIs?",
            answer: " Depending on Campofall's functionalities, you can explore if it offers API documentation search, code snippets for specific APIs, or community forums for API integration discussions."
        },
    ];

    return (
        <section className='w-[100%]'>
            <main className="flex flex-col items-center justify-center pt-[3%] pb-[12%]">
                <div className='h-[140px] w-[200px] leading-[23.784px] bg-cover bg-center mb-[3%]'
                    style={{ backgroundImage: 'url("/assets/faq.png")' }}></div>
                <div className='w-[90%] flex flex-col md:flex-row justify-around'>
                    <div className='w-full md:w-[40%] mb-8 md:mb-0'>
                        <Accordion type="single" collapsible>
                            {faqData1.map((item, idx) => (
                                <div key={idx} >
                                    <AccordionItem value={`item-${idx}`}>
                                        <AccordionTrigger className="text-[18.687px] text-left">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[15.29px] text-left">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                    <div className='w-full md:w-[40%] mb-8 md:mb-0'>
                        <Accordion type="single" collapsible>
                            {faqData2.map((item, idx) => (
                                <div key={idx} >
                                    <AccordionItem value={`item-${idx}`}>
                                        <AccordionTrigger className="text-[18.687px] text-left">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[15.29px] text-left">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </main>

            <footer className="w-full py-[5%] bg-[#131313]">
                <div className="flex flex-col md:flex-row items-center justify-between mx-[7%]">
                    <div className="text-center md:text-left mb-10 md:mb-0">
                        <p className="text-[36px] sm:text-[40px]">Do you have</p>
                        <p className="text-[36px] sm:text-[40px]">any questions?</p>
                        <p className='pt-4 pb-9'>Feel free to send us your questions or request a free consultation.</p>
                        <Button className="text-white">Send a message</Button>
                    </div>
                    <div className='w-full md:w-1/3 text-center md:text-right'>
                        <p className='text-base'><span className="text-[#F37121] text-3xl">/</span>It is necessary to wash the car before tinting, as it affects the quality of the work.</p>
                    </div>
                </div>

                <div className='px-[5%] mt-[4%]'><hr /></div>
                <div className='pt-3 px-[5%]'><p>Disclaimer +</p></div>
                <p className="text-xl mx-[5%] mt-8 md:mt-[5%]">Contacts</p>
                <div className="flex flex-col md:flex-row items-center justify-between mx-[5%] mt-6 md:mt-5">
                    <div className='w-full md:w-1/3 mb-10 md:mb-0'>
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
                            <p className='opacity-60 pb-3 pt-8'>Email</p>
                            <p>info@campofall.com</p>
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 flex flex-col items-center md:items-end'>
                        <div>
                            <Image src="/assets/logo.png" alt="campofall" width={320} height={80} className="pb-3" />
                        </div>
                        <p className='opacity-60 w-10/12 p-2 text-center md:text-right md:w-6/12'>Don&apos;t know where to get your car tinted? Logoipsum — practical, safe, and affordable.</p>
                        <p className='opacity-60'>© 2023 — Copyright</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default FAQ;
