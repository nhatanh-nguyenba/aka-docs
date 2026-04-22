---
id: design-form
title: Thiết kế biểu mẫu
sidebar_label: Thiết kế biểu mẫu
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Thiết kế biểu mẫu

Tính năng Thiết kế biểu mẫu trong akaBot Center cho phép các nhà thiết kế quy trình tạo các biểu mẫu nhập dữ liệu tương tác được trình bày cho người tham gia trong quá trình thực thi quy trình. Các biểu mẫu này thu thập dữ liệu có cấu trúc mà con người cần cung cấp — chẳng hạn như phê duyệt, sửa dữ liệu hoặc quyết định — trước khi quy trình có thể tiếp tục sang bước tiếp theo. Biểu mẫu được xây dựng bằng giao diện kéo-thả và có thể bao gồm nhiều loại trường khác nhau để đáp ứng yêu cầu nghiệp vụ thực tế.

Mỗi biểu mẫu được liên kết với một Human Task cụ thể trong quy trình. Khi một human task trở nên hoạt động, người dùng được giao nhận thông báo và được chuyển hướng đến biểu mẫu để hoàn thành đầu vào của họ. Biểu mẫu có thể được điền trước dữ liệu từ các bước quy trình trước đó hoặc từ các hệ thống nghiệp vụ tích hợp, giảm lượng nhập liệu thủ công cần thiết và giảm thiểu rủi ro sai sót. Các nhà thiết kế có thể áp dụng quy tắc xác thực cho từng trường để đảm bảo chất lượng dữ liệu trước khi gửi.

Biểu mẫu hỗ trợ hiển thị có điều kiện, nghĩa là các trường nhất định có thể hiển thị hoặc ẩn dựa trên các giá trị được nhập vào các trường khác. Điều này giữ cho giao diện gọn gàng và phù hợp với từng người dùng. Dữ liệu biểu mẫu đã hoàn thành được lưu trữ dưới dạng biến quy trình và có thể được các tác vụ tiếp theo tham chiếu, bao gồm các bot task sử dụng dữ liệu do con người cung cấp để điều khiển các hành động tự động ở phía sau.

## Các loại trường được hỗ trợ

| Loại trường | Mô tả | Ví dụ sử dụng |
|---|---|---|
| Nhập văn bản | Nhập văn bản tự do một dòng | Tên khách hàng, số tham chiếu |
| Vùng văn bản | Nhập văn bản tự do nhiều dòng | Nhận xét, lý do từ chối |
| Số | Nhập số với xác thực min/max tùy chọn | Số tiền hóa đơn, số lượng |
| Danh sách thả xuống | Chọn một tùy chọn từ danh sách được xác định trước | Phòng ban, trạng thái phê duyệt |
| Chọn nhiều | Chọn nhiều tùy chọn từ danh sách | Hệ thống bị ảnh hưởng, người nhận thông báo |
| Bộ chọn ngày | Chọn ngày dựa trên lịch | Ngày đến hạn, ngày hiệu lực |
| Bộ chọn ngày-giờ | Chọn ngày và giờ | Thời gian cuộc hẹn, thời hạn |
| Hộp kiểm | Bật/tắt boolean đúng/sai | Xác nhận ghi nhận |
| Nút radio | Lựa chọn loại trừ lẫn nhau | Mức độ ưu tiên (Cao/Trung bình/Thấp) |
| Tải tệp lên | Đính kèm một hoặc nhiều tài liệu | Bằng chứng hỗ trợ, hóa đơn quét |
| Trường ẩn | Lưu trữ giá trị không hiển thị với người dùng | ID phiên bản quy trình, mã hệ thống |

## Các bước tạo biểu mẫu

1. Mở quy trình trong **Trình thiết kế quy trình** và chọn Human Task mà bạn muốn tạo biểu mẫu.
2. Trong bảng thuộc tính tác vụ, nhấp **Thiết kế biểu mẫu** để mở Trình xây dựng biểu mẫu.
3. Kéo các loại trường cần thiết từ **Bảng trường** ở bên trái vào canvas biểu mẫu.
4. Với mỗi trường, nhấp vào nó để mở bảng **Thuộc tính** và cấu hình:
   - **Nhãn**: Tên hiển thị cho người dùng.
   - **Tên trường**: Khóa biến được dùng để lưu trữ giá trị.
   - **Bắt buộc**: Bật/tắt xem trường có cần điền trước khi gửi hay không.
   - **Giá trị mặc định**: Điền trước trường với giá trị tĩnh hoặc biến quy trình.
   - **Quy tắc xác thực**: Đặt ràng buộc như độ dài tối thiểu, giá trị tối đa hoặc mẫu regex.
5. Sử dụng tab **Logic có điều kiện** để thêm quy tắc hiển thị/ẩn dựa trên giá trị trường khác.
6. Nhấp **Xem trước** để xem biểu mẫu trông như thế nào với người dùng cuối.
7. Nhấp **Lưu biểu mẫu** để gắn biểu mẫu vào Human Task.
