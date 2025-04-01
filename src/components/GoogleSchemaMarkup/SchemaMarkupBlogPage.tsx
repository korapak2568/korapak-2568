import React from "react";

export const SchemaMarkupBlogPage: React.FC = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Understanding TypeScript in Depth",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "datePublished": "2024-09-09",
        "publisher": {
            "@type": "Organization",
            "name": "CHORN",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.chorn.in.th/public/logo/chorn-logo-circle-md.webp"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://chorn.in.th/blog/typescript"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
        />
    );
};
