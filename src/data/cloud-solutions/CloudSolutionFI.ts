import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

export const CloudSolutionFI: ICloudSolution = {
    title: "Pilvimigraatio",
    descriptions: [
        {
            title: "Liiketoiminnan Muutos",
            span: "Digitaalisen Muutoksen Kiihdyttäminen",
            description: "Vapauta pilvi-infrastruktuurin koko potentiaali strategisella arkkitehtuurilla ja järjestelmäanalyysilla, joka tuottaa mitattavia liiketoimintatuloksia.",
            features: []
        },
        {
            title: "Datapohjainen Päätöksenteko",
            span: "Tulevaisuuden Teknologiapino",
            description: "Nykypäivän nopeasti kehittyvässä digitaalisessa ympäristössä joustavat, skaalautuvat ja tulevaisuuden kestävät järjestelmät mahdollistavat yritysten nopean reagoinnin markkinoiden muutoksiin säilyttäen samalla toiminnallisen erinomaisuuden. Strateginen pilviarkitehtuuri varmistaa optimaalisen suorituskyvyn, parannetun turvallisuuden ja kustannustehokkuuden tukien samalla liiketoiminnan kasvutavoitteita.",
            features: []
        },
    ],
    benefits: [
        "Alhaisemmat infrastruktuurikustannukset optimoidun resurssien allokoinnin kautta",
        "Parantunut liiketoiminnan ketteryys nopeilla käyttöönottovalmiuksilla",
        "Parantunut tietoturva alan standardien mukaisilla vaatimustenmukaisuuskehyksillä",
        "Yksinkertaistettu katastrofista palautuminen automaattisilla varmuuskopiointiratkaisuilla",
        "Parempi sovellusten suorituskyky käyttäjäkokemuksen parantamiseksi",
        "Saumaton skaalautuvuus liiketoiminnan kasvun tukemiseksi",
        "Jatkuva innovaatio uusimpien pilviteknologioiden avulla"
    ],
    sections: [
        {
            title: "Strateginen Pilven Valinta",
            span: "Räätälöity Pilvi-infrastruktuuri",
            description: "Pilvimigraation onnistuminen riippuu oikean alustan valinnasta erityisiin liiketoimintavaatimuksiin. Oli kyseessä sitten olemassa olevan infrastruktuurin parantaminen tai uusien järjestelmien rakentaminen alusta alkaen, ihanteellinen pilviympäristö on täydellisesti linjassa liiketoimintatavoitteiden kanssa. Pilvinatiivi, hybridi tai multipilviympäristöt tarjoavat kukin erilaisia etuja riippuen skaalautuvuustarpeista, vaatimustenmukaisuusvaatimuksista ja toiminnallisista tavoitteista.",
        },
        {
            title: "AWS",
            span: "AWS: Joustavuus ja Yritystason Skaalautuvuus",
            description: "Amazon Web Services (AWS) tarjoaa dynaamista infrastruktuurin skaalausta, joka mukautuu vaihteleviin liiketoimintatarpeisiin. Organisaatiot hyötyvät serverless-arkkitehtuureista, jotka poistavat infrastruktuurin hallintahuolet, Lambda-toiminnoista, jotka mahdollistavat tehokkaan mikropalvelujen käyttöönoton, ja S3-tallennustilan optimoinnista, joka vähentää kustannuksia parantaen samalla suorituskykyä. Nämä ominaisuudet varmistavat, että järjestelmät pysyvät ketterinä, kustannustehokkaina ja erittäin turvallisina, mikä antaa sidosryhmille mielenrauhaa tarjoten samalla poikkeuksellisia käyttäjäkokemuksia.",
            features: [
                "Serverless-arkkitehtuuri AWS Lambdalla",
                "Kontitusratkaisut Amazon EKS:llä ja ECS:llä",
                "Infrastruktuuri koodina CloudFormationin ja CDK:n avulla",
                "Tietokantojen migraatio DMS:llä",
                "Automatisoidut CI/CD-putket CodePipelinella",
                "Tapahtumaohjatut arkkitehtuurit EventBridgellä",
                "Kustannusten optimointi AWS Well-Architected Frameworkin kautta"
            ]
        },
        {
            title: "Azure",
            span: "Azure: Saumaton Yritysintegraatio",
            description: "Microsoft Azure loistaa perinnejärjestelmien modernisoinnissa ja hybridipilviratkaisujen toteuttamisessa vakiintuneille yrityksille. Kehittynyttä analytiikkaa, tekoälyä ja yritystason tietoturvaa sisältävät päästä päähän -ratkaisut muuttavat liiketoimintaa ja luovat poikkeuksellisia asiakaskokemuksia. Virtuaalikoneiden käyttöönotosta monimutkaisiin dataputkiin, Azuren kattava alusta mahdollistaa digitaalisen muutoksen säilyttäen samalla liiketoiminnan jatkuvuuden.",
            features: [
                "Perinnejärjestelmien modernisointi Azure App Servicellä",
                "Hybridikytkentä Azure Arcilla",
                "Kontitetut sovellukset Azure Kubernetes Servicellä",
                "Serverless-laskenta Azure Functionsilla",
                "DevSecOps-toteutus Azure DevOpsilla",
                "Identiteetinhallinta Azure Active Directorylla",
                "Reaaliaikainen analytiikka Azure Synapsella"
            ]
        },
        {
            title: "GCP",
            span: "GCP: Kehittynyt Analytiikka ja Tekoälyn Integraatio",
            description: "Google Cloud Platform (GCP) tarjoaa vertaansa vailla olevia kyvykkyyksiä big data -käsittelyssä, koneoppimisen toteuttamisessa ja tekoälyohjattujen ratkaisujen kehittämisessä. Organisaatiot saavat kilpailuetua tehokkaasta data-analytiikasta, joka paljastaa liiketoimintaoivalluksia, työnkulkujen automatisoinnista, joka lisää toiminnallista tehokkuutta, ja virtaviivaistetuista liiketoimintaprosesseista, jotka vähentävät kustannuksia. Suorituskyvyn optimointi yhdistettynä kustannustehokkaaseen infrastruktuuriin varmistaa maksimaalisen tuoton pilvi-investoinnista tarjoten samalla loppukäyttäjille responsiivisia, älykkäitä sovelluksia.",
            features: [
                "Koneoppimisoperaatiot Vertex AI:lla",
                "Big data -käsittely BigQueryllä ja Dataflowlla",
                "Kontitus Google Kubernetes Enginellä",
                "Serverless-laskenta Cloud Functionsilla ja Cloud Runilla",
                "API-hallinta Apigeella",
                "DevOps-automaatio Cloud Buildilla",
                "Älykäs analytiikka Lookerilla"
            ]
        },
        {
            title: "DigitalOcean",
            span: "DigitalOcean: Kustannustehokkaat Ratkaisut Kasvuun",
            description: "Startupit ja pienet ja keskisuuret yritykset (PK-yritykset) hyötyvät DigitalOceanin yksinkertaisesta mutta tehokkaasta pilvialustasta. Skaalautuvat verkkosovellukset, hallitut tietokannat ja kontitetut käyttöönotot tarjoavat teknisen perustan liiketoiminnan kasvulle ilman tarpeetonta monimutkaisuutta. Kehittäjäystävälliset työkalut nopeuttavat kehityssyklejä säilyttäen samalla kustannustehokkuuden, mikä mahdollistaa yritysten keskittymisen innovaatioihin infrastruktuurin hallinnan sijaan.",
            features: [
                "Hallitut Kubernetes-klusterit konttien orkestrointiin",
                "App Platform yksinkertaistettuun PaaS-käyttöönottoon",
                "Hallitut tietokannat automaattisilla varmuuskopioilla",
                "Spaces-objektitallennustila medialle ja resursseille",
                "Kuormantasaus korkean saatavuuden sovelluksille",
                "Valvonta ja hälytykset integroiduilla työkaluilla",
                "Maailmanlaajuinen CDN käyttäjäkokemuksen parantamiseksi"
            ]
        },
    ],
    migrationProcess: [
        {
            phase: "Arviointi & Suunnittelu",
            description: "Kattava analyysi olemassa olevasta infrastruktuurista, sovellusriippuvuuksista ja liiketoimintavaatimuksista räätälöidyn migraatiostrategian kehittämiseksi.",
            outcomes: [
                "Yksityiskohtainen pilvivalmiuden arviointi",
                "TCO-analyysi ja ROI-ennusteet",
                "Riskien lieventämisstrategiat",
                "Priorisoitu migraation tiekartta"
            ]
        },
        {
            phase: "Suunnittelu & Arkkitehtuuri",
            description: "Optimoitujen pilviarkitehtuurisuunnitelmien luominen, jotka ovat linjassa liiketoimintatavoitteiden kanssa varmistaen samalla turvallisuuden, suorituskyvyn ja kustannustehokkuuden.",
            outcomes: [
                "Tulevaisuuden tilan arkkitehtuurikaaviot",
                "Turvallisuus- ja vaatimustenmukaisuuskehykset",
                "Katastrofista palautumissuunnitelmat",
                "Resurssien optimointistrategiat"
            ]
        },
        {
            phase: "Migraatio & Toteutus",
            description: "Sovellusten, tietojen ja työkuormien järjestelmällinen siirto pilviympäristöön minimaalisella liiketoiminnan häiriöllä.",
            outcomes: [
                "Nollakatkoinen migraation toteutus",
                "Tietojen eheyden validointi",
                "Suorituskykytestaus",
                "Operatiivinen luovutusdokumentaatio"
            ]
        },
        {
            phase: "Optimointi & Hallinta",
            description: "Pilvi-infrastruktuurin jatkuva parantaminen suorituskyvyn, turvallisuuden ja kustannustehokkuuden maksimoimiseksi.",
            outcomes: [
                "Automatisoidut skaalautumiskäytännöt",
                "Kustannusoptimointisuositukset",
                "Suorituskyvyn parantamisstrategiat",
                "Tietoturvakäytäntöjen vahvistaminen"
            ]
        }
    ]
}