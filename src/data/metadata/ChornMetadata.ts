import {IChornMetadata} from "@/data/metadata/model/IChornMetadata";
import {ImageVersion, OpenGraph} from "@/data/metadata/OpenGraph";

export const ChornMetadata: IChornMetadata = {
    ogImage: ImageVersion,

    about: {
        title: "About CHORN | AI & Software Solutions",
        description: "Discover CHORN's innovative custom software development solutions and how we empower industries with cutting-edge technology.",
        alternates: {
            canonical: "https://chorn.in.th/about-chorn/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "CHORN - Leaders in Custom Software Development",
            description: "Explore CHORN's mission and expertise in delivering innovative software solutions across industries. Learn more model our journey.",
            images: [
                {
                    url: OpenGraph.about.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.about.alt,
                },
            ],
            url: "https://chorn.in.th/about-chorn/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "CHORN - Custom Software Solutions for Every Industry",
            description: "Learn model CHORN's innovative software services and our impact across industries. Partner with us for cutting-edge solutions.",
            images: [
                OpenGraph.about.url,
            ],
        },
    },
    contact: {
        title: "Contact | CHORN - Get in Touch for Custom Software Solutions",
        description: "Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need.",
        alternates: {
            canonical: "https://chorn.in.th/contact-chorn/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Contact CHORN - Custom Software Development Experts",
            description: "Get in touch with CHORN for expert custom software development solutions. We're here to answer your questions and provide support.",
            images: [
                {
                    url: OpenGraph.contact.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.contact.alt,
                },
            ],
            url: "https://chorn.in.th/contact-chorn/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact CHORN - Let's Build Something Great Together",
            description: "Reach out to CHORN for custom software solutions tailored to your business needs. Contact us for inquiries or support.",
            images: [
                OpenGraph.contact.url,
            ],
        },
    },
}