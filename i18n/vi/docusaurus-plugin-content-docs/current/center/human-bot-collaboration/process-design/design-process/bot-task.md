---
id: bot-task
title: Cách tạo Bot Task trong quy trình
sidebar_label: Cách tạo Bot Task trong quy trình
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Cách tạo Bot Task trong quy trình

Bot Task là một bước tự động trong quy trình cộng tác người-bot, nơi akaBot thực thi một gói quy trình robot được định nghĩa trước mà không cần bất kỳ sự tương tác nào của con người. Các bot task chịu trách nhiệm về công việc xử lý lặp đi lặp lại tốc độ cao như đọc dữ liệu từ hệ thống nguồn, thực hiện tính toán, cập nhật bản ghi trong cơ sở dữ liệu hoặc tạo tài liệu. Bằng cách nhúng các bot task trực tiếp vào luồng quy trình, các tổ chức có thể đảm bảo rằng tự động hóa chạy chính xác khi và ở đâu cần thiết trong quy trình end-to-end lớn hơn.

Khi một quy trình đến một bot task, akaBot Center điều phối công việc đến một agent có sẵn trong nhóm agent được chỉ định. Agent tải về gói quy trình được chỉ định, thực thi nó với các tham số đầu vào đã cấu hình và báo cáo kết quả — thành công, thất bại hoặc giá trị đầu ra được trả về — cho công cụ quy trình. Sau đó quy trình tiếp tục đến tác vụ tiếp theo dựa trên kết quả, cho phép phân nhánh có điều kiện dựa trên kết quả bot.

Bot task hỗ trợ các chính sách thời gian chờ và thử lại có thể cấu hình để xử lý các lỗi tạm thời một cách duyên dáng. Nếu một bot task thất bại và các lần thử lại đã hết, quy trình có thể được cấu hình để chuyển hướng đến đường dẫn xử lý ngoại lệ, cảnh báo người giám sát hoặc chấm dứt phiên bản. Tất cả chi tiết thực thi bao gồm thời gian bắt đầu, thời gian kết thúc, agent được sử dụng và bất kỳ biến đầu ra nào đều được ghi lại trong nhật ký kiểm tra phiên bản.

## Bảng cấu hình Bot Task

| Thuộc tính | Mô tả | Bắt buộc |
|---|---|---|
| Tên tác vụ | Tên hiển thị cho tác vụ này trong trình thiết kế | Có |
| Nhóm Agent | Nhóm agent đủ điều kiện thực thi tác vụ này | Có |
| Gói quy trình | Gói quy trình akaBot (.nupkg) để thực thi | Có |
| Phiên bản gói | Phiên bản cụ thể hoặc "mới nhất" | Có |
| Biến đầu vào | Biến quy trình để truyền làm đối số đầu vào cho gói | Không |
| Biến đầu ra | Biến để ghi lại từ đầu ra gói | Không |
| Thời gian chờ (phút) | Thời gian thực thi tối đa trước khi tác vụ được đánh dấu là hết thời gian | Có |
| Số lần thử lại | Số lần tự động thử lại khi thất bại | Không |
| Độ trễ thử lại (giây) | Thời gian chờ giữa các lần thử | Không |
| Khi thất bại | Chuyển hướng đến đường dẫn lỗi hoặc chấm dứt phiên bản | Có |

## Các bước thêm Bot Task

1. Mở quy trình trong **Trình thiết kế quy trình**.
2. Trong **Bảng tác vụ** ở bên trái, kéo phần tử **Bot Task** lên canvas.
3. Kết nối Bot Task với phần tử trước bằng mũi tên luồng.
4. Nhấp vào nút Bot Task để mở bảng **Thuộc tính** ở bên phải.
5. Nhập **Tên tác vụ** mô tả.
6. Chọn **Nhóm Agent** từ danh sách thả xuống. Chỉ các nhóm có ít nhất một agent đang hoạt động mới được liệt kê.
7. Nhấp vào trường **Gói quy trình** và duyệt hoặc tìm kiếm gói cần thực thi.
8. Chọn **Phiên bản gói** mong muốn.
9. Trong phần **Biến đầu vào**, ánh xạ các biến quy trình với các tham số đầu vào dự kiến của gói.
10. Trong phần **Biến đầu ra**, xác định tên biến sẽ lưu trữ các giá trị trả về của gói.
11. Đặt giá trị **Thời gian chờ** phù hợp với thời gian thực thi dự kiến.
12. Cấu hình **Số lần thử lại** và **Độ trễ thử lại** nếu dự kiến có lỗi tạm thời.
13. Nhấp **Lưu** để áp dụng cấu hình.
