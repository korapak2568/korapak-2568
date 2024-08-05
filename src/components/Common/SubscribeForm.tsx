"use client";
  
import React from "react";

const SubscribeForm: React.FC = () => {
  return (
    <>
      <div
        className="subscribe-area ptb-100"
        style={{
          backgroundImage: `url(/images/subscribe-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="subscribe-content">
            <span>Get Started Instantly!</span>
            <h2>Transform Business with CHORN</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
