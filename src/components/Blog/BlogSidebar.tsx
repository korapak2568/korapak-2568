"use client";
  
import React from "react";
import Link from "next/link";

const BlogSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area pl-10">
        <div className="widget widget_search">
          <h3 className="widget-title">Search</h3>

          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="flaticon-loupe"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_spix_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <div className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog-1.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>June 10, 2024</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  The Data Surrounding Higher Education
                </Link>
              </h4>
            </div>
          </div>

          <div className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog-2.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>June 21, 2024</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Conversion Rate the Sales Funnel Optimization
                </Link>
              </h4>
            </div>
          </div>

          <div className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog-3.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>June 30, 2024</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Business Data is changing the world’s Energy
                </Link>
              </h4>
            </div>
          </div>

          <div className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog-4.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>May 10, 2024</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  The Billionaire Guide On Design That Will Get You Rich
                </Link>
              </h4>
            </div>
          </div>

          <div className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog-5.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>May 21, 2024</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  The Data-Driven Approach To Understanding Your Users
                </Link>
              </h4>
            </div>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                Creative Web Design <span className="post-count">(03)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Digital Agency <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Software Engineers <span className="post-count">(08)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Marketing Agency <span className="post-count">(04)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Data Analysis <span className="post-count">(08)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                App Development <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Web Application <span className="post-count">(14)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Logo & Branding <span className="post-count">(18)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                IT Startups <span className="post-count">(20)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Digital Services <span className="post-count">(25)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Popular Tags</h3>

          <div className="tagcloud">
            <Link href="#">
              Business <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="#">
              Design <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="#">
              Braike <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Travel <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Smart <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
