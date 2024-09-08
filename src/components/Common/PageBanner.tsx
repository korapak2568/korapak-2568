import React from "react";
import Link from "next/link";

interface PageBannerProps {
    pageTitle: string;
    homePageUrl: string;
    homePageText: string;
    activePageText: string;
    BGImage: string;
}

const PageBanner: React.FC<PageBannerProps> = (
    {
        pageTitle,
        homePageUrl,
        homePageText,
        activePageText,
        BGImage,
    }) => {
    return (
        <>
            <div className="page-banner-area" style={{backgroundImage: `url(${BGImage})`}}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-banner-content">
                                <h2>{pageTitle}</h2>
                                <ul>
                                    <li>
                                        <Link href={homePageUrl}>{homePageText}</Link>
                                    </li>
                                    <li className="active">{activePageText}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageBanner;
