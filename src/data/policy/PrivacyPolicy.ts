import {IPolicy} from "@/data/policy/model/IPolicy";

export const PrivacyPolicy: IPolicy = {
    title: "Privacy Policy",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Introduction",
            description: "CHORN respects your privacy and is committed to safeguarding your personal information. This Privacy Policy explains how any information may be handled when using CHORN's website, particularly regarding the use of cookies for analytics purposes.",
            isDetailed: false,
        },
        {
            title: "1. Information Collected",
            description: "Personal information is not collected directly from visitors unless they consent to the use of cookies for analytics purposes. When cookies are enabled, non-personally identifiable information such as browsing behavior, page views, and site interactions may be collected via third-party services like Google Analytics.",
            isDetailed: false,
        },
        {
            title: "2. Cookies",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Cookie Usage",
                    description: "CHORN's website uses cookies, but only if consent is provided through the Cookie Consent Modal. Cookies are small text files stored on your device that help analyze site traffic and improve user experience."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Once cookies are accepted, anonymized data regarding website usage is collected via Google Analytics. This data includes the number of visitors, navigation behavior, and popular pages, helping optimize website performance. No personally identifiable information is collected."
                },
                {
                    title: "2.3 Your Choices",
                    description: "You can control the use of cookies by accepting or declining through the Cookie Consent Modal. Cookie settings can also be managed through your browser. Note that declining cookies may limit certain website features."
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
                    description: "Reasonable security measures are implemented to protect non-personal information collected through cookies and ensure the integrity of CHORN's website. No personal information is collected or stored without consent."
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
                    description: "CHORN's website may include links to third-party websites. Please note that CHORN is not responsible for the privacy practices or content of these third-party sites. It is encouraged to review the privacy policies of any external sites visited."
                }
            ]
        },
        {
            title: "5. Changes to the Privacy Policy",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Modifications",
                    description: "This Privacy Policy may be updated periodically. Modifications are effective immediately upon posting on this page. Continued use of the website after updates constitutes acceptance of the revised Privacy Policy."
                }
            ]
        },
        {
            title: "6. Contact CHORN",
            description: "For any questions regarding this Privacy Policy, please reach out via the contact page."
        },
    ],
};
