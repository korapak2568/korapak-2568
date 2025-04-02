"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="login-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="login-image pr-15">
                <Image
                  src="/obsolete-images/login-form.png"
                  alt="image"
                  width={680}
                  height={480}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pl-15">
                <div className="login-form">
                  <h2>Login</h2>

                  <form>
                    <div className="form-group">
                      <label>Username or email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username or email"
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkme"
                          />
                          <label className="form-check-label" htmlFor="checkme">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                        <Link
                          href="/forgot-password"
                          className="lost-your-password"
                        >
                          Lost your password?
                        </Link>
                      </div>
                    </div>

                    <button type="submit" className="default-btn">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
