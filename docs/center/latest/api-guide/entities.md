---
id: entities
title: Entities
sidebar_label: Entities
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Entities

This page describes the core data entities returned and accepted by the akaBot Center API. Understanding the structure of these entities is essential for building integrations and interpreting API responses.

Each entity is presented with a field reference table followed by an example JSON representation.

---

## Process

A **Process** represents an RPA automation package that has been published to akaBot Center and is ready to be deployed and executed by Agents.

### Fields

| Field           | Type     | Description                                                                          |
|-----------------|----------|--------------------------------------------------------------------------------------|
| `id`            | string   | Unique identifier for the process.                                                   |
| `name`          | string   | Human-readable display name of the process.                                          |
| `packageName`   | string   | The NuGet package name of the automation, as published from akaBot Studio.           |
| `version`       | string   | The semantic version string of the deployed package (e.g., `1.0.5`).                |
| `description`   | string   | A short description of what the process does.                                        |
| `processType`   | string   | The execution mode of the process. See [ProcessType](./enumerated-types#processtype).|
| `groupId`       | string   | The ID of the Agent Group this process is assigned to.                               |
| `isActive`      | boolean  | Whether the process is currently enabled for execution.                              |
| `createdAt`     | datetime | ISO 8601 timestamp when the process was registered.                                  |
| `updatedAt`     | datetime | ISO 8601 timestamp of the last update to the process configuration.                  |

### Example

```json
{
  "id": "proc-010",
  "name": "InvoiceProcessor",
  "packageName": "AkaBot.Finance.InvoiceProcessor",
  "version": "2.3.1",
  "description": "Reads vendor invoices from a shared folder and enters them into the ERP system.",
  "processType": "Unattended",
  "groupId": "grp-finance-01",
  "isActive": true,
  "createdAt": "2025-11-10T08:00:00Z",
  "updatedAt": "2026-03-15T14:22:00Z"
}
```

---

## Agent

An **Agent** (also called a Robot) is an akaBot runtime instance installed on a machine that executes automation processes on behalf of akaBot Center.

### Fields

| Field         | Type     | Description                                                                        |
|---------------|----------|------------------------------------------------------------------------------------|
| `id`          | string   | Unique identifier for the agent.                                                   |
| `name`        | string   | The display name of the agent as registered in akaBot Center.                      |
| `machineName` | string   | The hostname of the machine where the agent is installed.                          |
| `status`      | string   | Current connectivity state. See [AgentStatus](./enumerated-types#agentstatus).     |
| `groupId`     | string   | The ID of the Agent Group this agent belongs to.                                   |
| `groupName`   | string   | The display name of the Agent Group.                                               |
| `username`    | string   | The Windows/OS user account the agent runs under.                                  |
| `version`     | string   | The installed version of the akaBot Agent runtime.                                 |
| `lastSeenAt`  | datetime | ISO 8601 timestamp of the agent's most recent heartbeat.                           |
| `createdAt`   | datetime | ISO 8601 timestamp when the agent was registered with Center.                      |

### Example

```json
{
  "id": "agent-007",
  "name": "BOT-PROD-01",
  "machineName": "WIN-BOT-PROD-01",
  "status": "Connected",
  "groupId": "grp-finance-01",
  "groupName": "Finance Bots",
  "username": "CORP\\svc_akabot",
  "version": "4.5.2",
  "lastSeenAt": "2026-04-22T09:45:00Z",
  "createdAt": "2025-08-01T09:00:00Z"
}
```

---

## Job

A **Job** is a single execution instance of a Process on an Agent. Every time a process is triggered (manually, via schedule, or via API), a Job record is created.

### Fields

| Field          | Type     | Description                                                                           |
|----------------|----------|---------------------------------------------------------------------------------------|
| `id`           | string   | Unique identifier for the job.                                                        |
| `processId`    | string   | The ID of the Process being executed.                                                 |
| `processName`  | string   | The display name of the Process (denormalized for convenience).                       |
| `agentId`      | string   | The ID of the Agent executing the job.                                                |
| `agentName`    | string   | The display name of the Agent (denormalized for convenience).                         |
| `status`       | string   | Current execution state. See [RunStatus](./enumerated-types#runstatus).               |
| `triggerType`  | string   | How the job was initiated. See [TriggerType](./enumerated-types#triggertype).         |
| `priority`     | string   | Scheduling priority. See [JobPriority](./enumerated-types#jobpriority).               |
| `startTime`    | datetime | ISO 8601 timestamp when the job began executing. `null` if still pending.             |
| `endTime`      | datetime | ISO 8601 timestamp when the job finished. `null` if still running.                   |
| `durationMs`   | integer  | Total execution duration in milliseconds. `null` if the job has not completed.        |
| `inputArgs`    | object   | Key-value map of input arguments passed to the process at start time.                 |
| `outputArgs`   | object   | Key-value map of output arguments returned by the process upon completion.            |
| `errorMessage` | string   | Error message if `status` is `Failed` or `Faulted`. Otherwise `null`.                |
| `createdAt`    | datetime | ISO 8601 timestamp when the job record was created.                                   |

### Example

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

## Queue

A **Queue** is a work-item container managed by akaBot Center. Processes can enqueue and dequeue structured data items, enabling scalable, distributed workload processing.

### Fields

| Field              | Type     | Description                                                                              |
|--------------------|----------|------------------------------------------------------------------------------------------|
| `id`               | string   | Unique identifier for the queue.                                                         |
| `name`             | string   | The display name of the queue.                                                           |
| `description`      | string   | A description of what kind of work items the queue holds.                                |
| `maxRetries`       | integer  | Maximum number of times a failed item will be automatically retried before being marked as `Abandoned`. |
| `deadline`         | integer  | Time limit in seconds for processing each item. `0` means no deadline enforced.          |
| `isActive`         | boolean  | Whether the queue is accepting new items.                                                |
| `pendingCount`     | integer  | Number of items currently in `New` (pending) state.                                     |
| `inProgressCount`  | integer  | Number of items currently being processed by an Agent.                                  |
| `succeededCount`   | integer  | Total number of items that have been successfully processed.                             |
| `failedCount`      | integer  | Total number of items that reached max retries without success.                          |
| `createdAt`        | datetime | ISO 8601 timestamp when the queue was created.                                           |

### Example

```json
{
  "id": "queue-005",
  "name": "InvoiceWorkItems",
  "description": "Holds individual vendor invoice records to be processed by the InvoiceProcessor bot.",
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

## QueueItem

A **QueueItem** is an individual work record stored inside a Queue.

### Fields

| Field           | Type     | Description                                                                           |
|-----------------|----------|---------------------------------------------------------------------------------------|
| `id`            | string   | Unique identifier for the queue item.                                                 |
| `queueId`       | string   | The ID of the parent Queue.                                                           |
| `status`        | string   | Item processing state: `New`, `InProgress`, `Succeeded`, `Failed`, `Abandoned`.      |
| `priority`      | string   | Scheduling priority. See [JobPriority](./enumerated-types#jobpriority).               |
| `reference`     | string   | An optional business key for deduplication or tracking (e.g., invoice number).       |
| `specificData`  | object   | The payload of the work item as an arbitrary JSON object.                             |
| `retryCount`    | integer  | Number of times this item has been retried.                                           |
| `dueDate`       | datetime | Optional deadline by which the item must be processed.                                |
| `createdAt`     | datetime | ISO 8601 timestamp when the item was enqueued.                                        |

### Example

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
