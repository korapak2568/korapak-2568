import {IPolicy} from "@/data/policy/model/IPolicy";

export const PrivacyPolicyFI: IPolicy = {
    title: "Tietosuojakäytäntö",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Johdanto",
            description: "CHORN kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan henkilökohtaisia tietojasi. Tämä tietosuojakäytäntö selittää, miten tietoja voidaan käsitellä käytettäessä CHORNin verkkosivustoa, erityisesti koskien evästeiden käyttöä analytiikkatarkoituksiin.",
            isDetailed: false,
        },
        {
            title: "1. Kerätyt tiedot",
            description: "Henkilökohtaisia tietoja ei kerätä suoraan vierailijoilta, elleivät he suostu evästeiden käyttöön analytiikkatarkoituksiin. Kun evästeet on otettu käyttöön, ei-henkilökohtaisesti tunnistettavia tietoja, kuten selauskäyttäytymistä, sivukatseluja ja sivuston vuorovaikutuksia, voidaan kerätä kolmannen osapuolen teknisen asiantuntemuksen, kuten Google Analyticsin, avulla.",
            isDetailed: false,
        },
        {
            title: "2. Evästeet",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Evästeiden käyttö",
                    description: "CHORNin verkkosivusto käyttää evästeitä, mutta vain jos suostumus annetaan evästeiden suostumuskehyksen kautta. Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi ja auttavat analysoimaan sivuston liikennettä ja parantamaan käyttökokemusta."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Kun evästeet on hyväksytty, Google Analyticsin kautta kerätään anonymisoituja tietoja verkkosivuston käytöstä. Nämä tiedot sisältävät kävijämäärän, navigointikäyttäytymisen ja suositut sivut, jotka auttavat optimoimaan verkkosivuston suorituskykyä. Henkilökohtaisesti tunnistettavia tietoja ei kerätä."
                },
                {
                    title: "2.3 Vaihtoehtosi",
                    description: "Voit hallita evästeiden käyttöä hyväksymällä tai hylkäämällä ne evästeiden suostumuskehyksen kautta. Evästeasetuksia voi hallita myös selaimen kautta. Huomaa, että evästeiden hylkääminen voi rajoittaa tiettyjä verkkosivuston ominaisuuksia."
                }
            ]
        },
        {
            title: "3. Tietoturva",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 Turvatoimenpiteet",
                    description: "Käytössä on kohtuulliset turvatoimenpiteet evästeiden kautta kerättyjen ei-henkilökohtaisten tietojen suojaamiseksi ja CHORNin verkkosivuston eheyden varmistamiseksi. Henkilökohtaisia tietoja ei kerätä tai tallenneta ilman suostumusta."
                }
            ]
        },
        {
            title: "4. Kolmannen osapuolen linkit",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 Ulkoiset linkit",
                    description: "CHORNin verkkosivusto voi sisältää linkkejä kolmansien osapuolten verkkosivustoille. Huomaa, että CHORN ei ole vastuussa näiden kolmannen osapuolen sivustojen tietosuojakäytännöistä tai sisällöstä. On suositeltavaa tutustua kaikkien vierailtujen ulkoisten sivustojen tietosuojakäytäntöihin."
                }
            ]
        },
        {
            title: "5. Muutokset tietosuojakäytäntöön",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Muutokset",
                    description: "Tätä tietosuojakäytäntöä voidaan päivittää ajoittain. Muutokset tulevat voimaan välittömästi, kun ne julkaistaan tällä sivulla. Verkkosivuston käytön jatkaminen päivitysten jälkeen merkitsee tarkistetun tietosuojakäytännön hyväksymistä."
                }
            ]
        },
        {
            title: "6. Ota yhteyttä CHORNiin",
            description: "Jos sinulla on kysyttävää tästä tietosuojakäytännöstä, ota yhteyttä yhteydenottosivun kautta."
        },
    ],
};
