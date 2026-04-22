---
id: api-resources
title: Tài nguyên API
sidebar_label: Tài nguyên API
sidebar_position: 4
displayed_sidebar: centerSidebar
---

# Tài nguyên API

Trang này ghi lại các endpoint REST chính được akaBot Center cung cấp, được tổ chức theo tài nguyên. Tất cả các endpoint đều có tiền tố URL cơ sở:

```
https://<center-host>/api/v4
```

Tất cả yêu cầu đều yêu cầu header `Authorization: Bearer <token>`. Xem [Giới thiệu](./introduction) để biết chi tiết xác thực.

---

## Processes (Quy trình)

Các endpoint để quản lý các quy trình tự động hóa được đăng ký trong akaBot Center.

---

### GET /processes

Lấy danh sách phân trang tất cả các quy trình mà người dùng đã xác thực có thể truy cập.

**Tham số truy vấn**

| Tham số      | Kiểu    | Bắt buộc | Mô tả                                                       |
|--------------|---------|----------|-------------------------------------------------------------|
| `page`       | integer | Không    | Số trang (mặc định: `1`).                                   |
| `limit`      | integer | Không    | Mục mỗi trang (mặc định: `20`, tối đa: `100`).              |
| `groupId`    | string  | Không    | Lọc theo ID Nhóm Agent.                                     |
| `isActive`   | boolean | Không    | Lọc theo trạng thái hoạt động/không hoạt động.              |
| `searchName` | string  | Không    | Tìm kiếm không phân biệt hoa thường theo tên quy trình.     |

**Ví dụ yêu cầu:**

```
GET /api/v4/processes?isActive=true&limit=5
Authorization: Bearer <token>
```

**Ví dụ phản hồi:**

```json
{
  "data": [
    {
      "id": "proc-010",
      "name": "InvoiceProcessor",
      "packageName": "AkaBot.Finance.InvoiceProcessor",
      "version": "2.3.1",
      "processType": "Unattended",
      "isActive": true,
      "groupId": "grp-finance-01"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 5,
    "totalItems": 23,
    "totalPages": 5
  }
}
```

---

### GET /processes/\{id\}

Lấy toàn bộ chi tiết của một quy trình đơn lẻ theo ID của nó.

**Tham số đường dẫn**

| Tham số | Kiểu   | Mô tả                              |
|---------|--------|------------------------------------|
| `id`    | string | ID duy nhất của quy trình.         |

**Ví dụ yêu cầu:**

```
GET /api/v4/processes/proc-010
Authorization: Bearer <token>
```

**Ví dụ phản hồi:**

```json
{
  "id": "proc-010",
  "name": "InvoiceProcessor",
  "packageName": "AkaBot.Finance.InvoiceProcessor",
  "version": "2.3.1",
  "description": "Đọc hóa đơn nhà cung cấp từ thư mục dùng chung và nhập chúng vào hệ thống ERP.",
  "processType": "Unattended",
  "groupId": "grp-finance-01",
  "groupName": "Bots Tài Chính",
  "isActive": true,
  "createdAt": "2025-11-10T08:00:00Z",
  "updatedAt": "2026-03-15T14:22:00Z"
}
```

---

### POST /processes/\{id\}/start

Kích hoạt thực thi ngay lập tức một quy trình trên một hoặc nhiều Agent khả dụng trong nhóm được gán. Trả về đối tượng Job đã tạo.

**Tham số đường dẫn**

| Tham số | Kiểu   | Mô tả                              |
|---------|--------|------------------------------------|
| `id`    | string | ID duy nhất của quy trình.         |

**Nội dung yêu cầu**

| Trường        | Kiểu    | Bắt buộc | Mô tả                                                                      |
|---------------|---------|----------|----------------------------------------------------------------------------|
| `agentId`     | string  | Không    | Gắn job vào một Agent cụ thể. Nếu bỏ qua, Center sẽ chọn tự động.        |
| `priority`    | string  | Không    | `Low`, `Normal` (mặc định), hoặc `High`.                                   |
| `inputArgs`   | object  | Không    | Bản đồ khóa-giá trị của các đối số đầu vào để truyền vào quy trình.       |
| `callbackUrl` | string  | Không    | URL webhook để thông báo khi job hoàn thành.                               |

**Ví dụ yêu cầu:**

```
POST /api/v4/processes/proc-010/start
Authorization: Bearer <token>
Content-Type: application/json

{
  "priority": "High",
  "inputArgs": {
    "folderPath": "\\\\nas01\\invoices\\incoming",
    "maxItems": 100
  },
  "callbackUrl": "https://my-app.example.com/hooks/akabot-job-done"
}
```

**Ví dụ phản hồi (`201 Created`):**

