---
id: ha-model-windows-server
title: Hướng dẫn cài đặt mô hình HA trên Windows Server
sidebar_label: Hướng dẫn cài đặt mô hình HA trên Windows Server
sidebar_position: 9
displayed_sidebar: centerSidebar
---

# Hướng dẫn cài đặt mô hình HA trên Windows Server

Hướng dẫn này mô tả cách triển khai akaBot Center trong cấu hình Tính khả dụng cao (HA) trên Windows Server. Mô hình HA sử dụng nhiều node ứng dụng phía sau bộ cân bằng tải với cơ sở dữ liệu bên ngoài chia sẻ, đảm bảo rằng tự động hóa tiếp tục không bị gián đoạn ngay cả khi một node gặp sự cố.

## Điều kiện tiên quyết

- Hai hoặc nhiều node Windows Server 2019 hoặc 2022 (64-bit), mỗi node với ít nhất 16 GB RAM và 100 GB SSD
- Java JDK 17 đã được cài đặt trên tất cả các node với `JAVA_HOME` đã được cấu hình
- Cơ sở dữ liệu bên ngoài chia sẻ (MySQL 8.0, MSSQL 2019 hoặc PostgreSQL 14) trên máy chủ chuyên dụng
- Windows Network Load Balancing (NLB) hoặc bộ cân bằng tải bên ngoài (ví dụ: F5, Nginx cho Windows) đã được cấu hình
- Gói cài đặt akaBot Center 4.x
- Quyền quản trị viên trên tất cả các node và máy chủ cơ sở dữ liệu
- Đường dẫn mạng chia sẻ (đường dẫn UNC hoặc ổ đĩa được ánh xạ) có thể truy cập từ tất cả các node cho kho chia sẻ ActiveMQ

## Các bước cài đặt

1. **Chuẩn bị tất cả các node Windows**
   - Cài đặt Java JDK 17 trên mỗi node và đặt `JAVA_HOME` trong biến môi trường hệ thống.
   - Đảm bảo tất cả các node có thể giao tiếp với nhau và với máy chủ cơ sở dữ liệu trên các cổng cần thiết.
   - Đồng bộ đồng hồ hệ thống qua Windows Time Service (`w32tm`).

2. **Thiết lập cơ sở dữ liệu bên ngoài chia sẻ**
   - Cài đặt và cấu hình cơ sở dữ liệu trên máy chủ chuyên dụng (không phải trên các node akaBot).
   - Tạo cơ sở dữ liệu và người dùng akaBot như mô tả trong hướng dẫn cơ sở dữ liệu tương ứng.

3. **Cài đặt akaBot Center trên Node 1**
   - Giải nén gói akaBot Center 4.x vào `C:\akabot\center` trên Node 1.
   - Chỉnh sửa `conf\application.yml` với URL cơ sở dữ liệu chia sẻ, thông tin đăng nhập và IP ảo hoặc tên máy chủ NLB cho `server.address`.

4. **Khởi tạo cơ sở dữ liệu (Chỉ Node 1)**
   - Mở command prompt nâng cao và chạy `C:\akabot\center\bin\db-init.bat`.
   - Không chạy điều này trên các node tiếp theo.

5. **Cấu hình Kho chia sẻ ActiveMQ**
   - Gắn kết đường dẫn mạng chia sẻ (ví dụ: `\\fileserver\akabot-activemq`) trên tất cả các node.
   - Chỉnh sửa `conf\activemq.xml` để đặt `kahaDB directory` thành đường dẫn mạng chia sẻ trên tất cả các node.

6. **Cài đặt và cấu hình Node 2 (và các node bổ sung)**
   - Giải nén gói akaBot Center vào `C:\akabot\center` trên Node 2.
   - Sao chép cùng `application.yml` và `activemq.xml` từ Node 1.
   - KHÔNG chạy `db-init.bat` trên Node 2.

7. **Đăng ký như Dịch vụ Windows trên tất cả các node**
   - Chạy `install-service.bat` trên mỗi node với tư cách quản trị viên.

8. **Cấu hình bộ cân bằng tải**
   - Thiết lập NLB hoặc bộ cân bằng tải của bạn để chuyển tiếp lưu lượng trên cổng 8080 và 8443 đến tất cả các node akaBot Center.
   - Cấu hình sticky sessions (session affinity) nếu được yêu cầu bởi cấu hình quản lý phiên của bạn.

9. **Khởi động dịch vụ trên tất cả các node**
   - Khởi động dịch vụ akaBot Center trên mỗi node qua Services Manager.
   - Kiểm tra nhật ký ứng dụng tại `C:\akabot\center\logs\` để xác nhận không có lỗi khởi động.

10. **Kiểm tra chuyển đổi dự phòng**
    - Dừng dịch vụ akaBot Center trên Node 1.
    - Xác minh rằng bộ cân bằng tải định tuyến lưu lượng đến Node 2 và cổng vẫn có thể truy cập.

## Lưu ý và cảnh báo

> **Lưu ý:** Cấu hình session persistence (sticky sessions) tại bộ cân bằng tải nếu triển khai của bạn sử dụng quản lý phiên có trạng thái. Nếu không, người dùng có thể bị đăng xuất bất ngờ khi bộ cân bằng tải định tuyến họ đến một node khác.

> **Cảnh báo:** Đường dẫn mạng chia sẻ cho ActiveMQ phải có tính khả dụng cao. Nếu chia sẻ này ngoại tuyến, message broker trên tất cả các node sẽ thất bại, làm gián đoạn tất cả giao tiếp robot.

> **Lưu ý:** Đảm bảo Windows Firewall trên mỗi node cho phép kết nối đến trên cổng 8080, 8443 và 61616 từ các node khác và từ các máy robot.
