---
id: task
title: Task
sidebar_label: Task
sidebar_position: 1
displayed_sidebar: centerSidebar
---

A Task in akaBot Center represents a single execution instance of a workflow — the record of one specific run of an automated process on an agent. When a workflow is triggered (manually, by schedule, or via a trigger), the platform creates a Task and assigns it to an available agent for execution. Each Task captures the full execution context including which workflow and package version were used, which agent executed it, the start and end time, final status, and any output logs or error details.

The Task list view in akaBot Center provides operators with a real-time feed of all automation activity across the environment. Operators can filter tasks by status, workflow, agent, date range, or user who triggered the execution. This allows for rapid triage when something goes wrong — for example, filtering for all Failed tasks in the last hour to quickly identify a system-wide issue vs. an isolated workflow problem.

Clicking into an individual Task record reveals the full execution log, showing each step the workflow completed along with timestamps and any variable values or error messages captured at each step. This detailed logging is critical for debugging workflow issues in production and for providing audit evidence of what automation actions were performed and when.

## Task Statuses

| Status | Description |
|---|---|
| Pending | Task has been created but not yet picked up by an agent |
| Running | Agent is actively executing the workflow |
| Successful | Workflow completed all steps without errors |
| Failed | Workflow encountered an unhandled error and stopped |
| Stopped | Task was manually terminated by an operator |
| Canceled | Task was removed from the queue before execution began |

## Task Actions

- **View Log** — Open the detailed step-by-step execution log
- **Retry** — Re-queue the same workflow with the same parameters
- **Stop** — Send a stop signal to an actively running task
- **Download Log** — Export the execution log as a text file
