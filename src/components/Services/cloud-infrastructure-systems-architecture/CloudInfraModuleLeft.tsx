import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const CloudInfraModuleLeft: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <div className={'col-lg-6 add-web-content'}>
            <h1>{InfoTranslation[lang].CloudSolution.title}</h1>
            {InfoTranslation[lang].CloudSolution.descriptions.map((item, index) => (
                <p key={index}>{item.description}</p>
            ))}

            <ul className="feature-list">
                {InfoTranslation[lang].CloudSolution.sections.map((item, index) => (
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

            {/*<h1>{InfoTranslation[lang].CloudSolution.title}</h1>*/}
            {/*<div className={'add-web-content'}>*/}
            {/*    /!*{InfoTranslation[lang].CloudSolution.descriptions.map(*!/*/}
            {/*    /!*    (description, index) =>*!/*/}
            {/*    /!*        <p key={index}>{description.description}</p>*!/*/}
            {/*    /!*)}*!/*/}

            {/*    {InfoTranslation[lang].CloudSolution.sections.map(*/}
            {/*        (section, index) => (*/}
            {/*            <div key={index}>*/}
            {/*                <h2>{section.title}</h2>*/}
            {/*                <p><strong>{section.span} </strong>{section.description}</p>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    )
}

export default CloudInfraModuleLeft