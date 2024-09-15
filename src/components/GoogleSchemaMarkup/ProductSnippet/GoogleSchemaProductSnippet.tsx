import React from "react";

interface IGoogleProductSnippet {
    url: string
}

export const GoogleSchemaProductSnippet: React.FC<IGoogleProductSnippet> = ({url}) => {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Software Development",
        "description": "Tailored software development services for businesses. Pricing varies based on project scope and requirements.",
        "provider": {
            "@type": "Organization",
            "name": "CHORN",
            "url": "https://chorn.in.th"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": 36000,
            "highPrice": 108000,
            "url": `${url}`,
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-09-15"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
        />
    )
}