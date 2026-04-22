---
id: ha-model-redhat
title: Hướng dẫn cài đặt mô hình HA trên Redhat v9.x
sidebar_label: Hướng dẫn cài đặt mô hình HA trên Redhat v9.x
sidebar_position: 8
displayed_sidebar: centerSidebar
---

# Hướng dẫn cài đặt mô hình HA trên Redhat v9.x

Mô hình triển khai Tính khả dụng cao (HA) đảm bảo rằng akaBot Center vẫn hoạt động ngay cả khi một trong các node ứng dụng gặp sự cố. Hướng dẫn này bao gồm thiết lập cụm HA active-passive cho akaBot Center trên Red Hat Enterprise Linux 9.x, sử dụng cơ sở dữ liệu chia sẻ và bộ cân bằng tải.

## Điều kiện tiên quyết

- Hai hoặc nhiều máy chủ RHEL 9.x (64-bit), mỗi máy với ít nhất 16 GB RAM và 100 GB SSD
- Java JDK 17 đã được cài đặt trên tất cả các node
- Cơ sở dữ liệu bên ngoài dùng chung (MySQL, PostgreSQL hoặc MSSQL) có thể truy cập từ tất cả các node
- Bộ cân bằng tải (ví dụ: HAProxy hoặc Nginx) hoặc IP ảo (VIP) được cấu hình để chuyển đổi dự phòng
- Gói cài đặt Linux akaBot Center 4.x
- Quyền root hoặc sudo trên tất cả các máy chủ
- Kết nối mạng giữa tất cả các node trên các cổng cần thiết (8080, 8443, 61616)
- NTP được cấu hình trên tất cả các máy chủ để đảm bảo đồng bộ thời gian

## Các bước cài đặt

1. **Chuẩn bị tất cả các node**
   - Cài đặt Java JDK 17 trên mỗi node: `sudo dnf install java-17-openjdk-devel -y`
   - Đặt `JAVA_HOME` trong `/etc/profile.d/java.sh`.
   - Đồng bộ thời gian bằng `chronyc` hoặc `timedatectl`.

2. **Thiết lập cơ sở dữ liệu chia sẻ**
   - Cài đặt và cấu hình cơ sở dữ liệu của bạn trên máy chủ DB chuyên dụng (không phải trên các node akaBot).
   - Tạo cơ sở dữ liệu và người dùng akaBot như đã ghi lại trong hướng dẫn cơ sở dữ liệu tương ứng.
   - Đảm bảo mỗi node akaBot có thể kết nối với máy chủ cơ sở dữ liệu trên cổng 3306 / 5432 / 1433.

3. **Cài đặt akaBot Center trên Node 1**
   - Sao chép gói akaBot Center 4.x tar.gz vào `/opt/akabot/center`.
   - Giải nén: `tar -xzf akabotcenter-4x.tar.gz -C /opt/akabot/center`
   - Cấu hình `application.yml` với kết nối cơ sở dữ liệu chia sẻ và tên máy chủ bộ cân bằng tải cho `server.address`.

4. **Khởi tạo cơ sở dữ liệu (Chỉ chạy một lần từ Node 1)**
   - Thực thi: `/opt/akabot/center/bin/db-init.sh`
   - Bước này chỉ nên chạy một lần; chạy trên các node tiếp theo sẽ gây ra lỗi.

5. **Cấu hình ActiveMQ cho Shared Store HA**
   - Chỉnh sửa `activemq.xml` trên cả hai node để sử dụng kho KahaDB chia sẻ trên hệ thống tệp mạng (NFS).
   - Đặt broker thành `persistent="true"` và trỏ `kahaDB directory` đến đường dẫn NFS mount.

6. **Cài đặt akaBot Center trên Node 2 (và các node bổ sung)**
   - Lặp lại bước 3 cho Node 2 nhưng bỏ qua khởi tạo cơ sở dữ liệu ở bước 4.
   - Sử dụng cùng cấu hình `application.yml` như Node 1.

7. **Đăng ký akaBot Center như một dịch vụ systemd trên mỗi node**
   - Sao chép `akabotcenter.service` vào `/etc/systemd/system/`.
   - Chạy `systemctl daemon-reload && systemctl enable akabotcenter`.

8. **Cấu hình bộ cân bằng tải**
   - Thiết lập HAProxy hoặc Nginx để cân bằng lưu lượng HTTP/HTTPS giữa Node 1 và Node 2.
   - Cấu hình endpoint kiểm tra sức khỏe: `GET /center/actuator/health`.

9. **Khởi động các dịch vụ**
   - Khởi động akaBot Center trên tất cả các node: `systemctl start akabotcenter`.
   - Xác minh cả hai node đăng ký với bộ cân bằng tải và đang phản hồi kiểm tra sức khỏe.

## Lưu ý và cảnh báo

> **Lưu ý:** Chỉ chạy script khởi tạo cơ sở dữ liệu (`db-init.sh`) trên node đầu tiên. Chạy nó trên các node tiếp theo sẽ xóa và tạo lại các bảng, dẫn đến mất dữ liệu.

> **Cảnh báo:** Chia sẻ NFS được sử dụng cho kho chia sẻ của ActiveMQ phải có hiệu suất I/O đầy đủ. Lưu trữ mạng có độ trễ cao có thể làm giảm hiệu suất message broker đáng kể.

> **Lưu ý:** Đảm bảo tất cả các node akaBot Center sử dụng cùng khóa bí mật ứng dụng được cấu hình trong `application.yml`. Các khóa không khớp sẽ gây ra lỗi chia sẻ phiên và lỗi xác thực robot.
