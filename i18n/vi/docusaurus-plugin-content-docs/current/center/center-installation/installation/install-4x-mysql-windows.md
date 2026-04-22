---
id: install-4x-mysql-windows
title: Cài đặt Akabot Center 4x và MySQL trên Windows
sidebar_label: Cài đặt Akabot Center 4x và MySQL trên Windows
sidebar_position: 2
displayed_sidebar: centerSidebar
---

# Cài đặt Akabot Center 4x và MySQL trên Windows

Hướng dẫn này giúp bạn cài đặt akaBot Center phiên bản 4.x với MySQL 8.0 làm cơ sở dữ liệu nền trên Windows Server. Phiên bản 4.x giới thiệu các cải tiến kiến trúc đáng kể bao gồm bảo mật được nâng cao, khả năng mở rộng tốt hơn và hỗ trợ triển khai tác nhân mật độ cao.

## Điều kiện tiên quyết

- Windows Server 2019 hoặc 2022 (64-bit)
- Java JDK 17 trở lên đã được cài đặt với `JAVA_HOME` đã đặt
- Gói cài đặt MySQL 8.0.x
- Trình cài đặt akaBot Center 4.x từ cổng hỗ trợ akaBot
- Apache Tomcat 10.x (đi kèm với gói akaBot Center)
- Tối thiểu 16 GB RAM và 100 GB SSD trống
- Quyền quản trị viên trên máy chủ

## Các bước cài đặt

1. **Cài đặt và cấu hình MySQL 8.0**
   - Chạy MySQL Installer, chọn **Server Only** và hoàn thành trình hướng dẫn thiết lập.
   - Đặt mật khẩu root bảo mật và cấu hình MySQL để tự động khởi động như một Dịch vụ Windows.
   - Xác minh dịch vụ MySQL đang chạy trong Windows Services Manager.

2. **Chuẩn bị cơ sở dữ liệu akaBot**
   - Kết nối với MySQL với tư cách root và chạy:
     ```sql
     CREATE DATABASE akabot4 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
     CREATE USER 'akabot4user'@'localhost' IDENTIFIED BY '<strong_password>';
     GRANT ALL PRIVILEGES ON akabot4.* TO 'akabot4user'@'localhost';
     FLUSH PRIVILEGES;
     ```

3. **Giải nén gói akaBot Center 4.x**
   - Giải nén gói ZIP vào `C:\akabot\center4`.

4. **Cấu hình thuộc tính ứng dụng**
   - Chỉnh sửa `C:\akabot\center4\conf\application.yml`.
   - Cập nhật phần datasource với host MySQL, tên cơ sở dữ liệu, tên người dùng và mật khẩu.

5. **Khởi tạo lược đồ cơ sở dữ liệu**
   - Mở command prompt với quyền quản trị viên.
   - Điều hướng đến `C:\akabot\center4\bin` và chạy `db-init.bat`.

6. **Cấu hình ActiveMQ**
   - Mở `C:\akabot\center4\conf\activemq.xml` và xác nhận URL broker và cài đặt cổng.
   - Đảm bảo cổng 61616 có thể truy cập trong mạng.

7. **Đăng ký akaBot Center như một Dịch vụ Windows**
   - Chạy `install-service.bat` từ `C:\akabot\center4\bin` với quyền quản trị viên.

8. **Khởi động dịch vụ**
   - Mở Services Manager, tìm **akaBot Center** và nhấp **Start**.
   - Hoặc chạy `net start akabotcenter` từ command prompt nâng cao.

9. **Truy cập cổng web**
   - Mở trình duyệt và truy cập `http://<server-ip>:8080/center`.
   - Đăng nhập bằng thông tin đăng nhập admin mặc định và thay đổi mật khẩu ngay lập tức.

## Lưu ý và cảnh báo

> **Lưu ý:** akaBot Center 4.x yêu cầu Java 17. Cố gắng chạy với các phiên bản JDK cũ hơn sẽ gây ra lỗi khởi động.

> **Cảnh báo:** Đảm bảo rằng cài đặt `max_connections` của MySQL đủ cho số lượng kết nối robot đồng thời dự kiến. Giá trị mặc định (151) có thể quá thấp cho môi trường sản xuất với nhiều tác nhân.

> **Lưu ý:** Bảo mật tệp `application.yml` vì nó chứa thông tin đăng nhập cơ sở dữ liệu nhạy cảm. Hạn chế quyền hệ thống tệp chỉ cho tài khoản dịch vụ.
