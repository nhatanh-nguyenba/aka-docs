---
id: schedule
title: Schedule
sidebar_label: Schedule
sidebar_position: 3
displayed_sidebar: centerSidebar
---

The Schedule feature in akaBot Center allows operators to configure time-based automatic execution of workflows without any manual intervention. By attaching one or more schedules to a workflow, organizations can ensure that repetitive automation tasks run consistently at the right time — whether that is every day at midnight, every Monday morning, or on the last business day of each month. Schedules eliminate dependency on humans remembering to trigger processes and are a cornerstone of unattended automation operations.

Schedules in akaBot Center use a cron-style syntax for maximum flexibility, supporting configurations such as "every 15 minutes during business hours", "weekdays only", or "the first day of each quarter". For users unfamiliar with cron syntax, the interface provides a guided schedule builder with common presets such as hourly, daily, weekly, and monthly. Once saved, the schedule becomes active immediately and the next projected execution time is displayed alongside the schedule configuration.

Multiple schedules can be attached to a single workflow, enabling complex recurring patterns — for example, running a process every hour during the day but only once per hour at night, or triggering additional runs at peak business times. Schedules can also be temporarily disabled without deleting them, which is useful during planned maintenance windows or holiday periods when automation execution should be paused.

## Schedule Configuration Options

| Option | Description |
|---|---|
| Schedule Name | Descriptive label for the schedule entry |
| Associated Workflow | The workflow that will be triggered on schedule |
| Cron Expression | Standard cron syntax defining the execution frequency |
| Time Zone | The time zone in which the cron schedule is evaluated |
| Enabled | Toggle to activate or suspend the schedule |
| Start Date | Optional earliest date from which the schedule applies |
| End Date | Optional last date after which the schedule becomes inactive |

## Common Schedule Examples

- `0 8 * * 1-5` — Every weekday at 8:00 AM
- `0 0 * * *` — Every day at midnight
- `0 */2 * * *` — Every 2 hours
- `0 9 1 * *` — First day of every month at 9:00 AM
