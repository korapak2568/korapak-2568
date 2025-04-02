import {IOpenGraphDevOps} from "@/metadata/model/opengraph/IOpenGraphDevOps";
import {ImageVersion} from "@/metadata/ImageVersion";
import {Space} from "@/lib/Space";

export const OpenGraphDevOps: IOpenGraphDevOps = {
    main: {
        url: `${Space.public}/metadata/devops-testing-services.png` + ImageVersion,
        alt: `DevOps & Testing Services Banner`
    },
    appium: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/appium.png` + ImageVersion,
        alt: `Appium Testing Banner`
    },
    docker: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/docker.png` + ImageVersion,
        alt: `Docker DevOps Banner`
    },
    github: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/github.png` + ImageVersion,
        alt: `GitHub DevOps Banner`
    },
    gitlab: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/gitlab.png` + ImageVersion,
        alt: `GitLab DevOps Banner`
    },
    jenkins: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/jenkins.png` + ImageVersion,
        alt: `Jenkins DevOps Banner`
    },
    kube: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/kubernetes.png` + ImageVersion,
        alt: `Kubernetes DevOps Banner`
    },
    postman: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/postman.png` + ImageVersion,
        alt: `Postman API Testing Banner`
    },
    selenium: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/selenium.png` + ImageVersion,
        alt: `Selenium Testing Banner`
    },
    soapui: {
        url: `${Space.public}/metadata/technical-expertise/devops-testing/soapui.png` + ImageVersion,
        alt: `SoapUI Testing Banner`
    },
}