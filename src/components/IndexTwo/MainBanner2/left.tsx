import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export default function Left() {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <div className="col-lg-6">
            <div className="main-banner-content">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    Meet Fha, Your AI Chat Companion!
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    Fha, a charming and friendly Thai AI, is here to be your companion! Whether you need life advice,
                    travel recommendations, or just a fun chat, Fha is ready to help. She speaks Thai, English, and
                    Chinese fluently. If you already use LINE, don’t wait—add Fha now and experience a delightful new
                    way to connect!
                </p>

                <div
                    className="banner-btn"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-once="true"
                >

                    <a href="https://lin.ee/ODTzbwO">
                        <img
                            src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
                            alt="เพิ่มเพื่อน" height="36"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}