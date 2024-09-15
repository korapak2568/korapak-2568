import React from "react";

// Define the props interface
interface SchemaMarkupServicePageProps {
    name: string;
    description: string;
    url: string;
}

export const SchemaMarkupServicePage: React.FC<SchemaMarkupServicePageProps> = (
    {name, description, url}) => {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${name}`,
        "description": `${description}`,
        "url": `${url}`,
        "brand": {
            "@type": "Organization",
            "name": "CHORN"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
        />
    );
};
