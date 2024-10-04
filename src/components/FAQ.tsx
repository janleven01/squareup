"use client";

import { faqs_1, faqs_2 } from "@/constants/constants";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const [isClicked, setIsClicked] = useState<boolean[]>(
    new Array(faqs_1.length + faqs_2.length).fill(false),
  ); // Create an array of false

  const handleClicked = (index: number) => {
    setIsClicked((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the state for the clicked accordion
      return newState;
    });
  };

  return (
    <div className="max-container">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
        imageUrl="/images/faq-bg.png"
      />
      <div className="hidden grid-cols-2 *:border-b-2 *:border-grey_15 lg:grid">
        <div className="h-14 border-x-2" />
        <div className="h-14 border-r-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ul>
          {faqs_1.map((faq, index) => (
            <li
              key={index}
              className="flex gap-7 border-x-2 border-b-2 border-grey_15 px-7 py-7 md:min-h-44 lg:px-10 xl:px-12 xl:py-10"
            >
              <div className="relative hidden size-20 lg:block">
                <Image
                  src="/images/number-container.svg"
                  alt="number container"
                  width={80}
                  height={80}
                  className="size-16 xl:size-20"
                />
                <p
                  className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-left text-2xl xl:text-3xl ${isClicked[index] && "text-green_50"}`}
                >{`0${index + 1}`}</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger onClick={() => handleClicked(index)}>
                    <div className="flex items-center gap-5">
                      <div className="relative block size-14 md:hidden">
                        <Image
                          src="/images/number-container.svg"
                          alt="number container"
                          width={80}
                          height={80}
                          className="h-full w-full"
                        />
                        <p
                          className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-left text-xl ${isClicked[index] && "text-green_50"}`}
                        >{`0${index + 1}`}</p>
                      </div>
                      <p
                        className={`basis-3/4 text-left text-base font-medium sm:text-lg xl:mt-1 xl:text-xl ${isClicked[index] && "text-green_70"}`}
                      >
                        {faq.question}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ))}
        </ul>

        <ul className="hidden md:block">
          {faqs_2.map((faq, index) => (
            <li
              key={index}
              className="flex gap-7 border-b-2 border-r-2 border-grey_15 px-10 py-7 md:min-h-44 xl:px-12 xl:py-10"
            >
              <div className="relative hidden size-20 lg:block">
                <Image
                  src="/images/number-container.svg"
                  alt="number container"
                  width={80}
                  height={80}
                  className="size-16 xl:size-20"
                />
                <p
                  className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-2xl xl:text-3xl ${`text-left ${isClicked[index + 4] && "text-green_50"}`}`}
                >{`0${index + 5}`}</p>
              </div>
              <Accordion
                type="single"
                collapsible
                onClick={() => handleClicked(index + 4)}
                className="w-full"
              >
                <AccordionItem value={`item-${index + 5}`}>
                  <AccordionTrigger>
                    <p
                      className={`text-left text-lg font-medium xl:text-xl ${isClicked[index + 4] && "text-green_70"}`}
                    >
                      {faq.question}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
