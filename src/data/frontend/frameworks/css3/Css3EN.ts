import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Css3EN: IFrontEndStack = {
    title: "CSS3",
    description: "Enhance your website's look with advanced styling techniques using CSS3.",
    image: ImageUrl.frontend.frameworks.css3.thumbnail,
    alt: "Logo representing CSS3 technology",
    readMore: "Explore more CSS3 front-end development solutions",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "CSS3 Web Design",
            description: "CSS3 is the latest evolution of Cascading Style Sheets, offering advanced features for enhancing the visual presentation of web pages.",
            list: []
        },
        {
            title: "Strong Points of CSS3",
            description: "CSS3 brings modern styling capabilities to web development.",
            list: [
                "Advanced selectors",
                "Flexible box layout",
                "Grid layout",
                "Animations and transitions",
                "Media queries",
                "Custom properties",
                "Improved typography"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "CSS3 meets the demand for responsive, visually engaging web design with powerful new features.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is CSS3?",
            answer: "CSS3 is the latest version of Cascading Style Sheets, offering new features for web styling."
        },
        {
            question: "What are media queries?",
            answer: "Media queries allow for responsive designs by applying styles based on device characteristics."
        },
        {
            question: "What is the Flexbox layout?",
            answer: "Flexbox layout provides a more efficient way to design layouts, distribute space, and align items."
        },
        {
            question: "What are popular CSS frameworks?",
            answer: "The popular CSS frameworks are Bootstrap, Tailwind CSS, Bulma, Foundation, and Materialize."
        }
    ],
}