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
    title: "Kinh nghiệm Front-End",
    span: "Kinh nghiệm phát triển Front-End",
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
        title: "Dịch Vụ Phát Triển Front-End",
        descriptions: [
            "Biến tầm nhìn web của bạn thành hiện thực với dịch vụ phát triển front-end chuyên nghiệp của chúng tôi. CHORN cung cấp các trang web thân thiện với người dùng, đẹp mắt và hoàn toàn responsive thu hút khán giả của bạn. Chúng tôi chuyên về các framework hiện đại bao gồm Next.js, React, Angular và Vue.js, cùng với các công nghệ web cốt lõi như HTML5 và CSS3. Cho dù bạn cần một ứng dụng đơn trang (SPA) hiệu suất cao được tối ưu hóa cho công cụ tìm kiếm hay một nền tảng đa trang phức tạp, đội ngũ phát triển của chúng tôi cung cấp kết quả chất lượng đúng thời hạn. Hợp tác với CHORN để tạo ra những trải nghiệm số hấp dẫn thu hút khách truy cập và thúc đẩy tăng trưởng kinh doanh."
        ],
        items: [
            {
                title: "Triển Khai Framework Hiện Đại",
                description: "Xây dựng ứng dụng web động, tương tác sử dụng các framework tiên tiến như Next.js và React cung cấp hiệu suất và trải nghiệm người dùng tối ưu."
            },
            {
                title: "Tối Ưu Hóa SEO",
                description: "Cải thiện khả năng hiển thị của trang web của bạn trên Google và các công cụ tìm kiếm khác thông qua cấu trúc mã được tối ưu hóa, thời gian tải nhanh và thiết kế thân thiện với thiết bị di động."
            },
            {
                title: "Phát Triển Proof of Concept (PoC)",
                description: "Kiểm tra và xác nhận ý tưởng sáng tạo của bạn nhanh chóng với các nguyên mẫu chức năng trước khi cam kết phát triển toàn diện."
            },
            {
                title: "Tạo Sản Phẩm Khả Thi Tối Thiểu (MVP)",
                description: "Ra mắt phiên bản ban đầu hoàn chỉnh và có khả năng mở rộng của sản phẩm để thu hút người dùng sớm, thu thập phản hồi và đảm bảo nhà đầu tư tiềm năng."
            },
            {
                title: "Thiết Kế UI/UX Xuất Sắc",
                description: "Nâng cao sự hài lòng của người dùng với giao diện trực quan, đẹp mắt giúp tăng tương tác, giảm tỷ lệ thoát và tăng tỷ lệ chuyển đổi."
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