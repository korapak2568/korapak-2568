"use client";

import React from "react";
import ContactLinkedIn from "@/components/Contact/CustomContact/ContactLinkedIn";

const ContactInfo: React.FC = () => {

    return (
        <>
            <div className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <ContactLinkedIn/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
