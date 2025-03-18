import { IPolicy } from "@/data/policy/model/IPolicy";

export const PrivacyPolicyZH: IPolicy = {
    title: "隐私政策",
    subtitle: "",
    description: "",
    list: [
        {
            title: "简介",
            description: "CHORN 尊重您的隐私，并致力于保护您的个人信息。本隐私政策解释了在使用 CHORN 网站时可能如何处理您的信息，特别是关于分析目的使用 Cookies（Cookies）的情况。",
            isDetailed: false,
        },
        {
            title: "1. 收集的信息",
            description: "除非您同意使用 Cookies 进行分析，否则我们不会直接从访客处收集个人信息。当启用 Cookies 时，可能会通过 Google Analytics 等第三方工具收集非个人识别信息，例如浏览行为、页面访问和与网站的互动数据。",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Cookies 的使用",
                    description: "CHORN 网站仅在您通过 Cookies 同意弹窗授权的情况下使用 Cookies。Cookies 是存储在您设备上的小型文本文件，有助于分析网站流量并提升用户体验。"
                },
                {
                    title: "2.2 Google Analytics",
                    description: "当您接受 Cookies 后，我们会通过 Google Analytics 收集匿名的站点使用数据。这些数据包括访问者数量、浏览行为和热门页面，帮助我们优化网站性能。不会收集任何可以识别您个人的信息。"
                },
                {
                    title: "2.3 您的选择",
                    description: "您可以通过 Cookies 同意弹窗接受或拒绝使用 Cookies。此外，您可以通过浏览器设置管理 Cookies。请注意，拒绝 Cookies 可能会限制网站的某些功能。"
                }
            ]
        },
        {
            title: "3. 数据安全",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 安全措施",
                    description: "我们采取合理的安全措施保护通过 Cookies 收集的非个人信息，并确保 CHORN 网站的完整性。未经同意，我们不会收集或存储任何个人信息。"
                }
            ]
        },
        {
            title: "4. 第三方链接",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 外部链接",
                    description: "CHORN 网站可能包含指向第三方网站的链接。请注意，CHORN 对这些第三方网站的隐私政策或内容概不负责。建议您查看所访问的第三方网站的隐私政策。"
                }
            ]
        },
        {
            title: "5. 隐私政策的更改",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 变更",
                    description: "本隐私政策可能会定期更新。更改将在本页面发布后立即生效。继续使用本网站即表示您接受修订后的隐私政策。"
                }
            ]
        },
        {
            title: "6. 联系 CHORN",
            description: "如果您对本隐私政策有任何疑问，请通过联系我们页面与我们联系。"
        },
    ],
};