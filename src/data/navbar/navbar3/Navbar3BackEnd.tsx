import {INavbar} from "@/data/navbar/model/INavbar";
import {ImageUrl} from "@/image/ImageUrl";

export const Navbar3BackEnd: INavbar[] = [
    {
        group: "/technical-expertise/full-stack-developer/",
        label: "Java",
        level: 3,
        image: ImageUrl.backend.frameworks.java.thumbnail,
        link: "/technical-expertise/full-stack-developer/java-spring-boot-developer/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "/technical-expertise/full-stack-developer/",
        label: "Node.js",
        level: 3,
        image: ImageUrl.backend.frameworks.nodejs.thumbnail,
        link: "/technical-expertise/full-stack-developer/nodejs-developer/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "/technical-expertise/full-stack-developer/",
        label: "Go",
        level: 3,
        image: ImageUrl.backend.frameworks.go.thumbnail,
        link: "/technical-expertise/full-stack-developer/go-developer/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "/technical-expertise/full-stack-developer/",
        label: "Python",
        level: 3,
        image: ImageUrl.backend.frameworks.python.thumbnail,
        link: "/technical-expertise/full-stack-developer/python-developer/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "/technical-expertise/full-stack-developer/",
        label: "PHP",
        level: 3,
        image: ImageUrl.backend.frameworks.php.thumbnail,
        link: "/technical-expertise/full-stack-developer/php-developer/",
        isSubmenu: false,
        submenu: [],
    },
    {
        group: "/technical-expertise/full-stack-developer/",
        label: ".NET Core",
        level: 3,
        image: ImageUrl.backend.frameworks.dotnetcore.thumbnail,
        link: "/technical-expertise/full-stack-developer/dotnetcore-developer/",
        isSubmenu: false,
        submenu: [],
    },
]