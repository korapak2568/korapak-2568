import {Info} from "@/data/info/Info";
import React from "react";
import {IAboutContent} from "@/data/about/model/IAboutContent";

export default function AboutRight() {
    return (
        <div className="col-lg-8">
            <div className="about-content">
                {Info.About.description.map((item: IAboutContent, index: number) => (
                    <div key={index}>
                        <h3 className={'mt-3'}>
                            {item.title}
                        </h3>

                        {item.description != undefined && (
                            <p dangerouslySetInnerHTML={{__html: item.description}}/>
                        )}
                    </div>
                ))}

                {Info.About.stacks.map((item: IAboutContent, index: any) => (
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