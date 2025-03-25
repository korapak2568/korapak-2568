import {IPolicy} from "@/data/policy/model/IPolicy";

export const TermOfServiceZH: IPolicy = {
    title: "服务条款",
    subtitle: "",
    description: "",
    list: [
        {
            title: "欢迎访问 CHORN 网站",
            description: "这些服务条款（\"条款\"）规范了您对本网站（\"网站\"）的使用。通过访问或使用本网站，您即表示同意遵守这些条款。如果您不同意这些条款，请立即停止使用本网站。"
        },
        {
            title: "1. 网站使用",
            description: "1.1 CHORN 提供技术专长概述，仅供参考之用。未经许可，不得将本网站上的信息用于参考或其他目的。"
        },
        {
            title: "2. 知识产权",
            description: "2.1 本网站上的所有内容，包括文本、图形、标志和图像，均为 CHORN 或其内容供应商的财产，受知识产权法律保护。",
            expand: "2.2 未经 CHORN 明确书面许可，不得复制、分发、修改或以其他方式使用本网站上的内容。"
        },
        {
            title: "3. 免责声明",
            description: "3.1 本网站按\"现状\"和\"可用\"的基础提供。CHORN 对网站的操作或所包含的信息、内容或材料不作任何明示或暗示的保证。",
            expand: "3.2 CHORN 不保证本网站不会中断、没有错误或没有有害成分。"
        },
        {
            title: "4. 责任限制",
            description: "4.1 在法律允许的最大范围内，CHORN 对因使用本网站而导致的任何损失或损害不承担任何责任。",
            expand: "4.2 CHORN 对于因使用或无法使用本网站而引起的直接、间接、附带、特殊或后果性损害概不负责。"
        },
        {
            title: "5. 条款变更",
            description: "5.1 本条款可能随时修改。修改将在网站上发布后立即生效。继续使用本网站即表示您接受更新后的条款。"
        }
    ],
};
