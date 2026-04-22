---
id: standalone-windows-server
title: Hướng dẫn cài đặt mô hình độc lập trên Windows Server
sidebar_label: Hướng dẫn cài đặt mô hình độc lập trên Windows Server
sidebar_position: 7
displayed_sidebar: centerSidebar
---

# Hướng dẫn cài đặt mô hình độc lập trên Windows Server

Mô hình triển khai độc lập đặt tất cả các thành phần akaBot Center — máy chủ ứng dụng, cơ sở dữ liệu và message broker — trên một máy Windows Server duy nhất. Mô hình này phù hợp cho các triển khai nhỏ đến vừa nơi không yêu cầu tính khả dụng cao. Phiên bản Network cho phép nhiều robot kết nối với Center qua mạng doanh nghiệp.

## Điều kiện tiên quyết

- Windows Server 2019 hoặc 2022 (64-bit), với ít nhất 16 GB RAM và 100 GB SSD
- Java JDK 17 đã được cài đặt và `JAVA_HOME` đặt trong biến môi trường hệ thống
- Một trong các cơ sở dữ liệu được hỗ trợ đã cài đặt: MySQL 8.0, MSSQL 2019+, hoặc PostgreSQL 14+
- Gói cài đặt đầy đủ akaBot Center 4.x (Network Edition)
- Quyền quản trị viên trên máy chủ
- Quy tắc tường lửa cho phép TCP đến trên cổng 8080 (HTTP), 8443 (HTTPS) và 61616 (ActiveMQ)
- Địa chỉ IP tĩnh hoặc tên miền đầy đủ (FQDN) cho máy chủ

## Các bước cài đặt

1. **Chuẩn bị máy chủ**
   - Đảm bảo Windows được cập nhật đầy đủ và tất cả các điều kiện tiên quyết đã được cài đặt.
   - Tạm thời tắt Windows Defender Firewall trong quá trình cài đặt (bật lại sau).

2. **Cài đặt và cấu hình cơ sở dữ liệu**
   - Làm theo hướng dẫn cài đặt cơ sở dữ liệu phù hợp (MySQL, MSSQL hoặc PostgreSQL).
   - Tạo lược đồ cơ sở dữ liệu akaBot và người dùng như mô tả trong hướng dẫn tương ứng.

3. **Giải nén gói akaBot Center**
   - Giải nén ZIP Network Edition akaBot Center 4.x vào `C:\akabot\center`.

4. **Cấu hình cài đặt ứng dụng**
   - Chỉnh sửa `C:\akabot\center\conf\application.yml` để đặt kết nối cơ sở dữ liệu, tên máy chủ và cổng chính xác.
   - Đặt `server.address` thành IP hoặc tên máy chủ để cho phép truy cập mạng.

5. **Khởi tạo cơ sở dữ liệu**
   - Chạy `C:\akabot\center\bin\db-init.bat` với quyền nâng cao.

6. **Cấu hình ActiveMQ**
   - Xem lại `C:\akabot\center\conf\activemq.xml`.
   - Đảm bảo `brokerURL` sử dụng IP hoặc tên máy chủ để có thể truy cập mạng.

7. **Cài đặt như một Dịch vụ Windows**
   - Chạy `C:\akabot\center\bin\install-service.bat` với tư cách quản trị viên.

8. **Cấu hình quy tắc tường lửa**
   - Mở Windows Defender Firewall và thêm quy tắc đến cho cổng 8080, 8443 và 61616.

9. **Khởi động dịch vụ akaBot Center**
   - Khởi động dịch vụ qua Services Manager hoặc chạy `net start akabotcenter`.

10. **Đăng ký robot**
    - Trên mỗi máy robot, cấu hình akaBot Agent để kết nối tới `http://<server-ip>:8080/center`.
    - Chấp nhận yêu cầu kết nối robot trong cổng web akaBot Center trong **Robot Management**.

## Lưu ý và cảnh báo

> **Lưu ý:** Đối với triển khai sản xuất, hãy cấu hình SSL/TLS trên cổng 8443 và hướng dẫn tất cả robot kết nối bằng HTTPS để giao tiếp bảo mật.

> **Cảnh báo:** Mô hình độc lập không có dự phòng. Nếu máy chủ ngoại tuyến, tất cả tự động hóa robot sẽ bị gián đoạn. Hãy xem xét mô hình Tính khả dụng cao cho các triển khai quan trọng.

> **Lưu ý:** Đảm bảo tên máy chủ hoặc địa chỉ IP của máy chủ không thay đổi sau khi robot đã được đăng ký. Thay đổi IP sẽ làm hỏng kết nối robot hiện có và yêu cầu đăng ký lại.
