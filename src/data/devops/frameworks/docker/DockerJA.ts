import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const DockerJA: IDevOpsStack = {
    title: "Docker",
    description: "一貫性のある効率的な環境のためにコンテナ化を使用して、アプリケーションのデプロイを効率化します。",
    image: ImageUrl.devops.frameworks.docker.thumbnail,
    alt: "Docker技術体験を表すロゴ",
    readMore: "効率的なDevOpsテスト用のDockerを探索する",
    link: "/technical-expertise/cloud-devops/docker",
    features: [
        {
            title: "Docker",
            description: "Dockerは、コンテナ内でアプリケーションを開発、配送、実行するための強力なプラットフォームであり、複数の環境間での一貫性を確保します。最新のDevOpsプラクティスに最適です。",
            list: []
        },
        {
            title: "Dockerの強み",
            description: "Dockerはその主要機能で優れています",
            list: [
                "コンテナ化",
                "環境の一貫性",
                "リソース効率",
                "スケーラビリティ",
                "分離",
                "迅速なデプロイメント",
                "シンプルな構成"
            ]
        },
        {
            title: "課題と解決策",
            description: "Dockerは、パフォーマンス、スケーラビリティ、および一貫性を向上させるコンテナ化ソリューションを提供することで、デプロイメントの課題に対処します。",
            list: []
        }
    ],
    faqs: [
        {
            question: "Dockerとは何ですか？",
            answer: "Dockerは、一貫性のある分離された環境でアプリケーションをデプロイするためにコンテナ化を使用するプラットフォームです。"
        },
        {
            question: "Dockerはどのようにデプロイメントの一貫性を向上させますか？",
            answer: "Dockerは、アプリケーションとその依存関係を異なる環境で均一に実行されるコンテナにパッケージ化することで、デプロイメントの一貫性を確保します。"
        },
        {
            question: "Dockerを使用する利点は何ですか？",
            answer: "Dockerを使用する利点には、環境の一貫性、リソース効率、スケーラビリティ、分離、および迅速なデプロイメントが含まれます。"
        }
    ]
}