```json
{
  "id": "job-099",
  "processId": "proc-010",
  "processName": "InvoiceProcessor",
  "agentId": "agent-007",
  "agentName": "BOT-PROD-01",
  "status": "Pending",
  "triggerType": "API",
  "priority": "High",
  "startTime": null,
  "endTime": null,
  "createdAt": "2026-04-22T10:00:00Z"
}
```

---

## Jobs (Công việc)

Các endpoint để giám sát và quản lý việc thực thi job.

---

### GET /jobs

Lấy danh sách phân trang các job với các bộ lọc tùy chọn.

**Tham số truy vấn**

| Tham số     | Kiểu     | Bắt buộc | Mô tả                                                               |
|-------------|----------|----------|---------------------------------------------------------------------|
| `page`      | integer  | Không    | Số trang (mặc định: `1`).                                           |
| `limit`     | integer  | Không    | Mục mỗi trang (mặc định: `20`, tối đa: `100`).                      |
| `processId` | string   | Không    | Lọc các job thuộc về một quy trình cụ thể.                          |
| `agentId`   | string   | Không    | Lọc các job được thực thi bởi một agent cụ thể.                     |
| `status`    | string   | Không    | Lọc theo RunStatus (ví dụ: `Running`, `Failed`).                    |
| `from`      | datetime | Không    | Giới hạn dưới ISO 8601 cho `createdAt`.                             |
| `to`        | datetime | Không    | Giới hạn trên ISO 8601 cho `createdAt`.                             |

**Ví dụ yêu cầu:**

```
GET /api/v4/jobs?status=Failed&from=2026-04-01T00:00:00Z
Authorization: Bearer <token>
```

**Ví dụ phản hồi:**

```json
{
  "data": [
    {
      "id": "job-088",
      "processId": "proc-010",
      "processName": "InvoiceProcessor",
      "agentId": "agent-007",
      "status": "Failed",
      "triggerType": "Scheduled",
      "startTime": "2026-04-21T02:00:00Z",
      "endTime": "2026-04-21T02:01:05Z",
      "errorMessage": "NullReferenceException trong hoạt động ReadInvoice."
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalItems": 3,
    "totalPages": 1
  }
}
```

---

### GET /jobs/\{id\}

Lấy toàn bộ chi tiết của một job đơn lẻ, bao gồm đối số đầu vào/đầu ra và thông tin lỗi.

**Tham số đường dẫn**

| Tham số | Kiểu   | Mô tả                         |
|---------|--------|-------------------------------|
| `id`    | string | ID duy nhất của job.          |

**Ví dụ yêu cầu:**

```
GET /api/v4/jobs/job-042
Authorization: Bearer <token>
```

**Ví dụ phản hồi:**

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

### DELETE /jobs/\{id\}

Dừng một job hiện đang ở trạng thái `Pending` hoặc `Running`. Job chuyển sang trạng thái `Stopped`.

**Tham số đường dẫn**

| Tham số | Kiểu   | Mô tả                         |
|---------|--------|-------------------------------|
| `id`    | string | ID duy nhất của job.          |

**Ví dụ yêu cầu:**

```
DELETE /api/v4/jobs/job-099
Authorization: Bearer <token>
```

**Ví dụ phản hồi (`200 OK`):**

```json
{
  "id": "job-099",
  "status": "Stopped",
  "endTime": "2026-04-22T10:05:12Z"
}
```

> **Lưu ý:** Các job có trạng thái `Succeeded`, `Failed`, hoặc `Stopped` không thể dừng lại. Cố gắng làm như vậy sẽ trả về `409 Conflict`.

---

## Agents

Các endpoint để truy vấn trạng thái và cấu hình Agent.

---

### GET /agents

Lấy danh sách phân trang tất cả các agent được đăng ký trong akaBot Center.

**Tham số truy vấn**

| Tham số   | Kiểu    | Bắt buộc | Mô tả                                                        |
|-----------|---------|----------|--------------------------------------------------------------|
| `page`    | integer | Không    | Số trang (mặc định: `1`).                                    |
| `limit`   | integer | Không    | Mục mỗi trang (mặc định: `20`, tối đa: `100`).               |
| `groupId` | string  | Không    | Lọc agent theo ID Nhóm Agent.                                |
| `status`  | string  | Không    | Lọc theo AgentStatus (ví dụ: `Connected`, `Busy`).           |

**Ví dụ yêu cầu:**

```
GET /api/v4/agents?status=Connected
Authorization: Bearer <token>
```

**Ví dụ phản hồi:**

```json
{
  "data": [
    {
      "id": "agent-007",
      "name": "BOT-PROD-01",
      "machineName": "WIN-BOT-PROD-01",
      "status": "Connected",
      "groupId": "grp-finance-01",
      "groupName": "Bots Tài Chính",
      "version": "4.5.2",
      "lastSeenAt": "2026-04-22T09:45:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalItems": 6,
    "totalPages": 1
  }
}
```

