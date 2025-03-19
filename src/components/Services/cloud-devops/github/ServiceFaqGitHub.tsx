"use client";

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from "react-accessible-accordion";
import {sanitizeUUID} from "@/lib/utils";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const ServiceFaqGitHub: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="faq-accordion mt-3">
                <Accordion allowZeroExpanded preExpanded={[
                    `${InfoTranslation[locale.value].DevOps.github.faqs[0].question}`
                ]}>
                    {InfoTranslation[locale.value].DevOps.github.faqs.map((item, index: number) => (
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
