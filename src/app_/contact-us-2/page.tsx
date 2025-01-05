import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import ContactFormTwo from "../../components/Contact/ContactFormTwo";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact2025 Style Two" />

      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Get in Touch</span>
            <h2>Ready to Get Started?</h2>
            <div className="bar"></div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-image">
                <Image
                  src="/images/contact.png"
                  alt="image"
                  width={500}
                  height={360}
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form-inner">
                <ContactFormTwo />
              </div>
            </div>
          </div>

          <div className="general-contact-info">
            <div className="contact-info-content">
              <h3>Contact2025 us by Phone Number or Email Address</h3>
              <h2>
                <a href="tel:+0881306298615">+088 130 629 8615</a>
                <span>OR</span>
                <a href="mailto:support@renex.com">support@renex.com</a>
              </h2>

              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
}
