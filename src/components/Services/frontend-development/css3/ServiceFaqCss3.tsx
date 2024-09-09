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
import {IFaq} from "@/data/model/IFaq";
import {sanitizeUUID} from "@/utils/chornUtils";

const ServiceFaqCss3: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="faq-accordion mt-3">
                <Accordion allowZeroExpanded preExpanded={[
                    `${service.FRONT_END_EXPERIENCE_INFO.additions[5].faq[0].question}`
                ]}>
                    {service.FRONT_END_EXPERIENCE_INFO.additions[5].faq.map((item: IFaq, index: number) => (
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

export default ServiceFaqCss3;
