---
id: workflow
title: Quy trình
sidebar_label: Quy trình
sidebar_position: 2
displayed_sidebar: centerSidebar
---

Quy trình trong akaBot Center là cấu hình kết nối gói tự động hóa với mục tiêu thực thi (agent hoặc agent pool) và xác định các tham số mà tự động hóa sẽ chạy. Hãy coi Quy trình như một bộ mô tả triển khai: nó chỉ định phiên bản gói nào sẽ sử dụng, agent hoặc pool nào sẽ thực thi nó, đối số đầu vào nào cần truyền và các cài đặt vận hành khác nhau như giới hạn timeout và cấu hình cảnh báo. Tạo Quy trình là bước bắt buộc trước khi bất kỳ quy trình tự động nào có thể được thực thi hoặc lên lịch.

Khi tạo Quy trình, bạn chọn Gói đã tải lên trước đó và liên kết nó với Agent hoặc Agent Pool. Bạn cũng có thể cấu hình các đối số đầu vào sẽ được truyền cho tự động hóa trong thời gian chạy, cho phép cùng một gói được tái sử dụng trên nhiều Quy trình với các tham số hóa khác nhau. Ví dụ, một gói xử lý dữ liệu đơn lẻ có thể được triển khai như ba Quy trình riêng biệt — một cho mỗi bộ phận kinh doanh — mỗi quy trình truyền đường dẫn thư mục hoặc tệp cấu hình khác nhau làm đối số đầu vào.

Quy trình hỗ trợ lập phiên bản thông qua liên kết Gói của chúng. Khi phiên bản mới của gói được xuất bản, Quy trình có thể được cập nhật để tham chiếu phiên bản mới trong khi duy trì phiên bản trước đó để khôi phục. Điều này cho phép triển khai logic tự động hóa đã cập nhật trong môi trường sản xuất một cách có kiểm soát, không gián đoạn.

## Các trường Cấu hình Quy trình

| Trường | Mô tả |
|---|---|
| Tên Quy trình | Tên duy nhất để xác định quy trình này trong Center |
| Gói | Gói tự động hóa để thực thi |
| Phiên bản Gói | Phiên bản cụ thể của gói cần sử dụng |
| Agent / Agent Pool | Mục tiêu thực thi cho quy trình này |
| Đối số đầu vào | Các cặp khóa-giá trị được truyền cho tự động hóa trong thời gian chạy |
| Timeout | Thời gian tối đa cho phép trước khi tác vụ bị dừng cưỡng bức |
| Cảnh báo khi Thất bại | Có gửi thông báo khi tác vụ thất bại không |
| Đã kích hoạt | Chuyển đổi để kích hoạt hoặc hủy kích hoạt quy trình |
