---
id: queue
title: Hàng đợi
sidebar_label: Hàng đợi
sidebar_position: 6
displayed_sidebar: centerSidebar
---

Tính năng Hàng đợi trong akaBot Center cho phép xử lý mạnh mẽ và có thể mở rộng các mục công việc bởi quy trình tự động hóa. Hàng đợi hoạt động như một danh sách chờ có cấu trúc của các bản ghi dữ liệu riêng lẻ — được gọi là Mục Hàng đợi — cần được xử lý bởi bot. Ví dụ, một quy trình trích xuất dữ liệu có thể điền vào Hàng đợi danh sách ID hóa đơn, và một quy trình xử lý riêng biệt chạy trên nhiều agent sau đó có thể đồng thời tiêu thụ và xử lý các hóa đơn đó, với mỗi mục chỉ được lấy bởi đúng một agent.

Hàng đợi cung cấp ngữ nghĩa giao hàng đảm bảo: mỗi Mục Hàng đợi tiến qua một vòng đời trạng thái được xác định rõ — Mới, Đang xử lý, Thành công, Thất bại và Bị từ bỏ. Nếu quy trình thất bại trong khi xử lý một mục, mục đó có thể tự động được thử lại hoặc được gắn cờ để xem xét thủ công tùy thuộc vào chính sách thử lại đã cấu hình. Điều này làm cho Hàng đợi trở thành khối xây dựng thiết yếu cho các kịch bản tự động hóa giao dịch khối lượng lớn nơi tính toàn vẹn dữ liệu và khả năng truy xuất là yêu cầu quan trọng.

Quản trị viên và người vận hành có thể giám sát tình trạng hàng đợi theo thời gian thực từ màn hình quản lý Hàng đợi, xem số lượng mục trong mỗi trạng thái và đi sâu vào kiểm tra dữ liệu mục riêng lẻ và lịch sử xử lý. Hàng đợi cũng hỗ trợ các trường tham chiếu và dấu thời gian hạn chót trên mỗi mục, cho phép quy trình ưu tiên các mục khẩn cấp cao hoặc bỏ qua các mục đã quá hạn.

## Vòng đời Mục Hàng đợi

| Trạng thái | Ý nghĩa |
|---|---|
| Mới | Mục đã được thêm vào hàng đợi và đang chờ được lấy |
| Đang xử lý | Một agent đã nhận mục và đang xử lý nó |
| Thành công | Xử lý hoàn thành không có lỗi |
| Thất bại | Xử lý gặp lỗi; có thể thử lại |
| Bị từ bỏ | Mục vượt quá số lần thử lại hoặc hạn chót và đã bị xóa khỏi xử lý đang hoạt động |

## Tạo và sử dụng Hàng đợi

1. Điều hướng đến **Hàng đợi** trong thanh bên trái và nhấp vào **Tạo Hàng đợi mới**.
2. Đặt tên và số lần thử lại tối đa tùy chọn cho các mục thất bại.
3. Sử dụng API **Thêm Mục Hàng đợi** hoặc các hoạt động akaBot Studio để điền mục vào hàng đợi.
4. Cấu hình Quy trình hoặc Trigger để tiêu thụ các mục từ hàng đợi sử dụng hoạt động Get Queue Item.
5. Quy trình xử lý từng mục và đánh dấu Thành công hoặc Thất bại khi hoàn thành.
