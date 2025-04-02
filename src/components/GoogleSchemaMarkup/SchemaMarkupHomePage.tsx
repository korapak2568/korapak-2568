import React from "react";

export const SchemaMarkupHomePage: React.FC = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CHORN",
        "url": "https://chorn.in.th",
        "logo": "https://chorn.in.th/images/logo-2025/chorn-logo-2025-circle-md.png",
        "sameAs": [
            "https://www.facebook.com/chorn",
            "https://twitter.com/chorn",
            "https://www.linkedin.com/company/chorn"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
        />
    );
};
