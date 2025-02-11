"use client";

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from "react-accessible-accordion";
import {sanitizeUUID} from "@/app/lib/utils";
import {Info} from "@/data/info/Info";

const ServiceFaqGitHub: React.FC = () => {

    return (
        <>
            <div className="faq-accordion mt-3">
                <Accordion allowZeroExpanded preExpanded={[
                    `${Info.DevOps.github.faqs[0].question}`
                ]}>
                    {Info.DevOps.github.faqs.map((item, index: number) => (
                        <AccordionItem key={index} uuid={sanitizeUUID(item.question)}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <span>{item.question}</span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>{item.answer}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

export default ServiceFaqGitHub;
