import {IAbout} from "@/data/about/model/IAbout";

export const AboutZH: IAbout = {
    title: "关于",
    span: "全面的系统分析和软件开发",
    subTitle: "业务成功的技术创新",
    description: [
        {
            title: "关于我们",
            description: "CHORN 于2023年3月推出其网站，以跟踪当今快速变化的技术、软件开发、各种商业领域行业的信息技术以及有趣新闻的最新信息。"
        },
        {
            title: "专业知识",
            description: "持续致力于发展软件工程和信息技术知识，包括参与全球平台以帮助训练人工智能和创建生成式人工智能。定期扩展相关领域的知识和专业技能，如系统架构、数据分析、网络应用程序开发、软件测试和云计算。"
        },
        {
            title: "工作地点和形式",
            description: "通过远程、混合和办公室工作在清迈、曼谷和国际上开发软件。创建概念验证（PoC）应用程序、最小可行产品（MVP），帮助分析系统需求，并改进现有系统以响应不断变化的业务需求。"
        }
    ],
    stacks: [
        {
            title: "软件开发与企业系统集成",
            description: "使用现代框架定制开发网站和软件系统。涵盖前端和后端开发、智能合约、区块链、Web3 和 DApp。整合企业系统，如 ERP（例如 SAP）、CRM、LLM-AI、LINE 聊天应用、机器学习、电商平台和 API，加强各部门之间的数据连接，实现自动化与协作。"
        },
        {
            title: "系统分析和技术支持",
            description: "深入的系统分析和技术建议，以增强关键应用程序和系统。确保可靠性、质量控制、软件测试以及现代技术的实施，以实现业务的持续运营和改进。"
        },
        {
            title: "敏捷软件开发和业务团队协调",
            description: "敏捷软件开发与业务团队协调。与国内和国际团队、内部和外部客户、业务用户紧密合作。工作方法包括敏捷、瀑布和混合方法。"
        }
    ],
    contact: {
        title: "商务咨询与合作",
        description: "我们欢迎来自联合创始人、CEO、CTO、产品负责人及投资合作伙伴的联系。",
        roles: [
            {
                title: "项目经理",
                span: "（客户项目协调）",
                email: "pm@chorn.in.th"
            },
            {
                title: "首席技术官",
                span: "（技术合作或系统集成）",
                email: "cto@chorn.in.th"
            },
            {
                title: "人力资源部",
                span: "（关于人力资源、招聘和雇佣的相关咨询）",
                email: "hr@chorn.in.th"
            },
            {
                title: "一般咨询",
                span: "（战略合作）",
                officePhone: "办公室电话：+66 (52) 000 548",
                mobilePhone: "移动电话：+66 (64) 918 1998",
                locations: {
                    office: "办公室：泰国清迈府善赛县善纳孟分区 Moo 3，405/112，邮编50210",
                    nearby: [
                        "靠近清迈尚泰百货（Central Festival）– 20分钟",
                        "靠近梅州大学 – 22分钟",
                        "靠近清迈大学 – 29分钟",
                        "靠近清迈国际机场 – 30分钟"
                    ]
                }
            }
        ]
    }
};
