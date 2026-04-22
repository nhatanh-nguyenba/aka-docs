---
id: api-resources
title: API Resources
sidebar_label: API Resources
sidebar_position: 4
displayed_sidebar: centerSidebar
---

# API Resources

This page documents the key REST endpoints exposed by akaBot Center, organized by resource. All endpoints are prefixed with the base URL:

```
https://<center-host>/api/v4
```

All requests require the `Authorization: Bearer <token>` header. See [Introduction](./introduction) for authentication details.

---

## Processes

Endpoints for managing automation processes registered in akaBot Center.

---

### GET /processes

Retrieve a paginated list of all processes accessible to the authenticated user.

**Query Parameters**

| Parameter    | Type    | Required | Description                                        |
|--------------|---------|----------|----------------------------------------------------|
| `page`       | integer | No       | Page number (default: `1`).                        |
| `limit`      | integer | No       | Items per page (default: `20`, max: `100`).        |
| `groupId`    | string  | No       | Filter by Agent Group ID.                          |
| `isActive`   | boolean | No       | Filter by active/inactive status.                  |
| `searchName` | string  | No       | Case-insensitive substring match on process name.  |

**Example request:**

```
GET /api/v4/processes?isActive=true&limit=5
Authorization: Bearer <token>
```

**Example response:**

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

Retrieve the full details of a single process by its ID.

**Path Parameters**

| Parameter | Type   | Description                      |
|-----------|--------|----------------------------------|
| `id`      | string | The unique ID of the process.    |

**Example request:**

```
GET /api/v4/processes/proc-010
Authorization: Bearer <token>
```

**Example response:**

```json
{
  "id": "proc-010",
  "name": "InvoiceProcessor",
  "packageName": "AkaBot.Finance.InvoiceProcessor",
  "version": "2.3.1",
  "description": "Reads vendor invoices from a shared folder and enters them into the ERP system.",
  "processType": "Unattended",
  "groupId": "grp-finance-01",
  "groupName": "Finance Bots",
  "isActive": true,
  "createdAt": "2025-11-10T08:00:00Z",
  "updatedAt": "2026-03-15T14:22:00Z"
}
```

---

### POST /processes/\{id\}/start

Trigger an immediate execution of a process on one or more available Agents in the assigned group. Returns the created Job object(s).

**Path Parameters**

| Parameter | Type   | Description                      |
|-----------|--------|----------------------------------|
| `id`      | string | The unique ID of the process.    |

**Request Body**

| Field         | Type    | Required | Description                                                         |
|---------------|---------|----------|---------------------------------------------------------------------|
| `agentId`     | string  | No       | Pin the job to a specific Agent. If omitted, Center selects one automatically. |
| `priority`    | string  | No       | `Low`, `Normal` (default), or `High`.                               |
| `inputArgs`   | object  | No       | Key-value map of input arguments to pass to the process.            |
| `callbackUrl` | string  | No       | Webhook URL to notify when the job completes.                       |

**Example request:**

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

**Example response (`201 Created`):**

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

## Jobs

Endpoints for monitoring and managing job executions.

---

### GET /jobs

Retrieve a paginated list of jobs with optional filters.

**Query Parameters**

| Parameter   | Type    | Required | Description                                                      |
|-------------|---------|----------|------------------------------------------------------------------|
| `page`      | integer | No       | Page number (default: `1`).                                      |
| `limit`     | integer | No       | Items per page (default: `20`, max: `100`).                      |
| `processId` | string  | No       | Filter jobs belonging to a specific process.                     |
| `agentId`   | string  | No       | Filter jobs executed by a specific agent.                        |
| `status`    | string  | No       | Filter by RunStatus (e.g., `Running`, `Failed`).                 |
| `from`      | datetime| No       | ISO 8601 lower bound for `createdAt`.                            |
| `to`        | datetime| No       | ISO 8601 upper bound for `createdAt`.                            |

**Example request:**

```
GET /api/v4/jobs?status=Failed&from=2026-04-01T00:00:00Z
Authorization: Bearer <token>
```

**Example response:**

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
      "errorMessage": "NullReferenceException in ReadInvoice activity."
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

Retrieve the full details of a single job, including input/output arguments and error information.

**Path Parameters**

