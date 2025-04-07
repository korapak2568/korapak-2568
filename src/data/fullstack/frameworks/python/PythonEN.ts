import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const PythonEN: IFullStackStack = {
    title: "Python",
    description: "Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It is widely used across various domains, from web development and data analysis to artificial intelligence and scientific computing.",
    image: ImageUrl.fullstackThumbnails.python.path,
    alt: "Logo representing Python with Flask framework",
    readMore: "Explore more Python, Flask, Django full-stack development solutions",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Python Development",
            description: "Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It is widely used across various domains, from web development and data analysis to artificial intelligence and scientific computing.",
            list: []
        },
        {
            title: "Easy to Learn and Use",
            description: "Python's simple syntax and readability make it an excellent choice for beginners and experienced developers alike. Its extensive standard library and community-contributed modules provide ready-to-use solutions for a wide range of tasks.",
            list: [
                "Easy to learn",
                "Readable syntax",
                "Versatile",
                "Large standard library",
                "Strong community",
                "Popular for ai/ML",
                "Cross-platform"
            ]
        },
        {
            title: "Versatile Applications",
            description: "Python is used in diverse fields, including web development with frameworks like Django and Flask, data science with libraries like pandas and NumPy, and machine learning with TensorFlow and scikit-learn. This versatility makes Python a go-to language for many developers.",
            list: []
        },
        {
            title: "Strong Community Support",
            description: "Python has a vibrant and active community that continuously contributes to its growth. With numerous tutorials, forums, and open-source projects available, developers can easily find support and resources to enhance their skills and solve challenges.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is Python used for?",
            answer: "Python is used for web development, data analysis, artificial intelligence, scientific computing, and more."
        },
        {
            question: "Why is Python so popular?",
            answer: "Python's simplicity, readability, and versatility make it a popular choice for both beginners and experienced developers."
        },
        {
            question: "Is Python good for web development?",
            answer: "Yes, frameworks like Django and Flask make Python a powerful tool for web development."
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django is a high-level web framework that encourages rapid development and clean, pragmatic design.",
            strengths: [
                "Batteries-included: Comes with many built-in features like ORM, authentication, and an admin panel.",
                "Scalability: Suitable for large-scale applications.",
                "Security: Includes built-in protection against many common security threats."
            ],
            useCases: [
                "Large-scale web applications",
                "e-commerce sites",
                "content management systems"
            ]
        },
        {
            name: "Flask",
            overview: "Flask is a micro web framework that provides the essentials to get a web application up and running without much boilerplate code.",
            strengths: [
                "Lightweight: Minimalistic and flexible.",
                "Extensible: Can be easily extended with various extensions.",
                "Easy to learn: Simple to understand and start with."
            ],
            useCases: [
                "Small to medium-sized applications",
                "APIs",
                "prototyping"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.6+ based on standard Python type hints.",
            strengths: [
                "Speed: Asynchronous support and high performance.",
                "Automatic docs: Generates OpenAPI and JSON Schema documentation.",
                "Type safety: Uses Python type hints for validation and serialization."
            ],
            useCases: [
                "APIs",
                "microservices",
                "real-time applications"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid is a general-purpose web framework that is designed to make it easy to write web applications.",
            strengths: [
                "Flexibility: Can be used for both small and large applications.",
                "Customization: Highly configurable and modular.",
                "Security: Provides several security features."
            ],
            useCases: [
                "Versatile applications ranging from microservices to large web applications"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado is a scalable, non-blocking web server and web application framework.",
            strengths: [
                "Performance: Designed for handling long-lived network connections.",
                "Real-time: Suitable for real-time web technical-expertise.",
                "Scalability: Can handle thousands of simultaneous connections."
            ],
            useCases: [
                "Real-time applications",
                "WebSockets",
                "long polling"
            ]
        }
    ]
}