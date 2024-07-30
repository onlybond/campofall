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
        </section>
    );
}

export default FAQ;
