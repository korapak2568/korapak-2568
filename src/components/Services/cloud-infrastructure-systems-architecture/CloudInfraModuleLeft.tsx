import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const CloudInfraModuleLeft: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <div className={'cloud-infra-left add-web-content'}>
            {InfoTranslation[lang].CloudSolution.descriptions.map((item, index) => (
                <p key={index}>{item.description}</p>
            ))}

            <ul className="feature-list">
                {InfoTranslation[lang].CloudSolution.sections.map((item, index) => (
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
    )
}

export default CloudInfraModuleLeft