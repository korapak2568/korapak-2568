import {IPolicy} from "@/data/policy/model/IPolicy";

export const TermOfServiceFI: IPolicy = {
    title: "Käyttöehdot",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Tervetuloa CHORN-verkkosivustolle",
            description: "Nämä käyttöehdot (\"Ehdot\") koskevat tämän verkkosivuston (\"Verkkosivusto\") käyttöä. Käyttämällä verkkosivustoa sitoudut noudattamaan näitä ehtoja. Jos et hyväksy näitä ehtoja, ole hyvä ja lopeta verkkosivuston käyttö."
        },
        {
            title: "1. Verkkosivuston käyttö",
            description: "1.1 CHORN tarjoaa yleiskatsauksen teknisestä asiantuntemuksesta vain tiedotustarkoituksiin. Tämän verkkosivuston tietoja ei saa käyttää viitteenä tai muihin tarkoituksiin ilman lupaa."
        },
        {
            title: "2. Immateriaalioikeudet",
            description: "2.1 Kaikki verkkosivuston sisältö, mukaan lukien teksti, grafiikka, logot ja kuvat, ovat CHORNin tai sen sisällöntoimittajien omaisuutta ja niitä suojaavat immateriaalioikeuslait.",
            expand: "2.2 Verkkosivuston sisältöä ei saa jäljentää, jakaa, muokata tai muuten käyttää ilman CHORNin nimenomaista kirjallista lupaa."
        },
        {
            title: "3. Takuiden vastuuvapauslauseke",
            description: "3.1 Verkkosivusto tarjotaan \"sellaisenaan\" ja \"saatavuuden mukaan\". Mitään nimenomaisia tai implisiittisiä takuita ei anneta koskien verkkosivuston toimintaa tai siihen sisältyviä tietoja, sisältöä tai materiaaleja.",
            expand: "3.2 Ei ole takeita siitä, että verkkosivusto toimisi keskeytyksettä, virheettömästi tai ilman haitallisia komponentteja."
        },
        {
            title: "4. Vastuunrajoitus",
            description: "4.1 Lain sallimissa rajoissa CHORN kiistää kaiken vastuun mistään menetyksestä tai vahingosta, joka aiheutuu verkkosivuston käytöstä.",
            expand: "4.2 CHORN ei ole vastuussa suorista, epäsuorista, satunnaisista, erityisistä tai välillisistä vahingoista, jotka johtuvat verkkosivuston käytöstä tai kyvyttömyydestä käyttää sitä."
        },
        {
            title: "5. Muutokset ehtoihin",
            description: "5.1 Näitä ehtoja voidaan muuttaa milloin tahansa. Muutokset tulevat voimaan välittömästi, kun ne julkaistaan verkkosivustolla. Verkkosivuston käytön jatkaminen muutosten jälkeen merkitsee päivitettyjen ehtojen hyväksymistä."
        }
    ],
};
