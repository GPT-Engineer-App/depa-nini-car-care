import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl text-center mb-4">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Depanini?</AccordionTrigger>
            <AccordionContent>
              Depanini is a platform that provides top-notch vehicle services.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can I book a service?</AccordionTrigger>
            <AccordionContent>
              You can book a service through our Service Reservation page.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I contact support?</AccordionTrigger>
            <AccordionContent>
              You can contact support through our online chat or by submitting a support ticket.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;