import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueFI} from "@/data/frontend/frameworks/vue/VueFI";
import {TypeScriptFI} from "@/data/frontend/frameworks/typescript/TypeScriptFI";
import {ReactFI} from "@/data/frontend/frameworks/react/ReactFI";
import {NextjsFI} from "@/data/frontend/frameworks/nextjs/NextjsFI";
import {JavaScriptFI} from "@/data/frontend/frameworks/javascript/JavaScriptFI";
import {Html5FI} from "@/data/frontend/frameworks/html5/Html5FI";
import {Css3FI} from "@/data/frontend/frameworks/css3/Css3FI";
import {AngularFI} from "@/data/frontend/frameworks/angular/AngularFI";

export const FrontEndFI: IFrontEnd = {
    title: "Front-End Kokemus",
    span: "Front-End Kehityskokemus",
    subTitle: "",

    angular: AngularFI,
    css3: Css3FI,
    html5: Html5FI,
    nextjs: NextjsFI,
    react: ReactFI,
    typescript: TypeScriptFI,
    vue: VueFI,
    javascript: JavaScriptFI,

    stacks: [],

    services: {
        title: "Front-End-kehityspalvelut",
        descriptions: [
            "Toteuta verkkovisiosi asiantuntevilla front-end-kehityspalveluillamme. CHORN toimittaa käyttäjäystävällisiä, visuaalisesti vaikuttavia ja täysin responsiivisia verkkosivustoja, jotka sitouttavat yleisösi. Olemme erikoistuneet moderneihin kehyksiin, kuten Next.js, React, Angular ja Vue.js, sekä ydinteknologioihin, kuten HTML5 ja CSS3. Tarvitsetpa hakukoneoptimoidun yksisivuisen sovelluksen (SPA) tai kehittyneen monisivuisen alustan, kehittäjämme tuottavat laadukkaita ratkaisuja ajallaan. Kumppanuus CHORNin kanssa takaa vaikuttavia digitaalisia kokemuksia, jotka kiehtovat kävijöitä ja vauhdittavat liiketoiminnan kasvua."
        ],
        items: [
            {
                title: "Modernien kehysten käyttöönotto",
                description: "Luo dynaamisia ja vuorovaikutteisia verkkosovelluksia huipputeknologioilla, kuten Next.js ja React, jotka tarjoavat optimaalisen suorituskyvyn ja käyttökokemuksen."
            },
            {
                title: "SEO-optimointi",
                description: "Paranna verkkosivustosi näkyvyyttä Googlessa ja muissa hakukoneissa optimoidun koodirakenteen, nopeiden latausaikojen ja mobiiliystävällisen suunnittelun avulla."
            },
            {
                title: "Proof of Concept (PoC) -kehitys",
                description: "Testaa ja validoi innovatiiviset ideasi nopeasti toimivilla prototyypeillä ennen täysimittaiseen kehitykseen sitoutumista."
            },
            {
                title: "Minimum Viable Product (MVP) -kehitys",
                description: "Julkaise ominaisuuksiltaan kattava, skaalautuva tuotevarhaisversio houkutellaksesi käyttäjiä, saadaksesi palautetta ja herättääksesi sijoittajien kiinnostuksen."
            },
            {
                title: "UI/UX-suunnittelun huippuosaaminen",
                description: "Paranna käyttäjäkokemusta intuitiivisilla ja kauniilla käyttöliittymillä, jotka lisäävät sitoutumista, vähentävät poistumisprosenttia ja kasvattavat konversioita."
            }
        ]
    }
}

FrontEndFI.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]