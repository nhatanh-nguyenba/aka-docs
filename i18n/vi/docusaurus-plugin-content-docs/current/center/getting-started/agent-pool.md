---
id: agent-pool
title: Cách sử dụng Agent Pool của Center
sidebar_label: Cách sử dụng Agent Pool của Center
sidebar_position: 5
displayed_sidebar: centerSidebar
---

Agent Pool trong akaBot Center là một tập hợp các agent được đặt tên hoạt động cùng nhau như một tài nguyên thực thi thống nhất. Khi một quy trình được gán cho Agent Pool thay vì một agent cụ thể, akaBot Center sẽ tự động chọn một agent khả dụng từ pool để thực thi tác vụ. Điều này cung cấp khả năng cân bằng tải và chuyển đổi dự phòng, đảm bảo khối lượng công việc tự động hóa được xử lý hiệu quả ngay cả khi các agent riêng lẻ đang bận hoặc tạm thời không khả dụng.

Agent Pool đặc biệt hữu ích trong các kịch bản tự động hóa có khối lượng lớn, nơi nhiều phiên bản của cùng một quy trình cần chạy đồng thời trên các máy khác nhau. Ví dụ, một tổ chức xử lý hàng nghìn bản ghi hóa đơn hàng ngày có thể cấu hình một pool gồm năm agent, tất cả đều có khả năng chạy quy trình xử lý hóa đơn. Khi quy trình được kích hoạt — dù thủ công, theo lịch hoặc qua hàng đợi — Center sẽ chọn agent nhàn rỗi tiếp theo từ pool và gửi tác vụ ngay lập tức mà không cần can thiệp của người vận hành.

Việc cấu hình và quản lý Agent Pool được thực hiện thông qua phần Tài nguyên của akaBot Center. Quản trị viên có thể thêm hoặc xóa agent khỏi pool bất kỳ lúc nào, cho phép mở rộng pool trong các giai đoạn cao điểm và thu hẹp trong giờ thấp điểm để tiết kiệm tài nguyên cấp phép. Kết hợp với tính năng Hàng đợi, Agent Pool cho phép các mẫu xử lý song song mạnh mẽ cho khối lượng công việc tự động hóa doanh nghiệp.

## Cách thiết lập Agent Pool

1. Điều hướng đến **Tài nguyên > Agent Pool** trong thanh bên trái.
2. Nhấp vào **Tạo Agent Pool mới**.
3. Cung cấp tên và mô tả tùy chọn cho pool.
4. Từ danh sách agent, chọn các agent để đưa vào pool.
5. Nhấp **Lưu** để tạo pool.
6. Khi tạo hoặc chỉnh sửa Quy trình, chọn Agent Pool làm mục tiêu thực thi thay vì một agent đơn lẻ.

## Thuộc tính Agent Pool

| Thuộc tính | Mô tả |
|---|---|
| Tên Pool | Định danh duy nhất cho pool trong tổ chức |
| Agent được gán | Danh sách các agent được đăng ký là thành viên của pool |
| Chế độ thực thi | Phân phối tác vụ tuần tự hoặc song song cho các thành viên pool |
| Trạng thái khả dụng | Số lượng agent nhàn rỗi và đang bận theo thời gian thực trong pool |
| Quy trình liên quan | Các quy trình hiện được cấu hình để sử dụng pool này |
