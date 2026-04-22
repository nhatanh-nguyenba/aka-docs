---
id: install-elk-stack
title: Cài đặt ELK Stack cho akaBot Center
sidebar_label: Cài đặt ELK Stack cho akaBot Center
sidebar_position: 5
displayed_sidebar: centerSidebar
---

# Cài đặt ELK Stack cho akaBot Center

ELK Stack (Elasticsearch, Logstash và Kibana) có thể được tích hợp với akaBot Center để cung cấp quản lý nhật ký tập trung, tìm kiếm thời gian thực và trực quan hóa nhật ký hoạt động tự động hóa. Hướng dẫn này bao gồm cách cài đặt và cấu hình ELK Stack để hoạt động với akaBot Center trên môi trường Windows hoặc Linux.

## Điều kiện tiên quyết

- akaBot Center 4.x đã được cài đặt và đang chạy
- Máy chủ hoặc VM chuyên dụng cho ELK Stack (tách biệt khỏi máy chủ akaBot Center được khuyến nghị cho môi trường sản xuất)
- Tối thiểu 8 GB RAM và 100 GB đĩa cho máy chủ ELK
- Java JDK 17 (yêu cầu bởi Elasticsearch và Logstash)
- Kết nối mạng giữa máy chủ akaBot Center và máy chủ ELK trên cổng 5044 (Logstash) và 9200 (Elasticsearch)
- Quyền quản trị viên hoặc root trên máy chủ ELK

## Các bước cài đặt

1. **Cài đặt Elasticsearch**
   - Tải xuống gói Elasticsearch 8.x từ trang web Elastic chính thức.
   - Giải nén và cấu hình `elasticsearch.yml`:
     - Đặt `network.host: 0.0.0.0` (hoặc IP máy chủ của bạn)
     - Đặt `cluster.name: akabot-logs`
   - Khởi động Elasticsearch và xác minh nó đang chạy: `curl http://localhost:9200`

2. **Cài đặt Logstash**
   - Tải xuống và giải nén Logstash 8.x.
   - Tạo tệp cấu hình pipeline tại `logstash/pipeline/akabot.conf`:
     ```
     input { beats { port => 5044 } }
     filter { json { source => "message" } }
     output { elasticsearch { hosts => ["http://localhost:9200"] index => "akabot-logs-%{+YYYY.MM.dd}" } }
     ```
   - Khởi động Logstash với: `bin/logstash -f pipeline/akabot.conf`

3. **Cài đặt Kibana**
   - Tải xuống và giải nén Kibana 8.x.
   - Trong `kibana.yml`, đặt `elasticsearch.hosts: ["http://localhost:9200"]`.
   - Khởi động Kibana và truy cập giao diện người dùng tại `http://<elk-server>:5601`.

4. **Cài đặt Filebeat trên máy chủ akaBot Center**
   - Tải xuống và cài đặt Filebeat trên máy chủ akaBot Center.
   - Cấu hình `filebeat.yml` để gửi nhật ký từ `C:\akabot\center4\logs\*.log` đến Logstash tại `<elk-server>:5044`.
   - Khởi động dịch vụ Filebeat.

5. **Cấu hình ghi nhật ký akaBot Center**
   - Mở `C:\akabot\center4\conf\logback.xml`.
   - Đặt mẫu đầu ra nhật ký sang định dạng JSON để tương thích với Logstash.
   - Khởi động lại dịch vụ akaBot Center.

6. **Tạo Index Pattern trong Kibana**
   - Trong Kibana, điều hướng đến **Management** > **Index Patterns**.
   - Tạo pattern khớp với `akabot-logs-*` và đặt `@timestamp` làm trường thời gian.

7. **Xác minh việc nhập nhật ký**
   - Kích hoạt một số hoạt động trong akaBot Center (ví dụ: khởi động robot).
   - Trong chế độ xem **Discover** của Kibana, xác nhận rằng các mục nhật ký mới xuất hiện gần theo thời gian thực.

## Lưu ý và cảnh báo

> **Lưu ý:** Cả ba thành phần ELK (Elasticsearch, Logstash, Kibana) phải cùng phiên bản để tránh các vấn đề tương thích.

> **Cảnh báo:** Elasticsearch mặc định lắng nghe trên tất cả các giao diện mạng. Trong môi trường sản xuất, hãy cấu hình xác thực và mã hóa TLS, hoặc hạn chế truy cập qua quy tắc tường lửa để ngăn truy cập trái phép vào dữ liệu nhật ký.

> **Lưu ý:** ELK Stack có thể tiêu thụ tài nguyên đáng kể. Theo dõi mức sử dụng CPU và bộ nhớ của máy chủ ELK sau khi triển khai ban đầu và điều chỉnh cài đặt heap JVM trong `jvm.options` nếu cần.
