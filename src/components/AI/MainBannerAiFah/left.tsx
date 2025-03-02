import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { Info } from "@/data/info/Info";
import { setLanguage } from "@/redux/serviceSlice";
import { ILanguage } from "@/data/language/model/ILanguage";

export default function Left() {
  const dispatch = useDispatch();
  const curLanguage = useSelector((state: RootState) => state.service.language);

  return (
    <div className="col-lg-6">
      <div className="main-banner-content">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true"
        >
          {curLanguage.fah.title}
        </h1>

        <div className="main-banner-content-ai">
          <div className={"mb-4"}>
            {Info.Languages.map((language: ILanguage, index: number) => (
              <button
                key={index}
                className={`px-4 mb-2 mr-10 
                                    ${
                                      curLanguage.value == language.value
                                        ? "bg-warning text-white"
                                        : ""
                                    }`}
                onClick={() => dispatch(setLanguage(language))}
              >
                {language.label}
              </button>
            ))}
          </div>

          <p
            className="p-left"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-once="true"
          >
            {curLanguage.fah.content}
          </p>
        </div>

        <div
          className="banner-btn"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <a href={curLanguage.fah.line.link} target={"_blank"}>
            <Image
              src={curLanguage.fah.line.button}
              alt="เพิ่มเพื่อน"
              width={120}
              height={36}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
