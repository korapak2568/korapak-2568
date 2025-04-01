"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogTwoColumn: React.FC = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-1.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>20 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      7 Great Tips For Earn More Money From Digital Industry
                    </Link>
                  </h3>

                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-2.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>28 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      The Billionaire Guide On Design That will Get You Rich
                    </Link>
                  </h3>
                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-3.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>25 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Business Data is changing the world’s view towards Green
                      Energy
                    </Link>
                  </h3>
                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-4.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>20 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Finding the blocks of neighboring fields in a matrix with
                      Python
                    </Link>
                  </h3>
                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-5.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>25 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Data into Your Enterprise to Drive Actionable Insights
                    </Link>
                  </h3>
                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-6.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>28 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      data-driven approach to understanding your users
                    </Link>
                  </h3>
                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-7.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>20 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Conversion Rate Optimization: Understanding the Sales
                      Funnel
                    </Link>
                  </h3>
                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/blog/blog-8.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <span>25 March, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      The State of Local SEO Industry Report 2024, Announced
                    </Link>
                  </h3>
                  <Link href="/blog/details" className="blog-btn">
                    Read More <i className="bx bx-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="flaticon-left-arrow"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="flaticon-next"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="default-shape">
          <div className="shape1">
            <Image
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape1.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
          <div className="shape2">
            <Image
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape2.png"
              alt="image"
              width={14}
              height={16}
            />
          </div>
          <div className="shape3">
            <Image
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape3.png"
              alt="image"
              width={18}
              height={18}
            />
          </div>
          <div className="shape4">
            <Image
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape4.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTwoColumn;
