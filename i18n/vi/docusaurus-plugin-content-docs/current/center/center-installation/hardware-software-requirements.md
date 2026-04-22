---
id: hardware-software-requirements
title: Yêu cầu phần cứng & phần mềm
sidebar_label: Yêu cầu phần cứng & phần mềm
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Yêu cầu phần cứng & phần mềm

Trước khi cài đặt akaBot Center, hãy đảm bảo môi trường của bạn đáp ứng các yêu cầu tối thiểu về phần cứng và phần mềm được liệt kê dưới đây. Đáp ứng các yêu cầu này giúp đảm bảo hoạt động ổn định và hiệu suất tối ưu của nền tảng akaBot trên tất cả các mô hình triển khai được hỗ trợ.

## Yêu cầu phần cứng

Bảng sau liệt kê thông số kỹ thuật phần cứng tối thiểu và khuyến nghị để chạy akaBot Center:

| Thành phần | Tối thiểu | Khuyến nghị |
|---|---|---|
| CPU | 4 nhân, 2.0 GHz | 8 nhân, 2.5 GHz trở lên |
| RAM | 8 GB | 16 GB trở lên |
| Dung lượng đĩa | 50 GB SSD | 200 GB SSD |
| Mạng | 100 Mbps | 1 Gbps |

Đối với các triển khai Tính khả dụng cao (HA), mỗi node trong cụm phải đáp ứng riêng lẻ các thông số kỹ thuật được khuyến nghị. Có thể cần thêm dung lượng đĩa khi bật tổng hợp nhật ký qua ELK Stack.

## Yêu cầu phần mềm

akaBot Center hỗ trợ các hệ điều hành và phiên bản phần mềm bên thứ ba sau:

| Phần mềm | Phiên bản được hỗ trợ |
|---|---|
| Hệ điều hành | Windows Server 2019/2022, Red Hat Enterprise Linux 9.x |
| Java (JDK) | OpenJDK 17 trở lên |
| Cơ sở dữ liệu | MySQL 8.0+, Microsoft SQL Server 2019+, PostgreSQL 14+ |
| Máy chủ ứng dụng | Apache Tomcat 10.x |
| Trình duyệt | Google Chrome 110+, Microsoft Edge 110+ |

> **Lưu ý:** Rất nên sử dụng máy chủ chuyên dụng cho akaBot Center trong môi trường sản xuất. Chia sẻ máy chủ với các ứng dụng doanh nghiệp khác có thể dẫn đến tranh giành tài nguyên và giảm hiệu suất.

> **Cảnh báo:** Chạy akaBot Center trên các hệ điều hành hoặc phiên bản phần mềm không được hỗ trợ không được khuyến nghị và có thể dẫn đến hành vi bất ngờ hoặc lỗi cài đặt.
