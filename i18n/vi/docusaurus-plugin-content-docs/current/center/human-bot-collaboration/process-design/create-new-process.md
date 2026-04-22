---
id: create-new-process
title: Tạo quy trình mới
sidebar_label: Tạo quy trình mới
sidebar_position: 2
displayed_sidebar: centerSidebar
---

# Tạo quy trình mới

Tạo một quy trình mới trong akaBot Center là bước đầu tiên để tự động hóa quy trình nghiệp vụ có sự tham gia của cả bot và người. Trình thiết kế quy trình cung cấp canvas trực quan nơi bạn có thể xác định trình tự các tác vụ, điểm quyết định và sự kiện cấu thành quy trình. Trước khi xây dựng luồng, bạn cần thiết lập siêu dữ liệu quy trình bao gồm tên, mô tả, phiên bản và những người tham gia sẽ tham gia vào các human task.

Một quy trình được xác định tốt bắt đầu từ việc hiểu các yêu cầu nghiệp vụ: bước nào có thể được bot xử lý hoàn toàn, bước nào cần sự phán xét hoặc phê duyệt của con người, và dữ liệu nào cần lưu chuyển giữa các tác vụ. Mô hình quy trình akaBot Center hỗ trợ các quy trình hỗn hợp nơi các bot task và human task có thể được kết hợp tự do và kết nối thông qua các cổng logic để mô hình hóa các quy tắc nghiệp vụ thực tế.

Khi một quy trình được tạo và lưu ở trạng thái nháp, nó có thể được lặp lại trước khi được xuất bản để sử dụng trong hoạt động. Các quy trình đã xuất bản có thể được kích hoạt thủ công bởi nhà vận hành, lên lịch chạy vào những thời điểm cụ thể, hoặc được gọi tự động qua API hoặc sự kiện hệ thống. Quản lý phiên bản đảm bảo rằng các cập nhật cho quy trình không làm gián đoạn các phiên bản đang chạy trên phiên bản trước.

## Các bước tạo quy trình

1. Điều hướng đến **Cộng tác Người-Bot** > **Thiết kế quy trình** trong akaBot Center.
2. Nhấp vào nút **+ Quy trình mới** ở đầu danh sách quy trình.
3. Trong hộp thoại **Tạo quy trình**, điền vào các trường sau:

   | Trường | Mô tả | Bắt buộc |
   |---|---|---|
   | Tên quy trình | Tên duy nhất, mô tả cho quy trình | Có |
   | Mô tả | Giải thích ngắn gọn về những gì quy trình làm | Không |
   | Danh mục | Nhóm tổ chức cho quy trình | Không |
   | Nhãn phiên bản | Định danh phiên bản (ví dụ: `1.0.0`) | Có |
   | Nhóm người được giao mặc định | Nhóm người dùng mặc định cho các human task | Không |
   | Điều kiện bắt đầu | Cách kích hoạt quy trình (thủ công, theo lịch, API) | Có |

4. Nhấp **Tạo** để mở canvas Trình thiết kế quy trình với Sự kiện bắt đầu mặc định đã được đặt sẵn.
5. Sử dụng **Bảng tác vụ** ở bên trái để kéo Bot Task, Human Task và Gateway lên canvas.
6. Kết nối các tác vụ bằng cách di chuột qua một nút tác vụ cho đến khi mũi tên kết nối xuất hiện, sau đó kéo đến nút tiếp theo.
7. Cấu hình từng tác vụ bằng cách nhấp vào nó và chỉnh sửa thuộc tính trong bảng bên phải.
8. Xác định điều kiện kết thúc bằng cách kết nối tác vụ cuối cùng với một nút **Sự kiện kết thúc**.
9. Nhấp **Lưu nháp** để bảo toàn công việc của bạn, hoặc **Xuất bản** để quy trình có thể được thực thi.

## Thực hành tốt nhất

- Giữ tên quy trình ngắn gọn nhưng đủ mô tả để xác định chức năng nghiệp vụ.
- Thêm mô tả có ý nghĩa để các thành viên trong nhóm hiểu mục đích quy trình mà không cần mở trình thiết kế.
- Xác định vai trò người tham gia và nhóm người được giao trước khi thiết kế tác vụ để tránh cấu hình lại sau.
- Sử dụng quy trình con cho các chuỗi tác vụ lặp lại để giữ canvas chính gọn gàng.
- Kiểm tra quy trình với một nhóm nhỏ người dùng trước khi xuất bản trên toàn tổ chức.
