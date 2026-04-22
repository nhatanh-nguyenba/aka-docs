---
id: enumerated-types
title: Enumerated Types
sidebar_label: Enumerated Types
sidebar_position: 2
displayed_sidebar: centerSidebar
---

# Enumerated Types

Enumerated types (enums) are fixed sets of named constant values used throughout the akaBot Center API. When a field accepts or returns an enum, the API uses the **string** representation of the constant (e.g., `"Running"` rather than an integer code).

This page documents all enums you will encounter in request parameters and response payloads.

---

## RunStatus

Represents the execution state of a **Job** or **Process run**.

| Value       | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `Pending`   | The job has been created and is waiting to be picked up by an Agent.        |
| `Running`   | The job is currently being executed by an Agent.                            |
| `Succeeded` | The job completed successfully without errors.                              |
| `Failed`    | The job terminated due to an unhandled exception or process error.          |
| `Stopped`   | The job was manually stopped by a user or system policy before completion.  |
| `Suspended` | The job has been temporarily paused and can be resumed later.              |
| `Faulted`   | The job encountered a fatal infrastructure error (e.g., Agent disconnected).|

**Example usage in a Job response:**

```json
{
  "id": "job-001",
  "status": "Running",
  "startTime": "2026-04-22T09:00:00Z"
}
```

---

## AgentStatus

Represents the current connectivity and availability state of an **Agent**.

| Value          | Description                                                                       |
|----------------|-----------------------------------------------------------------------------------|
| `Connected`    | The Agent is online and able to accept new jobs.                                  |
| `Disconnected` | The Agent is offline or unreachable by akaBot Center.                             |
| `Busy`         | The Agent is online but currently executing a job and cannot accept new work.     |
| `Maintenance`  | The Agent has been placed in maintenance mode by an administrator.                |
| `Unresponsive` | The Agent is connected but has not sent a heartbeat within the expected interval. |

**Example usage in an Agent response:**

```json
{
  "id": "agent-007",
  "name": "BOT-PROD-01",
  "status": "Connected"
}
```

---

## TriggerType

Indicates how a Process execution was initiated.

| Value       | Description                                                                              |
|-------------|------------------------------------------------------------------------------------------|
| `Scheduled` | The job was started automatically by a time-based schedule defined in akaBot Center.     |
| `Manual`    | The job was started manually by a user through the Center portal or CLI.                 |
| `API`       | The job was started programmatically via the REST API (e.g., `POST /processes/{id}/start`). |
| `Event`     | The job was triggered by a system or business event (e.g., file arrival, queue message). |
| `QueueItem` | The job was started in response to a new item being added to a monitored Queue.          |

**Example usage in a Job response:**

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

Defines the execution mode of a **Process**, determining whether human interaction is required.

| Value          | Description                                                                                          |
|----------------|------------------------------------------------------------------------------------------------------|
| `Attended`     | The process runs on a user's desktop and may require human interaction during execution.             |
| `Unattended`   | The process runs autonomously in the background without any user interaction.                        |
| `NonProduction`| The process is deployed to a non-production Agent for testing or debugging purposes.                |
| `Testing`      | The process is used exclusively for automated testing in a QA environment.                           |

**Example usage in a Process response:**

```json
{
  "id": "proc-010",
  "name": "InvoiceProcessor",
  "processType": "Unattended"
}
```

---

## JobPriority

Controls the scheduling priority of a job when multiple jobs are queued for the same Agent.

| Value    | Description                                                     |
|----------|-----------------------------------------------------------------|
| `Low`    | The job will be scheduled after `Normal` and `High` priority jobs. |
| `Normal` | The default priority for all jobs.                              |
| `High`   | The job will be scheduled before `Normal` and `Low` priority jobs. |

---

## LogLevel

Used when filtering or streaming robot execution logs from the API.

| Value     | Description                                                          |
|-----------|----------------------------------------------------------------------|
| `Verbose` | Highly detailed trace-level output, intended for debugging.          |
| `Debug`   | Detailed diagnostic information useful during development.           |
| `Info`    | General informational messages about process progress.               |
| `Warning` | Indicates a potential issue that did not cause execution to fail.    |
| `Error`   | A recoverable error that was handled within the process.             |
| `Fatal`   | An unrecoverable error that caused the process to terminate.         |

**Example: filtering logs by level**

```
GET /api/v4/jobs/{id}/logs?level=Error
```
