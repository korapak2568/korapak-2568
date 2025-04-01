"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const TestimonialStyleTwo: React.FC = () => {
  return (
    <>
      <div className="testimonial-area testimonial-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="testimonial-content">
                <span>Testimonials</span>
                <h2>Our Client’s Review</h2>
                <div className="bar"></div>
              </div>
            </div>
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
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div 
                      className="testimonial-image" 
                      style={{
                        backgroundImage: `url(https://cdn.chorn.in.th/obsolete/testimonial/testimonial-1.jpg)`,
                      }}
                    ></div>
                  </div>

                  <div className="col-lg-6">
                    <div className="testimonial-inner-content">
                      <div className="icon">
                        <i className="flaticon-left-quotes-sign"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida
                        Risus maecenas accumsan noniice Lorem Ipsum.
                      </p>

                      <div className="info-text">
                        <h4>Morris Jacket</h4>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div 
                      className="testimonial-image" 
                      style={{
                        backgroundImage: `url(https://cdn.chorn.in.th/obsolete/testimonial/testimonial-2.jpg)`,
                      }}
                    ></div>
                  </div>

                  <div className="col-lg-6">
                    <div className="testimonial-inner-content">
                      <div className="icon">
                        <i className="flaticon-left-quotes-sign"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida
                        Risus maecenas accumsan noniice Lorem Ipsum.
                      </p>

                      <div className="info-text">
                        <h4>Mahindra jhon</h4>
                        <span>App Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div 
                      className="testimonial-image" 
                      style={{
                        backgroundImage: `url(https://cdn.chorn.in.th/obsolete/testimonial/testimonial-3.jpg)`,
                      }}
                    ></div>
                  </div>

                  <div className="col-lg-6">
                    <div className="testimonial-inner-content">
                      <div className="icon">
                        <i className="flaticon-left-quotes-sign"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida
                        Risus maecenas accumsan noniice Lorem Ipsum.
                      </p>

                      <div className="info-text">
                        <h4>Lee Munroe</h4>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleTwo;
