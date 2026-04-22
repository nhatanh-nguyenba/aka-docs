---
id: license-activation
title: Kích hoạt giấy phép
sidebar_label: Kích hoạt giấy phép
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Kích hoạt giấy phép

Kích hoạt giấy phép là bắt buộc để mở khóa toàn bộ chức năng của akaBot Center. Sau khi hoàn tất cài đặt, bạn phải kích hoạt giấy phép hợp lệ để bật quản lý robot, lập lịch quy trình và tất cả các tính năng doanh nghiệp khác. akaBot hỗ trợ cả phương thức kích hoạt trực tuyến và ngoại tuyến.

## Điều kiện tiên quyết

- akaBot Center phải được cài đặt thành công và đang chạy trước khi thử kích hoạt.
- Bạn phải nhận được khóa giấy phép hợp lệ từ nhóm bán hàng hoặc hỗ trợ của akaBot.
- Để kích hoạt trực tuyến, máy chủ phải có quyền truy cập internet ra ngoài để liên hệ máy chủ cấp phép của akaBot.
- Để kích hoạt ngoại tuyến, liên hệ bộ phận hỗ trợ akaBot để lấy tệp giấy phép ngoại tuyến.

## Các bước kích hoạt

1. Mở trình duyệt và điều hướng đến cổng web akaBot Center (ví dụ: `http://<server-ip>:8080/center`).
2. Đăng nhập bằng thông tin đăng nhập quản trị viên được cấu hình trong quá trình cài đặt.
3. Điều hướng đến **Quản trị** > **Quản lý giấy phép** từ menu bên trái.
4. Nhấp vào nút **Kích hoạt giấy phép**.
5. Trong hộp thoại xuất hiện, nhập khóa giấy phép vào trường được cung cấp.
6. Chọn **Kích hoạt trực tuyến** nếu máy chủ có kết nối internet, hoặc **Kích hoạt ngoại tuyến** nếu không có.
7. Để kích hoạt trực tuyến, nhấp **Kích hoạt** và chờ hệ thống liên hệ máy chủ cấp phép.
8. Để kích hoạt ngoại tuyến, tải xuống tệp yêu cầu kích hoạt, gửi cho bộ phận hỗ trợ akaBot, sau đó tải lên tệp phản hồi giấy phép nhận được.
9. Sau khi kích hoạt thành công, thông tin chi tiết giấy phép (ngày hết hạn, số lượng robot, các mô-đun) sẽ được hiển thị trên trang Quản lý giấy phép.

## Lưu ý và cảnh báo

> **Lưu ý:** Mỗi khóa giấy phép chỉ có thể được kích hoạt trên một phiên bản akaBot Center. Cố gắng sử dụng cùng một khóa trên nhiều phiên bản sẽ dẫn đến lỗi kích hoạt.

> **Cảnh báo:** Nếu giấy phép hết hạn, akaBot Center sẽ vào chế độ hạn chế trong đó các quy trình tự động hóa hiện có vẫn tiếp tục chạy nhưng không thể thêm robot mới và một số tính năng quản lý sẽ bị vô hiệu hóa. Gia hạn giấy phép trước khi hết hạn để tránh gián đoạn.

> **Lưu ý:** Sau khi kích hoạt, khởi động lại dịch vụ akaBot Center để đảm bảo tất cả các tính năng được cấp phép được bật đầy đủ.
