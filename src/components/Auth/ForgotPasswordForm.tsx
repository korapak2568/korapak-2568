"use client";
  
import React from "react"; 

const ForgotPasswordForm: React.FC = () => {
  return (
    <>
      <div className="forgot-password-area ptb-100">
        <div className="container">
          <div className="forgot-password-form">
            <div className="forgot-password-in-title">
              <h3>Forgot Your Password</h3>
            </div>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="send-btn">
                <button type="submit" className="default-btn">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
