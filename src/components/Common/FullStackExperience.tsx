"use client";

import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Image from "next/image";
import {truncateText} from "@/lib/truncateText";
import Link from "next/link";
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const FullStackExperience: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <div className="digital-experience-area ptb-100">
                <div className="container">
                    <div className="section-title contrast-section-title">
                        <span>{InfoTranslation[currentTranslate.value].FullStack.span}</span>
                        <h2>{InfoTranslation[currentTranslate.value].FullStack.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="tab digital-experience-tab">
                        <Tabs>
                            <TabList>
                                {InfoTranslation[currentTranslate.value].FullStack.stacks.map((item: IFullStackStack, index: any) => (
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

                            {InfoTranslation[currentTranslate.value].FullStack.stacks.map((item: IFullStackStack, index: any) => (
                                <TabPanel key={index}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="digital-experience-content">
                                                <h3>{item.features[0].title}</h3>
                                                <p>
                                                    {truncateText(item.features[0].description, 200)}
                                                </p>
                                                <p className={"p-read-more"}>
                                                    <Link href={'/' + currentTranslate.value + item.link}
                                                          className="contrast-read-more">
                                                        {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                    </Link>
                                                </p>

                                                <div className="experience-inner-content">
                                                    <div className="icon">
                                                        <i className="flaticon-check"></i>
                                                    </div>
                                                    <h3>{item.features[1].title}</h3>
                                                    <p>
                                                        {truncateText(item.features[1].description, 120)}
                                                    </p>
                                                    <p className={"p-read-more"}>
                                                        <Link href={'/' + currentTranslate.value + item.link}
                                                              className="contrast-read-more">
                                                            {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                        </Link>
                                                    </p>
                                                </div>

                                                <div className="experience-inner-content">
                                                    <div className="icon">
                                                        <i className="flaticon-check"></i>
                                                    </div>
                                                    <h3>{item.features[2].title}</h3>
                                                    <p>
                                                        {truncateText(item.features[2].description, 120)}
                                                    </p>
                                                    <p className={"p-read-more"}>
                                                        <Link href={'/' + currentTranslate.value + item.link}
                                                              className="contrast-read-more">
                                                            {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                        </Link>
                                                    </p>
                                                </div>

                                                <div className="experience-inner-content">
                                                    <div className="icon">
                                                        <i className="flaticon-check"></i>
                                                    </div>
                                                    <h3>{item.features[3].title}</h3>
                                                    <p>
                                                        {truncateText(item.features[3].description, 120)}
                                                    </p>
                                                    <p className={"p-read-more"}>
                                                        <Link href={'/' + currentTranslate.value + item.link}
                                                              className="contrast-read-more">
                                                            {item.readMore} <i className="bx bx-chevrons-right"></i>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="digital-experience-image">
                                                <Image
                                                    src={InfoTranslation[currentTranslate.value].Gallery.global.image}
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
