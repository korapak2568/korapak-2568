import {IDevOps} from "@/data/devops/model/IDevOps";
import {DockerZH} from "@/data/devops/frameworks/docker/DockerZH";
import {KubeZH} from "@/data/devops/frameworks/kube/KubeZH";
import {GitHubZH} from "@/data/devops/frameworks/github/GitHubZH";
import {ImageUrl} from "@/image/ImageUrl";

export const DevOpsZH: IDevOps = {
    title: "Cloud DevOps",
    span: "Outstanding DevOps Testing",
    subTitle: "",

    // Active
    docker: DockerZH,
    kubernetes: KubeZH,
    github: GitHubZH,

    // Not-active
    appium: {
        title: "Appium",
        description: "Automate your mobile application testing with Appium's versatile and open-source framework.",
        image: ImageUrl.devopsThumbnails.appium.path,
        alt: "Logo representing Appium technology experience",
        readMore: "Find out how Appium powers mobile DevOps testing",
        link: "/technical-expertise/cloud-devops/appium",
        features: [
            {
                title: "Appium",
                description: "Appium is an open-source tool for automating mobile applications on iOS and Android platforms, providing cross-platform testing capabilities using standard WebDriver protocol.",
                list: []
            },
            {
                title: "Strong Points of Appium",
                description: "Appium excels with its key features",
                list: [
                    "Cross-platform testing",
                    "Support for native, hybrid, and mobile web apps",
                    "Standard WebDriver protocol",
                    "Integration with CI/CD tools",
                    "Extensive language support",
                    "Open-source",
                    "Active community"
                ]
            },
            {
                title: "Challenge and Solutions",
                description: "Appium addresses mobile testing challenges by providing a flexible and versatile framework for automating testing across iOS and Android platforms.",
                list: []
            }
        ],
        faqs: [
            {
                question: "What is Appium?",
                answer: "Appium is an open-source tool for automating mobile applications on iOS and Android platforms, providing cross-platform testing capabilities."
            },
            {
                question: "How does Appium improve mobile application testing?",
                answer: "Appium improves mobile application testing by providing a standard WebDriver protocol, cross-platform support, and integration with CI/CD tools."
            },
            {
                question: "What are the benefits of using Appium?",
                answer: "Benefits of using Appium include cross-platform testing, support for native, hybrid, and mobile web apps, extensive language support, and active community support."
            }
        ],
    },
    gitlab: {
        title: "GitLab",
        description: "Optimize your DevOps pipeline with GitLab's all-in-one platform for version control, CI/CD, and more.",
        image: ImageUrl.devopsThumbnails.gitlab.path,
        alt: "Logo representing GitLab technology experience",
        readMore: "Discover GitLab for streamlined DevOps testing",
        link: "/technical-expertise/cloud-devops/gitlab",
        features: [
            {
                title: "GitLab",
                description: "GitLab is a comprehensive DevOps platform that integrates Git repository management, continuous integration and deployment, and project management tools, streamlining the development lifecycle.",
                list: []
            },
            {
                title: "Strong Points of GitLab",
                description: "GitLab stands out with its robust features",
                list: [
                    "MetadataChorn control",
                    "CI/CD",
                    "Project management",
                    "Code review",
                    "Issue tracking",
                    "Automated testing",
                    "Security scanning"
                ]
            },
            {
                title: "Challenge and Solutions",
                description: "GitLab addresses DevOps challenges by providing an integrated platform that enhances efficiency and collaboration across the development lifecycle.",
                list: []
            }
        ],
        faqs: [
            {
                question: "What is GitLab?",
                answer: "GitLab is an all-in-one DevOps platform that integrates version control, CI/CD, and project management tools."
            },
            {
                question: "How does GitLab improve CI/CD processes?",
                answer: "GitLab improves CI/CD processes by providing built-in continuous integration and deployment tools that automate testing and deployment workflows."
            },
            {
                question: "What are the benefits of using GitLab?",
                answer: "Benefits of using GitLab include version control, CI/CD, project management, code review, issue tracking, automated testing, and security scanning."
            }
        ],
    },
    jenkins: {
        title: "Jenkins",
        description: "Automate your software development with Jenkins, the leading open-source CI/CD tool.",
        image: ImageUrl.devopsThumbnails.jenkins.path,
        alt: "Logo representing Jenkins technology experience",
        readMore: "Discover Jenkins CI/CD solutions for DevOps testing",
        link: "/technical-expertise/cloud-devops/jenkins",
        features: [
            {
                title: "Jenkins",
                description: "Jenkins is a widely-used open-source automation server that supports continuous integration and continuous delivery, enabling the efficient building, testing, and deploying of software.",
                list: []
            },
            {
                title: "Strong Points of Jenkins",
                description: "Jenkins excels with its key features",
                list: [
                    "Continuous integration",
                    "Continuous delivery",
                    "Extensible via plugins",
                    "Automated testing",
                    "Build automation",
                    "Pipeline support",
                    "Wide community support"
                ]
            },
            {
                title: "Challenge and Solutions",
                description: "Jenkins tackles automation challenges by providing robust CI/CD solutions that streamline software development and deployment processes.",
                list: []
            }
        ],
        faqs: [
            {
                question: "What is Jenkins?",
                answer: "Jenkins is an open-source automation server that supports continuous integration and continuous delivery for software development."
            },
            {
                question: "How does Jenkins improve CI/CD processes?",
                answer: "Jenkins improves CI/CD processes by automating the building, testing, and deploying of software through its extensive plugin ecosystem and pipeline support."
            },
            {
                question: "What are the benefits of using Jenkins?",
                answer: "Benefits of using Jenkins include continuous integration, continuous delivery, build automation, automated testing, pipeline support, and wide community support."
            }
        ],
    },
    postman: {
        title: "Postman",
        description: "Streamline your API development and testing with Postman's collaborative platform.",
        image: ImageUrl.devopsThumbnails.postman.path,
        alt: "Logo representing Postman technology experience",
        readMore: "Learn how Postman enhances DevOps API testing",
        link: "/technical-expertise/cloud-devops/postman",
        features: [
            {
                title: "Postman",
                description: "Postman is a popular API development and testing tool that simplifies the process of building, testing, and documenting APIs, enhancing collaboration and efficiency in API development.",
                list: []
            },
            {
                title: "Strong Points of Postman",
                description: "Postman excels with its key features",
                list: [
                    "API testing",
                    "Collaboration",
                    "Automated testing",
                    "API documentation",
                    "Mock servers",
                    "Environment management",
                    "Extensive integrations"
                ]
            },
            {
                title: "Challenge and Solutions",
                description: "Postman addresses API development challenges by providing tools for testing, documenting, and automating APIs, improving development efficiency.",
                list: []
            }
        ],
        faqs: [
            {
                question: "What is Postman?",
                answer: "Postman is an API development and testing tool that simplifies building, testing, and documenting APIs."
            },
            {
                question: "How does Postman improve API development?",
                answer: "Postman improves API development by providing tools for testing, documenting, and automating APIs, enhancing collaboration and efficiency."
            },
            {
                question: "What are the benefits of using Postman?",
                answer: "Benefits of using Postman include API testing, collaboration, automated testing, API documentation, mock servers, environment management, and extensive integrations."
            }
        ],
    },
    selenium: {
        title: "Selenium",
        description: "Automate your web application testing with Selenium's powerful testing suite.",
        image: ImageUrl.devopsThumbnails.selenium.path,
        alt: "Logo representing Selenium technology experience",
        readMore: "Discover Selenium for automated DevOps testing",
        link: "/technical-expertise/cloud-devops/selenium",
        features: [
            {
                title: "Selenium",
                description: "Selenium is an open-source tool suite for automating web browsers, enabling robust testing of web applications across different browsers and platforms. Essential for quality assurance in web development.",
                list: []
            },
            {
                title: "Strong Points of Selenium",
                description: "Selenium excels with its key features",
                list: [
                    "Cross-browser testing",
                    "Support for multiple programming languages",
                    "Integration with CI/CD tools",
                    "Parallel test execution",
                    "Record and playback tool",
                    "Extensive community support",
                    "Open-source"
                ]
            },
            {
                title: "Challenge and Solutions",
                description: "Selenium addresses web testing challenges by providing a comprehensive suite of tools for automated testing across various browsers and platforms.",
                list: []
            }
        ],
        faqs: [
            {
                question: "What is Selenium?",
                answer: "Selenium is an open-source tool suite for automating web browsers, enabling testing of web applications across different browsers and platforms."
            },
            {
                question: "How does Selenium improve web application testing?",
                answer: "Selenium improves web application testing by providing automated testing capabilities, cross-browser support, and integration with CI/CD tools."
            },
            {
                question: "What are the benefits of using Selenium?",
                answer: "Benefits of using Selenium include cross-browser testing, support for multiple programming languages, integration with CI/CD tools, parallel test execution, and extensive community support."
            }
        ],
    },
    soapui: {
        title: "SOAPUI",
        description: "Simplify your API testing with SOAPUI's comprehensive testing toolset for REST and SOAP APIs.",
        image: ImageUrl.devopsThumbnails.soapui.path,
        alt: "Logo representing SOAPUI technology experience",
        readMore: "Learn model SoapUI for API and DevOps testing",
        link: "/technical-expertise/cloud-devops/soapui", features: [
            {
                title: "SOAPUI",
                description: "SOAPUI is a powerful API testing tool that supports both REST and SOAP APIs, providing advanced testing capabilities for functional, security, and load testing of APIs.",
                list: []
            },
            {
                title: "Strong Points of SOAPUI",
                description: "SOAPUI excels with its key features",
                list: [
                    "Support for REST and SOAP APIs",
                    "Functional testing",
                    "Security testing",
                    "Load testing",
                    "Automated testing",
                    "Mock technical-expertise",
                    "Data-driven testing"
                ]
            },
            {
                title: "Challenge and Solutions",
                description: "SOAPUI addresses API testing challenges by providing a robust toolset for functional, security, and load testing, ensuring API reliability and performance.",
                list: []
            }
        ],
        faqs: [
            {
                question: "What is SOAPUI?",
                answer: "SOAPUI is a comprehensive API testing tool that supports both REST and SOAP APIs, offering advanced testing capabilities."
            },
            {
                question: "How does SOAPUI improve API testing?",
                answer: "SOAPUI improves API testing by providing tools for functional, security, and load testing, as well as automated testing and mock technical-expertise."
            },
            {
                question: "What are the benefits of using SOAPUI?",
                answer: "Benefits of using SOAPUI include support for REST and SOAP APIs, functional testing, security testing, load testing, automated testing, mock technical-expertise, and data-driven testing."
            }
        ],
    },

    stacks: [],

    services: {
        title: "云计算与DevOps",
        descriptions: [
            "专业的多云策略（AWS、Azure、GCP、DigitalOcean），结合基础设施即代码（IaC）的实施，创建可扩展、安全、高效的云环境，并通过自动化工作流程进一步改善基础设施。"
        ],
        items: [
            {
                title: "云基础设施与自动化",
                description: "使用Terraform、AWS CloudFormation和Kubernetes，提高业务敏捷性并降低运营成本。"
            },
            {
                title: "CI/CD与DevSecOps",
                description: "利用GitLab和GitHub Actions内置的安全性，加速产品上市时间，实现更快速、更可靠的软件发布。"
            },
            {
                title: "容器化与编排",
                description: "使用Docker、Kubernetes、Terraform和AWS CloudFormation，创建一致的部署环境和无缝的可扩展性。"
            },
            {
                title: "监控与可观测性",
                description: "通过AWS CloudWatch、Prometheus和Grafana实时洞察，防止停机并优化性能。"
            }
        ]
    }
}

DevOpsZH.stacks = [
    DevOpsZH.docker,
    DevOpsZH.kubernetes,
    DevOpsZH.github
]