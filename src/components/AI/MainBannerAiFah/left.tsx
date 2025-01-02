import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import {aiThai, aiEnglish, aiChinese, aiJapanese, aiKorean} from "@/redux/serviceSlice";

export default function Left() {
    const dispatch = useDispatch();
    const lang = useSelector((state: RootState) => state.service.lang);
    const ai = useSelector((state: RootState) => state.service.ai);

    return (
        <div className="col-lg-6">
            <div className="main-banner-content">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    {ai.fah.title}
                </h1>

                <div>
                    <div className={'mb-4'}>
                        <button
                            className={'px-2 mb-2'}
                            onClick={() => dispatch(aiThai())}
                        >
                            {Info.Language.label.thai}
                        </button>

                        <button
                            className={'px-2 mx-2 mb-2'}
                            onClick={() => dispatch(aiEnglish())}
                        >
                            {Info.Language.label.english}
                        </button>

                        <button
                            className={'px-2 mx-2 mb-2'}
                            onClick={() => dispatch(aiChinese())}
                        >
                            {Info.Language.label.chinese}
                        </button>

                        <button
                            className={'px-2 mx-2 mb-2'}
                            onClick={() => dispatch(aiJapanese())}
                        >
                            {Info.Language.label.japan}
                        </button>

                        <button
                            className={'px-2 mb-2'}
                            onClick={() => dispatch(aiKorean())}
                        >
                            {Info.Language.label.korean}
                        </button>
                    </div>

                    <p
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-once="true"
                    >
                        {ai.fah.content}
                    </p>
                </div>

                <div
                    className="banner-btn"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-once="true"
                >

                    <a href={ai.fah.line.link}>
                        <Image
                            src={ai.fah.line.button}
                            alt="เพิ่มเพื่อน"
                            width={232}
                            height={36}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}