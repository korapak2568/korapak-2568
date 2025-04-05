import {ISitemapChorn} from "@/lib/model/ISitemapChorn";
import {ImageUrl} from "@/data/image/ImageUrl";

export const SitemapChorns: ISitemapChorn[] = [
    {
        url: '', images: [
            {path: ImageUrl.home.slides[0].image750},
            {path: ImageUrl.home.slides[1].image750},
            {path: ImageUrl.home.slides[2].image750},
            {path: ImageUrl.home.slides[3].image750},
            {path: ImageUrl.home.slides[4].image750},
            {path: ImageUrl.home.slides[5].image750},
        ]
    },
    {
        url: '/404', images: []
    },
    {
        url: '/about-chorn', images: [
            {
                path: ImageUrl.about.image750
            }
        ]
    },
    {
        url: '/ai-companions', images: [
            {
                path: ImageUrl.ai.fah.main.path
            }
        ]
    },
    {
        url: '/ai-companions/aom', images: [
            {
                path: ImageUrl.ai.aom.main.path
            }
        ]
    },
    {
        url: '/ai-companions/fah', images: [
            {
                path: ImageUrl.ai.fah.main.path
            }
        ]
    },
    {
        url: '/ai-companions/ploy', images: [
            {
                path: ImageUrl.ai.ploy.main.path
            }
        ]
    },
    {
        url: '/gallery',
        images: [
            {path: ImageUrl.gallery.main.image1200},
            {path: ImageUrl.gallery.slides[0].image1200},
            {path: ImageUrl.gallery.slides[1].image1200},
            {path: ImageUrl.gallery.slides[2].image1200},
            {path: ImageUrl.gallery.slides[3].image1200},
        ]
    },

    //technical-expertise/ai-solutions
    {
        url: '/technical-expertise/ai-solutions', images: [
            {path: ImageUrl.banner.banner1.path},
            {path: ImageUrl.ai.fah.main.path},
        ]
    },

    // cloud-devops
    {
        url: '/technical-expertise/cloud-devops', images: [
            {path: ImageUrl.devopsThumbnails.docker.path},
            {path: ImageUrl.devopsThumbnails.kube.path},
            {path: ImageUrl.devopsThumbnails.github.path},
        ]
    },
    {url: '/technical-expertise/cloud-devops/appium', images: [{path: ImageUrl.devopsTesting.appium.path}]},
    {url: '/technical-expertise/cloud-devops/docker', images: [{path: ImageUrl.devopsTesting.docker.path}]},
    {url: '/technical-expertise/cloud-devops/github', images: [{path: ImageUrl.devopsTesting.github.path}]},
    {url: '/technical-expertise/cloud-devops/gitlab', images: [{path: ImageUrl.devopsTesting.gitlab.path}]},
    {url: '/technical-expertise/cloud-devops/jenkins', images: [{path: ImageUrl.devopsTesting.jenkins.path}]},
    {url: '/technical-expertise/cloud-devops/kubernetes', images: [{path: ImageUrl.devopsTesting.kubernetes.path}]},
    {url: '/technical-expertise/cloud-devops/postman', images: [{path: ImageUrl.devopsTesting.postman.path}]},
    {url: '/technical-expertise/cloud-devops/soapui', images: [{path: ImageUrl.devopsTesting.soapui.path}]},

    // cloud-infrastructure-systems-architecture
    {url: '/technical-expertise/cloud-infrastructure-systems-architecture', images: [{path: ''}]},

    // front-end-developer
    {
        url: '/technical-expertise/front-end-developer', images: [
            {path: ImageUrl.frontendThumbnails.nextjs.path},
            {path: ImageUrl.frontendThumbnails.react.path},
            {path: ImageUrl.frontendThumbnails.angular.path},
            {path: ImageUrl.frontendThumbnails.vue.path},
            {path: ImageUrl.frontendThumbnails.javascript.path},
            {path: ImageUrl.frontendThumbnails.typescript.path},
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/angular-developer', images: [
            {path: ImageUrl.serviceDetails.angular.path}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/css3-developer', images: [
            {path: ImageUrl.serviceDetails.css3.path}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/html5-developer', images: [
            {path: ImageUrl.serviceDetails.html5.path}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/javascript-developer', images: [
            {path: ImageUrl.serviceDetails.javascript.path}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/nextjs-developer', images: [
            {path: ImageUrl.serviceDetails.nextjs.path}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/react-developer', images: [
            {path: ImageUrl.serviceDetails.react.path}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/typescript-developer', images: [
            {path: ImageUrl.serviceDetails.typescript.path}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/vue-developer', images: [
            {path: ImageUrl.serviceDetails.vue.path}
        ]
    },

    // full-stack-developer
    {
        url: '/technical-expertise/full-stack-developer', images: [
            {path: ImageUrl.fullstackThumbnails.nodejs.path},
            {path: ImageUrl.fullstackThumbnails.go.path},
            {path: ImageUrl.fullstackThumbnails.java.path},
            {path: ImageUrl.fullstackThumbnails.python.path},
            {path: ImageUrl.fullstackThumbnails.php.path},
            {path: ImageUrl.fullstackThumbnails.dotnetcore.path}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/dotnetcore-developer', images: [
            {path: ImageUrl.serviceDetails.dotnetcore.path}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/go-developer', images: [
            {path: ImageUrl.serviceDetails.go.path}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/java-spring-boot-developer', images: [
            {path: ImageUrl.serviceDetails.java.path}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/nodejs-developer', images: [
            {path: ImageUrl.serviceDetails.nodejs.path}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/php-developer', images: [
            {path: ImageUrl.serviceDetails.php.path}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/python-developer', images: [
            {path: ImageUrl.serviceDetails.python.path}
        ]
    },

    //technical-expertise/mobile-development
    {url: '/technical-expertise/mobile-development', images: [{path: ''}]},

    //technical-expertise/web3-blockchain-smart-contract-development
    {url: '/technical-expertise/web3-blockchain-smart-contract-development', images: [{path: ''}]},

    //technical-expertise/web-development
    {
        url: '/technical-expertise/web-development', images: [
            {path: ImageUrl.frontendThumbnails.angular.path},
            {path: ImageUrl.frontendThumbnails.vue.path},
            {path: ImageUrl.frontendThumbnails.javascript.path},
            {path: ImageUrl.fullstackThumbnails.nodejs.path},
            {path: ImageUrl.fullstackThumbnails.go.path},
            {path: ImageUrl.fullstackThumbnails.java.path}
        ]
    },

    //term-of-service
    {url: '/terms-of-service', images: []},

    //privacy-policy
    {url: '/privacy-policy', images: []},

    //workplace-policy
    {url: '/workplace-policy', images: []}
]