import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const GitHubEN: IDevOpsStack = {
    title: "GitHub",
    description: "Enhance your development workflow with GitHub's version control and collaborative platform.",
    image: ImageUrl.devopsThumbnails.github.path,
    alt: "Logo representing GitHub technology experience",
    readMore: "Learn how GitHub powers effective DevOps testing",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub is a web-based platform that provides Git repository hosting, collaborative development tools, and a wide range of integrations, fostering efficient and collaborative software development.",
            list: []
        },
        {
            title: "Strong Points of GitHub",
            description: "GitHub excels with its key features",
            list: [
                "MetadataChorn control",
                "Collaborative development",
                "Pull requests",
                "Issue tracking",
                "Code review",
                "Continuous integration",
                "Extensive integrations"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "GitHub tackles development workflow challenges by providing robust version control and collaborative tools for efficient project management.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is GitHub?",
            answer: "GitHub is a web-based platform that provides Git repository hosting and collaborative development tools."
        },
        {
            question: "How does GitHub improve collaboration?",
            answer: "GitHub improves collaboration by offering features like pull requests, issue tracking, and code review to facilitate team development."
        },
        {
            question: "What are the benefits of using GitHub?",
            answer: "Benefits of using GitHub include version control, collaborative development, pull requests, issue tracking, code review, continuous integration, and extensive integrations."
        }
    ],
}