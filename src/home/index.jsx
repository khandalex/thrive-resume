import React from 'react';
import Header from '@/components/custom/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"




import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-white dark:bg-gray-900">
      
        <div className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Welcome to Thrive
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Struggling to land interviews?
                  Our AI-powered resume builder is here to help!
                  </p>

                </div>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            
            <Link to={'/dashboard'}>
            <Button>
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Button>
                </Link>
            
        </div>


                <a href="https://www.instagram.com/khandalex" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">Follow</span> <span className="text-sm font-medium">Khandalex on all Social Platforms</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger className='w-36 '>Is it freely accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It totally free to use and accessible to everyone.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does the AI analyze my resume?</AccordionTrigger>
    <AccordionContent>
      The AI uses natural language processing (NLP) to understand the content of your resume and suggests improvements based on industry standards.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Can it format my resume for different industries?</AccordionTrigger>
    <AccordionContent>
      Yes. The AI can tailor your resume or you can make multiple resume to highlight the most relevant skills and experiences for the specific industry you're applying to.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Is my data safe?</AccordionTrigger>
    <AccordionContent>
      Absolutely. We prioritize data security and your personal information is encrypted and securely stored.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger>Can the AI suggest skills I might have overlooked?</AccordionTrigger>
    <AccordionContent>
      Yes. its give you a summery But You need to Specify your skills with raitings upto 5.
    </AccordionContent>
  </AccordionItem>
</Accordion>
               

              </div>
            </div>
          </section>
        </div>
        
      </div>
    </div>
  );
}

export default Home;