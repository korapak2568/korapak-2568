import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

export const CloudSolutionZH: ICloudSolution = {
    title: "云基础设施",
    descriptions: [
        {
            title: "数据驱动决策",
            span: "面向未来的技术栈",
            description: "在当今快速发展的数字环境中，弹性、可扩展和面向未来的系统使企业能够在保持卓越运营的同时快速响应市场变化。战略性云架构确保最佳性能、增强安全性和成本效益，同时支持业务增长目标。",
            features: []
        },
    ],
    benefits: [
        "通过优化资源分配减少基础设施成本",
        "通过快速部署能力提高业务敏捷性",
        "通过行业标准合规框架增强数据安全性",
        "通过自动备份解决方案简化灾难恢复",
        "提高应用程序性能以获得更好的用户体验",
        "无缝扩展以支持业务增长",
        "通过最新云技术持续创新"
    ],
    sections: [
        {
            title: "AWS",
            span: "AWS：灵活性和企业可扩展性",
            description: "Amazon Web Services (AWS) 提供动态基础设施扩展，适应波动的业务需求。组织受益于消除基础设施管理顾虑的无服务器架构、支持高效微服务部署的Lambda函数，以及在提高性能的同时降低成本的S3存储优化。这些功能确保系统保持敏捷、成本效益高和高度安全，让利益相关者安心，同时提供卓越的用户体验。",
            features: [
                "使用AWS Lambda的无服务器架构",
                "使用Amazon EKS和ECS的容器化",
                "使用CloudFormation和CDK的基础设施即代码",
                "使用DMS的数据库迁移",
                "使用CodePipeline的自动CI/CD流水线",
                "使用EventBridge的事件驱动架构",
                "通过AWS Well-Architected Framework进行成本优化"
            ]
        },
        {
            title: "Azure",
            span: "Azure：无缝企业集成",
            description: "Microsoft Azure在现代化传统系统和为已建立的企业实施混合云解决方案方面表现出色。结合高级分析、人工智能和企业级安全性的端到端解决方案转变业务运营并创造卓越的客户体验。从虚拟机部署到复杂的数据管道，Azure的综合平台在保持业务连续性的同时实现数字化转型。",
            features: [
                "使用Azure App Service现代化传统系统",
                "使用Azure Arc的混合连接",
                "使用Azure Kubernetes Service的容器化应用",
                "使用Azure Functions的无服务器计算",
                "使用Azure DevOps实施DevSecOps",
                "使用Azure Active Directory的身份管理",
                "使用Azure Synapse的实时分析"
            ]
        },
        {
            title: "GCP",
            span: "GCP：高级分析和AI集成",
            description: "Google Cloud Platform (GCP) 在大数据处理、机器学习实施和AI驱动解决方案开发方面提供无与伦比的能力。组织通过揭示业务洞察的强大数据分析、提高运营效率的工作流自动化和降低成本的精简业务流程获得竞争优势。性能优化与成本效益高的基础设施相结合，确保云投资的最大回报，同时为终端用户提供响应迅速、智能的应用程序。",
            features: [
                "使用Vertex AI的机器学习操作",
                "使用BigQuery和Dataflow的大数据处理",
                "使用Google Kubernetes Engine的容器化",
                "使用Cloud Functions和Cloud Run的无服务器计算",
                "使用Apigee的API管理",
                "使用Cloud Build的DevOps自动化",
                "使用Looker的智能分析"
            ]
        },
        {
            title: "DigitalOcean",
            span: "DigitalOcean：面向增长的成本效益解决方案",
            description: "初创企业和中小型企业(SMEs)从DigitalOcean简单而强大的云平台中受益。可扩展的Web应用程序、托管数据库和容器化部署为业务增长提供技术基础，而无需不必要的复杂性。对开发人员友好的工具加速开发周期，同时保持成本效益，使企业能够专注于创新而非基础设施管理。",
            features: [
                "用于容器编排的托管Kubernetes集群",
                "用于简化PaaS部署的App Platform",
                "带自动备份的托管数据库",
                "用于媒体和资产的Spaces对象存储",
                "用于高可用性应用程序的负载均衡",
                "使用集成工具进行监控和警报",
                "用于改善用户体验的全球CDN"
            ]
        },
    ],
    migrationProcess: [
        {
            phase: "评估与规划",
            description: "全面分析现有基础设施、应用程序依赖关系和业务需求，以制定定制的迁移策略。",
            outcomes: [
                "详细的云就绪评估",
                "TCO分析和ROI预测",
                "风险缓解策略",
                "优先迁移路线图"
            ]
        },
        {
            phase: "设计与架构",
            description: "创建与业务目标一致的优化云架构蓝图，同时确保安全性、性能和成本效益。",
            outcomes: [
                "未来状态架构图",
                "安全和合规框架",
                "灾难恢复计划",
                "资源优化策略"
            ]
        },
        {
            phase: "迁移与实施",
            description: "将应用程序、数据和工作负载系统性地转移到云环境，同时将业务中断降至最低。",
            outcomes: [
                "零停机迁移执行",
                "数据完整性验证",
                "性能测试",
                "运营交接文档"
            ]
        },
        {
            phase: "优化与管理",
            description: "持续改进云基础设施，以最大化性能、安全性和成本效益。",
            outcomes: [
                "自动扩展策略",
                "成本优化建议",
                "性能增强策略",
                "安全态势加强"
            ]
        }
    ]
}