import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const Html5EN: IFrontEndStack = {
    title: "HTML5",
    description: "Master the latest standards in web development for rich, interactive content.",
    image: ImageUrl.frontendThumbnails.html5.path,
    alt: "Logo representing HTML5 technology",
    readMore: "Explore more HTML5 front-end development solutions",
    link: "/technical-expertise/front-end-developer/html5-developer",
    features: [
        {
            title: "HTML5 Web Design",
            description: "HTML5 is the latest version of the HyperText Markup Languages, introducing new elements and APIs for a richer web experience.",
            list: []
        },
        {
            title: "Strong Points of HTML5",
            description: "HTML5 enhances web development with its modern features and capabilities.",
            list: [
                "New semantic elements",
                "Audio and video support",
                "Canvas element",
                "Improved form controls",
                "Offline capabilities",
                "Geolocation API",
                "Enhanced accessibility"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "HTML5 addresses the need for more interactive and media-rich web experiences with new elements and APIs.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is HTML5?",
            answer: "HTML5 is the latest version of the HyperText Markup Languages, introducing new features and elements."
        },
        {
            question: "What are the new semantic elements?",
            answer: "New semantic elements include <article>, <section>, <header>, <footer>, and more for better content structure."
        },
        {
            question: "What is the canvas element?",
            answer: "The canvas element provides a space for drawing graphics via JavaScript."
        }
    ],
}