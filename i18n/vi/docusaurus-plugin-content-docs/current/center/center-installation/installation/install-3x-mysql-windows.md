---
id: install-3x-mysql-windows
title: Cài đặt Akabot Center 3x và MySQL trên Windows
sidebar_label: Cài đặt Akabot Center 3x và MySQL trên Windows
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Cài đặt Akabot Center 3x và MySQL trên Windows

Hướng dẫn này bao gồm việc cài đặt akaBot Center phiên bản 3.x cùng với MySQL 8.0 trên môi trường Windows Server. Hãy thực hiện từng bước cẩn thận để đảm bảo cài đặt thành công và ổn định.

## Điều kiện tiên quyết

- Windows Server 2016 trở lên (64-bit)
- Java JDK 11 trở lên đã được cài đặt và biến môi trường `JAVA_HOME` đã được cấu hình
- Trình cài đặt MySQL 8.0 đã tải về từ trang web MySQL chính thức
- Gói cài đặt akaBot Center 3.x lấy từ cổng hỗ trợ akaBot
- Quyền quản trị viên trên máy chủ mục tiêu
- Ít nhất 8 GB RAM và 50 GB dung lượng đĩa trống

## Các bước cài đặt

1. **Cài đặt MySQL 8.0**
   - Chạy trình cài đặt MySQL và chọn kiểu thiết lập **Server only**.
   - Cấu hình MySQL như một Dịch vụ Windows với mật khẩu root mạnh.
   - Hoàn tất cài đặt và xác minh MySQL đang chạy qua Services Manager.

2. **Tạo cơ sở dữ liệu akaBot**
   - Mở MySQL Workbench hoặc command prompt và đăng nhập với tư cách root.
   - Thực thi: `CREATE DATABASE akabot_center CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
   - Tạo người dùng chuyên dụng: `CREATE USER 'akabot'@'localhost' IDENTIFIED BY '<password>';`
   - Cấp quyền: `GRANT ALL PRIVILEGES ON akabot_center.* TO 'akabot'@'localhost'; FLUSH PRIVILEGES;`

3. **Giải nén gói akaBot Center**
   - Giải nén tệp ZIP akaBot Center 3.x vào `C:\akabot\center`.

4. **Cấu hình kết nối cơ sở dữ liệu**
   - Mở `C:\akabot\center\conf\application.properties`.
   - Đặt `spring.datasource.url=jdbc:mysql://localhost:3306/akabot_center`
   - Đặt `spring.datasource.username=akabot` và `spring.datasource.password=<password>`.

5. **Cấu hình cổng ứng dụng**
   - Trong `application.properties`, đặt `server.port=8080` (hoặc cổng bạn muốn).

6. **Chạy migration cơ sở dữ liệu**
   - Mở command prompt trong `C:\akabot\center\bin` và thực thi `migrate.bat`.

7. **Khởi động akaBot Center**
   - Thực thi `startup.bat` từ `C:\akabot\center\bin`.
   - Mở trình duyệt và điều hướng đến `http://localhost:8080/center`.

8. **Xác minh cài đặt**
   - Đăng nhập bằng thông tin đăng nhập quản trị viên mặc định.
   - Xác nhận bảng điều khiển tải mà không có lỗi.

## Lưu ý và cảnh báo

> **Lưu ý:** Thay đổi mật khẩu quản trị viên mặc định ngay sau lần đăng nhập đầu tiên để bảo mật cài đặt của bạn.

> **Cảnh báo:** Không sử dụng người dùng root MySQL cho kết nối cơ sở dữ liệu akaBot trong môi trường sản xuất. Luôn sử dụng người dùng cơ sở dữ liệu chuyên dụng với quyền hạn chế.

> **Lưu ý:** Nếu máy chủ nằm sau tường lửa, hãy đảm bảo cổng 8080 (hoặc cổng đã cấu hình của bạn) được mở cho các kết nối đến từ máy khách.
