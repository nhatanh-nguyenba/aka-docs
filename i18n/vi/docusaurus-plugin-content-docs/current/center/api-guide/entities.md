---
id: entities
title: Thực thể
sidebar_label: Thực thể
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Thực thể

Trang này mô tả các thực thể dữ liệu cốt lõi được trả về và chấp nhận bởi akaBot Center API. Hiểu cấu trúc của các thực thể này là điều cần thiết để xây dựng tích hợp và diễn giải phản hồi API.

Mỗi thực thể được trình bày với bảng tham chiếu trường theo sau là ví dụ biểu diễn JSON.

---

## Process (Quy trình)

Một **Process** đại diện cho một gói tự động hóa RPA đã được xuất bản lên akaBot Center và sẵn sàng được triển khai và thực thi bởi các Agent.

### Các trường

| Trường          | Kiểu     | Mô tả                                                                                            |
|-----------------|----------|--------------------------------------------------------------------------------------------------|
| `id`            | string   | Mã định danh duy nhất cho quy trình.                                                             |
| `name`          | string   | Tên hiển thị thân thiện với người dùng của quy trình.                                            |
| `packageName`   | string   | Tên gói NuGet của quy trình tự động hóa, như được xuất bản từ akaBot Studio.                    |
| `version`       | string   | Chuỗi phiên bản ngữ nghĩa của gói đã triển khai (ví dụ: `1.0.5`).                              |
| `description`   | string   | Mô tả ngắn về công việc của quy trình.                                                           |
| `processType`   | string   | Chế độ thực thi của quy trình. Xem [ProcessType](./enumerated-types#processtype).               |
| `groupId`       | string   | ID của Nhóm Agent được gán quy trình này.                                                        |
| `isActive`      | boolean  | Quy trình có đang được bật để thực thi hay không.                                               |
| `createdAt`     | datetime | Dấu thời gian ISO 8601 khi quy trình được đăng ký.                                              |
| `updatedAt`     | datetime | Dấu thời gian ISO 8601 của lần cập nhật cuối cùng đối với cấu hình quy trình.                   |

### Ví dụ

```json
{
  "id": "proc-010",
  "name": "InvoiceProcessor",
  "packageName": "AkaBot.Finance.InvoiceProcessor",
  "version": "2.3.1",
  "description": "Đọc hóa đơn nhà cung cấp từ thư mục dùng chung và nhập chúng vào hệ thống ERP.",
  "processType": "Unattended",
  "groupId": "grp-finance-01",
  "isActive": true,
  "createdAt": "2025-11-10T08:00:00Z",
  "updatedAt": "2026-03-15T14:22:00Z"
}
```

---

## Agent

Một **Agent** (còn được gọi là Robot) là một phiên bản runtime akaBot được cài đặt trên máy, thực thi các quy trình tự động hóa thay mặt cho akaBot Center.

### Các trường

| Trường        | Kiểu     | Mô tả                                                                                     |
|---------------|----------|-------------------------------------------------------------------------------------------|
| `id`          | string   | Mã định danh duy nhất cho agent.                                                          |
| `name`        | string   | Tên hiển thị của agent như được đăng ký trong akaBot Center.                              |
| `machineName` | string   | Tên hostname của máy nơi agent được cài đặt.                                              |
| `status`      | string   | Trạng thái kết nối hiện tại. Xem [AgentStatus](./enumerated-types#agentstatus).           |
| `groupId`     | string   | ID của Nhóm Agent mà agent này thuộc về.                                                  |
| `groupName`   | string   | Tên hiển thị của Nhóm Agent.                                                              |
| `username`    | string   | Tài khoản người dùng Windows/OS mà agent chạy dưới.                                       |
| `version`     | string   | Phiên bản đã cài đặt của runtime akaBot Agent.                                            |
| `lastSeenAt`  | datetime | Dấu thời gian ISO 8601 của heartbeat gần nhất của agent.                                  |
| `createdAt`   | datetime | Dấu thời gian ISO 8601 khi agent được đăng ký với Center.                                 |

### Ví dụ

```json
{
  "id": "agent-007",
  "name": "BOT-PROD-01",
  "machineName": "WIN-BOT-PROD-01",
  "status": "Connected",
  "groupId": "grp-finance-01",
  "groupName": "Bots Tài Chính",
  "username": "CORP\\svc_akabot",
  "version": "4.5.2",
  "lastSeenAt": "2026-04-22T09:45:00Z",
  "createdAt": "2025-08-01T09:00:00Z"
}
```

---

## Job

Một **Job** là một phiên thực thi đơn lẻ của một Process trên một Agent. Mỗi khi một quy trình được kích hoạt (thủ công, qua lịch trình hoặc qua API), một bản ghi Job được tạo ra.

### Các trường

| Trường         | Kiểu     | Mô tả                                                                                          |
|----------------|----------|------------------------------------------------------------------------------------------------|
| `id`           | string   | Mã định danh duy nhất cho job.                                                                 |
| `processId`    | string   | ID của Quy trình đang được thực thi.                                                           |
| `processName`  | string   | Tên hiển thị của Quy trình (đã được chuẩn hóa để tiện lợi).                                   |
| `agentId`      | string   | ID của Agent đang thực thi job.                                                                |
| `agentName`    | string   | Tên hiển thị của Agent (đã được chuẩn hóa để tiện lợi).                                       |
| `status`       | string   | Trạng thái thực thi hiện tại. Xem [RunStatus](./enumerated-types#runstatus).                   |
| `triggerType`  | string   | Cách job được khởi tạo. Xem [TriggerType](./enumerated-types#triggertype).                    |
| `priority`     | string   | Mức độ ưu tiên lập lịch. Xem [JobPriority](./enumerated-types#jobpriority).                   |
| `startTime`    | datetime | Dấu thời gian ISO 8601 khi job bắt đầu thực thi. `null` nếu vẫn đang chờ.                    |
| `endTime`      | datetime | Dấu thời gian ISO 8601 khi job kết thúc. `null` nếu vẫn đang chạy.                           |
| `durationMs`   | integer  | Tổng thời gian thực thi tính bằng mili giây. `null` nếu job chưa hoàn thành.                  |
| `inputArgs`    | object   | Bản đồ khóa-giá trị của các đối số đầu vào được truyền vào quy trình tại thời điểm khởi động. |
| `outputArgs`   | object   | Bản đồ khóa-giá trị của các đối số đầu ra được quy trình trả về khi hoàn thành.               |
| `errorMessage` | string   | Thông báo lỗi nếu `status` là `Failed` hoặc `Faulted`. Nếu không thì `null`.                  |
| `createdAt`    | datetime | Dấu thời gian ISO 8601 khi bản ghi job được tạo.                                              |

### Ví dụ

```json
{
  "id": "job-042",
  "processId": "proc-010",
  "processName": "InvoiceProcessor",
  "agentId": "agent-007",
  "agentName": "BOT-PROD-01",
  "status": "Succeeded",
  "triggerType": "Scheduled",
  "priority": "Normal",
  "startTime": "2026-04-22T02:00:00Z",
  "endTime": "2026-04-22T02:07:34Z",
  "durationMs": 454000,
  "inputArgs": {
    "folderPath": "\\\\nas01\\invoices\\incoming",
    "maxItems": 50
  },
  "outputArgs": {
    "processedCount": 47,
    "failedCount": 3
  },
  "errorMessage": null,
  "createdAt": "2026-04-22T01:59:58Z"
}
```

---

## Queue (Hàng đợi)

Một **Queue** là vùng chứa mục công việc được quản lý bởi akaBot Center. Các quy trình có thể đưa vào và lấy ra các mục dữ liệu có cấu trúc, cho phép xử lý khối lượng công việc phân tán có thể mở rộng.

### Các trường

| Trường             | Kiểu     | Mô tả                                                                                                        |
|--------------------|----------|--------------------------------------------------------------------------------------------------------------|
| `id`               | string   | Mã định danh duy nhất cho hàng đợi.                                                                          |
| `name`             | string   | Tên hiển thị của hàng đợi.                                                                                   |
| `description`      | string   | Mô tả loại mục công việc mà hàng đợi chứa.                                                                  |
| `maxRetries`       | integer  | Số lần tối đa một mục thất bại sẽ được tự động thử lại trước khi bị đánh dấu là `Abandoned`.                |
| `deadline`         | integer  | Giới hạn thời gian tính bằng giây để xử lý mỗi mục. `0` có nghĩa là không áp dụng thời hạn.               |
| `isActive`         | boolean  | Hàng đợi có đang chấp nhận mục mới hay không.                                                               |
| `pendingCount`     | integer  | Số lượng mục hiện đang ở trạng thái `New` (đang chờ).                                                       |
| `inProgressCount`  | integer  | Số lượng mục hiện đang được xử lý bởi Agent.                                                                |
| `succeededCount`   | integer  | Tổng số mục đã được xử lý thành công.                                                                        |
| `failedCount`      | integer  | Tổng số mục đã đạt mức thử lại tối đa mà không thành công.                                                  |
| `createdAt`        | datetime | Dấu thời gian ISO 8601 khi hàng đợi được tạo.                                                               |

### Ví dụ

```json
{
  "id": "queue-005",
  "name": "InvoiceWorkItems",
  "description": "Chứa các bản ghi hóa đơn nhà cung cấp riêng lẻ để bot InvoiceProcessor xử lý.",
  "maxRetries": 3,
  "deadline": 300,
  "isActive": true,
  "pendingCount": 128,
  "inProgressCount": 4,
  "succeededCount": 9847,
  "failedCount": 12,
  "createdAt": "2025-10-01T00:00:00Z"
}
```

---

## QueueItem (Mục hàng đợi)

Một **QueueItem** là một bản ghi công việc riêng lẻ được lưu trữ bên trong Queue.

### Các trường

| Trường          | Kiểu     | Mô tả                                                                                        |
|-----------------|----------|----------------------------------------------------------------------------------------------|
| `id`            | string   | Mã định danh duy nhất cho mục hàng đợi.                                                      |
| `queueId`       | string   | ID của Queue cha.                                                                             |
| `status`        | string   | Trạng thái xử lý mục: `New`, `InProgress`, `Succeeded`, `Failed`, `Abandoned`.              |
| `priority`      | string   | Mức độ ưu tiên lập lịch. Xem [JobPriority](./enumerated-types#jobpriority).                 |
| `reference`     | string   | Khóa nghiệp vụ tùy chọn để khử trùng lặp hoặc theo dõi (ví dụ: số hóa đơn).               |
| `specificData`  | object   | Payload của mục công việc dưới dạng đối tượng JSON tùy ý.                                   |
| `retryCount`    | integer  | Số lần mục này đã được thử lại.                                                              |
| `dueDate`       | datetime | Thời hạn tùy chọn mà mục phải được xử lý trước.                                             |
| `createdAt`     | datetime | Dấu thời gian ISO 8601 khi mục được đưa vào hàng đợi.                                       |

### Ví dụ

```json
{
  "id": "qitem-8821",
  "queueId": "queue-005",
  "status": "New",
  "priority": "High",
  "reference": "INV-2026-00447",
  "specificData": {
    "vendorId": "V-1092",
    "invoiceNumber": "INV-2026-00447",
    "amount": 12450.00,
    "currency": "USD",
    "dueDate": "2026-05-01"
  },
  "retryCount": 0,
  "dueDate": "2026-04-23T00:00:00Z",
  "createdAt": "2026-04-22T08:15:00Z"
}
```
