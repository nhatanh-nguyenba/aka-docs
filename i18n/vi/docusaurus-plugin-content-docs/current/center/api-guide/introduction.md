---
id: introduction
title: Giới thiệu
sidebar_label: Giới thiệu
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Giới thiệu

**akaBot Center REST API** cung cấp khả năng truy cập lập trình vào các tính năng cốt lõi của akaBot Center, cho phép các nhóm doanh nghiệp tích hợp, tự động hóa và điều phối các quy trình RPA (Tự động hóa quy trình bằng robot) từ hệ thống bên ngoài, pipeline CI/CD và các ứng dụng tùy chỉnh.

## Tổng quan

API tuân theo các quy ước REST và sử dụng các phương thức HTTP tiêu chuẩn (`GET`, `POST`, `PUT`, `DELETE`). Tất cả nội dung yêu cầu và phản hồi đều được định dạng bằng **JSON**. API có phiên bản và tất cả các endpoint đều được phục vụ theo một đường dẫn cơ sở nhất quán.

## URL cơ sở

```
https://<center-host>/api/v4
```

Thay thế `<center-host>` bằng hostname hoặc địa chỉ IP của bản cài đặt akaBot Center của bạn. Ví dụ:

```
https://center.example.com/api/v4
```

## Xác thực

Tất cả các yêu cầu API phải được xác thực bằng **Bearer Token**. Bao gồm token trong header `Authorization` của mỗi yêu cầu.

### Lấy Token

Token được tạo từ cổng web akaBot Center trong phần **Cài đặt > Truy cập API**, hoặc bằng cách gọi endpoint xác thực:

```
POST /api/v4/auth/token
```

**Nội dung yêu cầu:**

```json
{
  "username": "tên-người-dùng",
  "password": "mật-khẩu"
}
```

**Phản hồi:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Sử dụng Token

Truyền token trong header `Authorization` cho tất cả các yêu cầu tiếp theo:

```
Authorization: Bearer <access_token>
```

## Loại nội dung

Tất cả nội dung yêu cầu phải sử dụng loại nội dung `application/json`:

```
Content-Type: application/json
```

Tất cả phản hồi cũng được trả về dưới dạng `application/json`.

## Phân trang

Các endpoint trả về tập hợp dữ liệu hỗ trợ phân trang dựa trên con trỏ và dựa trên offset thông qua các tham số truy vấn sau:

| Tham số   | Kiểu    | Mặc định | Mô tả                                             |
|-----------|---------|----------|---------------------------------------------------|
| `page`    | integer | `1`      | Số trang cần lấy.                                 |
| `limit`   | integer | `20`     | Số bản ghi mỗi trang (tối đa 100).               |
| `sortBy`  | string  | —        | Tên trường để sắp xếp kết quả.                   |
| `sortDir` | string  | `asc`    | Hướng sắp xếp: `asc` (tăng dần) hoặc `desc` (giảm dần). |

**Ví dụ phản hồi phân trang:**

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalItems": 145,
    "totalPages": 8
  }
}
```

## Mã lỗi

API sử dụng các mã trạng thái HTTP tiêu chuẩn để chỉ ra kết quả của một yêu cầu. Trong trường hợp lỗi, nội dung phản hồi chứa `errorCode` có thể đọc bằng máy và `message` có thể đọc bằng con người.

| Trạng thái HTTP | Mã lỗi               | Mô tả                                                                                       |
|-----------------|----------------------|---------------------------------------------------------------------------------------------|
| `400`           | `BAD_REQUEST`        | Yêu cầu bị sai định dạng hoặc chứa các tham số không hợp lệ.                              |
| `401`           | `UNAUTHORIZED`       | Yêu cầu thiếu token xác thực hợp lệ, hoặc token đã hết hạn.                               |
| `403`           | `FORBIDDEN`          | Người dùng đã xác thực không có quyền thực hiện thao tác này.                              |
| `404`           | `NOT_FOUND`          | Tài nguyên được yêu cầu không tồn tại.                                                     |
| `409`           | `CONFLICT`           | Yêu cầu xung đột với trạng thái hiện tại của tài nguyên.                                   |
| `500`           | `INTERNAL_ERROR`     | Đã xảy ra lỗi phía máy chủ không mong muốn. Liên hệ quản trị viên của bạn.                |

**Ví dụ phản hồi lỗi:**

```json
{
  "errorCode": "NOT_FOUND",
  "message": "Không tìm thấy quy trình có id '42'.",
  "timestamp": "2026-04-22T08:30:00Z"
}
```

## Giới hạn tốc độ

Theo mặc định, API cho phép tối đa **200 yêu cầu mỗi phút** cho mỗi API token. Nếu vượt quá giới hạn, máy chủ trả về `429 Too Many Requests`. Kiểm tra các header phản hồi sau để theo dõi hạn mức của bạn:

| Header                  | Mô tả                                                             |
|-------------------------|-------------------------------------------------------------------|
| `X-RateLimit-Limit`     | Số lượng yêu cầu tối đa được phép mỗi phút.                      |
| `X-RateLimit-Remaining` | Số lượng yêu cầu còn lại trong cửa sổ hiện tại.                  |
| `X-RateLimit-Reset`     | Unix timestamp khi cửa sổ giới hạn tốc độ được đặt lại.          |

## SDK và công cụ

Ngoài các lệnh gọi HTTP trực tiếp, akaBot Center còn cung cấp:

- **Module PowerShell akaBot** — các cmdlet cho các thao tác phổ biến.
- **Swagger / OpenAPI UI** — có thể truy cập tại `https://<center-host>/api/v4/swagger` để khám phá tương tác.
- **Bộ sưu tập Postman** — có thể tải xuống từ cổng nhà phát triển akaBot.
