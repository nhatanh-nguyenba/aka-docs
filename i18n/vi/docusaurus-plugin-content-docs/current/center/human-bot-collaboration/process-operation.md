---
id: process-operation
title: Vận hành quy trình
sidebar_label: Vận hành quy trình
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Vận hành quy trình

Vận hành quy trình bao gồm việc thực thi và quản lý hàng ngày các quy trình cộng tác người-bot trong akaBot Center. Sau khi một quy trình đã được thiết kế và xuất bản, các nhà vận hành sử dụng giao diện Vận hành quy trình để kích hoạt các phiên bản quy trình mới, theo dõi tiến trình, xử lý ngoại lệ và đóng các trường hợp đã hoàn thành. Phần này đóng vai trò là bảng điều khiển vận hành cho tất cả các quy trình đang chạy có sự tham gia của cả bot và người.

Các nhà vận hành có thể khởi động một phiên bản quy trình thủ công từ bảng điều khiển Vận hành quy trình hoặc cho phép hệ thống kích hoạt các phiên bản tự động dựa trên lịch trình đã cấu hình hoặc sự kiện bên ngoài như email đến, nộp biểu mẫu hoặc lệnh gọi API. Mỗi phiên bản được theo dõi riêng lẻ với ID duy nhất, và toàn bộ vòng đời của nó — từ khởi tạo qua mọi bước tác vụ đến hoàn thành cuối cùng — hiển thị trong chế độ xem chi tiết phiên bản.

Khi một phiên bản quy trình gặp lỗi, chẳng hạn như lỗi tác vụ bot hoặc tác vụ con người vượt quá thời hạn, giao diện Vận hành quy trình sẽ hiển thị ngoại lệ ngay lập tức. Các nhà vận hành có thể thử lại các tác vụ bot bị lỗi, phân công lại các tác vụ con người quá hạn hoặc chấm dứt các phiên bản không còn cần thiết. Tất cả các hành động khắc phục được ghi lại trong nhật ký kiểm tra để đảm bảo khả năng truy xuất.

## Trạng thái phiên bản quy trình

| Trạng thái | Mô tả |
|---|---|
| Đang chạy | Phiên bản đang tích cực tiến triển qua các tác vụ của nó |
| Đang chờ | Phiên bản tạm dừng, chờ hoàn thành tác vụ con người |
| Thất bại | Một tác vụ trong phiên bản đã gặp lỗi không thể phục hồi |
| Hoàn thành | Tất cả các tác vụ đã được thực hiện thành công và quy trình đã kết thúc |
| Đã chấm dứt | Phiên bản đã bị dừng thủ công trước khi đến sự kiện kết thúc |
| Đã lên lịch | Phiên bản đang trong hàng đợi và chờ thời gian bắt đầu theo lịch |

## Khởi động phiên bản quy trình thủ công

1. Mở **Cộng tác Người-Bot** > **Vận hành quy trình** trong akaBot Center.
2. Nhấp vào nút **Khởi động phiên bản mới** ở góc trên bên phải.
3. Chọn **Quy trình** mong muốn từ danh sách thả xuống.
4. Điền vào bất kỳ biến đầu vào bắt buộc nào trong biểu mẫu bắt đầu.
5. Nhấp **Xác nhận** để khởi chạy phiên bản.
6. Phiên bản mới sẽ xuất hiện trong danh sách **Đang chạy** với ID phiên bản duy nhất của nó.

## Quản lý các phiên bản đang chạy

- Sử dụng các điều khiển **Tìm kiếm** và **Lọc** để tìm các phiên bản cụ thể theo trạng thái, tên quy trình hoặc phạm vi ngày.
- Nhấp vào bất kỳ hàng phiên bản nào để mở **Chế độ xem dòng thời gian**, hiển thị từng tác vụ đã hoàn thành và đang chờ xử lý.
- Sử dụng menu **Hành động** trên tác vụ bị lỗi để chọn **Thử lại**, **Bỏ qua** hoặc **Chấm dứt phiên bản**.
- Xuất dữ liệu phiên bản sang CSV để báo cáo bằng nút **Xuất** trong thanh công cụ.
