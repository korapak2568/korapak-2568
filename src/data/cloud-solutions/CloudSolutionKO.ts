import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

export const CloudSolutionKO: ICloudSolution = {
    title: "클라우드 인프라",
    descriptions: [
        {
            title: "데이터 기반 의사결정",
            span: "미래 지향적 기술 스택",
            description: "오늘날의 빠르게 진화하는 디지털 환경에서 탄력적이고 확장 가능하며 미래 지향적인 시스템은 운영 우수성을 유지하면서 시장 변화에 신속하게 대응할 수 있게 합니다. 전략적인 클라우드 아키텍처는 비즈니스 성장 목표를 지원하면서 최적의 성능, 향상된 보안 및 비용 효율성을 보장합니다.",
            features: []
        },
    ],
    benefits: [
        "최적화된 리소스 할당을 통한 인프라 비용 절감",
        "신속한 배포 기능으로 비즈니스 민첩성 향상",
        "업계 표준 규정 준수 프레임워크로 데이터 보안 강화",
        "자동화된 백업 솔루션으로 재해 복구 간소화",
        "더 나은 사용자 경험을 위한 애플리케이션 성능 향상",
        "비즈니스 성장을 지원하는 원활한 확장성",
        "최신 클라우드 기술을 통한 지속적인 혁신"
    ],
    sections: [
        {
            title: "AWS",
            span: "AWS: 유연성 및 기업 확장성",
            description: "Amazon Web Services(AWS)는 변동하는 비즈니스 요구에 적응하는 동적 인프라 확장을 제공합니다. 조직은 인프라 관리 문제를 제거하는 서버리스 아키텍처, 효율적인 마이크로서비스 배포를 가능하게 하는 Lambda 함수, 비용을 절감하면서 성능을 향상시키는 S3 스토리지 최적화의 이점을 누릴 수 있습니다. 이러한 기능은 시스템이 민첩하고, 비용 효율적이며, 매우 안전하게 유지되도록 보장하여 이해관계자에게 안심을 제공하는 동시에 탁월한 사용자 경험을 제공합니다.",
            features: [
                "AWS Lambda를 통한 서버리스 아키텍처",
                "Amazon EKS 및 ECS를 통한 컨테이너화",
                "CloudFormation 및 CDK를 사용한 인프라스트럭처 코드화",
                "DMS를 통한 데이터베이스 마이그레이션",
                "CodePipeline을 통한 자동화된 CI/CD 파이프라인",
                "EventBridge를 통한 이벤트 기반 아키텍처",
                "AWS Well-Architected Framework를 통한 비용 최적화"
            ]
        },
        {
            title: "Azure",
            span: "Azure: 원활한 기업 통합",
            description: "Microsoft Azure는 기존 기업을 위한 레거시 시스템 현대화 및 하이브리드 클라우드 솔루션 구현에 탁월합니다. 고급 분석, 인공 지능 및 기업급 보안을 통합한 엔드투엔드 솔루션은 비즈니스 운영을 혁신하고 탁월한 고객 경험을 창출합니다. 가상 머신 배포에서 복잡한 데이터 파이프라인에 이르기까지 Azure의 포괄적인 플랫폼은 비즈니스 연속성을 유지하면서 디지털 변환을 가능하게 합니다.",
            features: [
                "Azure App Service를 통한 레거시 시스템 현대화",
                "Azure Arc를 통한 하이브리드 연결",
                "Azure Kubernetes Service를 통한 컨테이너화된 애플리케이션",
                "Azure Functions를 통한 서버리스 컴퓨팅",
                "Azure DevOps를 통한 DevSecOps 구현",
                "Azure Active Directory를 통한 ID 관리",
                "Azure Synapse를 통한 실시간 분석"
            ]
        },
        {
            title: "GCP",
            span: "GCP: 고급 분석 및 AI 통합",
            description: "Google Cloud Platform(GCP)은 빅데이터 처리, 머신러닝 구현 및 AI 기반 솔루션 개발에 있어 타의 추종을 불허하는 기능을 제공합니다. 조직은 비즈니스 인사이트를 드러내는 강력한 데이터 분석, 운영 효율성을 높이는 워크플로 자동화, 비용을 절감하는 간소화된 비즈니스 프로세스를 통해 경쟁 우위를 확보합니다. 성능 최적화와 비용 효율적인 인프라의 결합은 최종 사용자에게 응답성이 뛰어나고 지능적인 애플리케이션을 제공하면서 클라우드 투자의 최대 수익을 보장합니다.",
            features: [
                "Vertex AI를 통한 머신러닝 운영",
                "BigQuery 및 Dataflow를 통한 빅데이터 처리",
                "Google Kubernetes Engine을 통한 컨테이너화",
                "Cloud Functions 및 Cloud Run을 통한 서버리스 컴퓨팅",
                "Apigee를 통한 API 관리",
                "Cloud Build를 통한 DevOps 자동화",
                "Looker를 통한 인텔리전트 분석"
            ]
        },
        {
            title: "DigitalOcean",
            span: "DigitalOcean: 성장을 위한 비용 효율적인 솔루션",
            description: "스타트업 및 중소기업(SME)은 DigitalOcean의 단순하면서도 강력한 클라우드 플랫폼의 이점을 누릴 수 있습니다. 확장 가능한 웹 애플리케이션, 관리형 데이터베이스 및 컨테이너화된 배포는 불필요한 복잡성 없이 비즈니스 성장을 위한 기술적 기반을 제공합니다. 개발자 친화적인 도구는 비용 효율성을 유지하면서 개발 주기를 가속화하여 비즈니스가 인프라 관리보다 혁신에 집중할 수 있도록 합니다.",
            features: [
                "컨테이너 오케스트레이션을 위한 관리형 Kubernetes 클러스터",
                "간소화된 PaaS 배포를 위한 App Platform",
                "자동화된 백업이 있는 관리형 데이터베이스",
                "미디어 및 자산을 위한 Spaces 객체 스토리지",
                "고가용성 애플리케이션을 위한 로드 밸런싱",
                "통합 도구를 통한 모니터링 및 알림",
                "향상된 사용자 경험을 위한 글로벌 CDN"
            ]
        },
    ],
    migrationProcess: [
        {
            phase: "평가 및 계획",
            description: "맞춤형 마이그레이션 전략을 개발하기 위한 기존 인프라, 애플리케이션 종속성 및 비즈니스 요구 사항에 대한 포괄적인 분석.",
            outcomes: [
                "상세한 클라우드 준비 평가",
                "TCO 분석 및 ROI 예측",
                "위험 완화 전략",
                "우선순위가 지정된 마이그레이션 로드맵"
            ]
        },
        {
            phase: "설계 및 아키텍처",
            description: "보안, 성능 및 비용 효율성을 보장하면서 비즈니스 목표에 부합하는 최적화된 클라우드 아키텍처 청사진 생성.",
            outcomes: [
                "미래 상태 아키텍처 다이어그램",
                "보안 및 규정 준수 프레임워크",
                "재해 복구 계획",
                "리소스 최적화 전략"
            ]
        },
        {
            phase: "마이그레이션 및 구현",
            description: "비즈니스 중단을 최소화하면서 애플리케이션, 데이터 및 워크로드를 클라우드 환경으로 체계적으로 전송.",
            outcomes: [
                "무중단 마이그레이션 실행",
                "데이터 무결성 검증",
                "성능 테스트",
                "운영 인계 문서"
            ]
        },
        {
            phase: "최적화 및 관리",
            description: "성능, 보안 및 비용 효율성을 극대화하기 위한 클라우드 인프라의 지속적인 개선.",
            outcomes: [
                "자동화된 확장 정책",
                "비용 최적화 권장 사항",
                "성능 향상 전략",
                "보안 태세 강화"
            ]
        }
    ]
}