import React from "react";
import { Info } from "@/data/info/Info";

export default function Left() {
  return (
    <div className="col-lg-6">
      <div className="main-banner-content pr-15 main-banner-content-custom">
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-once="true"
          className={"mb-4"}
          dangerouslySetInnerHTML={
            { __html: Info.Service.description } as { __html: string }
          }
        />

        <div className={"add-web-content"}>
          <ul>
            {Info.Service.services.map((service, index) => (
              <li key={index}>
                <strong>{service.title}</strong> {service.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
