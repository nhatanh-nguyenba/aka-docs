---
id: process-operation
title: Process Operation
sidebar_label: Process Operation
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Process Operation

Process Operation covers the day-to-day execution and management of human-bot collaboration processes within akaBot Center. Once a process has been designed and published, operators use the Process Operation interface to trigger new process instances, monitor their progress, handle exceptions, and close completed cases. This section serves as the operational control plane for all running workflows involving both bots and human participants.

Operators can start a process instance manually from the Process Operation dashboard or allow the system to trigger instances automatically based on a configured schedule or an external event such as an incoming email, a form submission, or an API call. Each instance is tracked individually with a unique ID, and its full lifecycle—from initiation through every task step to final completion—is visible in the instance detail view.

When a process instance encounters an error, such as a bot task failure or a human task that has exceeded its deadline, the Process Operation interface surfaces the exception immediately. Operators can retry failed bot tasks, reassign overdue human tasks, or terminate instances that are no longer needed. All corrective actions are recorded in the audit log for traceability.

## Process Instance Statuses

| Status | Description |
|---|---|
| Running | The instance is actively progressing through its tasks |
| Waiting | The instance is paused, awaiting a human task completion |
| Failed | A task within the instance has encountered an unrecoverable error |
| Completed | All tasks have been executed successfully and the process has ended |
| Terminated | The instance was manually stopped before reaching the end event |
| Scheduled | The instance is queued and waiting for its scheduled start time |

## Starting a Process Instance Manually

1. Open **Human-Bot Collaboration** > **Process Operation** in akaBot Center.
2. Click the **Start New Instance** button in the top-right corner.
3. Select the desired **Process** from the dropdown list.
4. Fill in any required input variables in the start form.
5. Click **Confirm** to launch the instance.
6. The new instance will appear in the **Running** list with its unique instance ID.

## Managing Running Instances

- Use the **Search** and **Filter** controls to locate specific instances by status, process name, or date range.
- Click any instance row to open its **Timeline View**, which displays each completed and pending task.
- Use the **Actions** menu on a failed task to choose **Retry**, **Skip**, or **Terminate Instance**.
- Export instance data to CSV for reporting using the **Export** button in the toolbar.
