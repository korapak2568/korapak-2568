import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

export const CloudSolutionDA: ICloudSolution = {
    title: "Cloud-infrastruktur",
    descriptions: [
        {
            title: "Datadrevet Beslutningstagning",
            span: "Fremtidssikret Teknologistak",
            description: "I dagens hurtigt udviklende digitale landskab gør robuste, skalerbare og fremtidssikrede systemer virksomheder i stand til at reagere hurtigt på markedsændringer, samtidig med at de opretholder operationel ekspertise. Strategisk cloud-arkitektur sikrer optimal ydeevne, forbedret sikkerhed og omkostningseffektivitet, samtidig med at den understøtter forretningsmæssige vækstmål.",
            features: []
        },
    ],
    benefits: [
        "Reducerede infrastrukturomkostninger gennem optimeret ressourceallokering",
        "Forbedret forretningsagilitet med hurtige implementeringsmuligheder",
        "Forbedret datasikkerhed med branchestandardiserede compliance-rammer",
        "Forenklet katastrofeopretning med automatiserede backup-løsninger",
        "Øget applikationsydeevne for bedre brugeroplevelser",
        "Problemfri skalerbarhed til at understøtte forretningsvækst",
        "Kontinuerlig innovation gennem de nyeste cloud-teknologier"
    ],
    sections: [
        {
            title: "AWS",
            span: "AWS: Fleksibilitet og Virksomhedsskalerbarhed",
            description: "Amazon Web Services (AWS) leverer dynamisk infrastrukturskalering, der tilpasser sig svingende forretningsbehov. Organisationer drager fordel af serverløse arkitekturer, der eliminerer bekymringer om infrastrukturforvaltning, Lambda-funktioner, der muliggør effektiv mikroserviceimplementering, og S3-lageroptimering, der reducerer omkostninger, samtidig med at ydeevnen forbedres. Disse funktioner sikrer, at systemer forbliver agile, omkostningseffektive og yderst sikre, hvilket giver interessenter ro i sindet, samtidig med at de leverer exceptionelle brugeroplevelser.",
            features: [
                "Serverløs arkitektur med AWS Lambda",
                "Containerisering med Amazon EKS og ECS",
                "Infrastruktur som kode ved hjælp af CloudFormation og CDK",
                "Databasemigrering med DMS",
                "Automatiserede CI/CD-pipelines med CodePipeline",
                "Hændelses-drevne arkitekturer med EventBridge",
                "Omkostningsoptimering gennem AWS Well-Architected Framework"
            ]
        },
        {
            title: "Azure",
            span: "Azure: Problemfri Virksomhedsintegration",
            description: "Microsoft Azure udmærker sig ved at modernisere ældre systemer og implementere hybrid cloud-løsninger til etablerede virksomheder. End-to-end-løsninger, der inkorporerer avanceret analyse, kunstig intelligens og virksomhedssikkerhed, transformerer forretningsdriften og skaber exceptionelle kundeoplevelser. Fra implementering af virtuelle maskiner til komplekse data-pipelines muliggør Azures omfattende platform digital transformation, samtidig med at forretningskontinuiteten opretholdes.",
            features: [
                "Modernisering af ældre systemer med Azure App Service",
                "Hybrid-konnektivitet med Azure Arc",
                "Containeriserede applikationer med Azure Kubernetes Service",
                "Serverløs databehandling med Azure Functions",
                "DevSecOps-implementering med Azure DevOps",
                "Identitetsstyring med Azure Active Directory",
                "Realtidsanalyse med Azure Synapse"
            ]
        },
        {
            title: "GCP",
            span: "GCP: Avanceret Analyse og AI-integration",
            description: "Google Cloud Platform (GCP) leverer uforlignelige muligheder inden for big data-behandling, maskinlæringsimplementering og AI-drevne løsningsudvikling. Organisationer opnår konkurrencemæssige fordele gennem kraftfuld dataanalyse, der afslører forretningsindsigter, arbejdsgangsautomatisering, der øger driftseffektiviteten, og strømlinede forretningsprocesser, der reducerer omkostninger. Ydeevneoptimering kombineret med omkostningseffektiv infrastruktur sikrer maksimalt afkast af cloud-investeringen, samtidig med at slutbrugere får responsive, intelligente applikationer.",
            features: [
                "Maskinlæringsoperationer med Vertex AI",
                "Big data-behandling med BigQuery og Dataflow",
                "Containerisering med Google Kubernetes Engine",
                "Serverløs databehandling med Cloud Functions og Cloud Run",
                "API-styring med Apigee",
                "DevOps-automatisering med Cloud Build",
                "Intelligent analyse med Looker"
            ]
        },
        {
            title: "DigitalOcean",
            span: "DigitalOcean: Omkostningseffektive Løsninger til Vækst",
            description: "Startups og små til mellemstore virksomheder (SMV'er) drager fordel af DigitalOceans enkle, men kraftfulde cloud-platform. Skalerbare webapplikationer, administrerede databaser og containeriserede implementeringer giver det tekniske fundament for forretningsvækst uden unødvendig kompleksitet. Udviklervenlige værktøjer accelererer udviklingsforløb, samtidig med at omkostningseffektiviteten opretholdes, hvilket giver virksomheder mulighed for at fokusere på innovation frem for infrastrukturforvaltning.",
            features: [
                "Administrerede Kubernetes-klynger til container-orkestrering",
                "App Platform til forenklet PaaS-implementering",
                "Administrerede databaser med automatiserede backups",
                "Spaces objektlagring til medier og aktiver",
                "Load balancing til højtilgængelige applikationer",
                "Overvågning og advarsler med integrerede værktøjer",
                "Globalt CDN til forbedret brugeroplevelse"
            ]
        },
    ],
    migrationProcess: [
        {
            phase: "Vurdering & Planlægning",
            description: "Omfattende analyse af eksisterende infrastruktur, applikationsafhængigheder og forretningskrav for at udvikle en skræddersyet migrationsstrategi.",
            outcomes: [
                "Detaljeret cloud-parathedsvurdering",
                "TCO-analyse og ROI-prognoser",
                "Risikoreduceringsstrategier",
                "Prioriteret migrationsroadmap"
            ]
        },
        {
            phase: "Design & Arkitektur",
            description: "Oprettelse af optimerede cloud-arkitektur-blueprints, der er på linje med forretningsmål, samtidig med at sikkerhed, ydeevne og omkostningseffektivitet sikres.",
            outcomes: [
                "Fremtidige tilstandsarkitekturdiagrammer",
                "Sikkerheds- og compliance-rammer",
                "Katastrofeopretningsplaner",
                "Ressourceoptimeringsstragier"
            ]
        },
        {
            phase: "Migration & Implementering",
            description: "Systematisk overførsel af applikationer, data og arbejdsbelastninger til cloud-miljøet med minimal forretningsafbrydelse.",
            outcomes: [
                "Nultids-nedetid migrationsudførelse",
                "Dataintegritetsvalidering",
                "Ydeevnetests",
                "Operationel overdragelsesdokumentation"
            ]
        },
        {
            phase: "Optimering & Styring",
            description: "Kontinuerlig forbedring af cloud-infrastruktur for at maksimere ydeevne, sikkerhed og omkostningseffektivitet.",
            outcomes: [
                "Automatiserede skaleringspolitikker",
                "Anbefalinger til omkostningsoptimering",
                "Strategier til ydeevneforbedring",
                "Styrkelse af sikkerhedsstilling"
            ]
        }
    ]
}