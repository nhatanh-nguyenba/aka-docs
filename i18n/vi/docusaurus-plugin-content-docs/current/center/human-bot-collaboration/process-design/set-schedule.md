---
id: set-schedule
title: Đặt lịch
sidebar_label: Đặt lịch
sidebar_position: 5
displayed_sidebar: centerSidebar
---

# Đặt lịch

Tính năng Đặt lịch trong akaBot Center cho phép bạn cấu hình một quy trình để tự động bắt đầu vào các thời điểm cụ thể hoặc trên cơ sở định kỳ mà không cần can thiệp thủ công. Lập lịch đặc biệt hữu ích cho các quy trình theo lô, đối soát cuối ngày, tạo báo cáo định kỳ, hoặc bất kỳ quy trình nào cần chạy theo các khoảng thời gian nhất quán phù hợp với chu kỳ nghiệp vụ.

Lịch được xác định bằng giao diện chọn thời gian đơn giản cho các mẫu phổ biến (hàng ngày, hàng tuần, hàng tháng) hoặc biểu thức cron cho các yêu cầu lập lịch nâng cao. Nhiều lịch có thể được gắn vào một quy trình duy nhất, cho phép các mẫu kích hoạt phức tạp như chạy quy trình mỗi ngày trong tuần lúc 8:00 SA và thêm vào ngày cuối cùng của mỗi tháng. Mỗi lần chạy theo lịch tạo ra một phiên bản quy trình độc lập, vì vậy các lần thực thi đồng thời được hỗ trợ đầy đủ.

Công cụ lập lịch tôn trọng múi giờ, cho phép các tổ chức toàn cầu kích hoạt các quy trình trong đúng giờ làm việc địa phương cho từng khu vực. Trạng thái lịch có thể được bật hoặc tắt bất kỳ lúc nào mà không cần sửa đổi quy trình, giúp dễ dàng tạm thời đình chỉ các lần chạy tự động trong các cửa sổ bảo trì hoặc ngày lễ.

## Tùy chọn cấu hình lịch

| Tùy chọn | Mô tả |
|---|---|
| Tên lịch | Tên mô tả cho trình kích hoạt lịch này |
| Quy trình | Quy trình đã xuất bản để được kích hoạt |
| Tần suất | Một lần, theo phút, theo giờ, hàng ngày, hàng tuần, hàng tháng hoặc cron tùy chỉnh |
| Ngày bắt đầu | Ngày lịch bắt đầu có hiệu lực |
| Ngày kết thúc | Ngày tùy chọn sau đó lịch dừng kích hoạt |
| Múi giờ | Múi giờ được dùng để giải thích thời gian lịch |
| Số lần chạy đồng thời tối đa | Số lượng tối đa các phiên bản đồng thời được phép từ lịch này |
| Biến đầu vào | Giá trị mặc định cho các biến đầu vào quy trình được truyền khi bắt đầu |

## Thiết lập lịch

1. Mở **Cộng tác Người-Bot** > **Thiết kế quy trình** và điều hướng đến tab **Lịch**.
2. Nhấp **+ Lịch mới**.
3. Nhập **Tên lịch** và chọn **Quy trình** mục tiêu từ danh sách thả xuống.
4. Chọn tùy chọn **Tần suất**:
   - Với các mẫu đơn giản, sử dụng **Bộ chọn trực quan** (ví dụ: Mỗi ngày lúc 09:00).
   - Với các mẫu nâng cao, bật **Sử dụng biểu thức Cron** và nhập chuỗi cron hợp lệ (ví dụ: `0 9 * * 1-5` cho các ngày trong tuần lúc 9 SA).
5. Đặt **Ngày bắt đầu** và nếu cần, **Ngày kết thúc**.
6. Chọn **Múi giờ** phù hợp.
7. Tùy chọn cung cấp **Biến đầu vào** mà quy trình sẽ nhận trong mỗi lần chạy theo lịch.
8. Bật lịch sang trạng thái **Đã bật**.
9. Nhấp **Lưu**.

## Ví dụ biểu thức Cron phổ biến

```
# Mỗi ngày lúc 8:00 SA
0 8 * * *

# Mỗi thứ Hai lúc 9:00 SA
0 9 * * 1

# Mỗi ngày trong tuần (Thứ Hai - Thứ Sáu) lúc 6:00 CH
0 18 * * 1-5

# Ngày đầu tiên của mỗi tháng lúc nửa đêm
0 0 1 * *

# Mỗi 30 phút
*/30 * * * *
```