---

### GET /agents/\{id\}

Lấy toàn bộ chi tiết của một agent đơn lẻ.

**Tham số đường dẫn**

| Tham số | Kiểu   | Mô tả                          |
|---------|--------|--------------------------------|
| `id`    | string | ID duy nhất của agent.         |

**Ví dụ yêu cầu:**

```
GET /api/v4/agents/agent-007
Authorization: Bearer <token>
```

**Ví dụ phản hồi:**

```json
{
  "id": "agent-007",
  "name": "BOT-PROD-01",
  "machineName": "WIN-BOT-PROD-01",
  "status": "Busy",
  "groupId": "grp-finance-01",
  "groupName": "Bots Tài Chính",
  "username": "CORP\\svc_akabot",
  "version": "4.5.2",
  "lastSeenAt": "2026-04-22T09:45:00Z",
  "createdAt": "2025-08-01T09:00:00Z"
}
```

---

## Queues (Hàng đợi)

Các endpoint để quản lý hàng đợi và đưa mục công việc vào hàng đợi.

---

### GET /queues

Lấy danh sách phân trang tất cả các hàng đợi.

**Tham số truy vấn**

| Tham số    | Kiểu    | Bắt buộc | Mô tả                                               |
|------------|---------|----------|-----------------------------------------------------|
| `page`     | integer | Không    | Số trang (mặc định: `1`).                           |
| `limit`    | integer | Không    | Mục mỗi trang (mặc định: `20`, tối đa: `100`).      |
| `isActive` | boolean | Không    | Lọc theo hàng đợi hoạt động/không hoạt động.        |

**Ví dụ yêu cầu:**

```
GET /api/v4/queues?isActive=true
Authorization: Bearer <token>
```

**Ví dụ phản hồi:**

```json
{
  "data": [
    {
      "id": "queue-005",
      "name": "InvoiceWorkItems",
      "description": "Chứa các bản ghi hóa đơn nhà cung cấp riêng lẻ.",
      "maxRetries": 3,
      "deadline": 300,
      "isActive": true,
      "pendingCount": 128,
      "inProgressCount": 4,
      "succeededCount": 9847,
      "failedCount": 12
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalItems": 4,
    "totalPages": 1
  }
}
```

---

### POST /queues/\{id\}/items

Thêm một hoặc nhiều mục công việc mới vào hàng đợi.

**Tham số đường dẫn**

| Tham số | Kiểu   | Mô tả                              |
|---------|--------|------------------------------------|
| `id`    | string | ID duy nhất của hàng đợi.          |

**Nội dung yêu cầu**

Một mảng các đối tượng mục hàng đợi với các trường sau:

| Trường         | Kiểu     | Bắt buộc | Mô tả                                                                               |
|----------------|----------|----------|-------------------------------------------------------------------------------------|
| `reference`    | string   | Không    | Khóa nghiệp vụ để khử trùng lặp (ví dụ: số hóa đơn, ID đơn hàng).                |
| `priority`     | string   | Không    | `Low`, `Normal` (mặc định), hoặc `High`.                                            |
| `dueDate`      | datetime | Không    | Thời hạn ISO 8601 để xử lý mục này.                                                |
| `specificData` | object   | Có       | Payload của mục công việc dưới dạng đối tượng JSON tùy ý.                          |

**Ví dụ yêu cầu:**

```
POST /api/v4/queues/queue-005/items
Authorization: Bearer <token>
Content-Type: application/json

[
  {
    "reference": "INV-2026-00448",
    "priority": "Normal",
    "dueDate": "2026-04-23T00:00:00Z",
    "specificData": {
      "vendorId": "V-2201",
      "invoiceNumber": "INV-2026-00448",
      "amount": 8750.00,
      "currency": "USD"
    }
  },
  {
    "reference": "INV-2026-00449",
    "priority": "High",
    "specificData": {
      "vendorId": "V-0055",
      "invoiceNumber": "INV-2026-00449",
      "amount": 230000.00,
      "currency": "EUR"
    }
  }
]
```

**Ví dụ phản hồi (`201 Created`):**

```json
{
  "created": 2,
  "items": [
    {
      "id": "qitem-8900",
      "queueId": "queue-005",
      "reference": "INV-2026-00448",
      "status": "New",
      "priority": "Normal",
      "createdAt": "2026-04-22T10:10:00Z"
    },
    {
      "id": "qitem-8901",
      "queueId": "queue-005",
      "reference": "INV-2026-00449",
      "status": "New",
      "priority": "High",
      "createdAt": "2026-04-22T10:10:00Z"
    }
  ]
}
```
