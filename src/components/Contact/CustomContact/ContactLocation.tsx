import {Info} from "@/data/info/Info";
import React from "react";

export function ContactLocation() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon hover-rotate">
                    <i className={Info.Contact.location.icon}></i>
                </div>
                <h3>{Info.Contact.location.label}</h3>
                <p>
                    {
                        Info.Contact.location.isLink ?
                            <a href={Info.Contact.location.link}
                               target="_blank">{Info.Contact.location.linkText}</a> :
                            <span>{Info.Contact.location.linkText}</span>
                    }
                </p>
            </div>
        </div>
    )
}