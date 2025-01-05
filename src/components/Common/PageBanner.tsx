import React from "react";

interface PageBannerProps {
    pageTitle: string;
}

const PageBanner: React.FC<PageBannerProps> = (
    {
        pageTitle
    }) => {
    return (
        <>
            <div className="page-banner-area page-banner-area-custom">
                <h2>{pageTitle}</h2>
                <div className="bar"/>
            </div>
        </>
    );
};

export default PageBanner;
