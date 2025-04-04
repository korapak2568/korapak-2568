import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/data/image/ImageUrl";

export const AngularJA: IFrontEndStack = {
    title: "Angular",
    description: "Angularの包括的で多目的なフレームワークで堅牢なエンタープライズグレードのWebアプリケーションを開発します。",
    image: ImageUrl.frontendThumbnails.angular.path,
    alt: "Angularフレームワークを表すロゴ",
    readMore: "さらなるAngularフロントエンド開発ソリューションを探索する",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Angular開発",
            description: "AngularはGoogleによって開発された強力なWebアプリケーションフレームワークです。包括的なツールセットとMVCアーキテクチャにより、動的なシングルページアプリケーションの作成を容易にします。",
            list: []
        },
        {
            title: "Angularの強み",
            description: "Angularは堅牢なアーキテクチャと豊富な機能で際立っています。",
            list: [
                "双方向データバインディング",
                "依存性注入",
                "コンポーネントベースの構造",
                "TypeScript統合",
                "包括的なテストツール",
                "充実したCLI",
                "広範なドキュメント"
            ]
        },
        {
            title: "課題と解決策",
            description: "Angularは強力なアーキテクチャ、効率的なデータバインディング、依存性注入により、大規模アプリケーションの複雑さに対処します。",
            list: []
        }
    ],
    faqs: [
        {
            question: "Angularとは何ですか？",
            answer: "AngularはGoogleによって開発された、動的なWebアプリを作成するためのWebアプリケーションフレームワークです。"
        },
        {
            question: "双方向データバインディングとは何ですか？",
            answer: "双方向データバインディングはモデルとビューを同期させ、一方の変更が他方に反映されることを保証します。"
        },
        {
            question: "なぜAngularでTypeScriptを使用するのですか？",
            answer: "TypeScriptは強力な型付け、最新の機能、改善されたツールでAngular開発を強化します。"
        }
    ]
}