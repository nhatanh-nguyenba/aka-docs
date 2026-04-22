---
id: install-4x-postgresql-windows
title: Cài đặt Akabot Center 4X và PostgreSQL trên Windows
sidebar_label: Cài đặt Akabot Center 4X và PostgreSQL trên Windows
sidebar_position: 4
displayed_sidebar: centerSidebar
---

# Cài đặt Akabot Center 4X và PostgreSQL trên Windows

Hướng dẫn này mô tả cách cài đặt akaBot Center 4.x sử dụng PostgreSQL làm cơ sở dữ liệu nền trên Microsoft Windows Server. PostgreSQL là cơ sở dữ liệu quan hệ mã nguồn mở nổi tiếng về độ tin cậy, khả năng mở rộng và tuân thủ tiêu chuẩn. Đây là lựa chọn phù hợp cho các tổ chức muốn có giải pháp cơ sở dữ liệu hiệu quả về chi phí nhưng vẫn mạnh mẽ.

## Điều kiện tiên quyết

- Windows Server 2019 hoặc 2022 (64-bit)
- PostgreSQL 14 trở lên đã tải về từ trang web PostgreSQL chính thức
- Java JDK 17 trở lên đã được cài đặt với `JAVA_HOME` đã được cấu hình
- Gói cài đặt akaBot Center 4.x từ cổng hỗ trợ akaBot
- pgAdmin 4 (tùy chọn nhưng được khuyến nghị để quản trị cơ sở dữ liệu)
- Tối thiểu 16 GB RAM và 100 GB SSD trống
- Quyền quản trị viên trên máy chủ

## Các bước cài đặt

1. **Cài đặt PostgreSQL**
   - Chạy trình cài đặt PostgreSQL và làm theo trình hướng dẫn thiết lập.
   - Đặt mật khẩu mạnh cho superuser `postgres`.
   - Chấp nhận cổng mặc định (5432) và hoàn tất cài đặt.
   - Đảm bảo dịch vụ PostgreSQL được đặt để tự động khởi động.

2. **Tạo cơ sở dữ liệu và người dùng akaBot**
   - Mở pgAdmin hoặc command prompt psql và thực thi:
     ```sql
     CREATE USER akabot_pg WITH PASSWORD '<strong_password>';
     CREATE DATABASE akabot_center OWNER akabot_pg ENCODING 'UTF8';
     GRANT ALL PRIVILEGES ON DATABASE akabot_center TO akabot_pg;
     ```

3. **Cấu hình pg_hba.conf (nếu cần)**
   - Tìm `pg_hba.conf` (thường ở `C:\Program Files\PostgreSQL\14\data\`).
   - Đảm bảo mục nhập cho kết nối cục bộ sử dụng xác thực `md5` hoặc `scram-sha-256`.
   - Khởi động lại dịch vụ PostgreSQL sau bất kỳ thay đổi nào.

4. **Giải nén gói akaBot Center**
   - Giải nén tệp lưu trữ akaBot Center 4.x vào `C:\akabot\center4`.

5. **Cấu hình kết nối PostgreSQL**
   - Mở `C:\akabot\center4\conf\application.yml`.
   - Cập nhật phần datasource:
     ```
     url: jdbc:postgresql://localhost:5432/akabot_center
     username: akabot_pg
     password: <strong_password>
     driver-class-name: org.postgresql.Driver
     ```

6. **Khởi tạo lược đồ cơ sở dữ liệu**
   - Mở command prompt nâng cao, điều hướng đến `C:\akabot\center4\bin` và chạy `db-init.bat`.

7. **Đăng ký và khởi động Dịch vụ Windows**
   - Chạy `install-service.bat` từ `C:\akabot\center4\bin` với tư cách quản trị viên.
   - Khởi động dịch vụ bằng Services Manager hoặc `net start akabotcenter`.

8. **Xác minh cài đặt**
   - Mở trình duyệt và truy cập `http://<server-ip>:8080/center`.
   - Đăng nhập bằng thông tin đăng nhập quản trị viên và xác minh cổng có thể truy cập.

## Lưu ý và cảnh báo

> **Lưu ý:** Đảm bảo `max_connections` của PostgreSQL được đặt phù hợp. Đối với triển khai sản xuất với nhiều robot, giá trị 200 trở lên được khuyến nghị. Chỉnh sửa `postgresql.conf` và khởi động lại dịch vụ để áp dụng thay đổi.

> **Cảnh báo:** Trình điều khiển JDBC PostgreSQL phải được đưa vào classpath của akaBot Center. Gói 4.x đi kèm với trình điều khiển, nhưng hãy xác minh phiên bản khớp với phiên bản máy chủ PostgreSQL của bạn.

> **Lưu ý:** Trên Windows, tài khoản dịch vụ PostgreSQL có thể cần thêm quyền để ghi vào một số thư mục nhất định. Đảm bảo tài khoản dịch vụ có quyền đọc/ghi vào thư mục dữ liệu akaBot.
