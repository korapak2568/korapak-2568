import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueVI} from "@/data/frontend/frameworks/vue/VueVI";
import {TypeScriptVI} from "@/data/frontend/frameworks/typescript/TypeScriptVI";
import {ReactVI} from "@/data/frontend/frameworks/react/ReactVI";
import {NextjsVI} from "@/data/frontend/frameworks/nextjs/NextjsVI";
import {JavaScriptVI} from "@/data/frontend/frameworks/javascript/JavaScriptVI";
import {Html5VI} from "@/data/frontend/frameworks/html5/Html5VI";
import {Css3VI} from "@/data/frontend/frameworks/css3/Css3VI";
import {AngularVI} from "@/data/frontend/frameworks/angular/AngularVI";

export const FrontEndVI: IFrontEnd = {
    title: "Phát triển Front-End",
    span: "Kinh nghiệm Phát triển Front-End",
    subTitle: "",

    angular: AngularVI,
    css3: Css3VI,
    html5: Html5VI,
    nextjs: NextjsVI,
    react: ReactVI,
    typescript: TypeScriptVI,
    vue: VueVI,
    javascript: JavaScriptVI,

    stacks: [],

    services: {
        title: "Phát triển Front-End",
        descriptions: [
            "Phát triển front-end là giao diện quan trọng giữa người dùng và dịch vụ kỹ thuật số, tạo ra các yếu tố hình ảnh và thành phần tương tác định hình trải nghiệm người dùng. Lớp thiết yếu này chuyển đổi các hệ thống backend phức tạp thành giao diện trực quan, dễ tiếp cận, thu hút khán giả và thúc đẩy tăng trưởng kinh doanh. Các framework hiện đại bao gồm Next.js, React, Angular và Vue.js, cùng với các công nghệ web cốt lõi như HTML5 và CSS3, cho phép các ứng dụng hiệu suất cao tải nhanh và phản hồi mượt mà trên mọi thiết bị. Giải pháp front-end hiệu quả tăng sự tương tác của người dùng, cải thiện tỷ lệ chuyển đổi và củng cố nhận thức thương hiệu thông qua trải nghiệm kỹ thuật số nhất quán, chuyên nghiệp đáp ứng cả mục tiêu kinh doanh và nhu cầu người dùng."
        ],
        items: [
            {
                title: "Triển khai Framework Hiện đại",
                description: "Ứng dụng web động, tương tác sử dụng các framework tiên tiến như Next.js và React cung cấp hiệu suất tối ưu, khả năng phản hồi và trải nghiệm người dùng nâng cao."
            },
            {
                title: "Tối ưu hóa SEO",
                description: "Cải thiện khả năng hiển thị website trên Google và các công cụ tìm kiếm khác thông qua cấu trúc mã được tối ưu hóa, thời gian tải nhanh và thiết kế thân thiện với thiết bị di động, thu hút lưu lượng truy cập tự nhiên và giảm chi phí thu hút khách hàng."
            },
            {
                title: "Phát triển Proof of Concept (PoC)",
                description: "Xác thực nhanh chóng các ý tưởng đổi mới thông qua các nguyên mẫu chức năng, giảm rủi ro và cho phép các bên liên quan hình dung các khái niệm trước khi đầu tư quy mô đầy đủ."
            },
            {
                title: "Tạo Minimum Viable Product (MVP)",
                description: "Phiên bản ban đầu đầy đủ tính năng, có khả năng mở rộng thu hút người dùng ban đầu, tạo ra phản hồi có giá trị và thu hút các nhà đầu tư tiềm năng đồng thời thiết lập sự hiện diện trên thị trường."
            },
            {
                title: "Thiết kế UI/UX",
                description: "Giao diện trực quan, đẹp mắt thúc đẩy sự tương tác, giảm tỷ lệ thoát và tăng tỷ lệ chuyển đổi thông qua các nguyên tắc thiết kế lấy người dùng làm trung tâm và tiêu chuẩn truy cập."
            }
        ]
    }
}

FrontEndVI.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]