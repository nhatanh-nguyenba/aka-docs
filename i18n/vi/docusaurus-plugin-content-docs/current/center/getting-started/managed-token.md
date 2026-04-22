---
id: managed-token
title: Cách sử dụng Managed Token của Center
sidebar_label: Cách sử dụng Managed Token của Center
sidebar_position: 4
displayed_sidebar: centerSidebar
---

Managed Token trong akaBot Center cung cấp cơ chế xác thực an toàn và được kiểm soát tập trung cho các hệ thống bên ngoài, tích hợp bên thứ ba và người tiêu thụ API với nền tảng Center. Thay vì sử dụng thông tin đăng nhập cá nhân của người dùng cho truy cập lập trình, quản trị viên có thể tạo các token chuyên dụng mang các quyền cụ thể và có thể thu hồi độc lập mà không ảnh hưởng đến bất kỳ tài khoản người dùng nào. Sự tách biệt này là điều cần thiết để duy trì bảo mật trong môi trường tự động hóa doanh nghiệp.

Mỗi Managed Token được giới hạn trong các quyền đã xác định và có thể được gán cho các quy trình tự động hóa cụ thể, ứng dụng bên ngoài hoặc dịch vụ tích hợp. Khi một token được sử dụng để thực hiện lệnh gọi API đến akaBot Center — ví dụ như kích hoạt thực thi quy trình hoặc truy vấn trạng thái tác vụ — nền tảng sẽ xác thực token và thực thi tập quyền liên quan. Token có thể được đặt ngày hết hạn để phù hợp với chính sách bảo mật của tổ chức, và tất cả các lệnh gọi API dựa trên token đều được ghi nhật ký cho mục đích kiểm toán.

Managed Token đặc biệt có giá trị khi tích hợp akaBot Center với các pipeline CI/CD, enterprise service bus hoặc dashboard giám sát bên ngoài. Bằng cách sử dụng token thay vì thông tin đăng nhập người dùng, các tổ chức tránh được rủi ro lộ thông tin xác thực và có thể xoay vòng token theo lịch mà không làm gián đoạn các quy trình phụ thuộc.

## Cách tạo Managed Token

1. Điều hướng đến **Quản trị > Token** trong thanh bên trái.
2. Nhấp vào **Tạo Token mới**.
3. Nhập tên mô tả và đặt ngày hết hạn tùy chọn.
4. Gán các phạm vi quyền cần thiết cho token.
5. Nhấp **Tạo** và sao chép an toàn giá trị token — nó sẽ không được hiển thị lại.
6. Sử dụng token trong header `Authorization: Bearer <token>` cho các yêu cầu API.

## Phạm vi quyền Token

| Phạm vi | Mô tả |
|---|---|
| `workflow:read` | Xem định nghĩa và cấu hình quy trình |
| `workflow:execute` | Kích hoạt thực thi quy trình |
| `job:read` | Truy vấn trạng thái tác vụ và nhật ký thực thi |
| `agent:read` | Xem trạng thái và cấu hình agent |
| `queue:read` | Đọc các mục hàng đợi và metadata hàng đợi |
| `queue:write` | Thêm hoặc cập nhật các mục trong hàng đợi |
