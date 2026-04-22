---
id: assignee-pool
title: Nhóm người được giao
sidebar_label: Nhóm người được giao
sidebar_position: 4
displayed_sidebar: centerSidebar
---

# Nhóm người được giao

Nhóm người được giao (Assignee Pool) là một nhóm người dùng được đặt tên, đủ điều kiện thực hiện các human task trong một quy trình. Thay vì giao một human task cho một cá nhân duy nhất, bạn có thể giao nó cho một nhóm, và bất kỳ thành viên nào của nhóm đó đều có thể nhận và hoàn thành tác vụ. Cách tiếp cận này cải thiện khả năng phục hồi quy trình bằng cách ngăn chặn các điểm tắc nghẽn xảy ra khi một cá nhân cụ thể không có mặt, đang nghỉ phép hoặc quá tải công việc.

Nhóm người được giao được xác định ở cấp hệ thống và được tái sử dụng trên nhiều quy trình và human task. Mỗi nhóm có tên, mô tả tùy chọn và danh sách thành viên. Tư cách thành viên có thể được quản lý thủ công bởi quản trị viên hoặc được đồng bộ tự động với dịch vụ thư mục của tổ chức (LDAP/Active Directory). Khi một human task được giao cho một nhóm, tất cả các thành viên nhóm đều nhận được thông báo và tác vụ xuất hiện trong hộp thư của mỗi thành viên. Thành viên đầu tiên nhận tác vụ sẽ khóa nó lại, ngăn chặn xử lý trùng lặp.

Các nhóm cũng có thể được cấu hình với chiến lược **cân bằng tải**, nơi hệ thống tự động chuyển tác vụ đến thành viên nhóm có ít nhiệm vụ đang hoạt động nhất. Điều này đảm bảo phân phối công việc công bằng và giảm thời gian hoàn thành tác vụ tổng thể. Người giám sát có thể xem thống kê cấp nhóm — bao gồm thời gian xử lý trung bình và số lượng tác vụ đang chờ xử lý — từ bảng điều khiển Trung tâm cộng tác.

## Chiến lược phân công nhóm

| Chiến lược | Mô tả | Phù hợp nhất cho |
|---|---|---|
| Nhận đầu tiên | Bất kỳ thành viên nhóm nào cũng có thể nhận tác vụ từ hộp thư | Tác vụ phê duyệt chung |
| Luân phiên | Tác vụ được giao tuần tự cho các thành viên nhóm | Phân phối tải công việc bằng nhau |
| Dựa trên tải | Tác vụ được chuyển đến thành viên có ít tác vụ đang hoạt động nhất | Hàng đợi khối lượng cao |
| Dựa trên kỹ năng | Tác vụ được chuyển dựa trên thẻ kỹ năng của thành viên | Tác vụ xử lý chuyên biệt |
| Ghi đè thủ công | Người giám sát giao thủ công tác vụ cho một thành viên cụ thể | Tác vụ leo thang hoặc nhạy cảm |

## Tạo nhóm người được giao

1. Vào **Cộng tác Người-Bot** > **Thiết kế quy trình** > **Nhóm người được giao**.
2. Nhấp **+ Nhóm mới**.
3. Nhập **Tên nhóm** và **Mô tả** tùy chọn.
4. Chọn **Chiến lược phân công** từ danh sách thả xuống.
5. Trong phần **Thành viên**, nhấp **Thêm thành viên** và tìm kiếm người dùng theo tên hoặc email.
6. Tùy chọn, bật **Đồng bộ LDAP** và nhập tên phân biệt (DN) của nhóm để tự động đồng bộ hóa tư cách thành viên.
7. Nhấp **Lưu** để tạo nhóm.

## Giao nhóm cho Human Task

1. Mở quy trình trong **Trình thiết kế quy trình**.
2. Nhấp vào nút **Human Task** bạn muốn cấu hình.
3. Trong bảng thuộc tính, tìm trường **Người được giao**.
4. Chọn **Nhóm** làm loại phân công.
5. Chọn nhóm mong muốn từ danh sách thả xuống **Tên nhóm**.
6. Nhấp **Lưu** để áp dụng cấu hình.
