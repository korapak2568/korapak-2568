import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import { ImageUrl } from "@/image/ImageUrl";

export const JavaFI: IFullStackStack = {
    title: "Java-kehitys",
    description: "Java on monipuolinen, korkean tason ohjelmointikieli, joka tunnetaan siirrettävyydestään, vankkuudestaan ja suorituskyvystään. Spring Boot on kehys, joka yksinkertaistaa tuotantovalmiiden sovellusten kehittämistä.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java- ja Spring Boot -kehyskehitys",
    readMore: "Tutustu lisää Java Spring Boot -täyspinoiseen kehitysratkaisuun",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Java-kehitys",
            description: "Java on monipuolinen, korkean tason ohjelmointikieli, joka tunnetaan siirrettävyydestään, vankkuudestaan ja suorituskyvystään. Spring Boot on kehys, joka yksinkertaistaa tuotantovalmiiden sovellusten kehittämistä.",
            list: []
        },
        {
            title: "Vahva ekosysteemi",
            description: "Java ja Spring Boot yhdessä tarjoavat vahvan ekosysteemin skaalautuvien, turvallisten ja suorituskykyisten sovellusten kehittämiseen. Spring Boot nopeuttaa kehitystä yksinkertaistamalla asennusta ja käyttöönottoa.",
            list: [
                "Vahva ja skaalautuva",
                "Kypsä ekosysteemi",
                "Oliopohjainen",
                "Spring Boot -kehys",
                "Korkea suorituskyky",
                "Yritystason sovellukset"
            ]
        },
        {
            title: "Modernit kehitysominaisuudet",
            description: "Java kehittyy jatkuvasti ja tarjoaa moderneja ominaisuuksia, kirjastoja ja työkaluja, jotka parantavat tuottavuutta, tyyppiturvallisuutta ja tehokasta kehitystyötä.",
            list: []
        },
        {
            title: "Yritystason ratkaisut",
            description: "Javaa ja Spring Bootia käytetään laajalti yritysympäristöissä niiden luotettavuuden ja skaalautuvuuden ansiosta. Nämä teknologiat tukevat kriittisiä sovelluksia eri toimialoilla ja suoriutuvat vaativista tehtävistä tehokkaasti.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mikä on Spring Boot?",
            answer: "Spring Boot on kehys, jonka avulla voidaan luoda itsenäisiä, tuotantovalmiita Spring-pohjaisia sovelluksia."
        },
        {
            question: "Mitkä ovat Javan edut?",
            answer: "Java tunnetaan vankkuudestaan, skaalautuvuudestaan ja laajasta ekosysteemistään, joka soveltuu erityisesti yrityssovelluksiin."
        }
    ]
}