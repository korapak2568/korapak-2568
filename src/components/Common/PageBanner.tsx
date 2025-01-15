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
                <h2 className={'h2-page-title'}>{pageTitle}</h2>
                <div className="bar"/>
            </div>
        </>
    );
};

export default PageBanner;
