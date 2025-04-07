import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const TypeScriptFI: IFrontEndStack = {
    title: "TypeScript",
    description: "TypeScript on vahvasti tyypitetty JavaScriptin superset, joka lisää staattisen tyypityksen, parantaen kehityskokemusta havaitsemalla virheet aikaisessa vaiheessa ja parantamalla koodin laatua. Se kääntyy tavalliseksi JavaScriptiksi, joten se on yhteensopiva kaikkien selainten ja kehysten kanssa.",
    image: ImageUrl.frontendThumbnails.typescript.path,
    alt: "TypeScript-ohjelmointikieltä edustava logo",
    readMore: "Tutustu lisää TypeScript full-stack-kehitysratkaisuihin",
    link: "/technical-expertise/front-end-developer/typescript-developer",
    features: [
        {
            title: "TypeScript-kehitys",
            description: "TypeScript parantaa kehitystä lisäämällä staattisen tyypityksen ja olio-ohjelmoinnin ominaisuuksia, mahdollistaen skaalautuvien ja helposti ylläpidettävien sovellusten rakentamisen.",
            list: []
        },
        {
            title: "Parannettu koodin laatu",
            description: "TypeScriptin tyypintarkistus varmistaa, että mahdolliset virheet havaitaan jo kehitysvaiheessa, vähentäen ajonaikaisia virheitä ja parantaen suurten projektien ylläpidettävyyttä.",
            list: [
                "Staattinen tyypitys",
                "Edistynyt virhetarkistus",
                "Parempi koodin laatu",
                "Tehostettu IDE-tuki",
                "Skaalautuva sovellusarkkitehtuuri",
                "Laaja yhteisön tuki"
            ]
        },
        {
            title: "Parempi kehittäjäkokemus",
            description: "Ominaisuudet kuten tyyppipäättely, rajapinnat ja generics helpottavat monimutkaisten koodikantojen hallintaa. TypeScript integroituu saumattomasti moderneihin työkaluihin, lisäten tuottavuutta ja yhteistyötä.",
            list: []
        },
        {
            title: "Saumaton integrointi kehysten kanssa",
            description: "TypeScript toimii vaivattomasti suosittujen JavaScript-kehysten, kuten Reactin, Angularin ja Vue.js:n, kanssa. Kehittäjät voivat ottaa TypeScriptin käyttöön olemassa olevissa JavaScript-projekteissa asteittain, varmistaen yhteensopivuuden ja skaalautuvuuden.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on TypeScript?",
            answer: "TypeScript on JavaScriptin superset, joka lisää staattisen tyypityksen ja muita edistyneitä ominaisuuksia kehityksen tehostamiseksi."
        },
        {
            question: "Miksi käyttää TypeScriptiä JavaScriptin sijaan?",
            answer: "TypeScriptin staattinen tyypitys ja tehokkaat työkalut auttavat havaitsemaan virheet ajoissa, parantavat koodin laatua ja lisäävät kehittäjien tuottavuutta."
        },
        {
            question: "Voiko TypeScript toimia JavaScript-kehysten kanssa?",
            answer: "Kyllä, TypeScript on täysin yhteensopiva JavaScript-kehysten, kuten Reactin, Angularin ja Vue.js:n, kanssa."
        }
    ],
}
