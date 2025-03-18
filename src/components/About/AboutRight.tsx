import React from "react";
import {IAboutContent} from "@/data/about/model/IAboutContent";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export default function AboutRight() {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <div className="col-lg-8">
            <div className="about-content">
                {InfoTranslation[currentTranslate.value].About.description.map((item: IAboutContent, index: number) => (
                    <div key={index}>
                        <h3 className={'mt-3'}>
                            {item.title}
                        </h3>

                        {item.description != undefined && (
                            <p dangerouslySetInnerHTML={{__html: item.description}}/>
                        )}
                    </div>
                ))}

                {InfoTranslation[currentTranslate.value].About.stacks.map((item: IAboutContent, index: any) => (
                    <div key={index} className="about-inner-content">
                        <div className="icon">
                            <i className="flaticon-check"></i>
                        </div>
                        <h4>{item.title}</h4>

                        {item.description != undefined && (
                            <p dangerouslySetInnerHTML={{__html: item.description}}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}