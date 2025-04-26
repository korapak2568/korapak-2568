import {INavbar} from "@/data/navbar/model/INavbar";
import {ImageUrl} from "@/image/ImageUrl";

export const Navbar3DevOps: INavbar[] = [
    {
        group: "/technical-expertise/cloud-devops/",
        label: "Docker",
        level: 3,
        image: ImageUrl.devops.frameworks.docker.thumbnail,
        link: "/technical-expertise/cloud-devops/docker/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "/technical-expertise/cloud-devops/",
        label: "Kube",
        level: 3,
        image: ImageUrl.devops.frameworks.kube.thumbnail,
        link: "/technical-expertise/cloud-devops/kubernetes/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "/technical-expertise/cloud-devops/",
        label: "GitHub",
        level: 3,
        image: ImageUrl.devops.frameworks.github.thumbnail,
        link: "/technical-expertise/cloud-devops/github/",
        isSubmenu: false,
        submenu: [],
    }
]