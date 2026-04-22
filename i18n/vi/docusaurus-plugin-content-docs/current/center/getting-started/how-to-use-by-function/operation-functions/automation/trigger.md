---
id: trigger
title: Bộ kích hoạt
sidebar_label: Bộ kích hoạt
sidebar_position: 5
displayed_sidebar: centerSidebar
---

Bộ kích hoạt trong akaBot Center cung cấp thực thi quy trình dựa trên sự kiện, bổ sung cho tính năng Lịch trình dựa trên thời gian. Trong khi Lịch trình chạy các quy trình theo khoảng thời gian lịch cố định, Bộ kích hoạt kích hoạt quy trình để phản hồi một sự kiện cụ thể — chẳng hạn như một mục mới đến trong hàng đợi, một tệp được phát hiện trong thư mục, hoặc một hệ thống bên ngoài gửi HTTP callback. Điều này cho phép akaBot Center tích hợp chặt chẽ với luồng sự kiện doanh nghiệp và quy trình kinh doanh, cho phép quy trình tự động hóa bắt đầu chính xác khi cần thiết thay vì theo chu kỳ polling.

Loại bộ kích hoạt phổ biến nhất là **Bộ kích hoạt Hàng đợi**, giám sát hàng đợi và tự động phân phối thực thi quy trình khi có các mục mới. Mẫu này được sử dụng để xử lý giao dịch thời gian thực — ví dụ: khi khách hàng đặt hàng và dữ liệu đơn hàng được thêm vào hàng đợi, Bộ kích hoạt Hàng đợi ngay lập tức bắt đầu quy trình xử lý đơn hàng trên agent khả dụng mà không cần can thiệp của con người. Điều này giảm đáng kể độ trễ xử lý so với cách tiếp cận polling theo lịch.

akaBot Center cũng hỗ trợ **Bộ kích hoạt Webhook**, hiển thị điểm cuối HTTP mà các hệ thống bên ngoài có thể gọi để kích hoạt quy trình. Điều này cho phép các kịch bản tích hợp nơi ứng dụng kinh doanh — chẳng hạn như ERP, CRM hoặc hệ thống ticketing — có thể trực tiếp kích hoạt quy trình tự động hóa như một phần của luồng quy trình kinh doanh riêng của nó, truyền dữ liệu có cấu trúc làm payload kích hoạt. Bộ kích hoạt Webhook làm cho akaBot Center trở thành người tham gia hạng nhất trong kiến trúc tích hợp doanh nghiệp.

## Các loại Bộ kích hoạt

| Loại | Mô tả | Trường hợp sử dụng |
|---|---|---|
| Bộ kích hoạt Hàng đợi | Kích hoạt khi các mục mới được thêm vào hàng đợi được chỉ định | Xử lý giao dịch thời gian thực |
| Bộ kích hoạt Webhook | Kích hoạt khi nhận HTTP POST tại điểm cuối kích hoạt | Tích hợp với hệ thống kinh doanh bên ngoài |
| Bộ kích hoạt Tệp | Kích hoạt khi tệp khớp với mẫu xuất hiện trong thư mục được theo dõi | Quy trình nhập dữ liệu dựa trên tệp |

## Cấu hình Bộ kích hoạt Hàng đợi

1. Điều hướng đến **Tự động hóa > Bộ kích hoạt** và nhấp vào **Tạo Bộ kích hoạt mới**.
2. Chọn **Bộ kích hoạt Hàng đợi** làm loại bộ kích hoạt.
3. Chọn Hàng đợi cần giám sát.
4. Chọn Quy trình để thực thi khi có mục đến.
5. Đặt số lượng mục hàng đợi tối thiểu cần thiết để kích hoạt bộ kích hoạt.
6. Tùy chọn đặt giới hạn số lần thực thi đồng thời tối đa.
7. Nhấp **Lưu** và kích hoạt bộ kích hoạt.
