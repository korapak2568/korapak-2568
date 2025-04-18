import {IOpenGraphDevOps} from "@/metadata/model/opengraph/IOpenGraphDevOps";
import {TrackVersion} from "../version/MetadataVersion";
import {CDN_IMAGE} from "@/image/ImageUrl";

export const OpenGraphDevOps: IOpenGraphDevOps = {
    main: {
        url: CDN_IMAGE + "/metadata/devops/devops-services.png" + TrackVersion,
        alt: "CHORN's image of DevOps & Testing Services Banner"
    },
    appium: {
        url: CDN_IMAGE + "/metadata/devops/appium.png" + TrackVersion,
        alt: "CHORN's image of Appium Testing Banner"
    },
    docker: {
        url: CDN_IMAGE + "/metadata/devops/docker.png" + TrackVersion,
        alt: "CHORN's image of Docker DevOps Banner"
    },
    github: {
        url: CDN_IMAGE + "/metadata/devops/github.png" + TrackVersion,
        alt: "CHORN's image of GitHub DevOps Banner"
    },
    gitlab: {
        url: CDN_IMAGE + "/metadata/devops/gitlab.png" + TrackVersion,
        alt: "CHORN's image of GitLab DevOps Banner"
    },
    jenkins: {
        url: CDN_IMAGE + "/metadata/devops/jenkins.png" + TrackVersion,
        alt: "CHORN's image of Jenkins DevOps Banner"
    },
    kube: {
        url: CDN_IMAGE + "/metadata/devops/kubernetes.png" + TrackVersion,
        alt: "CHORN's image of Kubernetes DevOps Banner"
    },
    postman: {
        url: CDN_IMAGE + "/metadata/devops/postman.png" + TrackVersion,
        alt: "CHORN's image of Postman API Testing Banner"
    },
    selenium: {
        url: CDN_IMAGE + "/metadata/devops/selenium.png" + TrackVersion,
        alt: "CHORN's image of Selenium Testing Banner"
    },
    soapui: {
        url: CDN_IMAGE + "/metadata/devops/soapui.png" + TrackVersion,
        alt: "CHORN's image of SoapUI Testing Banner"
    },
}