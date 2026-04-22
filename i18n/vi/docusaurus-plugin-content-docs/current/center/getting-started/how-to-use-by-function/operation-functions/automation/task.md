---
id: task
title: Nhiệm vụ
sidebar_label: Nhiệm vụ
sidebar_position: 1
displayed_sidebar: centerSidebar
---

Nhiệm vụ trong akaBot Center đại diện cho một phiên bản thực thi duy nhất của một quy trình — bản ghi của một lần chạy cụ thể của quy trình tự động trên một agent. Khi một quy trình được kích hoạt (thủ công, theo lịch hoặc qua trigger), nền tảng sẽ tạo một Nhiệm vụ và gán nó cho một agent khả dụng để thực thi. Mỗi Nhiệm vụ ghi lại toàn bộ ngữ cảnh thực thi bao gồm quy trình và phiên bản gói nào được sử dụng, agent nào thực thi nó, thời gian bắt đầu và kết thúc, trạng thái cuối cùng, và bất kỳ nhật ký đầu ra hoặc chi tiết lỗi nào.

Chế độ xem danh sách Nhiệm vụ trong akaBot Center cung cấp cho người vận hành nguồn cấp thời gian thực của tất cả hoạt động tự động hóa trên toàn môi trường. Người vận hành có thể lọc nhiệm vụ theo trạng thái, quy trình, agent, khoảng ngày hoặc người dùng đã kích hoạt thực thi. Điều này cho phép phân loại nhanh khi có sự cố — ví dụ: lọc tất cả Nhiệm vụ Thất bại trong một giờ qua để nhanh chóng xác định sự cố toàn hệ thống so với vấn đề quy trình riêng lẻ.

Nhấp vào một bản ghi Nhiệm vụ riêng lẻ sẽ hiển thị nhật ký thực thi đầy đủ, hiển thị từng bước quy trình đã hoàn thành cùng với dấu thời gian và bất kỳ giá trị biến hoặc thông báo lỗi nào được ghi lại ở mỗi bước. Việc ghi nhật ký chi tiết này rất quan trọng để gỡ lỗi các vấn đề quy trình trong môi trường sản xuất và để cung cấp bằng chứng kiểm toán về các hành động tự động hóa nào đã được thực hiện và khi nào.

## Trạng thái Nhiệm vụ

| Trạng thái | Mô tả |
|---|---|
| Đang chờ | Nhiệm vụ đã được tạo nhưng chưa được agent lấy |
| Đang chạy | Agent đang tích cực thực thi quy trình |
| Thành công | Quy trình đã hoàn thành tất cả các bước mà không có lỗi |
| Thất bại | Quy trình gặp lỗi chưa được xử lý và dừng lại |
| Đã dừng | Nhiệm vụ đã bị chấm dứt thủ công bởi người vận hành |
| Đã hủy | Nhiệm vụ đã bị xóa khỏi hàng đợi trước khi bắt đầu thực thi |

## Các hành động Nhiệm vụ

- **Xem Nhật ký** — Mở nhật ký thực thi từng bước chi tiết
- **Thử lại** — Đặt lại hàng đợi cùng quy trình với cùng các tham số
- **Dừng** — Gửi tín hiệu dừng đến nhiệm vụ đang chạy tích cực
- **Tải xuống Nhật ký** — Xuất nhật ký thực thi dưới dạng tệp văn bản
