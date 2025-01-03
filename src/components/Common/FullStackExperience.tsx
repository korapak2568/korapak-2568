"use client";

import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";
import {truncateText} from "@/utils/truncateText";
import Link from "next/link";
import {Info} from "@/data/info/Info";

const FullStackExperience: React.FC = () => {
    // const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="digital-experience-area ptb-100">
                <div className="container">
                    <div className="section-title contrast-section-title">
                        <span>{Info.FullStack.span}</span>
                        <h2>{Info.FullStack.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="tab digital-experience-tab">
                        <Tabs>
                            <TabList>
                                {Info.FullStack.additions.map((item: IContentImage, index: any) => (
                                    <Tab key={index}>
                                          <span>
                                              <Image
                                                  className="hover-rotate"
                                                  src={item.image}
                                                  alt={item.alt}
                                                  width={130}
                                                  height={130}
                                              />
                                              {item.title}
                                          </span>
                                    </Tab>
                                ))}
                            </TabList>

                            {Info.FullStack.additions.map((item: IContentImage, index: any) => (
                                <TabPanel key={index}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="digital-experience-content">
                                                <h3>{item.details[0].title}</h3>
                                                <p>
                                                    {truncateText(item.details[0].description, 200)}
                                                </p>
                                                <p className={"p-read-more"}>
                                                    <Link href={item.link} className="contrast-read-more">
                                                        {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                    </Link>
                                                </p>

                                                <div className="experience-inner-content">
                                                    <div className="icon">
                                                        <i className="flaticon-check"></i>
                                                    </div>
                                                    <h3>{item.details[1].title}</h3>
                                                    <p>
                                                        {truncateText(item.details[1].description, 120)}
                                                    </p>
                                                    <p className={"p-read-more"}>
                                                        <Link href={item.link} className="contrast-read-more">
                                                            {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                        </Link>
                                                    </p>
                                                </div>

                                                <div className="experience-inner-content">
                                                    <div className="icon">
                                                        <i className="flaticon-check"></i>
                                                    </div>
                                                    <h3>{item.details[2].title}</h3>
                                                    <p>
                                                        {truncateText(item.details[2].description, 120)}
                                                    </p>
                                                    <p className={"p-read-more"}>
                                                        <Link href={item.link} className="contrast-read-more">
                                                            {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                        </Link>
                                                    </p>
                                                </div>

                                                <div className="experience-inner-content">
                                                    <div className="icon">
                                                        <i className="flaticon-check"></i>
                                                    </div>
                                                    <h3>{item.details[3].title}</h3>
                                                    <p>
                                                        {truncateText(item.details[3].description, 120)}
                                                    </p>
                                                    <p className={"p-read-more"}>
                                                        <Link href={item.link} className="contrast-read-more">
                                                            {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="digital-experience-image">
                                                <Image
                                                    src="/chorn-images/services/services-7-chorn.webp"
                                                    alt="Service image"
                                                    width={750}
                                                    height={680}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}

                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FullStackExperience;
