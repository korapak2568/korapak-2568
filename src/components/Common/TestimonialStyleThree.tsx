"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const TestimonialStyleThree: React.FC = () => {
  return (
    <>
      <div
        className="client-area ptb-100"
        style={{
          backgroundImage: `url(https://cdn.chorn.in.th/obsolete/client-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>Client’s Review</h2>
            <div className="bar"></div>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="client-slider"
          >
            <SwiperSlide>
              <div className="client-item">
                <p>
                  <q>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </q>
                </p>

                <div className="client-info">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/client/client-1.jpg"
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <h3>Jacinda Meri</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-item">
                <p>
                  <q>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </q>
                </p>

                <div className="client-info">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/client/client-2.jpg"
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <h3>Miraj Alex</h3>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-item">
                <p>
                  <q>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </q>
                </p>

                <div className="client-info">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/client/client-3.jpg"
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <h3>Edward Bold</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleThree;
