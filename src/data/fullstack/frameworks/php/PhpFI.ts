import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const PhpFI: IFullStackStack = {
    title: "PHP",
    description: "PHP on suosittu palvelinpuolen skriptikieli, jota käytetään laajasti verkkokehityksessä. Symfony, Laravel, Phalcon -kehykset sekä Twig-tyyppimoottorit ja WordPress-alustat sen headless-version kanssa ovat nostaneet PHP-kehityksen uudelle tasolle tarjoamalla rakenteellisia, tehokkaita ja skaalautuvia ratkaisuja monimutkaisten verkkosovellusten rakentamiseen.",
    image: ImageUrl.fullstackThumbnails.php.path,
    alt: "Logo representing PHP programming language",
    readMore: "Tutustu lisää PHP full-stack kehitysrRatkaisuihin",
    link: "/technical-expertise/full-stack-developer/php-developer",
    features: [
        {
            title: "PHP Kehitys",
            description: "PHP on suosittu palvelinpuolen skriptikieli, jota käytetään laajasti verkkokehityksessä. Symfony, Laravel, Phalcon -kehykset sekä Twig-tyyppimoottorit ja WordPress-alustat sen headless-version kanssa ovat nostaneet PHP-kehityksen uudelle tasolle tarjoamalla rakenteellisia, tehokkaita ja skaalautuvia ratkaisuja monimutkaisten verkkosovellusten rakentamiseen.",
            list: []
        },
        {
            title: "Rakenteellinen Kehitys",
            description: "Symfony ja Laravel tarjoavat rakenteellisen lähestymistavan PHP-kehitykselle, edistäen parhaita käytäntöjä ja suunnittelumalleja. Symfony tarjoaa uudelleenkäytettäviä komponentteja, kun taas Laravel keskittyy kehittäjän tuottavuuteen elegantilla syntaksillaan ja työkaluillaan. Symfonyssä käytettävä Twig-tyyppimoottori tarjoaa joustavan, turvallisen ja nopean tavan suunnitella malleja. Phalcon, korkean suorituskyvyn kehys, joka toimitetaan C-laajennuksena, tarjoaa alhaisen tason optimoinnin ja poikkeuksellisen nopeuden, varmistaen tehokkaan resurssien hallinnan.",
            list: [
                "Palvelinpuolen skriptit",
                "Helppo oppia",
                "Suuri ekosysteemi",
                "Suositut kehykset",
                "WordPress-integraatio",
                "Loistava verkkokehitykselle",
                "Vahva yhteisö"
            ]
        },
        {
            title: "Nopea Kehitys",
            description: "Laravel, joka tunnetaan ilmaisunomaisesta syntaksistaan ja tehokkaista työkaluistaan, mahdollistaa verkkosovellusten nopean kehittämisen ja käyttöönoton. Eloquent ORM, Blade-tyyppimoottori ja Laravel Artisan komentorivityökalu virtaviivaistavat kehitystehtäviä. Phalcon parantaa nopeaa kehitystä vankan suorituskyvyn ja alhaisen tason arkkitehtuurin ansiosta. WordPress tarjoaa nopean asetuksen ja laajan valikoiman lisäosia ja teemoja, mikä mahdollistaa kehittäjille ominaisuusrikkaiden verkkosivustojen nopean käyttöönoton. Headless WordPress irrottaa etu- ja taustakehittäjät, jolloin modernit JavaScript-kehykset, kuten React tai Vue, voivat tarjota dynaamisen ja reagoivan käyttäjäkokemuksen.",
            list: []
        },
        {
            title: "Yhteisö ja Ekosysteemi",
            description: "PHP:llä on valtava yhteisö ja rikas ekosysteemi kirjastoista, lisäosista ja kehyksistä. Sekä Symfony että Laravel hyötyvät aktiivisesta yhteisön tuesta, laajasta dokumentaatiosta ja monista kolmannen osapuolen paketeista, mikä tekee PHP-kehityksestä tehokasta ja nautittavaa. Phalconilla on kasvava yhteisö, ja se tarjoaa yksityiskohtaisia dokumentaatioita ja tutoriaaleja kehittäjien tueksi. WordPressillä on laaja ekosysteemi ja suuri käyttäjäkunta, joka tarjoaa lukuisia lisäosia ja teemoja, kun taas Headless WordPress hyödyntää modernien etu-kehittäjäkehysten joustavuutta, jota tukevat vahvat yhteisöt ja resurssit.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Mihin PHP:tä käytetään?",
            answer: "PHP on palvelinpuolen skriptikieli, joka on suunniteltu verkkokehitykseen ja laajasti käytetty dynaamisten verkkosivujen luomiseen."
        },
        {
            question: "Mitä ovat Symfony ja Laravel?",
            answer: "Symfony ja Laravel ovat suosittuja PHP-kehyksiä, jotka helpottavat vankkojen ja skaalautuvien verkkosovellusten kehittämistä."
        },
        {
            question: "Miksi käyttää WordPressiä?",
            answer: "WordPress on monipuolinen sisällönhallintajärjestelmä, joka on rakennettu PHP:llä ja on ihanteellinen blogien, verkkosivustojen ja verkkokauppojen luomiseen."
        }
    ],
}
