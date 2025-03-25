import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/data/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabEN: Metadata = {
    title: "Contact | CHORN - Get in Touch for Custom Software Solutions",
    description: "Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need.",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Contact CHORN - Custom Software Development Experts",
        description: "Get in touch with CHORN for expert custom software development solutions. We're here to answer your questions and provide support.",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact CHORN - Let's Build Something Great Together",
        description: "Reach out to CHORN for custom software solutions tailored to your business needs. Contact us for inquiries or support.",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab technical-expertise", "CI/CD", "version control", "DevOps", "automation", "DevOps pipeline",
        "DevOps thailand", "GitLab automation", "continuous integration"
    ]
}