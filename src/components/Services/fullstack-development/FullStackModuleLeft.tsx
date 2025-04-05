import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const FullStackModuleLeft: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <div className={'col-lg-6 add-web-content'}>
            <h2>{InfoTranslation[lang].FullStack.services.title}</h2>
            {InfoTranslation[lang].FullStack.services.descriptions.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            <ul className="feature-list">
                {InfoTranslation[lang].FullStack.services.items.map((item, index) => (
                    <li key={index} className="feature-item">
                        <div className="icon">
                            <i className="flaticon-check"></i>
                        </div>
                        <div className="content">
                            <strong>{item.title}</strong>
                            <p>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FullStackModuleLeft