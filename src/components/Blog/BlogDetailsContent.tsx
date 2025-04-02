"use client";
  
import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Comments from "./Comments";
import Image from "next/image";

const BlogDetailsContent: React.FC = () => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src="/obsolete-images/blog-details.jpg"
                    alt="image"
                    width={1000}
                    height={600}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>{" "}
                        <Link href="#">September 31, 2024</Link>
                      </li>
                      <li>
                        <span>Posted By:</span>{" "}
                        <Link href="#">John Anderson</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>Digital Marketing Agency Blogs You Should Read</h3>
                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <blockquote className="wp-block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </blockquote>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/obsolete-images/blog/blog-4.jpg"
                          alt="image"
                          width={650}
                          height={500}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/obsolete-images/blog/blog-5.jpg"
                          alt="image"
                          width={650}
                          height={500}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/obsolete-images/blog/blog-6.jpg"
                          alt="image"
                          width={650}
                          height={500}
                        />
                      </figure>
                    </li>
                  </ul>

                  <h3>Four major elements that we offer:</h3>
                  <ul className="features-list">
                    <li>
                      <i className="flaticon-check"></i>
                      Scientific Skills For getting a better result
                    </li>
                    <li>
                      <i className="flaticon-check"></i>
                      Communication Skills to getting in touch
                    </li>
                    <li>
                      <i className="flaticon-check"></i>A Career Overview
                      opportunity Available
                    </li>
                    <li>
                      <i className="flaticon-check"></i>A good Work Environment
                      For work
                    </li>
                  </ul>

                  <h3>It’s Time To Think Differently About Homeschooling</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <h3>The Rise Of Marketing And Why You Need It</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bxs-bookmark"></i>
                    </span>
                    <Link href="#">Business</Link>
                    <Link href="#">IT Startups</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="flaticon-left-arrow"></i>
                        Prev Post
                      </Link>
                    </div>
                    <div className="nav-next">
                      <Link href="#">
                        Next Post
                        <i className="flaticon-next"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <Comments />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
