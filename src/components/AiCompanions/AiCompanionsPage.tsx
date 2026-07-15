import React from "react";
import {AiCompanionsDemo} from "@/lib/model/IAiCompanionsContent";

export default function AiCompanionsPage({demo}: { lang?: string; demo: AiCompanionsDemo }) {
    const content = demo;

    return (
        <div className="portfolio-area pt-4 pb-5">
            <div className="container">
                <div className="row">
                    <div className={"add-web-content"}>
                        <h1>{content.title}</h1>
                        <p>{content.description}</p>

                        <div>
                            <ul className="feature-list">
                                {content.procedure.steps.map((item, index) => (
                                    <li key={index} className="feature-item">
                                        <div className="feature-icon-container">
                                            <div className="feature-icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <div className="feature-title">
                                                {item.title}
                                            </div>
                                        </div>
                                        <div className="feature-content">
                                            <p className="feature-description">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
