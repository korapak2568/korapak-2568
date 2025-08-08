import {IImageUrl} from "@/image/model/IImageUrl";

const IMAGE_CDN = process.env.CDN_IMAGE || "https://cdn.chorn.in.th/public";
const IMAGE_INTERNAL = "/images";
export const IMAGE_PATH = IMAGE_INTERNAL;

export const ImageUrl: IImageUrl = {
    // frontend
    frontend: {
        side: [
            {
                title: "CHORN's image of frontend side 1.",
                image375: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-1-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-1-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-1-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-1-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 2.",
                image375: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-2-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-2-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-2-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-2-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 3.",
                image375: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-3-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-3-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-3-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-3-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 4.",
                image375: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-4-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-4-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-4-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-4-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 5.",
                image375: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-5-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-5-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-5-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-5-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 6.",
                image375: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-6-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-6-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-6-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/front-end-developer/side-images/frontend-side-6-large.webp",
                thumbnail: ""
            },
        ],
        frameworks: {
            angular: {
                title: "CHORN full-stack development thumbnail Angular",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/angular-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/angular-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/angular-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/angular-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/angular-thumbnail.webp"
            },
            css3: {
                title: "CHORN full-stack development thumbnail CSS3",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/css3-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/css3-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/css3-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/css3-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/css3-thumbnail.webp"
            },
            html5: {
                title: "CHORN full-stack development thumbnail HTML5",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/html5-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/html5-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/html5-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/html5-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/html5-thumbnail.webp"
            },
            nextjs: {
                title: "CHORN full-stack development thumbnail Next.js",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/nextjs-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/nextjs-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/nextjs-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/nextjs-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/nextjs-thumbnail.webp"
            },
            react: {
                title: "CHORN full-stack development thumbnail React.js",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/react-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/react-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/react-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/react-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/react-thumbnail.webp"
            },
            typescript: {
                title: "CHORN full-stack development thumbnail TypeScript",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/typescript-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/typescript-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/typescript-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/typescript-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/typescript-thumbnail.webp"
            },
            vue: {
                title: "CHORN full-stack development thumbnail Vue.js",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/vue-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/vue-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/vue-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/vue-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/vue-thumbnail.webp"
            },
            javascript: {
                title: "CHORN full-stack development thumbnail JavaScript",
                image375: IMAGE_PATH + "/technical-expertise/frontend/framework/javascript-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/frontend/framework/javascript-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/frontend/framework/javascript-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/frontend/framework/javascript-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/frontend/framework/javascript-thumbnail.webp"
            },
        },
    },
    backend: {
        side: [
            {
                title: "CHORN's image of frontend side 1.",
                image375: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-1-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-1-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-1-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-1-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 2.",
                image375: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-2-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-2-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-2-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-2-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 3.",
                image375: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-3-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-3-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-3-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-3-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 4.",
                image375: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-4-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-4-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-4-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-4-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 5.",
                image375: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-5-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-5-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-5-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-5-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 6.",
                image375: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-6-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-6-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-6-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/full-stack-developer/side-images/backend-6-large.webp",
                thumbnail: ""
            },
        ],
        frameworks: {
            dotnetcore: {
                title: "CHORN full-stack development thumbnail Dotnet Core",
                image375: IMAGE_PATH + "/technical-expertise/backend/framework/dotnetcore-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/backend/framework/dotnetcore-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/backend/framework/dotnetcore-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/backend/framework/dotnetcore-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/backend/framework/dotnetcore-thumbnail.webp"
            },
            go: {
                title: "CHORN full-stack development thumbnail Go-lang",
                image375: IMAGE_PATH + "/technical-expertise/backend/framework/go-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/backend/framework/go-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/backend/framework/go-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/backend/framework/go-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/backend/framework/go-thumbnail.webp"
            },
            java: {
                title: "CHORN full-stack development thumbnail Java Spring Boot",
                image375: IMAGE_PATH + "/technical-expertise/backend/framework/java-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/backend/framework/java-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/backend/framework/java-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/backend/framework/java-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/backend/framework/java-thumbnail.webp"
            },
            nodejs: {
                title: "CHORN full-stack development thumbnail Node.js",
                image375: IMAGE_PATH + "/technical-expertise/backend/framework/nodejs-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/backend/framework/nodejs-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/backend/framework/nodejs-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/backend/framework/nodejs-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/backend/framework/nodejs-thumbnail.webp"
            },
            php: {
                title: "CHORN full-stack development thumbnail PHP",
                image375: IMAGE_PATH + "/technical-expertise/backend/framework/php-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/backend/framework/php-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/backend/framework/php-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/backend/framework/php-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/backend/framework/php-thumbnail.webp"
            },
            python: {
                title: "CHORN full-stack development thumbnail Python",
                image375: IMAGE_PATH + "/technical-expertise/backend/framework/python-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/backend/framework/python-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/backend/framework/python-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/backend/framework/python-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/backend/framework/python-thumbnail.webp"
            },
        },
    },
    devops: {
        side: [],
        frameworks: {
            appium: {
                title: "CHORN devops thumbnail Appium",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/appium-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/appium-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/appium-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/appium-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/appium-thumbnail.webp"
            },
            docker: {
                title: "CHORN devops thumbnail Docker",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/docker-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/docker-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/docker-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/docker-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/docker-thumbnail.webp"
            },
            github: {
                title: "CHORN devops thumbnail GitHub",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/github-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/github-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/github-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/github-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/github-thumbnail.webp"
            },
            gitlab: {
                title: "CHORN devops thumbnail GitLab",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/gitlab-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/gitlab-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/gitlab-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/gitlab-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/gitlab-thumbnail.webp"
            },
            jenkins: {
                title: "CHORN devops thumbnail Jenkins",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/jenkins-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/jenkins-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/jenkins-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/jenkins-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/jenkins-thumbnail.webp"
            },
            kube: {
                title: "CHORN devops thumbnail Kubernetes",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/kube-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/kube-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/kube-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/kube-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/kube-thumbnail.webp"
            },
            postman: {
                title: "CHORN devops thumbnail Postman",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/postman-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/postman-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/postman-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/postman-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/postman-thumbnail.webp"
            },
            selenium: {
                title: "CHORN devops thumbnail Selenium",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/selenium-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/selenium-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/selenium-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/selenium-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/selenium-thumbnail.webp"
            },
            soapui: {
                title: "CHORN devops thumbnail SoapUI",
                image375: IMAGE_PATH + "/technical-expertise/devops/framework/soapui-qrcode-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/devops/framework/soapui-qrcode-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/devops/framework/soapui-qrcode-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/devops/framework/soapui-qrcode-large.webp",
                thumbnail: IMAGE_PATH + "/technical-expertise/devops/framework/soapui-thumbnail.webp"
            },
        },
    },
    web3: {
        side: [
            {
                title: "CHORN's image of frontend side 1.",
                image375: IMAGE_PATH + "/technical-expertise/blockchain/web3-1-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/blockchain/web3-1-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/blockchain/web3-1-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/blockchain/web3-1-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 2.",
                image375: IMAGE_PATH + "/technical-expertise/blockchain/web3-2-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/blockchain/web3-2-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/blockchain/web3-2-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/blockchain/web3-2-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 3.",
                image375: IMAGE_PATH + "/technical-expertise/blockchain/web3-3-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/blockchain/web3-3-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/blockchain/web3-3-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/blockchain/web3-3-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 4.",
                image375: IMAGE_PATH + "/technical-expertise/blockchain/web3-4-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/blockchain/web3-4-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/blockchain/web3-4-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/blockchain/web3-4-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 5.",
                image375: IMAGE_PATH + "/technical-expertise/blockchain/web3-5-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/blockchain/web3-5-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/blockchain/web3-5-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/blockchain/web3-5-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN's image of frontend side 6.",
                image375: IMAGE_PATH + "/technical-expertise/blockchain/web3-6-image-375.webp",
                image750: IMAGE_PATH + "/technical-expertise/blockchain/web3-6-image-750.webp",
                image1200: IMAGE_PATH + "/technical-expertise/blockchain/web3-6-image-1200.webp",
                large: IMAGE_PATH + "/technical-expertise/blockchain/web3-6-large.webp",
                thumbnail: ""
            },
        ]
    },
    ai: {
        fah: {
            title: "CHORN's Fah, AI Chat Friend",
            image375: IMAGE_PATH + "/ai/ai-fah-qrcode-375.webp",
            image750: IMAGE_PATH + "/ai/ai-fah-qrcode-750.webp",
            image1200: IMAGE_PATH + "/ai/ai-fah-qrcode-1200.webp",
            large: IMAGE_PATH + "/ai/ai-fah-qrcode-large.webp",
            thumbnail: IMAGE_PATH + "/ai/ai-fah-thumbnail.webp",
        },
        aom: {
            title: "CHORN's Aom, AI Chat Friend",
            image375: IMAGE_PATH + "/ai/ai-aom-qrcode-375.webp",
            image750: IMAGE_PATH + "/ai/ai-aom-qrcode-750.webp",
            image1200: IMAGE_PATH + "/ai/ai-aom-qrcode-1200.webp",
            large: IMAGE_PATH + "/ai/ai-aom-qrcode-large.webp",
            thumbnail: IMAGE_PATH + "/ai/ai-aom-thumbnail.webp",
        },
        ploy: {
            title: "CHORN's Ploy, AI Chat Friend",
            image375: IMAGE_PATH + "/ai/ai-ploy-qrcode-375.webp",
            image750: IMAGE_PATH + "/ai/ai-ploy-qrcode-750.webp",
            image1200: IMAGE_PATH + "/ai/ai-ploy-qrcode-1200.webp",
            large: IMAGE_PATH + "/ai/ai-ploy-qrcode-large.webp",
            thumbnail: IMAGE_PATH + "/ai/ai-ploy-thumbnail.webp",
        },
    },
    shape: {
        default: {
            shape1: {
                title: "CHORN's default shape-1",
                path: IMAGE_PATH + "/default-shape/default-shape1.png"
            },
            shape2: {
                title: "CHORN's default shape-1",
                path: IMAGE_PATH + "/default-shape/default-shape2.png"
            },
            shape3: {
                title: "CHORN's default shape-1",
                path: IMAGE_PATH + "/default-shape/default-shape3.png"
            },
            shape4: {
                title: "CHORN's default shape-1",
                path: IMAGE_PATH + "/default-shape/default-shape4.png"
            }
        },
        main: {
            shape1: {
                title: "CHORN's main slide shape-1",
                path: IMAGE_PATH + "/main-slider/slider-shape-1.png"
            },
            shape2: {
                title: "CHORN's main slide shape-2",
                path: IMAGE_PATH + "/main-slider/slider-shape-2.png"
            },
            shape3: {
                title: "CHORN's main slide shape-3",
                path: IMAGE_PATH + "/main-slider/slider-shape-3.png"
            },
            shape4: {
                title: "CHORN's main slide shape-4",
                path: IMAGE_PATH + "/main-slider/slider-shape-4.png"
            },
            shape5: {
                title: "CHORN's main slide shape-5",
                path: IMAGE_PATH + "/main-slider/slider-shape-5.png"
            },
        },
    },
    feature: {
        default: {
            title: "CHORN's feature image",
            path: IMAGE_PATH + "/features/features-2.webp"
        },
        suvarnabhumi: {
            title: "CHORN's image suvarnbhumi",
            path: IMAGE_PATH + "/features/suvarnabhumi-airport-optimize.webp"
        },
        cloudGuru: {
            title: "CHORN's image cloud guru",
            path: IMAGE_PATH + "/features/cloud-guru-optimize.webp"
        },
        morningSky: {
            title: "CHORN's image cloud guru",
            path: IMAGE_PATH + "/features/morning-sky-optimize.webp"
        }
    },
    gallery: {
        main: {
            title: "CHORN's gallery global main",
            image375: IMAGE_PATH + "/gallery/chorn-global-001-image-375.webp",
            image750: IMAGE_PATH + "/gallery/chorn-global-001-image-750.webp",
            image1200: IMAGE_PATH + "/gallery/chorn-global-001-image-1200.webp",
            large: IMAGE_PATH + "/gallery/chorn-global-001-optimize.webp",
            thumbnail: ""
        },
        slides: [
            {
                title: "CHORN global slide-1",
                image375: IMAGE_PATH + "/gallery/chorn-global-002-image-375.webp",
                image750: IMAGE_PATH + "/gallery/chorn-global-002-image-750.webp",
                image1200: IMAGE_PATH + "/gallery/chorn-global-002-image-1200.webp",
                large: IMAGE_PATH + "/gallery/chorn-global-002-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN global slide-2",
                image375: IMAGE_PATH + "/gallery/chorn-global-003-image-375-1.webp",
                image750: IMAGE_PATH + "/gallery/chorn-global-003-image-750-1.webp",
                image1200: IMAGE_PATH + "/gallery/chorn-global-003-image-1200-1.webp",
                large: IMAGE_PATH + "/gallery/chorn-global-003-large-1.webp",
                thumbnail: ""
            },
            {
                title: "CHORN global slide-3",
                image375: IMAGE_PATH + "/gallery/chorn-global-004-image-375.webp",
                image750: IMAGE_PATH + "/gallery/chorn-global-004-image-750.webp",
                image1200: IMAGE_PATH + "/gallery/chorn-global-004-image-1200.webp",
                large: IMAGE_PATH + "/gallery/chorn-global-004-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN global slide-4",
                image375: IMAGE_PATH + "/gallery/chorn-global-005-image-375.webp",
                image750: IMAGE_PATH + "/gallery/chorn-global-005-image-750.webp",
                image1200: IMAGE_PATH + "/gallery/chorn-global-005-image-1200.webp",
                large: IMAGE_PATH + "/gallery/chorn-global-005-large.webp",
                thumbnail: ""
            },
            {
                title: "CHORN global slide-5",
                image375: IMAGE_PATH + "/gallery/global-slide-05-375.webp",
                image750: IMAGE_PATH + "/gallery/global-slide-05-750.webp",
                image1200: IMAGE_PATH + "/gallery/global-slide-05-1200.webp",
                thumbnail: ""
            },
        ]
    },
    about: {
        title: "CHORN's about image",
        image375: IMAGE_PATH + "/about/about-chorn-image-375.webp",
        image750: IMAGE_PATH + "/about/about-chorn-image-750.webp",
        image1200: IMAGE_PATH + "/about/about-chorn-image-1200.webp",
        large: IMAGE_PATH + "/about/about-chorn-large.webp",
        thumbnail: ""
    },
    NotFound404: {
        title: "CHORN's 404 not found image",
        path: IMAGE_PATH + "/404-error.webp"
    },
    whatsapp: {
        md: {
            title: "CHORN's whatsapp-md",
            path: IMAGE_PATH + "/logo-2025/whatsapp.png"
        }
    },
    profile: {
        md: {
            title: "CHORN's profile md-size",
            path: IMAGE_PATH + "/contact/chorn-profile-md.png"
        }
    },
    logo: {
        lg: {
            title: "CHORN's logo lg-size",
            path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-circle-lg.png"
        },
        md: {
            title: "CHORN's logo md-size",
            path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-circle-md.png"
        },
        sm: {
            title: "CHORN's logo sm-size",
            path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-circle-sm.png"
        },
        business: {
            title: "CHORN's business logo",
            path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-circle-md.png"
        },
        rec: {
            sm: {
                title: "CHORN's rectangle logo sm-size",
                path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-rec-sm.png"
            },
            lg: {
                title: "CHORN's rectangle logo lg-size",
                path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-rec-lg.png"
            },
        },
        whiteRec: {
            sm: {
                title: "CHORN's rectangle logo sm-size",
                path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-rec-white-sm.png"
            },
            lg: {
                title: "CHORN's rectangle logo lg-size",
                path: IMAGE_PATH + "/logo-2025/chorn-logo-2025-rec-white-lg.png"
            },
        },
        line: {
            sm: {
                title: "CHORN's LINE OA image",
                path: IMAGE_PATH + "/line/com.linecorp.lineoa.icon_.png"
            },
        }
    },
    home: {
        main: {
            title: "CHORN's main banner image",
            path: IMAGE_PATH + "/model/home.png"
        },
        slides: [
            {
                title: "CHORN home slide-1",
                image375: IMAGE_PATH + "/home/chorn-workplace-001-image-375.webp",
                image750: IMAGE_PATH + "/home/chorn-workplace-001-image-750.webp",
                image1200: IMAGE_PATH + "/home/chorn-workplace-001-image-1200.webp",
                large: IMAGE_PATH + "/home/chorn-workplace-001-large.webp",
                thumbnail: ""
            },
            {

                title: "CHORN home slide-2",
                image375: IMAGE_PATH + "/home/chorn-workplace-002-image-375.webp",
                image750: IMAGE_PATH + "/home/chorn-workplace-002-image-750.webp",
                image1200: IMAGE_PATH + "/home/chorn-workplace-002-image-1200.webp",
                large: IMAGE_PATH + "/home/chorn-workplace-002-large.webp",
                thumbnail: ""
            },
            {

                title: "CHORN home slide-3",
                image375: IMAGE_PATH + "/home/chorn-workplace-003-image-375.webp",
                image750: IMAGE_PATH + "/home/chorn-workplace-003-image-750.webp",
                image1200: IMAGE_PATH + "/home/chorn-workplace-003-image-1200.webp",
                large: IMAGE_PATH + "/home/chorn-workplace-003-large.webp",
                thumbnail: ""
            },
            {

                title: "CHORN home slide-4",
                image375: IMAGE_PATH + "/home/chorn-workplace-004-image-375.webp",
                image750: IMAGE_PATH + "/home/chorn-workplace-004-image-750.webp",
                image1200: IMAGE_PATH + "/home/chorn-workplace-004-image-1200.webp",
                large: IMAGE_PATH + "/home/chorn-workplace-004-large.webp",
                thumbnail: ""
            },
            {

                title: "CHORN home slide-5",
                image375: IMAGE_PATH + "/home/chorn-workplace-005-image-375.webp",
                image750: IMAGE_PATH + "/home/chorn-workplace-005-image-750.webp",
                image1200: IMAGE_PATH + "/home/chorn-workplace-005-image-1200.webp",
                large: IMAGE_PATH + "/home/chorn-workplace-005-large.webp",
                thumbnail: ""
            },
            {

                title: "CHORN home slide-6",
                image375: IMAGE_PATH + "/home/chorn-workplace-006-image-375.webp",
                image750: IMAGE_PATH + "/home/chorn-workplace-006-image-750.webp",
                image1200: IMAGE_PATH + "/home/chorn-workplace-006-image-1200.webp",
                large: IMAGE_PATH + "/home/chorn-workplace-006-large.webp",
                thumbnail: ""
            },
        ]
    },
    banner: {
        banner1: {
            title: "CHORN's banner image",
            path: IMAGE_PATH + "/banner/banner-llm-ai.webp"
        },
        mainBannerBg1: {
            title: "CHORN's main banner bg - 1",
            path: IMAGE_PATH + "/main-banner-bg-1.webp"
        },
        mainBannerBg2: {
            title: "CHORN's main banner bg - 2",
            path: IMAGE_PATH + "/main-banner-bg-2.webp"
        },
        mainBannerBg3: {
            title: "CHORN's main banner bg - 3",
            path: IMAGE_PATH + "/main-banner-bg-3.webp"
        },
        mainBannerBg4: {
            title: "CHORN's main banner bg - 4",
            path: IMAGE_PATH + "/main-banner-bg-4.webp"
        },
    },
    pageBanner: {
        cover1: {
            title: "CHORN's cover image-1",
            path: IMAGE_PATH + "/page-banner/cover-1.webp",
        },
    },
    line: {
        qrcode: {
            title: "CHORN's LINE QR Code",
            path: IMAGE_PATH + "/line/line-qr-code.jpg",
        },
        icon: {
            title: "CHORN's LINE icon",
            path: IMAGE_PATH + "/line/line-icon.png",
            link: "https://lin.ee/HzWJ2bJ",
        }
    },
    contact: {
        whatsapp: {
            title: "CHORN's WhatsApp",
            path: IMAGE_PATH + "/contact/WhatsApp-qrcode.jpg",
        },
        main: {
            title: "CHORN contact slide-1",
            image375: IMAGE_PATH + "/contact/contact-image-375.webp",
            image750: IMAGE_PATH + "/contact/contact-image-750.webp",
            image1200: IMAGE_PATH + "/contact/contact-image-1200.webp",
            thumbnail: ""
        },
        slides: [
            {
                title: "CHORN contact slide-1",
                image375: IMAGE_PATH + "/contact/slides/contact-slide-01-375.webp",
                image750: IMAGE_PATH + "/contact/slides/contact-slide-01-750.webp",
                image1200: IMAGE_PATH + "/contact/slides/contact-slide-01-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN contact slide-2",
                image375: IMAGE_PATH + "/contact/slides/contact-slide-02-375.webp",
                image750: IMAGE_PATH + "/contact/slides/contact-slide-02-750.webp",
                image1200: IMAGE_PATH + "/contact/slides/contact-slide-02-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN contact slide-3",
                image375: IMAGE_PATH + "/contact/slides/contact-slide-03-375.webp",
                image750: IMAGE_PATH + "/contact/slides/contact-slide-03-750.webp",
                image1200: IMAGE_PATH + "/contact/slides/contact-slide-03-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN contact slide-4",
                image375: IMAGE_PATH + "/contact/slides/contact-slide-04-375.webp",
                image750: IMAGE_PATH + "/contact/slides/contact-slide-04-750.webp",
                image1200: IMAGE_PATH + "/contact/slides/contact-slide-04-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN contact slide-5",
                image375: IMAGE_PATH + "/contact/slides/contact-slide-05-375.webp",
                image750: IMAGE_PATH + "/contact/slides/contact-slide-05-750.webp",
                image1200: IMAGE_PATH + "/contact/slides/contact-slide-05-1200.webp",
                thumbnail: ""
            },
        ]
    },
    llm: {
        slides: [
            {
                title: "CHORN LLM slide-1",
                image375: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-01-375.webp",
                image750: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-01-750.webp",
                image1200: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-01-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN LLM slide-2",
                image375: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-02-375.webp",
                image750: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-02-750.webp",
                image1200: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-02-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN LLM slide-3",
                image375: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-03-375.webp",
                image750: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-03-750.webp",
                image1200: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-03-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN LLM slide-4",
                image375: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-04-375.webp",
                image750: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-04-750.webp",
                image1200: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-04-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN LLM slide-5",
                image375: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-05-375.webp",
                image750: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-05-750.webp",
                image1200: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-05-1200.webp",
                thumbnail: ""
            },
            {
                title: "CHORN LLM slide-6",
                image375: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-06-375.webp",
                image750: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-06-750.webp",
                image1200: IMAGE_PATH + "/llm-ai-integration/llm-ai-integration-06-1200.webp",
                thumbnail: ""
            },
        ]
    }
}