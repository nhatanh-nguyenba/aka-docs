---
id: enumerated-types
title: Các kiểu liệt kê
sidebar_label: Các kiểu liệt kê
sidebar_position: 2
displayed_sidebar: centerSidebar
---

# Các kiểu liệt kê

Các kiểu liệt kê (enum) là tập hợp cố định các giá trị hằng số có tên được sử dụng xuyên suốt akaBot Center API. Khi một trường chấp nhận hoặc trả về một enum, API sử dụng biểu diễn **chuỗi** của hằng số (ví dụ: `"Running"` thay vì mã số nguyên).

Trang này ghi lại tất cả các enum bạn sẽ gặp trong các tham số yêu cầu và payload phản hồi.

---

## RunStatus

Đại diện cho trạng thái thực thi của một **Job** hoặc **lần chạy quy trình**.

| Giá trị     | Mô tả                                                                                    |
|-------------|------------------------------------------------------------------------------------------|
| `Pending`   | Job đã được tạo và đang chờ Agent nhận.                                                  |
| `Running`   | Job hiện đang được thực thi bởi Agent.                                                   |
| `Succeeded` | Job đã hoàn thành thành công mà không có lỗi.                                            |
| `Failed`    | Job đã kết thúc do ngoại lệ chưa được xử lý hoặc lỗi quy trình.                         |
| `Stopped`   | Job đã bị dừng thủ công bởi người dùng hoặc chính sách hệ thống trước khi hoàn thành.   |
| `Suspended` | Job đã tạm dừng và có thể tiếp tục sau.                                                  |
| `Faulted`   | Job đã gặp lỗi cơ sở hạ tầng nghiêm trọng (ví dụ: Agent bị ngắt kết nối).              |

**Ví dụ sử dụng trong phản hồi Job:**

```json
{
  "id": "job-001",
  "status": "Running",
  "startTime": "2026-04-22T09:00:00Z"
}
```

---

## AgentStatus

Đại diện cho trạng thái kết nối và khả dụng hiện tại của một **Agent**.

| Giá trị        | Mô tả                                                                                        |
|----------------|----------------------------------------------------------------------------------------------|
| `Connected`    | Agent đang trực tuyến và có thể nhận job mới.                                                |
| `Disconnected` | Agent đang ngoại tuyến hoặc không thể liên lạc với akaBot Center.                           |
| `Busy`         | Agent đang trực tuyến nhưng hiện đang thực thi một job và không thể nhận công việc mới.     |
| `Maintenance`  | Agent đã được quản trị viên đặt vào chế độ bảo trì.                                         |
| `Unresponsive` | Agent đã kết nối nhưng không gửi heartbeat trong khoảng thời gian dự kiến.                  |

**Ví dụ sử dụng trong phản hồi Agent:**

```json
{
  "id": "agent-007",
  "name": "BOT-PROD-01",
  "status": "Connected"
}
```

---

## TriggerType

Chỉ ra cách một lần thực thi Quy trình được khởi tạo.

| Giá trị     | Mô tả                                                                                                    |
|-------------|----------------------------------------------------------------------------------------------------------|
| `Scheduled` | Job được khởi động tự động bởi lịch trình dựa trên thời gian được xác định trong akaBot Center.         |
| `Manual`    | Job được khởi động thủ công bởi người dùng thông qua cổng Center hoặc CLI.                              |
| `API`       | Job được khởi động theo lập trình thông qua REST API (ví dụ: `POST /processes/{id}/start`).             |
| `Event`     | Job được kích hoạt bởi sự kiện hệ thống hoặc nghiệp vụ (ví dụ: tệp đến, thông báo hàng đợi).          |
| `QueueItem` | Job được khởi động để phản hồi một mục mới được thêm vào Queue được giám sát.                          |

**Ví dụ sử dụng trong phản hồi Job:**

```json
{
  "id": "job-042",
  "processId": "proc-010",
  "triggerType": "API",
  "status": "Succeeded"
}
```

---

## ProcessType

Xác định chế độ thực thi của một **Quy trình**, xác định xem có cần tương tác của con người hay không.

| Giá trị          | Mô tả                                                                                                          |
|------------------|----------------------------------------------------------------------------------------------------------------|
| `Attended`       | Quy trình chạy trên máy tính của người dùng và có thể yêu cầu tương tác của con người trong quá trình thực thi.|
| `Unattended`     | Quy trình chạy tự động trong nền mà không cần bất kỳ tương tác nào của người dùng.                           |
| `NonProduction`  | Quy trình được triển khai tới Agent không phải sản xuất để thử nghiệm hoặc gỡ lỗi.                           |
| `Testing`        | Quy trình được sử dụng độc quyền để kiểm thử tự động trong môi trường QA.                                     |

**Ví dụ sử dụng trong phản hồi Process:**

```json
{
  "id": "proc-010",
  "name": "InvoiceProcessor",
  "processType": "Unattended"
}
```

---

## JobPriority

Kiểm soát mức độ ưu tiên lập lịch của job khi nhiều job đang xếp hàng chờ cùng một Agent.

| Giá trị  | Mô tả                                                                 |
|----------|-----------------------------------------------------------------------|
| `Low`    | Job sẽ được lập lịch sau các job ưu tiên `Normal` và `High`.         |
| `Normal` | Mức độ ưu tiên mặc định cho tất cả các job.                          |
| `High`   | Job sẽ được lập lịch trước các job ưu tiên `Normal` và `Low`.        |

---

## LogLevel

Được sử dụng khi lọc hoặc truyền nhật ký thực thi robot từ API.

| Giá trị   | Mô tả                                                                      |
|-----------|----------------------------------------------------------------------------|
| `Verbose` | Đầu ra theo dõi chi tiết cao, dành cho việc gỡ lỗi.                        |
| `Debug`   | Thông tin chẩn đoán chi tiết hữu ích trong quá trình phát triển.           |
| `Info`    | Thông báo thông tin chung về tiến trình quy trình.                         |
| `Warning` | Chỉ ra sự cố tiềm ẩn không gây ra lỗi thực thi.                           |
| `Error`   | Lỗi có thể phục hồi được xử lý trong quy trình.                           |
| `Fatal`   | Lỗi không thể phục hồi khiến quy trình bị chấm dứt.                       |

**Ví dụ: lọc nhật ký theo cấp độ**

```
GET /api/v4/jobs/{id}/logs?level=Error
```
