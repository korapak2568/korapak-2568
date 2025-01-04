import {Info} from "@/data/info/Info";
import React from "react";
import {IAboutContent} from "@/data/about/model/IAboutContent";

export default function AboutRight() {
    return (
        <div className="col-lg-6">
            <div className="about-content warp">
                <span>{Info.About.title}</span>
                <h3>{Info.About.subTitle}</h3>
                <div className="bar"></div>

                {Info.About.description.map((item: IAboutContent, index: number) => (
                    <div key={index}>
                        <h4 className={'mt-3'}>
                            {item.title}
                        </h4>
                        <p>
                            {item.description}
                        </p>
                    </div>
                ))}

                {Info.About.stacks.map((item: IAboutContent, index: any) => (
                    <div key={index} className="about-inner-content">
                        <div className="icon">
                            <i className="flaticon-check"></i>
                        </div>
                        <h5>{item.title}</h5>
                        <p>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}