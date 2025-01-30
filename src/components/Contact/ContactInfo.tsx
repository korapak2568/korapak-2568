"use client";

import React from "react";
import ContactLine from "@/components/Contact/CustomContact/ContactLine";
import ContactLinkedIn from "@/components/Contact/CustomContact/ContactLinkedIn";
import {ContactLocation} from "@/components/Contact/CustomContact/ContactLocation";

const ContactInfo: React.FC = () => {

    return (
        <>
            <div className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">

                        <ContactLinkedIn/>

                        <ContactLine/>

                        <ContactLocation/>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
