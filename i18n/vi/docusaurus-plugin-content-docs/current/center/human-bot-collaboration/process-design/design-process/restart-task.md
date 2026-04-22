---
id: restart-task
title: Cách sử dụng Restart Task trong quy trình
sidebar_label: Cách sử dụng Restart Task trong quy trình
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Cách sử dụng Restart Task trong quy trình

Restart Task là một phần tử điều khiển đặc biệt trong akaBot Center cho phép một phiên bản quy trình lặp trở lại một tác vụ đã thực hiện trước đó hoặc về đầu một chuỗi. Nó được sử dụng để mô hình hóa các tình huống nghiệp vụ lặp đi lặp lại nơi một tập hợp các tác vụ phải được lặp lại cho đến khi một điều kiện cụ thể được thỏa mãn — ví dụ, một chu kỳ xem xét tài liệu nơi người xem xét có thể yêu cầu sửa chữa và gửi lại tài liệu để chỉnh sửa trước khi nộp lại để phê duyệt cuối cùng.

Không giống như một vòng lặp gateway đơn giản, Restart Task cung cấp kiểm soát rõ ràng về điểm nào trong luồng quy trình mà phiên bản trả về, làm cho sơ đồ quy trình dễ hiểu và duy trì hơn. Nó cũng thực thi giới hạn vòng lặp có thể cấu hình để ngăn các vòng lặp vô hạn tiêu thụ tài nguyên hệ thống. Khi giới hạn vòng lặp đạt được mà điều kiện thoát chưa được thỏa mãn, quy trình có thể được chuyển đến đường dẫn ngoại lệ hoặc chấm dứt với lỗi.

Restart Task đặc biệt có giá trị trong các quy trình liên quan đến kiểm tra chất lượng, làm phong phú dữ liệu lặp đi lặp lại hoặc đàm phán nhiều vòng. Chúng có thể được kết hợp với Human Task để quyết định của con người (chẳng hạn như "Yêu cầu làm lại") kích hoạt việc khởi động lại, hoặc với Bot Task nơi một bot xác thực xác định xem đầu ra có đáp ứng tiêu chuẩn yêu cầu không trước khi quy trình tiến lên.

## Tùy chọn cấu hình Restart Task

| Thuộc tính | Mô tả | Bắt buộc |
|---|---|---|
| Tên tác vụ | Tên hiển thị cho điểm khởi động lại này | Có |
| Tác vụ đích | Tác vụ hoặc gateway mà quy trình lặp trở lại | Có |
| Điều kiện vòng lặp | Biểu thức phải đúng để vòng lặp thực thi | Có |
| Số vòng lặp tối đa | Số lần tối đa vòng lặp được phép | Có |
| Khi vượt giới hạn | Hành động khi đạt số đếm tối đa: đường dẫn lỗi hoặc chấm dứt | Có |
| Biến đếm vòng lặp | Biến quy trình để theo dõi số vòng lặp hiện tại | Không |

## Các trường hợp sử dụng phổ biến

| Tình huống | Điều kiện vòng lặp | Điều kiện thoát |
|---|---|---|
| Sửa đổi tài liệu | Người xem xét chọn "Yêu cầu làm lại" | Người xem xét chọn "Phê duyệt" |
| Bot thử lại với dữ liệu một phần | Xác thực đầu ra bot thất bại | Đầu ra bot vượt qua xác thực |
| Phê duyệt nhiều vòng | Người phê duyệt cấp cao gửi lại để sửa đổi | Người phê duyệt cấp cao cho phê duyệt cuối cùng |
| Làm phong phú dữ liệu | Các trường bắt buộc vẫn còn trống | Tất cả các trường bắt buộc đã được điền |

## Các bước thêm Restart Task

1. Mở quy trình trong **Trình thiết kế quy trình**.
2. Xác định tác vụ bạn muốn quy trình lặp trở lại (**tác vụ đích**).
3. Kéo phần tử **Restart Task** từ Bảng tác vụ lên canvas, đặt nó sau tác vụ kích hoạt vòng lặp.
4. Vẽ luồng tuần tự từ tác vụ kích hoạt (hoặc gateway) đến nút Restart Task.
5. Nhấp vào nút Restart Task để mở bảng **Thuộc tính**.
6. Nhập **Tên tác vụ** mô tả hành động khởi động lại (ví dụ: "Trở lại Xem xét").
7. Trong **Tác vụ đích**, chọn tác vụ mà quy trình nên trở lại từ danh sách thả xuống.
8. Nhập biểu thức **Điều kiện vòng lặp**. Biểu thức này đánh giá là `true` khi vòng lặp nên thực thi.
9. Đặt **Số vòng lặp tối đa** (khuyến nghị: 5–10 cho hầu hết các tình huống).
10. Cấu hình hành động **Khi vượt giới hạn**.
11. Tùy chọn, chỉ định tên **Biến đếm vòng lặp** để hiển thị số lần lặp cho các tác vụ tiếp theo.
12. Nhấp **Lưu**.