| Parameter | Type   | Description                   |
|-----------|--------|-------------------------------|
| `id`      | string | The unique ID of the job.     |

**Example request:**

```
GET /api/v4/jobs/job-042
Authorization: Bearer <token>
```

**Example response:**

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

Stop a job that is currently in `Pending` or `Running` state. The job transitions to `Stopped` status.

**Path Parameters**

| Parameter | Type   | Description                   |
|-----------|--------|-------------------------------|
| `id`      | string | The unique ID of the job.     |

**Example request:**

```
DELETE /api/v4/jobs/job-099
Authorization: Bearer <token>
```

**Example response (`200 OK`):**

```json
{
  "id": "job-099",
  "status": "Stopped",
  "endTime": "2026-04-22T10:05:12Z"
}
```

> **Note:** Jobs with status `Succeeded`, `Failed`, or `Stopped` cannot be stopped again. Attempting to do so returns `409 Conflict`.

---

## Agents

Endpoints for querying Agent status and configuration.

---

### GET /agents

Retrieve a paginated list of all agents registered in akaBot Center.

**Query Parameters**

| Parameter  | Type    | Required | Description                                             |
|------------|---------|----------|---------------------------------------------------------|
| `page`     | integer | No       | Page number (default: `1`).                             |
| `limit`    | integer | No       | Items per page (default: `20`, max: `100`).             |
| `groupId`  | string  | No       | Filter agents by Agent Group ID.                        |
| `status`   | string  | No       | Filter by AgentStatus (e.g., `Connected`, `Busy`).      |

**Example request:**

```
GET /api/v4/agents?status=Connected
Authorization: Bearer <token>
```

**Example response:**

```json
{
  "data": [
    {
      "id": "agent-007",
      "name": "BOT-PROD-01",
      "machineName": "WIN-BOT-PROD-01",
      "status": "Connected",
      "groupId": "grp-finance-01",
      "groupName": "Finance Bots",
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

Retrieve the full details of a single agent.

**Path Parameters**

| Parameter | Type   | Description                    |
|-----------|--------|--------------------------------|
| `id`      | string | The unique ID of the agent.    |

**Example request:**

```
GET /api/v4/agents/agent-007
Authorization: Bearer <token>
```

**Example response:**

```json
{
  "id": "agent-007",
  "name": "BOT-PROD-01",
  "machineName": "WIN-BOT-PROD-01",
  "status": "Busy",
  "groupId": "grp-finance-01",
  "groupName": "Finance Bots",
  "username": "CORP\\svc_akabot",
  "version": "4.5.2",
  "lastSeenAt": "2026-04-22T09:45:00Z",
  "createdAt": "2025-08-01T09:00:00Z"
}
```

---

## Queues

Endpoints for managing queues and enqueuing work items.

---

### GET /queues

Retrieve a paginated list of all queues.

**Query Parameters**

| Parameter  | Type    | Required | Description                                          |
|------------|---------|----------|------------------------------------------------------|
| `page`     | integer | No       | Page number (default: `1`).                          |
| `limit`    | integer | No       | Items per page (default: `20`, max: `100`).          |
| `isActive` | boolean | No       | Filter by active/inactive queues.                    |

**Example request:**

```
GET /api/v4/queues?isActive=true
Authorization: Bearer <token>
```

**Example response:**

```json
{
  "data": [
    {
      "id": "queue-005",
      "name": "InvoiceWorkItems",
      "description": "Holds individual vendor invoice records.",
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

Add one or more new work items to a queue.

**Path Parameters**

| Parameter | Type   | Description                    |
|-----------|--------|--------------------------------|
| `id`      | string | The unique ID of the queue.    |

**Request Body**

An array of queue item objects with the following fields:

| Field          | Type     | Required | Description                                                                  |
|----------------|----------|----------|------------------------------------------------------------------------------|
| `reference`    | string   | No       | A business key for deduplication (e.g., invoice number, order ID).           |
| `priority`     | string   | No       | `Low`, `Normal` (default), or `High`.                                        |
| `dueDate`      | datetime | No       | ISO 8601 deadline for processing this item.                                  |
| `specificData` | object   | Yes      | The work item payload as an arbitrary JSON object.                           |

**Example request:**

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

**Example response (`201 Created`):**

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
