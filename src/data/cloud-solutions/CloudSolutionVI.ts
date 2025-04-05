import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

export const CloudSolutionVI: ICloudSolution = {
    title: "Di Chuyển Lên Đám Mây",
    descriptions: [
        {
            title: "Chuyển Đổi Hoạt Động Kinh Doanh",
            span: "Đẩy Nhanh Chuyển Đổi Số",
            description: "Khai thác toàn bộ tiềm năng của cơ sở hạ tầng đám mây với kiến trúc chiến lược và phân tích hệ thống mang lại kết quả kinh doanh đo lường được.",
            features: []
        },
        {
            title: "Ra Quyết Định Dựa Trên Dữ Liệu",
            span: "Hệ Thống Công Nghệ Hướng Tương Lai",
            description: "Trong bối cảnh kỹ thuật số phát triển nhanh chóng hiện nay, hệ thống có khả năng phục hồi, mở rộng và hướng đến tương lai giúp doanh nghiệp phản ứng nhanh chóng với những thay đổi của thị trường trong khi vẫn duy trì sự xuất sắc trong hoạt động. Kiến trúc đám mây chiến lược đảm bảo hiệu suất tối ưu, tăng cường bảo mật và hiệu quả chi phí trong khi hỗ trợ các mục tiêu tăng trưởng kinh doanh.",
            features: []
        },
    ],
    benefits: [
        "Giảm chi phí cơ sở hạ tầng thông qua phân bổ tài nguyên tối ưu",
        "Tăng cường sự linh hoạt trong kinh doanh với khả năng triển khai nhanh chóng",
        "Nâng cao bảo mật dữ liệu với các khung tuân thủ tiêu chuẩn ngành",
        "Đơn giản hóa khôi phục thảm họa với các giải pháp sao lưu tự động",
        "Cải thiện hiệu suất ứng dụng để có trải nghiệm người dùng tốt hơn",
        "Khả năng mở rộng liền mạch để hỗ trợ tăng trưởng kinh doanh",
        "Đổi mới liên tục thông qua công nghệ đám mây mới nhất"
    ],
    sections: [
        {
            title: "Lựa Chọn Đám Mây Chiến Lược",
            span: "Cơ Sở Hạ Tầng Đám Mây Tùy Chỉnh",
            description: "Sự thành công trong việc di chuyển lên đám mây phụ thuộc vào việc lựa chọn nền tảng phù hợp cho các yêu cầu kinh doanh cụ thể. Dù là cải thiện cơ sở hạ tầng hiện có hay xây dựng hệ thống mới từ đầu, môi trường đám mây lý tưởng phải phù hợp hoàn toàn với mục tiêu kinh doanh. Môi trường cloud-native, hybrid, hoặc multi-cloud đều mang lại những lợi thế riêng biệt tùy thuộc vào nhu cầu khả năng mở rộng, yêu cầu tuân thủ và mục tiêu hoạt động.",
        },
        {
            title: "AWS",
            span: "AWS: Tính Linh Hoạt và Khả Năng Mở Rộng Doanh Nghiệp",
            description: "Amazon Web Services (AWS) cung cấp khả năng mở rộng cơ sở hạ tầng động thích ứng với nhu cầu kinh doanh biến động. Tổ chức được hưởng lợi từ kiến trúc serverless loại bỏ các mối lo ngại về quản lý cơ sở hạ tầng, các hàm Lambda cho phép triển khai microservice hiệu quả, và tối ưu hóa lưu trữ S3 giúp giảm chi phí trong khi cải thiện hiệu suất. Những khả năng này đảm bảo hệ thống vẫn nhanh nhẹn, hiệu quả về chi phí và có độ bảo mật cao, mang lại sự an tâm cho các bên liên quan đồng thời cung cấp trải nghiệm người dùng vượt trội.",
            features: [
                "Kiến trúc serverless với AWS Lambda",
                "Container hóa với Amazon EKS và ECS",
                "Cơ sở hạ tầng dưới dạng mã với CloudFormation và CDK",
                "Di chuyển cơ sở dữ liệu với DMS",
                "Pipeline CI/CD tự động với CodePipeline",
                "Kiến trúc hướng sự kiện với EventBridge",
                "Tối ưu hóa chi phí thông qua AWS Well-Architected Framework"
            ]
        },
        {
            title: "Azure",
            span: "Azure: Tích Hợp Doanh Nghiệp Liền Mạch",
            description: "Microsoft Azure xuất sắc trong việc hiện đại hóa các hệ thống cũ và triển khai giải pháp đám mây lai cho các doanh nghiệp đã thành lập. Các giải pháp end-to-end kết hợp phân tích nâng cao, trí tuệ nhân tạo và bảo mật cấp doanh nghiệp chuyển đổi hoạt động kinh doanh và tạo ra trải nghiệm khách hàng vượt trội. Từ triển khai máy ảo đến các pipeline dữ liệu phức tạp, nền tảng toàn diện của Azure cho phép chuyển đổi kỹ thuật số trong khi vẫn duy trì tính liên tục của doanh nghiệp.",
            features: [
                "Hiện đại hóa hệ thống cũ với Azure App Service",
                "Kết nối lai với Azure Arc",
                "Ứng dụng container hóa với Azure Kubernetes Service",
                "Điện toán serverless với Azure Functions",
                "Triển khai DevSecOps với Azure DevOps",
                "Quản lý định danh với Azure Active Directory",
                "Phân tích thời gian thực với Azure Synapse"
            ]
        },
        {
            title: "GCP",
            span: "GCP: Phân Tích Nâng Cao và Tích Hợp AI",
            description: "Google Cloud Platform (GCP) cung cấp khả năng vô song trong xử lý dữ liệu lớn, triển khai máy học và phát triển giải pháp dựa trên AI. Tổ chức đạt được lợi thế cạnh tranh thông qua phân tích dữ liệu mạnh mẽ tiết lộ thông tin chi tiết kinh doanh, tự động hóa quy trình làm việc tăng hiệu quả hoạt động và hợp lý hóa quy trình kinh doanh giúp giảm chi phí. Tối ưu hóa hiệu suất kết hợp với cơ sở hạ tầng hiệu quả về chi phí đảm bảo lợi nhuận tối đa từ đầu tư đám mây trong khi cung cấp cho người dùng cuối các ứng dụng phản hồi nhanh và thông minh.",
            features: [
                "Vận hành máy học với Vertex AI",
                "Xử lý dữ liệu lớn với BigQuery và Dataflow",
                "Container hóa với Google Kubernetes Engine",
                "Điện toán serverless với Cloud Functions và Cloud Run",
                "Quản lý API với Apigee",
                "Tự động hóa DevOps với Cloud Build",
                "Phân tích thông minh với Looker"
            ]
        },
        {
            title: "DigitalOcean",
            span: "DigitalOcean: Giải Pháp Hiệu Quả Chi Phí cho Tăng Trưởng",
            description: "Các công ty khởi nghiệp và doanh nghiệp vừa và nhỏ (SMEs) được hưởng lợi từ nền tảng đám mây đơn giản nhưng mạnh mẽ của DigitalOcean. Ứng dụng web có khả năng mở rộng, cơ sở dữ liệu được quản lý và triển khai container hóa cung cấp nền tảng kỹ thuật cho sự tăng trưởng kinh doanh mà không có sự phức tạp không cần thiết. Các công cụ thân thiện với nhà phát triển tăng tốc chu kỳ phát triển trong khi vẫn duy trì hiệu quả chi phí, cho phép doanh nghiệp tập trung vào đổi mới hơn là quản lý cơ sở hạ tầng.",
            features: [
                "Cụm Kubernetes được quản lý cho điều phối container",
                "App Platform cho triển khai PaaS đơn giản hóa",
                "Cơ sở dữ liệu được quản lý với sao lưu tự động",
                "Lưu trữ đối tượng Spaces cho phương tiện và tài sản",
                "Cân bằng tải cho ứng dụng có tính sẵn sàng cao",
                "Giám sát và cảnh báo với các công cụ tích hợp",
                "CDN toàn cầu để cải thiện trải nghiệm người dùng"
            ]
        },
    ],
    migrationProcess: [
        {
            phase: "Đánh Giá & Lập Kế Hoạch",
            description: "Phân tích toàn diện về cơ sở hạ tầng hiện có, các phụ thuộc ứng dụng và yêu cầu kinh doanh để phát triển chiến lược di chuyển phù hợp.",
            outcomes: [
                "Đánh giá chi tiết về mức độ sẵn sàng đám mây",
                "Phân tích TCO và dự báo ROI",
                "Chiến lược giảm thiểu rủi ro",
                "Lộ trình di chuyển được ưu tiên"
            ]
        },
        {
            phase: "Thiết Kế & Kiến Trúc",
            description: "Tạo bản thiết kế kiến trúc đám mây tối ưu phù hợp với mục tiêu kinh doanh đồng thời đảm bảo bảo mật, hiệu suất và hiệu quả chi phí.",
            outcomes: [
                "Sơ đồ kiến trúc trạng thái tương lai",
                "Các khung bảo mật và tuân thủ",
                "Kế hoạch khôi phục thảm họa",
                "Chiến lược tối ưu hóa tài nguyên"
            ]
        },
        {
            phase: "Di Chuyển & Triển Khai",
            description: "Chuyển giao có hệ thống các ứng dụng, dữ liệu và khối lượng công việc sang môi trường đám mây với sự gián đoạn kinh doanh tối thiểu.",
            outcomes: [
                "Thực hiện di chuyển không có thời gian chết",
                "Xác thực tính toàn vẹn dữ liệu",
                "Kiểm tra hiệu suất",
                "Tài liệu bàn giao vận hành"
            ]
        },
        {
            phase: "Tối Ưu Hóa & Quản Lý",
            description: "Cải thiện liên tục cơ sở hạ tầng đám mây để tối đa hóa hiệu suất, bảo mật và hiệu quả chi phí.",
            outcomes: [
                "Chính sách tự động mở rộng",
                "Khuyến nghị tối ưu hóa chi phí",
                "Chiến lược nâng cao hiệu suất",
                "Tăng cường tư thế bảo mật"
            ]
        }
    ]
}