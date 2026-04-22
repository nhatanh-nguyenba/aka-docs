---
id: package
title: Gói
sidebar_label: Gói
sidebar_position: 4
displayed_sidebar: centerSidebar
---

Gói trong akaBot Center là đơn vị tự động hóa có thể triển khai — đầu ra đã biên dịch của một dự án tự động hóa được tạo trong akaBot Studio. Khi nhà phát triển hoàn thành việc xây dựng và kiểm tra tự động hóa trong Studio, họ xuất bản nó dưới dạng tệp gói định dạng NuGet (.nupkg), sau đó được tải lên akaBot Center. Center lưu trữ và quản lý tất cả các gói đã xuất bản trong Thư viện Gói của nó, cho phép kiểm soát phiên bản, khôi phục và triển khai có kiểm soát logic tự động hóa trên toàn tổ chức.

Mỗi Gói trong thư viện có thể có nhiều phiên bản, phản ánh lịch sử thay đổi được thực hiện đối với tự động hóa. Center duy trì tất cả các phiên bản đồng thời, vì vậy các nhóm có thể chạy phiên bản 1.0.2 trong sản xuất trong khi phiên bản 1.1.0 đang được xác thực trong môi trường staging. Phiên bản song song này rất quan trọng đối với quản trị tự động hóa doanh nghiệp, nơi các thay đổi đối với quy trình sản xuất phải trải qua chu trình phê duyệt và kiểm tra trước khi được triển khai. Các Quy trình tham chiếu rõ ràng một phiên bản gói, đảm bảo rằng quy trình sản xuất không bao giờ vô tình được nâng cấp.

Các gói có thể được tổ chức theo thẻ và mô tả để làm cho chúng dễ tìm kiếm trong các tổ chức có thư viện tự động hóa lớn. Trang chi tiết Gói hiển thị metadata như mô tả gói, tác giả, ngày tạo và danh sách các quy trình hiện đang sử dụng từng phiên bản. Quản trị viên có thể hạn chế người dùng nào được phép tải lên các gói mới hoặc thăng cấp gói giữa các môi trường sử dụng kiểm soát truy cập dựa trên vai trò.

## Quy trình Quản lý Gói

1. Nhà phát triển hoàn thành dự án tự động hóa trong akaBot Studio.
2. Nhà phát triển xuất bản dự án dưới dạng tệp `.nupkg` từ Studio.
3. Người vận hành tải tệp gói lên akaBot Center qua trang **Gói**.
4. Mục phiên bản mới xuất hiện trong Thư viện Gói.
5. Người vận hành tạo hoặc cập nhật Quy trình để tham chiếu phiên bản gói mới.
6. Quy trình được kiểm tra trên agent staging trước khi triển khai lên sản xuất.

## Trường Gói

| Trường | Mô tả |
|---|---|
| Tên Gói | Định danh duy nhất khớp với tên dự án trong Studio |
| Phiên bản | Số phiên bản ngữ nghĩa (ví dụ: 1.2.0) |
| Mô tả | Tóm tắt dễ đọc về những gì tự động hóa thực hiện |
| Ngày tải lên | Ngày và giờ gói được tải lên Center |
| Tải lên bởi | Tài khoản người dùng đã thực hiện tải lên |
| Được dùng bởi Quy trình | Số lượng quy trình hiện đang tham chiếu phiên bản này |
