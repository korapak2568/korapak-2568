import { IPolicy } from "@/data/policy/model/IPolicy";

export const PrivacyPolicyVI: IPolicy = {
    title: "Chính Sách Quyền Riêng Tư",
    subtitle: "",
    description: "",
    list: [
        {
            title: "Giới thiệu",
            description: "CHORN tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách thông tin có thể được xử lý khi sử dụng trang web của CHORN, đặc biệt liên quan đến việc sử dụng cookie cho mục đích phân tích.",
            isDetailed: false,
        },
        {
            title: "1. Thông Tin Được Thu Thập",
            description: "Thông tin cá nhân không được thu thập trực tiếp từ khách truy cập trừ khi họ đồng ý sử dụng cookie cho mục đích phân tích. Khi cookie được kích hoạt, thông tin không nhận dạng cá nhân như hành vi duyệt web, lượt xem trang và tương tác trang có thể được thu thập thông qua các công cụ của bên thứ ba như Google Analytics.",
            isDetailed: false,
        },
        {
            title: "2. Cookie",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 Sử Dụng Cookie",
                    description: "Trang web của CHORN sử dụng cookie, nhưng chỉ khi bạn đồng ý thông qua Hộp thoại Chấp nhận Cookie. Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn giúp phân tích lưu lượng truy cập trang web và cải thiện trải nghiệm người dùng."
                },
                {
                    title: "2.2 Google Analytics",
                    description: "Khi chấp nhận cookie, dữ liệu ẩn danh về việc sử dụng trang web sẽ được thu thập thông qua Google Analytics. Dữ liệu này bao gồm số lượng khách truy cập, hành vi điều hướng và các trang phổ biến, giúp tối ưu hóa hiệu suất trang web. Không thu thập thông tin nhận dạng cá nhân."
                },
                {
                    title: "2.3 Lựa Chọn Của Bạn",
                    description: "Bạn có thể kiểm soát việc sử dụng cookie bằng cách chấp nhận hoặc từ chối thông qua Hộp thoại Chấp nhận Cookie. Bạn cũng có thể quản lý cài đặt cookie thông qua trình duyệt của mình. Lưu ý rằng việc từ chối cookie có thể hạn chế một số tính năng của trang web."
                }
            ]
        },
        {
            title: "3. Bảo Mật Dữ Liệu",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 Biện Pháp Bảo Mật",
                    description: "Các biện pháp bảo mật hợp lý được thực hiện để bảo vệ thông tin không nhận dạng cá nhân được thu thập thông qua cookie và đảm bảo tính toàn vẹn của trang web CHORN. Không có thông tin cá nhân nào được thu thập hoặc lưu trữ mà không có sự đồng ý."
                }
            ]
        },
        {
            title: "4. Liên Kết Đến Bên Thứ Ba",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 Liên Kết Ngoài",
                    description: "Trang web của CHORN có thể bao gồm các liên kết đến các trang web của bên thứ ba. Lưu ý rằng CHORN không chịu trách nhiệm về các thực tiễn bảo mật hoặc nội dung của các trang web này. Chúng tôi khuyến khích bạn xem xét chính sách quyền riêng tư của các trang web bên ngoài mà bạn truy cập."
                }
            ]
        },
        {
            title: "5. Thay Đổi Chính Sách Quyền Riêng Tư",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 Sửa Đổi",
                    description: "Chính sách quyền riêng tư này có thể được cập nhật định kỳ. Các sửa đổi có hiệu lực ngay khi được đăng trên trang này. Việc tiếp tục sử dụng trang web sau các bản cập nhật đồng nghĩa với việc bạn chấp nhận Chính sách quyền riêng tư đã sửa đổi."
                }
            ]
        }
    ],
};
