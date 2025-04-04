import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import { ImageUrl } from "@/data/image/ImageUrl";

export const DockerFI: IDevOpsStack = {
    title: "Docker",
    description: "Tehosta sovellusten käyttöönottoa konttiteknologialla varmistaaksesi johdonmukaiset ja tehokkaat ympäristöt.",
    image: ImageUrl.devopsThumbnails.docker.path,
    alt: "Logo, joka edustaa Docker-teknologiaosaamista",
    readMore: "Tutustu Dockeriin tehokasta DevOps-testausta varten",
    link: "/technical-expertise/cloud-devops/docker",
    features: [
        {
            title: "Docker",
            description: "Docker on tehokas alusta sovellusten kehittämiseen, toimittamiseen ja ajamiseen konteissa, mikä varmistaa johdonmukaisuuden eri ympäristöissä. Ihanteellinen modernille DevOps-käytännölle.",
            list: []
        },
        {
            title: "Dockering vahvuudet",
            description: "Docker erottuu seuraavilla keskeisillä ominaisuuksilla",
            list: [
                "Konttiteknologia",
                "Ympäristön johdonmukaisuus",
                "Resurssitehokkuus",
                "Skaalautuvuus",
                "Eristys",
                "Nopea käyttöönotto",
                "Yksinkertaistettu konfigurointi"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "Docker ratkaisee käyttöönottohaasteet tarjoamalla konttiratkaisuja, jotka parantavat suorituskykyä, skaalautuvuutta ja johdonmukaisuutta.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on Docker?",
            answer: "Docker on alusta, joka käyttää konttiteknologiaa sovellusten käyttöönottoon yhtenäisissä ja eristetyissä ympäristöissä."
        },
        {
            question: "Miten Docker parantaa käyttöönoton johdonmukaisuutta?",
            answer: "Docker varmistaa johdonmukaisen käyttöönoton pakkaamalla sovellukset ja niiden riippuvuudet konteiksi, jotka toimivat samalla tavalla eri ympäristöissä."
        },
        {
            question: "Mitkä ovat Dockerin hyödyt?",
            answer: "Dockerin käyttöetuja ovat ympäristön johdonmukaisuus, resurssitehokkuus, skaalautuvuus, eristys ja nopea käyttöönotto."
        }
    ],
}
