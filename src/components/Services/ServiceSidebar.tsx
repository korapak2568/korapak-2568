"use client";
  
import React from "react";
import Link from "next/link";

const ServiceSidebar: React.FC = () => {
  return (
    <>
      <div className="services-details-information ml-10">
        <ul className="services-list">
          <li>
            <Link href="/services/details" className="active">
              Creative Web Design
            </Link>
          </li>
          <li>
            <Link href="/services/details">Complex Dashboard</Link>
          </li>
          <li>
            <Link href="/services/details">Digital Agency</Link>
          </li>
          <li>
            <Link href="/services/details">Software Engineers</Link>
          </li>
          <li>
            <Link href="/services/details">Marketing Agency</Link>
          </li>
          <li>
            <Link href="/services/details">Data Analysis</Link>
          </li>
          <li>
            <Link href="/services/details">App Development</Link>
          </li>
          <li>
            <Link href="/services/details">Web Application</Link>
          </li>
          <li>
            <Link href="/services/details">Logo Design</Link>
          </li>
        </ul>

        <div className="download-file">
          <h3>Brochures</h3>

          <ul>
            <li>
              <Link href="/services/details" target="_blank">
                PDF Download <i className="bx bxs-file-pdf"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details" target="_blank">
                Services Details.txt <i className="bx bxs-file-txt"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="services-contact-info">
          <h3>Contact Info</h3>

          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-user-pin"></i>
              </div>
              <span>Phone:</span>
              <a href="tel:+21453545413">+2145 354 5413</a>
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              New York, USA
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-envelope"></i>
              </div>
              <span>Email:</span>
              <a href="mailto:hello@renex.com">hello@renex.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
