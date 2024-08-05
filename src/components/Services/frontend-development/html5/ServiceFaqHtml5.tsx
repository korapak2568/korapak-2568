"use client";

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from "react-accessible-accordion";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IDetail} from "@/data/model/IDetail";
import {IFaq} from "@/data/model/IFaq";

const ServiceFaqHtml5: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="faq-accordion mt-3">
                <Accordion allowZeroExpanded preExpanded={[
                    `${service.FRONT_END_EXPERIENCE_INFO.additions[4].faq[0].question}`
                ]}>
                    {service.FRONT_END_EXPERIENCE_INFO.additions[4].faq.map((item: IFaq, index: number) => (
                        <AccordionItem key={index} uuid={item.question}>
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

export default ServiceFaqHtml5;
