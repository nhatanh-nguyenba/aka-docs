---
id: schedule
title: Lịch trình
sidebar_label: Lịch trình
sidebar_position: 3
displayed_sidebar: centerSidebar
---

Tính năng Lịch trình trong akaBot Center cho phép người vận hành cấu hình thực thi tự động dựa trên thời gian của các quy trình mà không cần can thiệp thủ công. Bằng cách gắn một hoặc nhiều lịch trình vào một quy trình, các tổ chức có thể đảm bảo rằng các tác vụ tự động hóa lặp đi lặp lại chạy nhất quán vào đúng thời điểm — dù đó là mỗi ngày vào lúc nửa đêm, mỗi sáng thứ Hai, hay ngày làm việc cuối cùng của mỗi tháng. Lịch trình loại bỏ sự phụ thuộc vào con người nhớ kích hoạt các quy trình và là nền tảng của hoạt động tự động hóa không giám sát.

Lịch trình trong akaBot Center sử dụng cú pháp kiểu cron để linh hoạt tối đa, hỗ trợ các cấu hình như "mỗi 15 phút trong giờ làm việc", "chỉ các ngày trong tuần", hoặc "ngày đầu tiên của mỗi quý". Đối với người dùng không quen với cú pháp cron, giao diện cung cấp một trình tạo lịch trình có hướng dẫn với các cài đặt sẵn phổ biến như hàng giờ, hàng ngày, hàng tuần và hàng tháng. Sau khi lưu, lịch trình trở nên hoạt động ngay lập tức và thời gian thực thi dự kiến tiếp theo được hiển thị cùng với cấu hình lịch trình.

Nhiều lịch trình có thể được gắn vào một quy trình duy nhất, cho phép các mẫu lặp đi lặp lại phức tạp — ví dụ: chạy một quy trình mỗi giờ vào ban ngày nhưng chỉ một lần mỗi giờ vào ban đêm, hoặc kích hoạt thêm các lần chạy vào thời gian kinh doanh cao điểm. Lịch trình cũng có thể tạm thời bị vô hiệu hóa mà không cần xóa, điều này hữu ích trong các cửa sổ bảo trì theo kế hoạch hoặc các kỳ nghỉ khi việc thực thi tự động hóa nên được tạm dừng.

## Các tùy chọn Cấu hình Lịch trình

| Tùy chọn | Mô tả |
|---|---|
| Tên Lịch trình | Nhãn mô tả cho mục lịch trình |
| Quy trình liên quan | Quy trình sẽ được kích hoạt theo lịch |
| Biểu thức Cron | Cú pháp cron tiêu chuẩn xác định tần suất thực thi |
| Múi giờ | Múi giờ mà lịch trình cron được đánh giá |
| Đã kích hoạt | Chuyển đổi để kích hoạt hoặc tạm dừng lịch trình |
| Ngày bắt đầu | Ngày sớm nhất tùy chọn mà lịch trình áp dụng |
| Ngày kết thúc | Ngày cuối tùy chọn sau đó lịch trình trở nên không hoạt động |

## Ví dụ Lịch trình phổ biến

- `0 8 * * 1-5` — Mỗi ngày trong tuần lúc 8:00 SA
- `0 0 * * *` — Mỗi ngày vào lúc nửa đêm
- `0 */2 * * *` — Mỗi 2 giờ
- `0 9 1 * *` — Ngày đầu tiên của mỗi tháng lúc 9:00 SA
