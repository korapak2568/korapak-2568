import {IContents} from "@/data/model/common/IContents";

export const PRIVACY_POLICY_INFO: IContents = {
    title: "Privacy Policy",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Introduction",
            description: "We respect your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we handle any information we may gather when you use our website, particularly regarding the use of cookies for analytics purposes.",
            isDetailed: false,
        },
        {
            title: "1. Information We Collect",
            description: "We do not collect personal information directly from visitors unless they consent to the use of cookies for analytics purposes. When cookies are enabled, we may collect non-personally identifiable information such as browsing behavior, page views, and site interactions via third-party services like Google Analytics.",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Cookie Usage",
                    description: "Our Website uses cookies, but only if you provide consent through our Cookie Consent Modal. Cookies are small text files stored on your device that help us analyze site traffic and improve user experience."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Once you accept cookies, we use Google Analytics to collect anonymized data regarding website usage, such as the number of visitors, how visitors navigate the website, and which pages are most viewed. This data helps us optimize the website’s performance. Google Analytics may store cookies on your device, but no personally identifiable information is collected."
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
                    description: "We implement reasonable security measures to protect any non-personal information collected through cookies and to ensure the integrity of our website. However, we do not collect or store personal information from visitors without consent."
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
                    description: "Our Website may include links to third-party websites. Please be aware that we are not responsible for the privacy practices or the content of these third-party websites. We encourage you to review the privacy policies of any external sites you visit."
                }
            ]
        },
        {
            title: "5. Changes to this Privacy Policy",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Modifications",
                    description: "We may update this Privacy Policy from time to time. Any modifications will be effective immediately upon posting on this page. Your continued use of the Website following any changes constitutes acceptance of the new Privacy Policy."
                }
            ]
        },
        {
            title: "6. Contact Us",
            description: "If you have any questions about this Privacy Policy, please contact us at contact@chorn.in.th.",
            isDetailed: false,
        },
    ],
}