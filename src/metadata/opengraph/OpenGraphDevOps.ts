import {IOpenGraphDevOps} from "@/metadata/model/opengraph/IOpenGraphDevOps";
import {TrackVersion} from "../version/MetadataVersion";

export const OpenGraphDevOps: IOpenGraphDevOps = {
    main: {
        url: "/images/metadata/devops/devops-services.png" + TrackVersion,
        alt: "CHORN's image of DevOps & Testing Services Banner"
    },
    appium: {
        url: "/images/metadata/devops/appium.png" + TrackVersion,
        alt: "CHORN's image of Appium Testing Banner"
    },
    docker: {
        url: "/images/metadata/devops/docker.png" + TrackVersion,
        alt: "CHORN's image of Docker DevOps Banner"
    },
    github: {
        url: "/images/metadata/devops/github.png" + TrackVersion,
        alt: "CHORN's image of GitHub DevOps Banner"
    },
    gitlab: {
        url: "/images/metadata/devops/gitlab.png" + TrackVersion,
        alt: "CHORN's image of GitLab DevOps Banner"
    },
    jenkins: {
        url: "/images/metadata/devops/jenkins.png" + TrackVersion,
        alt: "CHORN's image of Jenkins DevOps Banner"
    },
    kube: {
        url: "/images/metadata/devops/kubernetes.png" + TrackVersion,
        alt: "CHORN's image of Kubernetes DevOps Banner"
    },
    postman: {
        url: "/images/metadata/devops/postman.png" + TrackVersion,
        alt: "CHORN's image of Postman API Testing Banner"
    },
    selenium: {
        url: "/images/metadata/devops/selenium.png" + TrackVersion,
        alt: "CHORN's image of Selenium Testing Banner"
    },
    soapui: {
        url: "/images/metadata/devops/soapui.png" + TrackVersion,
        alt: "CHORN's image of SoapUI Testing Banner"
    },
}