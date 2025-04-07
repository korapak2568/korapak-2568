import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const KubeFI: IDevOpsStack = {
    title: "Kubernetes",
    description: "Automatisoi konttien orkestrointi Kubernetesilla skaalautuvien ja vikasietoisien sovellusten luomiseksi.",
    image: ImageUrl.devopsThumbnails.kube.path,
    alt: "Logo, joka edustaa Kubernetes-teknologiaosaamista",
    readMore: "Tutustu Kubernetesin DevOps-testiratkaisuihin",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetes on johtava konttien orkestrointialusta, joka automatisoi konttien käyttöönoton, skaalaamisen ja hallinnan. Välttämätön suurille ja vikasietoisille järjestelmille.",
            list: []
        },
        {
            title: "Kubernetesin vahvuudet",
            description: "Kubernetes erottuu seuraavilla vahvoilla ominaisuuksilla",
            list: [
                "Automaattinen käyttöönotto",
                "Skaalautuvuus",
                "Itseparannus",
                "Palveluiden löytäminen",
                "Kuormantasaus",
                "Tallennuksen orkestrointi",
                "Konfiguraation hallinta"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "Kubernetes ratkaisee orkestroinnin haasteita tarjoamalla skaalautuvia ja automatisoituja ratkaisuja konttisovelluksille.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on Kubernetes?",
            answer: "Kubernetes on konttien orkestrointialusta, joka automatisoi konttien käyttöönoton, skaalaamisen ja hallinnan."
        },
        {
            question: "Miten Kubernetes parantaa sovellusten skaalautuvuutta?",
            answer: "Kubernetes parantaa sovellusten skaalautuvuutta hallitsemalla automaattisesti konttien skaalausta kysynnän mukaan."
        },
        {
            question: "Mitkä ovat Kubernetesin käytön edut?",
            answer: "Kubernetesin etuja ovat automaattinen käyttöönotto, skaalautuvuus, itseparannus, palveluiden löytäminen, kuormantasaus ja tallennuksen orkestrointi."
        }
    ],
}
