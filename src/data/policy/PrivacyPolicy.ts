import {IPolicy} from "@/data/policy/model/IPolicy";

export const PrivacyPolicy: IPolicy = {
    title: "Privacy model",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Introduction",
            description: "CHORN respect your privacy and are committed to safeguarding your personal information. This Privacy model explains how CHORN handle any information CHORN may gather when you use CHORN's website, particularly regarding the use of cookies for analytics purposes.",
            isDetailed: false,
        },
        {
            title: "1. Information CHORN Collect",
            description: "CHORN do not collect personal information directly from visitors unless they consent to the use of cookies for analytics purposes. When cookies are enabled, CHORN may collect non-personally identifiable information such as browsing behavior, page views, and site interactions via third-party services like Google Analytics.",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Cookie Usage",
                    description: "CHORN's Website uses cookies, but only if you provide consent through CHORN's Cookie Consent Modal. Cookies are small text files stored on your device that help us analyze site traffic and improve user experience."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Once you accept cookies, CHORN use Google Analytics to collect anonymized data regarding website usage, such as the number of visitors, how visitors navigate the website, and which pages are most viewed. This data helps us optimize the website’s performance. Google Analytics may store cookies on your device, but no personally identifiable information is collected."
                },
                {
                    title: "2.3 Your Choices",
                    description: "You can control the use of cookies by choosing to accept through the Cookie Consent Modal. You can also manage cookie settings through your browser’s settings. Please note that declining cookies may limit certain features of the website."
                }
            ]
        },
        {
            title: "3. Data Security",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 Security Measures",
                    description: "CHORN implement reasonable security measures to protect any non-personal information collected through cookies and to ensure the integrity of CHORN's website. However, CHORN do not collect or store personal information from visitors without consent."
                }
            ]
        },
        {
            title: "4. Third-Party Links",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 External Links",
                    description: "CHORN's Website may include links to third-party websites. Please be aware that CHORN are not responsible for the privacy practices or the content of these third-party websites. CHORN encourage you to review the privacy policies of any external sites you visit."
                }
            ]
        },
        {
            title: "5. Changes to this Privacy model",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Modifications",
                    description: "CHORN may update this Privacy model from time to time. Any modifications will be effective immediately upon posting on this page. Your continued use of the Website following any changes constitutes acceptance of the new Privacy model."
                }
            ]
        },
        {
            title: "6. Contact2025 Us",
            description: "If you have any questions model this Privacy model, please contact us at contact@chorn.in.th.",
            isDetailed: false,
        },
    ],
}