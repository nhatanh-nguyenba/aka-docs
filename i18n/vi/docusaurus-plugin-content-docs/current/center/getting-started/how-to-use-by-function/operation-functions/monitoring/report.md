---
id: report
title: Báo cáo
sidebar_label: Báo cáo
sidebar_position: 2
displayed_sidebar: centerSidebar
---

Trang Báo cáo trong akaBot Center cung cấp các bản tóm tắt dữ liệu có cấu trúc, có thể xuất về hoạt động thực thi tự động hóa. Trong khi trang Năng suất cung cấp các dashboard trực tiếp, trang này tập trung vào việc tạo các bản tóm tắt dữ liệu lịch sử có thể được chia sẻ bên ngoài nền tảng — ví dụ: với ban quản lý, nhóm tuân thủ hoặc kiểm toán viên bên ngoài. Dữ liệu có thể được giới hạn phạm vi theo khoảng thời gian cụ thể, quy trình, agent hoặc đơn vị tổ chức, và có thể được xuất ở các định dạng tiêu chuẩn để xử lý thêm.

Mỗi bản ghi trình bày phân tích dạng bảng của các mục thực thi bao gồm tên quy trình, agent, thời gian bắt đầu, thời gian kết thúc, thời lượng, trạng thái cuối cùng và bất kỳ thông báo lỗi nào. Mức độ chi tiết này rất cần thiết để khắc phục sự cố lỗi lặp đi lặp lại, kiểm toán hoạt động tự động hóa cho tuân thủ quy định, hoặc thực hiện lập kế hoạch năng lực. Các nhóm có thể sử dụng dữ liệu này để xác định các mẫu như thực thi chậm liên tục trên các máy nhất định hoặc các quy trình thất bại ở tỷ lệ cao trong các cửa sổ thời gian cụ thể.

akaBot Center cho phép người dùng lưu cấu hình bộ lọc dưới dạng mẫu, giúp dễ dàng tái tạo cùng chế độ xem dữ liệu hàng tuần hoặc hàng tháng mà không cần nhập lại tiêu chí lọc. Gửi theo lịch — nơi xuất dữ liệu được tự động tạo và gửi email đến danh sách phân phối — có thể được cấu hình kết hợp với tính năng Webhook để tích hợp khả năng này vào các quy trình kinh doanh hiện có.

## Trường Bản ghi Thực thi

| Trường | Mô tả |
|---|---|
| Tên Quy trình | Tên quy trình đã được thực thi |
| Agent | Tên agent đã chạy tác vụ |
| Thời gian bắt đầu | Dấu thời gian khi bắt đầu thực thi |
| Thời gian kết thúc | Dấu thời gian khi thực thi hoàn thành hoặc thất bại |
| Thời lượng | Tổng thời gian đã trôi qua của việc thực thi |
| Trạng thái | Trạng thái thực thi cuối cùng (Thành công, Thất bại, Đã dừng) |
| Thông báo lỗi | Chi tiết lỗi nếu thực thi thất bại |
| Đơn vị tổ chức | Đơn vị tổ chức mà quy trình thuộc về |

## Các định dạng xuất khả dụng

- **CSV** — để phân tích trong Excel hoặc công cụ BI
- **PDF** — để tài liệu chính thức và lưu trữ
- **JSON** — để tiêu thụ lập trình bởi các hệ thống khác
