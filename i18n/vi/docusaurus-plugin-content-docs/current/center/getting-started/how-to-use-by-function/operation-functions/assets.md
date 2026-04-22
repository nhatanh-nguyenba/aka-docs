---
id: assets
title: Tài sản
sidebar_label: Tài sản
sidebar_position: 5
displayed_sidebar: centerSidebar
---

Tài sản trong akaBot Center là kho lưu trữ an toàn, tập trung cho các giá trị mà quy trình tự động hóa cần trong thời gian chạy nhưng không nên được mã hóa cứng bên trong quy trình đó. Các ví dụ phổ biến bao gồm chuỗi kết nối cơ sở dữ liệu, URL điểm cuối API, địa chỉ email, cờ cấu hình đặc thù môi trường và cặp thông tin đăng nhập (tên người dùng và mật khẩu). Bằng cách đưa các giá trị này ra ngoài thành Tài sản, các tổ chức có thể cập nhật cấu hình trên tất cả các quy trình ở một nơi mà không cần sửa đổi hoặc triển khai lại các gói tự động hóa.

Mỗi Tài sản có tên, loại và giá trị. akaBot Center hỗ trợ nhiều loại Tài sản bao gồm Văn bản (chuỗi thuần), Số nguyên, Boolean và Thông tin đăng nhập (cặp tên người dùng và mật khẩu được mã hóa). Các Tài sản loại Thông tin đăng nhập được lưu trữ với mã hóa và giá trị của chúng không bao giờ được hiển thị dưới dạng văn bản thuần qua giao diện người dùng sau khi tạo — chỉ có thời gian chạy tự động hóa mới có thể truy xuất giá trị đã giải mã khi thực thi quy trình. Thiết kế này đảm bảo thông tin xác thực nhạy cảm được quản lý an toàn ngay cả trong các nhóm lớn nơi nhiều người vận hành có quyền truy cập vào Center.

Tài sản cũng có thể được giới hạn phạm vi cho các agent cụ thể, cho phép các agent khác nhau sử dụng các giá trị khác nhau cho cùng tên Tài sản. Điều này hữu ích trong các triển khai đa môi trường — ví dụ, Tài sản `DatabaseConnectionString` có thể phân giải thành cơ sở dữ liệu thử nghiệm cho các agent trong nhóm thử nghiệm và cơ sở dữ liệu sản xuất cho các agent trong nhóm sản xuất, tất cả mà không cần thay đổi logic quy trình.

## Các loại Tài sản

| Loại | Mô tả | Ví dụ |
|---|---|---|
| Văn bản | Giá trị chuỗi thuần | URL điểm cuối API, đường dẫn thư mục |
| Số nguyên | Giá trị số nguyên | Số lần thử lại, kích thước lô |
| Boolean | Cờ đúng hoặc sai | Bật/tắt tính năng |
| Thông tin đăng nhập | Cặp tên người dùng và mật khẩu được mã hóa | Thông tin đăng nhập hệ thống |

## Quản lý Tài sản

- Điều hướng đến **Tài sản** trong thanh bên trái.
- Nhấp vào **Tạo Tài sản mới** để định nghĩa tài sản mới.
- Chọn loại tài sản và nhập giá trị.
- Đối với tài sản Thông tin đăng nhập, nhập cả trường tên người dùng và mật khẩu.
- Sử dụng tên Tài sản trong quy trình của bạn bằng cách tham chiếu nó qua hoạt động Get Asset trong akaBot Studio.
