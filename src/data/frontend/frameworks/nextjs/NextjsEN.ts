import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const NextjsEN: IFrontEndStack = {
    title: "NextJS",
    description: "Boost your React applications with seamless server-side rendering and static site generation for optimal performance.",
    image: ImageUrl.frontend.frameworks.nextjs.thumbnail,
    alt: "Logo representing Next.js framework",
    readMore: "Explore more NextJS front-end development solutions ",
    link: "/technical-expertise/front-end-developer/nextjs-developer",
    features: [
        {
            title: "NextJS Development",
            description: "Next.js is a leading React framework that offers server-side rendering and static site generation, delivering high-performance, SEO-friendly web applications with minimal configuration. Perfect for modern web development needs.",
            list: []
        },
        {
            title: "Strong Points of NextJS",
            description: "NextJS stands out with its robust features",
            list: [
                "Server-side rendering",
                "Static site generation",
                "Automatic code splitting",
                "API routes",
                "Incremental static regeneration",
                "Built-in CSS and Sass support",
                "Excellent developer experience"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "Next.js tackles web development challenges by providing solutions for performance, scalability, and SEO, ensuring optimal application delivery.",
            list: []
        },
    ],
    faqs: [
        {
            question: "What is Next.js?",
            answer: "Next.js is a React framework that provides server-side rendering and static site generation for optimized web applications."
        },
        {
            question: "How does server-side rendering in Next.js improve performance?",
            answer: "Server-side rendering improves performance by pre-rendering pages on the server, reducing client-side rendering time."
        },
        {
            question: "What is static site generation in Next.js?",
            answer: "Static site generation pre-renders pages at build time, providing fast load times and improved SEO."
        }
    ],
}