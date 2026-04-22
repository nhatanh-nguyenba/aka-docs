---
id: install-4x-mssql-windows
title: Cài đặt Akabot Center 4X và MSSQL trên Windows
sidebar_label: Cài đặt Akabot Center 4X và MSSQL trên Windows
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Cài đặt Akabot Center 4X và MSSQL trên Windows

Hướng dẫn này mô tả quy trình cài đặt akaBot Center 4.x sử dụng Microsoft SQL Server (MSSQL) làm cơ sở dữ liệu nền trên môi trường Windows Server. MSSQL được khuyến nghị cho các tổ chức đã quản lý nền tảng dữ liệu Microsoft hoặc yêu cầu các tính năng cơ sở dữ liệu cấp doanh nghiệp như nhóm khả dụng Always On.

## Điều kiện tiên quyết

- Windows Server 2019 hoặc 2022 (64-bit)
- Microsoft SQL Server 2019 hoặc 2022 (Phiên bản Standard hoặc Enterprise) đã được cài đặt và đang chạy
- SQL Server Management Studio (SSMS) để quản trị cơ sở dữ liệu
- Java JDK 17 trở lên với `JAVA_HOME` đã được cấu hình
- Gói cài đặt akaBot Center 4.x
- Tối thiểu 16 GB RAM và 100 GB SSD trống
- Giao thức TCP/IP của SQL Server đã bật và cổng 1433 có thể truy cập

## Các bước cài đặt

1. **Chuẩn bị cơ sở dữ liệu SQL Server**
   - Mở SSMS và kết nối với phiên bản SQL Server của bạn.
   - Tạo cơ sở dữ liệu mới:
     ```sql
     CREATE DATABASE AkaBotCenter COLLATE SQL_Latin1_General_CP1_CI_AS;
     ```
   - Tạo đăng nhập SQL cho akaBot:
     ```sql
     CREATE LOGIN akabot_user WITH PASSWORD = '<strong_password>';
     USE AkaBotCenter;
     CREATE USER akabot_user FOR LOGIN akabot_user;
     ALTER ROLE db_owner ADD MEMBER akabot_user;
     ```

2. **Bật TCP/IP trên SQL Server**
   - Mở **SQL Server Configuration Manager**.
   - Trong **SQL Server Network Configuration**, chọn **Protocols for MSSQLSERVER**.
   - Nhấp chuột phải vào **TCP/IP** và chọn **Enable**. Khởi động lại dịch vụ SQL Server.

3. **Giải nén gói akaBot Center**
   - Giải nén tệp lưu trữ akaBot Center 4.x vào `C:\akabot\center4`.

4. **Cấu hình kết nối MSSQL**
   - Mở `C:\akabot\center4\conf\application.yml`.
   - Đặt kiểu datasource thành `mssql` và cung cấp JDBC URL:
     ```
     url: jdbc:sqlserver://localhost:1433;databaseName=AkaBotCenter;encrypt=false
     username: akabot_user
     password: <strong_password>
     ```

5. **Chạy khởi tạo cơ sở dữ liệu**
   - Chạy `db-init.bat` từ `C:\akabot\center4\bin` với tư cách quản trị viên.

6. **Đăng ký và khởi động Dịch vụ Windows**
   - Thực thi `install-service.bat` để đăng ký akaBot Center như một dịch vụ Windows.
   - Khởi động dịch vụ qua Services Manager hoặc `net start akabotcenter`.

7. **Xác minh cài đặt**
   - Điều hướng đến `http://<server-ip>:8080/center` trong trình duyệt.
   - Đăng nhập bằng thông tin đăng nhập admin và xác nhận cổng tải đúng.

## Lưu ý và cảnh báo

> **Lưu ý:** Đảm bảo dịch vụ SQL Server Browser đang chạy nếu bạn đang sử dụng phiên bản SQL Server được đặt tên thay vì phiên bản mặc định.

> **Cảnh báo:** Sử dụng Xác thực Windows (Bảo mật tích hợp) với kết nối JDBC yêu cầu cấu hình bổ sung của trình điều khiển Microsoft JDBC và có thể không được hỗ trợ trong tất cả các tình huống triển khai. Sử dụng xác thực SQL để đơn giản hơn.

> **Lưu ý:** Thường xuyên sao lưu cơ sở dữ liệu `AkaBotCenter` bằng các công cụ sao lưu tích hợp của SQL Server để ngăn mất dữ liệu.
