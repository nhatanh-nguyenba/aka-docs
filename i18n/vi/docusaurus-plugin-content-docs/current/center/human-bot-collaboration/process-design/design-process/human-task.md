---
id: human-task
title: Cách tạo Human Task trong quy trình
sidebar_label: Cách tạo Human Task trong quy trình
sidebar_position: 2
displayed_sidebar: centerSidebar
---

# Cách tạo Human Task trong quy trình

Human Task là một bước quy trình yêu cầu một người thực hiện hành động trước khi quy trình có thể tiếp tục. Các human task phổ biến bao gồm xem xét và phê duyệt tài liệu, nhập dữ liệu còn thiếu, đưa ra quyết định dựa trên ngữ cảnh nghiệp vụ hoặc xác nhận thông báo. Human task thu hẹp khoảng cách giữa xử lý bot hoàn toàn tự động và các hoạt động dựa trên phán xét vẫn đòi hỏi sự tham gia của con người, tạo thành lõi của cộng tác người-bot trong akaBot Center.

Khi một quy trình đến một human task, nó tạm dừng và gửi thông báo đến người dùng, vai trò hoặc nhóm người được giao. Người được giao mở tác vụ từ hộp thư của họ, xem lại bất kỳ dữ liệu ngữ cảnh hoặc tài liệu nào được cung cấp bởi các bot task trước, điền vào bất kỳ trường biểu mẫu bắt buộc nào và gửi phản hồi của họ. Chỉ sau khi gửi thì quy trình mới tiếp tục bước tiếp theo. Nếu người được giao không phản hồi trong ngày đến hạn đã cấu hình, một leo thang có thể được kích hoạt để thông báo cho người giám sát hoặc phân công lại tác vụ.

Human task có thể được cấu hình với dữ liệu ngữ cảnh phong phú được hiển thị cho người được giao, bao gồm dữ liệu được trích xuất bởi các bot task trước đó. Một biểu mẫu tùy chỉnh được xây dựng bằng Trình thiết kế biểu mẫu có thể được đính kèm vào tác vụ để người được giao có thể cung cấp đầu vào có cấu trúc. Kết quả của human task — chẳng hạn như "Đã phê duyệt", "Bị từ chối" hoặc trạng thái tùy chỉnh — được lưu trữ dưới dạng biến quy trình và có thể điều khiển các quyết định phân nhánh tiếp theo.

## Bảng cấu hình Human Task

| Thuộc tính | Mô tả | Bắt buộc |
|---|---|---|
| Tên tác vụ | Tên hiển thị trong hộp thư của người được giao | Có |
| Loại phân công | Người dùng, Vai trò hoặc Nhóm | Có |
| Người được giao | Người dùng cụ thể, tên vai trò hoặc tên nhóm | Có |
| Mức độ ưu tiên | Thấp, Trung bình, Cao hoặc Quan trọng | Không |
| Ngày đến hạn | Ngày cố định hoặc tính từ khi bắt đầu quy trình (ví dụ: +2 ngày) | Không |
| Biểu mẫu | Biểu mẫu mà người được giao phải điền | Không |
| Dữ liệu ngữ cảnh | Biến quy trình hiển thị dưới dạng ngữ cảnh chỉ đọc | Không |
| Quy tắc leo thang | Hành động thực hiện khi quá ngày đến hạn | Không |
| Kết quả hoàn thành | Xác định các kết quả có thể (ví dụ: Phê duyệt, Từ chối) | Có |

## Các bước thêm Human Task

1. Mở quy trình trong **Trình thiết kế quy trình**.
2. Kéo phần tử **Human Task** từ **Bảng tác vụ** lên canvas.
3. Kết nối Human Task với phần tử trước.
4. Nhấp vào nút Human Task để mở bảng **Thuộc tính**.
5. Nhập **Tên tác vụ** mô tả hành động cần thực hiện (ví dụ: "Xem xét hóa đơn").
6. Đặt **Loại phân công** thành **Người dùng**, **Vai trò** hoặc **Nhóm**.
7. Trong trường **Người được giao**, chọn người dùng mục tiêu, vai trò hoặc nhóm.
8. Đặt mức **Mức độ ưu tiên** để giúp người được giao đánh giá mức độ khẩn cấp.
9. Cấu hình **Ngày đến hạn** — ngày cố định hoặc khoảng cách động (ví dụ: bắt đầu quy trình + 48 giờ).
10. Nhấp **Thiết kế biểu mẫu** để đính kèm hoặc tạo biểu mẫu cho người được giao điền.
11. Trong **Dữ liệu ngữ cảnh**, thêm các biến quy trình mà người được giao nên thấy (chỉ đọc).
12. Xác định **Quy tắc leo thang**: chọn hành động leo thang (phân công lại, thông báo quản lý) và đặt độ trễ kích hoạt.
13. Trong **Kết quả hoàn thành**, thêm tất cả kết quả gửi hợp lệ và ánh xạ mỗi kết quả với giá trị biến quy trình.
14. Nhấp **Lưu** để áp dụng cấu hình.
