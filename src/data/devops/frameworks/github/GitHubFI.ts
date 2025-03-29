import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";

export const GitHubFI: IDevOpsStack = {
    title: "GitHub",
    description: "Tehosta kehitysprosessia GitHubin versionhallinta- ja yhteistyöalustalla.",
    image: "/chorn-images/technical-expertise/cloud-devops/GitHub.webp",
    alt: "Logo, joka edustaa GitHub-teknologiaosaamista",
    readMore: "Opi, miten GitHub tukee tehokasta DevOps-testausta",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub on verkossa toimiva alusta, joka tarjoaa Git-repositorion isännöinnin, yhteistyötyökalut ja laajan valikoiman integraatioita, edistäen tehokasta ja yhteistyöhön perustuvaa ohjelmistokehitystä.",
            list: []
        },
        {
            title: "GitHubin vahvuudet",
            description: "GitHub erottuu seuraavilla keskeisillä ominaisuuksilla",
            list: [
                "Versionhallinta",
                "Yhteistyöhön perustuva kehitys",
                "Pull requestit",
                "Tehtävien seuranta",
                "Koodikatselmointi",
                "Jatkuva integrointi",
                "Laajat integraatiot"
            ]
        },
        {
            title: "Haasteet ja ratkaisut",
            description: "GitHub ratkaisee kehitysprosessin haasteita tarjoamalla tehokkaan versionhallinnan ja yhteistyötyökalut projektien hallinnan tehostamiseksi.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on GitHub?",
            answer: "GitHub on verkossa toimiva alusta, joka tarjoaa Git-repositorion isännöinnin ja yhteistyöhön perustuvat kehitystyökalut."
        },
        {
            question: "Miten GitHub parantaa yhteistyötä?",
            answer: "GitHub parantaa yhteistyötä tarjoamalla ominaisuuksia, kuten pull requestit, tehtävien seuranta ja koodikatselmointi, jotka helpottavat tiimikehitystä."
        },
        {
            question: "Mitkä ovat GitHubin käytön edut?",
            answer: "GitHubin käytön etuja ovat versionhallinta, yhteistyöhön perustuva kehitys, pull requestit, tehtävien seuranta, koodikatselmointi, jatkuva integrointi ja laajat integraatiot."
        }
    ],
}
