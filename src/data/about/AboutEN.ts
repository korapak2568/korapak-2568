import {IAbout} from "@/data/about/model/IAbout";
import {IAboutRole} from "@/data/about/model/IAboutRole";

export const AboutEN: IAbout = {
    title: "About",
    span: "Comprehensive System Analysis and Software Development",
    subTitle: "Technology Innovation for Business Success",
    description: [
        {
            title: "About Us",
            description: "CHORN launched its website in March 2023 to follow the latest information about rapidly changing technology today, software development, information technology for various business domain industries, and interesting news."

        },
        {
            title: "Expertise",
            description: "Continuously committed to developing software engineering and IT knowledge, including participating in global platforms to help train AI and create Generative AI. Regularly extending knowledge and expertise in related areas such as system architecture, data analysis, web application development, software testing, and cloud computing."
        },
        {
            title: "Software Development Solutions",
            description: "Develops software through remote, hybrid, and office work in Chiang Mai, Bangkok, and internationally. Creates proof of concept (PoC) applications, minimum viable products (MVP), helps analyze system requirements, and improves existing systems to respond to changing business needs."
        }
    ],
    stacks: [
        {
            title: "Software Development and Enterprise System Integration",
            description: "Custom website and software system development using modern frameworks. Development of front-end and back-end, smart contracts, blockchain, Web3, and DApp. Enterprise system integration, such as ERP (e.g., SAP), CRM, LLM-AI, LINE Chat App, Machine Learning, e-commerce platforms, APIs, and enhances data connectivity across departments, enabling automation and collaboration."
        },
        {
            title: "System Analysis and Technical Support",
            description: "In-depth system analysis and technical recommendations enhance mission-critical applications and systems. Ensures reliability, quality control, software testing, and implementation of modern technologies for continuous business operation and improvement."
        },
        {
            title: "Agile Software Development and Business Team Coordination",
            description: "Agile software development with business team coordination. Close collaboration with domestic and international teams, internal and external clients, business users. Work methodologies include agile, waterfall, and hybrid approaches."
        }
    ],
    contact: {
        title: "Business Inquiries & Collaborations",
        description: "Welcome contact from fellow founders, CEO, CTO, and product leaders.",
        roles: [
            {
                title: "Project Manager",
                span: "(for client project coordination)",
                email: "pm@chorn.in.th"
            },
            {
                title: "Chief Technology Officer",
                span: "(for technical partnerships or integration)",
                email: "cto@chorn.in.th"
            },
            {
                title: "Human Resources",
                span: "(for HR-related inquiries, recruitment, and hiring)",
                email: "hr@chorn.in.th"
            },
            {
                title: "General Inquiries",
                span: "(Strategic Collaborations)",
                officePhone: "Office phone: +66 (52) 000 548",
                mobilePhone: "Mobile phone: +66 (64) 918 1998",
                locations: {
                    office: "Office: 405/112 Moo 3, San Na Meng Subdistrict, San Sai District, Chiang Mai 50210, Thailand",
                }
            },
            {
                title: "Nearby places",
                span: "",
                nearbyShopping: "Central Festival Chiang Mai - 20 minutes",
                nearbyUniversity1: "Maejo University - 22 minutes",
                nearbyUniversity2: "Chiang Mai University - 29 minutes",
                nearbyAirport: "Chiang Mai International Airport - 30 minutes",
            },
        ]
    }
};