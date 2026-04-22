---
id: install-ssl-tls
title: Cài đặt/Tạo chứng chỉ SSL/TLS cho Center
sidebar_label: Cài đặt/Tạo chứng chỉ SSL/TLS cho Center
sidebar_position: 6
displayed_sidebar: centerSidebar
---

# Cài đặt/Tạo chứng chỉ SSL/TLS cho Center

Bảo mật akaBot Center bằng chứng chỉ SSL/TLS là điều cần thiết cho các triển khai sản xuất. HTTPS đảm bảo rằng tất cả giao tiếp giữa các robot tác nhân, trình duyệt khách hàng và máy chủ akaBot Center được mã hóa và được bảo vệ khỏi sự ngăn chặn. Hướng dẫn này bao gồm cả việc tạo chứng chỉ tự ký để kiểm thử và cài đặt chứng chỉ do CA ký cho môi trường sản xuất.

## Điều kiện tiên quyết

- akaBot Center đã được cài đặt và đang chạy (triển khai dựa trên Tomcat)
- Java JDK 17 đã được cài đặt (bao gồm tiện ích `keytool`)
- Để sản xuất: chứng chỉ SSL hợp lệ và khóa riêng tư từ Tổ chức cấp chứng chỉ (CA) đáng tin cậy
- Quyền quản trị viên trên máy chủ akaBot Center
- OpenSSL đã được cài đặt (tùy chọn, để tạo CSR hoặc chuyển đổi định dạng chứng chỉ)

## Các bước cài đặt

### Tùy chọn A: Tạo chứng chỉ tự ký (Chỉ để kiểm thử)

1. Mở command prompt và chạy lệnh `keytool` sau:
   ```
   keytool -genkeypair -alias akabotcenter -keyalg RSA -keysize 2048 -validity 365 -keystore C:\akabot\center4\conf\keystore.jks -storepass <keystore_password>
   ```
2. Điền thông tin được yêu cầu (tổ chức, quốc gia, v.v.).
3. Ghi lại đường dẫn keystore và mật khẩu cho bước tiếp theo.

### Tùy chọn B: Cài đặt chứng chỉ do CA ký (Sản xuất)

1. Tạo Yêu cầu ký chứng chỉ (CSR):
   ```
   keytool -certreq -alias akabotcenter -keystore C:\akabot\center4\conf\keystore.jks -file akabotcenter.csr
   ```
2. Gửi CSR cho CA và nhận tệp chứng chỉ đã ký (ví dụ: `akabotcenter.crt`).
3. Nhập chứng chỉ chuỗi CA vào keystore:
   ```
   keytool -import -alias root -trustcacerts -file root-ca.crt -keystore C:\akabot\center4\conf\keystore.jks
   ```
4. Nhập chứng chỉ đã ký:
   ```
   keytool -import -alias akabotcenter -file akabotcenter.crt -keystore C:\akabot\center4\conf\keystore.jks
   ```

### Cấu hình Tomcat cho HTTPS

5. Mở `C:\akabot\center4\conf\server.xml`.
6. Thêm hoặc cập nhật SSL Connector:
   ```xml
   <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"
              SSLEnabled="true" scheme="https" secure="true"
              keystoreFile="conf/keystore.jks" keystorePass="<keystore_password>"
              clientAuth="false" sslProtocol="TLS" />
   ```
7. Khởi động lại dịch vụ akaBot Center.
8. Truy cập cổng tại `https://<server-ip>:8443/center` để xác minh HTTPS hoạt động.

## Lưu ý và cảnh báo

> **Cảnh báo:** Chứng chỉ tự ký sẽ kích hoạt cảnh báo bảo mật trình duyệt và không phù hợp cho môi trường sản xuất. Luôn sử dụng chứng chỉ do CA ký trong môi trường sản xuất.

> **Lưu ý:** Để chuyển hướng tất cả lưu lượng HTTP sang HTTPS, hãy thêm quy tắc chuyển hướng trong `server.xml` hoặc cấu hình reverse proxy (ví dụ: Nginx, Apache HTTP Server) để thực thi HTTPS.

> **Lưu ý:** Bảo mật tệp keystore và mật khẩu. Mất keystore ngăn gia hạn chứng chỉ và có thể yêu cầu tạo lại chứng chỉ.
