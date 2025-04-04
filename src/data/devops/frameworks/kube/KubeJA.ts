import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const KubeJA: IDevOpsStack = {
    title: "Kubernetes",
    description: "スケーラブルでレジリエントなアプリケーションのためにKubernetesでコンテナオーケストレーションを自動化します。",
    image: ImageUrl.devopsThumbnails.kube.path,
    alt: "Kubernetesテクノロジー経験を表すロゴ",
    readMore: "Kubernetes DevOpsテストソリューションを発見する",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetesは、コンテナ化されたアプリケーションのデプロイ、スケーリング、管理を自動化する主要なコンテナオーケストレーションプラットフォームです。大規模で回復力のあるシステムに不可欠です。",
            list: []
        },
        {
            title: "Kubernetesの強み",
            description: "Kubernetesはその堅牢な機能で際立っています",
            list: [
                "自動デプロイ",
                "スケーラビリティ",
                "セルフヒーリング",
                "サービスディスカバリー",
                "ロードバランシング",
                "ストレージオーケストレーション",
                "設定管理"
            ]
        },
        {
            title: "課題と解決策",
            description: "Kubernetesはコンテナ化されたアプリケーションのためのスケーラブルで自動化されたソリューションを提供することによってオーケストレーションの課題に対処します。",
            list: []
        }
    ],
    faqs: [
        {
            question: "Kubernetesとは何ですか？",
            answer: "Kubernetesは、コンテナ化されたアプリケーションのデプロイ、スケーリング、管理を自動化するコンテナオーケストレーションプラットフォームです。"
        },
        {
            question: "Kubernetesはアプリケーションのスケーラビリティをどのように向上させますか？",
            answer: "Kubernetesは需要に基づいてコンテナ化されたアプリケーションのスケーリングを自動的に管理することで、アプリケーションのスケーラビリティを向上させます。"
        },
        {
            question: "Kubernetesを使用する利点は何ですか？",
            answer: "Kubernetesを使用する利点には、自動デプロイ、スケーラビリティ、セルフヒーリング、サービスディスカバリー、ロードバランシング、ストレージオーケストレーションが含まれます。"
        }
    ]
}