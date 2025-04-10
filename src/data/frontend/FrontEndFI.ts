import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {VueFI} from "@/data/frontend/frameworks/vue/VueFI";
import {TypeScriptFI} from "@/data/frontend/frameworks/typescript/TypeScriptFI";
import {ReactFI} from "@/data/frontend/frameworks/react/ReactFI";
import {NextjsFI} from "@/data/frontend/frameworks/nextjs/NextjsFI";
import {JavaScriptFI} from "@/data/frontend/frameworks/javascript/JavaScriptFI";
import {Html5FI} from "@/data/frontend/frameworks/html5/Html5FI";
import {Css3FI} from "@/data/frontend/frameworks/css3/Css3FI";
import {AngularFI} from "@/data/frontend/frameworks/angular/AngularFI";

export const FrontEndFI: IFrontEnd = {
    title: "Front-End-kehitys",
    span: "Front-End-kehityskokemus",
    subTitle: "",

    angular: AngularFI,
    css3: Css3FI,
    html5: Html5FI,
    nextjs: NextjsFI,
    react: ReactFI,
    typescript: TypeScriptFI,
    vue: VueFI,
    javascript: JavaScriptFI,

    stacks: [
        NextjsFI,
        ReactFI,
        AngularFI,
        VueFI,
        JavaScriptFI,
        TypeScriptFI,
        Html5FI,
        Css3FI
    ],

    services: {
        title: "Front-End-kehitys",
        descriptions: [
            "Front-end-kehitys on ratkaiseva rajapinta käyttäjien ja digitaalisten palveluiden välillä, luoden visuaaliset elementit ja interaktiiviset komponentit, jotka määrittävät käyttäjäkokemuksen. Tämä olennainen kerros muuntaa monimutkaiset backend-järjestelmät intuitiivisiksi, saavutettaviksi käyttöliittymiksi, jotka sitouttavat yleisöä ja edistävät liiketoiminnan kasvua. Modernit sovelluskehykset kuten Next.js, React, Angular ja Vue.js, yhdessä ydintekniikkojen kuten HTML5 ja CSS3 kanssa, mahdollistavat korkean suorituskyvyn sovellukset, jotka latautuvat nopeasti ja reagoivat saumattomasti kaikilla laitteilla. Tehokkaat front-end-ratkaisut lisäävät käyttäjien sitoutumista, parantavat konversioasteita ja vahvistavat brändin mielikuvaa johdonmukaisten, ammattimaisten digitaalisten kokemusten kautta, jotka täyttävät sekä liiketoiminnalliset tavoitteet että käyttäjien tarpeet."
        ],
        items: [
            {
                title: "Modernien Sovelluskehysten Toteutus",
                description: "Dynaamiset, interaktiiviset verkkosovellukset käyttäen huippuluokan sovelluskehyksiä kuten Next.js ja React, jotka tarjoavat optimaalisen suorituskyvyn, responsiivisuuden ja paremman käyttäjäkokemuksen."
            },
            {
                title: "SEO-optimointi",
                description: "Parantunut verkkosivuston näkyvyys Googlessa ja muissa hakukoneissa optimoidun koodirakenteen, nopeiden latausaikojen ja mobiiliystävällisen suunnittelun ansiosta, mikä lisää orgaanista liikennettä ja vähentää hankintakustannuksia."
            },
            {
                title: "Konseptitodistuksen (PoC) Kehitys",
                description: "Innovatiivisten ideoiden nopea validointi toiminnallisten prototyyppien avulla, riskien vähentäminen ja sidosryhmien mahdollisuus visualisoida konsepteja ennen täysimittaista investointia."
            },
            {
                title: "Minimaalisen Toimivan Tuotteen (MVP) Luominen",
                description: "Toiminnallisuudeltaan täydelliset, skaalautuvat alkuversiot, jotka houkuttelevat varhaisia käyttäjiä, tuottavat arvokasta palautetta ja vetoavat potentiaalisiin sijoittajiin samalla kun vakiinnuttavat markkina-asemaa."
            },
            {
                title: "UI/UX-suunnittelu",
                description: "Intuitiiviset, kauniit käyttöliittymät, jotka lisäävät sitoutumista, vähentävät poistumisprosenttia ja lisäävät konversioita käyttäjäkeskeisten suunnitteluperiaatteiden ja saavutettavuusstandardien avulla."
            }
        ]
    }
}