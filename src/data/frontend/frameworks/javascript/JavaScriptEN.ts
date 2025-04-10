import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaScriptEN: IFrontEndStack = {
    title: "JavaScript",
    description: "JavaScript is a versatile and dynamic programming language widely used for building interactive and responsive web applications. Its flexibility and extensive ecosystem make it an essential tool for modern web development.",
    image: ImageUrl.frontend.frameworks.javascript.thumbnail,
    alt: "Logo representing JavaScript programming language",
    readMore: "Explore more JavaScript full-stack development solutions",
    link: "/technical-expertise/front-end-developer/javascript-developer",
    features: [
        {
            title: "JavaScript Development",
            description: "JavaScript powers the dynamic behavior of websites and web applications, offering unparalleled versatility and compatibility with browsers and frameworks.",
            list: []
        },
        {
            title: "Rich Interactive Experiences",
            description: "JavaScript enables developers to create interactive user interfaces, animations, and real-time features like chat applications, delivering engaging user experiences.",
            list: [
                "Dynamic content updates",
                "Interactive web interfaces",
                "Animation and transitions",
                "Real-time features (e.g., chats, notifications)",
                "Cross-platform compatibility"
            ]
        },
        {
            title: "Wide Ecosystem and Tooling",
            description: "JavaScript boasts a vast ecosystem of libraries and frameworks like React, Angular, and Vue.js, empowering developers to build robust web applications efficiently.",
            list: []
        },
        {
            title: "Back-End Development with Node.js",
            description: "JavaScript extends to back-end development through Node.js, enabling full-stack development with a single language, from server-side logic to client-side interactions.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is JavaScript?",
            answer: "JavaScript is a dynamic programming language commonly used for creating interactive web applications."
        },
        {
            question: "Why use JavaScript for web development?",
            answer: "JavaScript offers versatility, extensive libraries, and compatibility across browsers, making it a go-to language for web developers."
        },
        {
            question: "What frameworks are built on JavaScript?",
            answer: "Popular JavaScript frameworks include React, Angular, and Vue.js."
        }
    ],
}