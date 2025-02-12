"use client";

import React from "react";
import ContactLine from "@/components/Contact/CustomContact/ContactLine";
import ContactLinkedIn from "@/components/Contact/CustomContact/ContactLinkedIn";
import ContactWhatsApp from "@/components/Contact/CustomContact/ContactWhatsApp";

const ContactInfo: React.FC = () => {

    return (
        <>
            <div className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">

                        <ContactLinkedIn/>

                        <ContactLine/>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
