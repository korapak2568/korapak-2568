import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

export const CloudSolutionNL: ICloudSolution = {
    title: "Cloudinfrastructuur",
    descriptions: [
        {
            title: "Data-Gedreven Besluitvorming",
            span: "Toekomstbestendige Technologiestack",
            description: "In het snel evoluerende digitale landschap van vandaag stellen veerkrachtige, schaalbare en toekomstbestendige systemen bedrijven in staat om snel te reageren op marktveranderingen met behoud van operationele uitmuntendheid. Strategische cloudarchitectuur zorgt voor optimale prestaties, verbeterde beveiliging en kostenefficiëntie terwijl bedrijfsgroeidoelstellingen worden ondersteund.",
            features: []
        },
    ],
    benefits: [
        "Verminderde infrastructuurkosten door geoptimaliseerde resourcetoewijzing",
        "Verbeterde bedrijfsflexibiliteit met snelle implementatiemogelijkheden",
        "Verbeterde databeveiliging met compliance-frameworks volgens industriestandaarden",
        "Vereenvoudigd disaster recovery met geautomatiseerde back-upoplossingen",
        "Verhoogde applicatieprestaties voor betere gebruikerservaringen",
        "Naadloze schaalbaarheid ter ondersteuning van bedrijfsgroei",
        "Continue innovatie door middel van de nieuwste cloudtechnologieën"
    ],
    sections: [
        {
            title: "AWS",
            span: "AWS: Flexibiliteit en Ondernemingsschaalbaarheid",
            description: "Amazon Web Services (AWS) biedt dynamische infrastructuurschaling die zich aanpast aan fluctuerende bedrijfsbehoeften. Organisaties profiteren van serverloze architecturen die zorgen over infrastructuurbeheer wegnemen, Lambda-functies die efficiënte microservice-implementatie mogelijk maken, en S3-opslagoptimalisatie die kosten verlaagt terwijl de prestaties verbeteren. Deze mogelijkheden zorgen ervoor dat systemen wendbaar, kosteneffectief en zeer veilig blijven, wat belanghebbenden gemoedsrust geeft terwijl uitzonderlijke gebruikerservaringen worden geleverd.",
            features: [
                "Serverloze architectuur met AWS Lambda",
                "Containerisatie met Amazon EKS en ECS",
                "Infrastructuur als Code met CloudFormation en CDK",
                "Databasemigratie met DMS",
                "Geautomatiseerde CI/CD-pijplijnen met CodePipeline",
                "Event-gedreven architecturen met EventBridge",
                "Kostenoptimalisatie via AWS Well-Architected Framework"
            ]
        },
        {
            title: "Azure",
            span: "Azure: Naadloze Ondernemingsintegratie",
            description: "Microsoft Azure blinkt uit in het moderniseren van legacysystemen en het implementeren van hybride cloudoplossingen voor gevestigde ondernemingen. End-to-end oplossingen met geavanceerde analyses, kunstmatige intelligentie en beveiliging op ondernemingsniveau transformeren bedrijfsactiviteiten en creëren uitzonderlijke klantervaringen. Van virtuele machine-implementaties tot complexe datastromen, het uitgebreide platform van Azure maakt digitale transformatie mogelijk met behoud van bedrijfscontinuïteit.",
            features: [
                "Modernisering van legacysystemen met Azure App Service",
                "Hybride connectiviteit met Azure Arc",
                "Gecontaineriseerde applicaties met Azure Kubernetes Service",
                "Serverless computing met Azure Functions",
                "DevSecOps-implementatie met Azure DevOps",
                "Identiteitsbeheer met Azure Active Directory",
                "Real-time analyses met Azure Synapse"
            ]
        },
        {
            title: "GCP",
            span: "GCP: Geavanceerde Analyses en AI-integratie",
            description: "Google Cloud Platform (GCP) levert ongeëvenaarde mogelijkheden in big data-verwerking, machine learning-implementatie en AI-gedreven oplossingsontwikkeling. Organisaties verkrijgen concurrentievoordelen door krachtige data-analyse die bedrijfsinzichten onthult, werkstroomautomatisering die de operationele efficiëntie verhoogt en gestroomlijnde bedrijfsprocessen die kosten verlagen. Prestatieoptimalisatie gekoppeld aan kostenefficiënte infrastructuur zorgt voor maximaal rendement op cloudinvesteringen terwijl eindgebruikers worden voorzien van responsieve, intelligente applicaties.",
            features: [
                "Machine learning-operaties met Vertex AI",
                "Big data-verwerking met BigQuery en Dataflow",
                "Containerisatie met Google Kubernetes Engine",
                "Serverless computing met Cloud Functions en Cloud Run",
                "API-beheer met Apigee",
                "DevOps-automatisering met Cloud Build",
                "Intelligente analyses met Looker"
            ]
        },
        {
            title: "DigitalOcean",
            span: "DigitalOcean: Kosteneffectieve Oplossingen voor Groei",
            description: "Startups en kleine tot middelgrote ondernemingen (MKB) profiteren van het eenvoudige maar krachtige cloudplatform van DigitalOcean. Schaalbare webapplicaties, beheerde databases en gecontaineriseerde implementaties bieden de technische basis voor bedrijfsgroei zonder onnodige complexiteit. Ontwikkelaarsvriendelijke tools versnellen ontwikkelingscycli met behoud van kosteneffectiviteit, waardoor bedrijven zich kunnen richten op innovatie in plaats van infrastructuurbeheer.",
            features: [
                "Beheerde Kubernetes-clusters voor containerorkestratie",
                "App Platform voor vereenvoudigde PaaS-implementatie",
                "Beheerde databases met geautomatiseerde back-ups",
                "Spaces objectopslag voor media en assets",
                "Load balancing voor toepassingen met hoge beschikbaarheid",
                "Monitoring en waarschuwingen met geïntegreerde tools",
                "Wereldwijde CDN voor verbeterde gebruikerservaring"
            ]
        },
    ],
    migrationProcess: [
        {
            phase: "Beoordeling & Planning",
            description: "Uitgebreide analyse van bestaande infrastructuur, applicatie-afhankelijkheden en bedrijfsvereisten om een op maat gemaakte migratiestrategie te ontwikkelen.",
            outcomes: [
                "Gedetailleerde cloud-gereedheidsanalyse",
                "TCO-analyse en ROI-prognoses",
                "Risicobeheersingsstrategieën",
                "Geprioriteerde migratieroutekaart"
            ]
        },
        {
            phase: "Ontwerp & Architectuur",
            description: "Creatie van geoptimaliseerde cloudarchitectuur-blauwdrukken die aansluiten bij bedrijfsdoelstellingen en tegelijkertijd beveiliging, prestaties en kostenefficiëntie waarborgen.",
            outcomes: [
                "Toekomstige architectuurdiagrammen",
                "Beveiligings- en compliance-frameworks",
                "Disaster recovery-plannen",
                "Strategieën voor resourceoptimalisatie"
            ]
        },
        {
            phase: "Migratie & Implementatie",
            description: "Systematische overdracht van applicaties, gegevens en werklasten naar de cloudomgeving met minimale bedrijfsonderbreking.",
            outcomes: [
                "Uitvoering van migratie zonder downtime",
                "Validatie van gegevensintegriteit",
                "Prestatietesten",
                "Documentatie voor operationele overdracht"
            ]
        },
        {
            phase: "Optimalisatie & Beheer",
            description: "Continue verbetering van cloudinfrastructuur om prestaties, beveiliging en kostenefficiëntie te maximaliseren.",
            outcomes: [
                "Geautomatiseerd schalingsbeleid",
                "Aanbevelingen voor kostenoptimalisatie",
                "Strategieën voor prestatieverbetering",
                "Versterking van beveiligingsmaatregelen"
            ]
        }
    ]
}