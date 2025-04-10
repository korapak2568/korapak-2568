import {ISitemapChorn} from "@/lib/model/ISitemapChorn";
import {ImageUrl} from "@/image/ImageUrl";

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
                path: ImageUrl.ai.fah.image750
            }
        ]
    },
    {
        url: '/ai-companions/aom', images: [
            {
                path: ImageUrl.ai.aom.image750
            }
        ]
    },
    {
        url: '/ai-companions/fah', images: [
            {
                path: ImageUrl.ai.fah.image750
            }
        ]
    },
    {
        url: '/ai-companions/ploy', images: [
            {
                path: ImageUrl.ai.ploy.image750
            }
        ]
    },
    {
        url: '/gallery',
        images: [
            {path: ImageUrl.gallery.main.image750},
            {path: ImageUrl.gallery.slides[0].image750},
            {path: ImageUrl.gallery.slides[1].image750},
            {path: ImageUrl.gallery.slides[2].image750},
            {path: ImageUrl.gallery.slides[3].image750},
        ]
    },

    //technical-expertise/ai-solutions
    {
        url: '/technical-expertise/ai-solutions', images: [
            {path: ImageUrl.banner.banner1.path},
            {path: ImageUrl.ai.fah.image750},
        ]
    },

    // cloud-devops
    {
        url: '/technical-expertise/cloud-devops', images: [
            {path: ImageUrl.devops.frameworks.docker.image750},
            {path: ImageUrl.devops.frameworks.kube.image750},
            {path: ImageUrl.devops.frameworks.github.image750},
        ]
    },
    {
        url: '/technical-expertise/cloud-devops/appium',
        images: [{path: ImageUrl.devops.frameworks.appium.image750}]
    },
    {
        url: '/technical-expertise/cloud-devops/docker',
        images: [{path: ImageUrl.devops.frameworks.docker.image750}]
    },
    {
        url: '/technical-expertise/cloud-devops/github',
        images: [{path: ImageUrl.devops.frameworks.github.image750}]
    },
    {
        url: '/technical-expertise/cloud-devops/gitlab',
        images: [{path: ImageUrl.devops.frameworks.gitlab.image750}]
    },
    {
        url: '/technical-expertise/cloud-devops/jenkins',
        images: [{path: ImageUrl.devops.frameworks.jenkins.image750}]
    },
    {
        url: '/technical-expertise/cloud-devops/kubernetes',
        images: [{path: ImageUrl.devops.frameworks.kube.image750}]
    },
    {
        url: '/technical-expertise/cloud-devops/postman',
        images: [{path: ImageUrl.devops.frameworks.postman.image750}]
    },
    {
        url: '/technical-expertise/cloud-devops/soapui',
        images: [{path: ImageUrl.devops.frameworks.soapui.image750}]
    },

    // cloud-infrastructure-systems-architecture
    {
        url: '/technical-expertise/cloud-infrastructure-systems-architecture',
        images: [{path: ''}]
    },

    // front-end-developer
    {
        url: '/technical-expertise/front-end-developer', images: [
            {path: ImageUrl.frontend.frameworks.nextjs.image750},
            {path: ImageUrl.frontend.frameworks.react.image750},
            {path: ImageUrl.frontend.frameworks.angular.image750},
            {path: ImageUrl.frontend.frameworks.vue.image750},
            {path: ImageUrl.frontend.frameworks.javascript.image750},
            {path: ImageUrl.frontend.frameworks.typescript.image750},
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/angular-developer', images: [
            {path: ImageUrl.frontend.frameworks.angular.image750}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/css3-developer', images: [
            {path: ImageUrl.frontend.frameworks.css3.image750}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/html5-developer', images: [
            {path: ImageUrl.frontend.frameworks.html5.image750}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/javascript-developer', images: [
            {path: ImageUrl.frontend.frameworks.javascript.image750}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/nextjs-developer', images: [
            {path: ImageUrl.frontend.frameworks.nextjs.image750}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/react-developer', images: [
            {path: ImageUrl.frontend.frameworks.react.image750}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/typescript-developer', images: [
            {path: ImageUrl.frontend.frameworks.typescript.image750}
        ]
    },
    {
        url: '/technical-expertise/front-end-developer/vue-developer', images: [
            {path: ImageUrl.frontend.frameworks.vue.image750}
        ]
    },

    // full-stack-developer
    {
        url: '/technical-expertise/full-stack-developer', images: [
            {path: ImageUrl.backend.frameworks.nodejs.image750},
            {path: ImageUrl.backend.frameworks.go.image750},
            {path: ImageUrl.backend.frameworks.java.image750},
            {path: ImageUrl.backend.frameworks.python.image750},
            {path: ImageUrl.backend.frameworks.php.image750},
            {path: ImageUrl.backend.frameworks.dotnetcore.image750}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/dotnetcore-developer', images: [
            {path: ImageUrl.backend.frameworks.dotnetcore.image750}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/go-developer', images: [
            {path: ImageUrl.backend.frameworks.go.image750}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/java-spring-boot-developer', images: [
            {path: ImageUrl.backend.frameworks.java.image750}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/nodejs-developer', images: [
            {path: ImageUrl.backend.frameworks.nodejs.image750}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/php-developer', images: [
            {path: ImageUrl.backend.frameworks.php.image750}
        ]
    },
    {
        url: '/technical-expertise/full-stack-developer/python-developer', images: [
            {path: ImageUrl.backend.frameworks.python.image750}
        ]
    },

    //technical-expertise/mobile-development
    {url: '/technical-expertise/mobile-development', images: [{path: ''}]},

    //technical-expertise/web3-blockchain-smart-contract-development
    {url: '/technical-expertise/web3-blockchain-smart-contract-development', images: [{path: ''}]},

    //technical-expertise/web-development
    {
        url: '/technical-expertise/web-development', images: [
            {path: ImageUrl.frontend.frameworks.angular.thumbnail},
            {path: ImageUrl.frontend.frameworks.vue.thumbnail},
            {path: ImageUrl.frontend.frameworks.javascript.thumbnail},

            {path: ImageUrl.backend.frameworks.nodejs.thumbnail},
            {path: ImageUrl.backend.frameworks.go.thumbnail},
            {path: ImageUrl.backend.frameworks.java.thumbnail},

            {path: ImageUrl.backend.frameworks.php.thumbnail},
            {path: ImageUrl.backend.frameworks.python.thumbnail},
            {path: ImageUrl.backend.frameworks.dotnetcore.thumbnail}
        ]
    },

    //term-of-service
    {url: '/terms-of-service', images: []},

    //privacy-policy
    {url: '/privacy-policy', images: []},

    //workplace-policy
    {url: '/workplace-policy', images: []}
]