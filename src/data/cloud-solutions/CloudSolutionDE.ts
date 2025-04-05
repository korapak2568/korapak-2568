import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

export const CloudSolutionDE: ICloudSolution = {
    title: "Cloud Migration",
    descriptions: [
        {
            title: "Geschäftsprozesse transformieren",
            span: "Digitale Transformation beschleunigen",
            description: "Entfesseln Sie das volle Potenzial der Cloud-Infrastruktur durch strategische Architektur und Systemanalyse, die messbare Geschäftsergebnisse liefert.",
            features: []
        },
        {
            title: "Datengestützte Entscheidungsfindung",
            span: "Zukunftssichere Technologie-Stack",
            description: "In der heutigen schnelllebigen digitalen Landschaft ermöglichen widerstandsfähige, skalierbare und zukunftssichere Systeme Unternehmen, schnell auf Marktveränderungen zu reagieren und gleichzeitig betriebliche Exzellenz zu gewährleisten. Strategische Cloud-Architektur sorgt für optimale Leistung, verbesserte Sicherheit und Kosteneffizienz bei gleichzeitiger Unterstützung der Unternehmenswachstumsziele.",
            features: []
        },
    ],
    benefits: [
        "Reduzierung der Infrastrukturkosten durch optimierte Ressourcenzuweisung",
        "Erhöhte Geschäftsagilität mit schnellen Bereitstellungsfähigkeiten",
        "Verbesserte Datensicherheit mit branchenüblichen Compliance-Frameworks",
        "Vereinfachte Notfallwiederherstellung mit automatisierten Backup-Lösungen",
        "Erhöhte Anwendungsleistung für bessere Benutzererfahrungen",
        "Nahtlose Skalierbarkeit zur Unterstützung des Unternehmenswachstums",
        "Kontinuierliche Innovation durch neueste Cloud-Technologien"
    ],
    sections: [
        {
            title: "Strategische Cloud-Auswahl",
            span: "Maßgeschneiderte Cloud-Infrastruktur",
            description: "Der Erfolg der Cloud-Migration hängt von der Auswahl der richtigen Plattform für spezifische Geschäftsanforderungen ab. Ob es darum geht, bestehende Infrastruktur zu verbessern oder neue Systeme von Grund auf zu entwickeln – die ideale Cloud-Umgebung stimmt perfekt mit den Geschäftszielen überein. Cloud-native, hybride oder Multi-Cloud-Umgebungen bieten jeweils eigene Vorteile, abhängig von Skalierbarkeitsanforderungen, Compliance-Vorgaben und betrieblichen Zielen.",
        },
        {
            title: "AWS",
            span: "AWS: Flexibilität und Unternehmens-Skalierbarkeit",
            description: "Amazon Web Services (AWS) bietet dynamische Infrastrukturskalierung, die sich an schwankende Geschäftsanforderungen anpasst. Organisationen profitieren von serverlosen Architekturen, die Bedenken bezüglich der Infrastrukturverwaltung beseitigen, Lambda-Funktionen, die eine effiziente Microservice-Bereitstellung ermöglichen, und S3-Speicheroptimierung, die Kosten senkt und gleichzeitig die Leistung verbessert. Diese Funktionen stellen sicher, dass Systeme agil, kosteneffizient und hochsicher bleiben, was den Stakeholdern Sicherheit gibt und gleichzeitig außergewöhnliche Benutzererfahrungen bietet.",
            features: [
                "Serverlose Architektur mit AWS Lambda",
                "Containerisierung mit Amazon EKS und ECS",
                "Infrastruktur als Code mit CloudFormation und CDK",
                "Datenbankmigrationen mit DMS",
                "Automatisierte CI/CD-Pipelines mit CodePipeline",
                "Ereignisgesteuerte Architekturen mit EventBridge",
                "Kostenoptimierung durch AWS Well-Architected Framework"
            ]
        },
        {
            title: "Azure",
            span: "Azure: Nahtlose Unternehmensintegration",
            description: "Microsoft Azure überzeugt bei der Modernisierung von Legacy-Systemen und der Implementierung von Hybrid-Cloud-Lösungen für etablierte Unternehmen. End-to-End-Lösungen mit fortschrittlicher Analytik, künstlicher Intelligenz und Unternehmenssicherheit transformieren Geschäftsprozesse und schaffen herausragende Kundenerlebnisse. Von der Bereitstellung virtueller Maschinen bis hin zu komplexen Datenpipelines ermöglicht die umfassende Plattform von Azure die digitale Transformation bei gleichzeitiger Aufrechterhaltung der Geschäftskontinuität.",
            features: [
                "Legacy-System-Modernisierung mit Azure App Service",
                "Hybrid-Konnektivität mit Azure Arc",
                "Containerisierte Anwendungen mit Azure Kubernetes Service",
                "Serverlose Datenverarbeitung mit Azure Functions",
                "DevSecOps-Implementierung mit Azure DevOps",
                "Identitätsmanagement mit Azure Active Directory",
                "Echtzeit-Analytik mit Azure Synapse"
            ]
        },
        {
            title: "GCP",
            span: "GCP: Fortschrittliche Analytik und KI-Integration",
            description: "Google Cloud Platform (GCP) bietet unvergleichliche Fähigkeiten in der Big-Data-Verarbeitung, Machine-Learning-Implementierung und KI-gestützten Lösungsentwicklung. Organisationen gewinnen Wettbewerbsvorteile durch leistungsstarke Datenanalysen, die Geschäftseinblicke offenbaren, Workflow-Automatisierung, die die betriebliche Effizienz steigert, und optimierte Geschäftsprozesse, die Kosten senken. Leistungsoptimierung in Verbindung mit kosteneffizienter Infrastruktur gewährleistet maximale Rendite der Cloud-Investition und bietet Endnutzern reaktionsschnelle, intelligente Anwendungen.",
            features: [
                "Machine-Learning-Operationen mit Vertex AI",
                "Big-Data-Verarbeitung mit BigQuery und Dataflow",
                "Containerisierung mit Google Kubernetes Engine",
                "Serverlose Datenverarbeitung mit Cloud Functions und Cloud Run",
                "API-Management mit Apigee",
                "DevOps-Automatisierung mit Cloud Build",
                "Intelligente Analytik mit Looker"
            ]
        },
        {
            title: "DigitalOcean",
            span: "DigitalOcean: Kosteneffiziente Lösungen für Wachstum",
            description: "Startups und kleine bis mittlere Unternehmen (KMUs) profitieren von DigitalOceans unkomplizierter, aber leistungsstarker Cloud-Plattform. Skalierbare Webanwendungen, verwaltete Datenbanken und containerisierte Bereitstellungen bilden die technische Grundlage für Unternehmenswachstum ohne unnötige Komplexität. Entwicklerfreundliche Tools beschleunigen Entwicklungszyklen bei gleichzeitiger Kosteneffizienz und ermöglichen es Unternehmen, sich auf Innovation statt auf Infrastrukturverwaltung zu konzentrieren.",
            features: [
                "Verwaltete Kubernetes-Cluster für Container-Orchestrierung",
                "App Platform für vereinfachte PaaS-Bereitstellung",
                "Verwaltete Datenbanken mit automatischen Backups",
                "Spaces Objektspeicher für Medien und Assets",
                "Lastausgleich für hochverfügbare Anwendungen",
                "Überwachung und Warnmeldungen mit integrierten Tools",
                "Globales CDN für verbesserte Benutzererfahrung"
            ]
        },
    ],
    migrationProcess: [
        {
            phase: "Bewertung & Planung",
            description: "Umfassende Analyse bestehender Infrastruktur, Anwendungsabhängigkeiten und Geschäftsanforderungen zur Entwicklung einer maßgeschneiderten Migrationsstrategie.",
            outcomes: [
                "Detaillierte Cloud-Bereitschaftsbewertung",
                "TCO-Analyse und ROI-Prognosen",
                "Risikominderungsstrategien",
                "Priorisierter Migrationsfahrplan"
            ]
        },
        {
            phase: "Design & Architektur",
            description: "Erstellung optimierter Cloud-Architektur-Blueprints, die mit Unternehmenszielen übereinstimmen und gleichzeitig Sicherheit, Leistung und Kosteneffizienz gewährleisten.",
            outcomes: [
                "Zukunftsorientierte Architekturdiagramme",
                "Sicherheits- und Compliance-Frameworks",
                "Notfallwiederherstellungspläne",
                "Ressourcenoptimierungsstrategien"
            ]
        },
        {
            phase: "Migration & Implementierung",
            description: "Systematische Übertragung von Anwendungen, Daten und Workloads in die Cloud-Umgebung mit minimaler Geschäftsunterbrechung.",
            outcomes: [
                "Migrationsausführung ohne Ausfallzeiten",
                "Datenintegritätsvalidierung",
                "Leistungstests",
                "Betriebliche Übergabedokumentation"
            ]
        },
        {
            phase: "Optimierung & Verwaltung",
            description: "Kontinuierliche Verbesserung der Cloud-Infrastruktur zur Maximierung von Leistung, Sicherheit und Kosteneffizienz.",
            outcomes: [
                "Automatisierte Skalierungsrichtlinien",
                "Kostenoptimierungsempfehlungen",
                "Leistungsverbesserungsstrategien",
                "Stärkung der Sicherheitslage"
            ]
        }
    ]
}