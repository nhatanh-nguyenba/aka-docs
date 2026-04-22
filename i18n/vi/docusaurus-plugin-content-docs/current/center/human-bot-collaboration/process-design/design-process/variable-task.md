---
id: variable-task
title: Cách thiết lập Variable Task trong quy trình
sidebar_label: Cách thiết lập Variable Task trong quy trình
sidebar_position: 4
displayed_sidebar: centerSidebar
---

# Cách thiết lập Variable Task trong quy trình

Variable Task là một phần tử quy trình nhẹ trong akaBot Center cho phép các nhà thiết kế đặt, cập nhật hoặc tính toán các giá trị biến quy trình tại bất kỳ điểm nào trong quy trình mà không cần thực thi một bot task đầy đủ hoặc yêu cầu đầu vào của con người. Các variable task được sử dụng để thực hiện các phép biến đổi dữ liệu đơn giản, khởi tạo bộ đếm, nối chuỗi, tính toán ngày tháng hoặc lưu trữ kết quả của một biểu thức được lấy từ các biến quy trình khác.

Vì Variable Task thực thi hoàn toàn trong công cụ quy trình mà không điều phối công việc đến agent, chúng hoàn thành ngay lập tức và không thêm chi phí vào thời gian thực thi quy trình. Chúng đặc biệt hữu ích giữa các bước mà dữ liệu cần được định dạng lại hoặc làm phong phú trước khi truyền đến tác vụ tiếp theo. Ví dụ, một Variable Task có thể kết hợp biến tên và họ thành tên đầy đủ, hoặc tính toán ngày đến hạn thanh toán bằng cách thêm 30 ngày vào biến ngày hóa đơn.

Variable Task hỗ trợ nhiều loại biểu thức bao gồm số học, thao tác chuỗi, số học ngày và biểu thức có điều kiện (ternary). Nhiều phép gán biến có thể được xác định trong một Variable Task duy nhất, mỗi phép được đánh giá theo thứ tự, do đó kết quả của một phép gán có thể được sử dụng trong phép tiếp theo.

## Cấu hình Variable Task

| Thuộc tính | Mô tả |
|---|---|
| Tên tác vụ | Tên hiển thị cho tác vụ này trong trình thiết kế |
| Các phép gán biến | Một hoặc nhiều cặp tên biến + biểu thức |

## Cú pháp biểu thức được hỗ trợ

| Loại | Biểu thức ví dụ | Kết quả |
|---|---|---|
| Số học | `${invoiceAmount} * 1.1` | Số tiền hóa đơn với 10% thuế áp dụng |
| Nối chuỗi | `${firstName} + ' ' + ${lastName}` | Chuỗi tên đầy đủ |
| Thêm ngày | `addDays(${invoiceDate}, 30)` | Ngày đến hạn thanh toán |
| Có điều kiện | `${status} == 'Approved' ? 'Yes' : 'No'` | Chuỗi giống boolean dẫn xuất |
| Chuyển đổi kiểu | `toInt(${quantityStr})` | Chuyển đổi chuỗi thành số nguyên |
| Ngày hiện tại | `now()` | Dấu thời gian hiện tại |
| Chuỗi hoa | `toUpperCase(${countryCode})` | Mã quốc gia viết hoa |

## Các kiểu dữ liệu biến được hỗ trợ

| Kiểu | Mô tả |
|---|---|
| String | Giá trị văn bản |
| Integer | Số nguyên |
| Decimal | Số dấu phẩy động |
| Boolean | Đúng / Sai |
| Date | Ngày không có giờ |
| DateTime | Ngày có giờ |
| JSON | Đối tượng JSON có cấu trúc |

## Các bước thêm Variable Task

1. Mở quy trình trong **Trình thiết kế quy trình**.
2. Kéo phần tử **Variable Task** từ Bảng tác vụ lên canvas.
3. Đặt nó giữa các tác vụ nơi cần tính toán biến.
4. Kết nối Variable Task với các phần tử trước và sau bằng mũi tên luồng.
5. Nhấp vào nút Variable Task để mở bảng **Thuộc tính**.
6. Nhập **Tên tác vụ** mô tả (ví dụ: "Tính ngày đến hạn thanh toán").
7. Trong phần **Các phép gán biến**, nhấp **+ Thêm phép gán**.
8. Với mỗi phép gán:
   - Nhập **Tên biến** (tạo biến mới hoặc chọn biến hiện có).
   - Chọn **Kiểu dữ liệu** của biến.
   - Nhập **Biểu thức** để tính toán giá trị.
9. Thêm các phép gán bổ sung nếu cần; chúng được đánh giá từ trên xuống dưới.
10. Nhấp **Lưu** để hoàn tất.
