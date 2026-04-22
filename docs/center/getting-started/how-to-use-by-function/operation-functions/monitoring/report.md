---
id: report
title: Report
sidebar_label: Report
sidebar_position: 2
displayed_sidebar: centerSidebar
---

The Report page in akaBot Center provides structured, exportable data summaries of automation execution activity. While the Productivity page offers live dashboards, this page focuses on generating historical data summaries that can be shared outside the platform — for example, with management, compliance teams, or external auditors. Data can be scoped to specific date ranges, workflows, agents, or organizational units, and can be exported in standard formats for further processing.

Each record presents a tabular breakdown of execution entries including workflow name, agent, start time, end time, duration, final status, and any error messages. This level of detail is essential for troubleshooting recurring failures, auditing automation activity for regulatory compliance, or performing capacity planning. Teams can use this data to identify patterns such as consistently slow executions on certain machines or workflows that fail at high rates during specific time windows.

akaBot Center allows users to save filter configurations as templates, making it easy to regenerate the same data view on a weekly or monthly basis without re-entering filter criteria. Scheduled delivery — where a data export is automatically generated and emailed to a distribution list — can be configured in conjunction with the Webhook feature to integrate this capability into existing business processes.

## Execution Record Fields

| Field | Description |
|---|---|
| Workflow Name | Name of the workflow that was executed |
| Agent | Name of the agent that ran the job |
| Start Time | Timestamp when execution began |
| End Time | Timestamp when execution completed or failed |
| Duration | Total elapsed time of the execution |
| Status | Final execution status (Successful, Failed, Stopped) |
| Error Message | Error details if the execution failed |
| Organization Unit | The OU that the workflow belongs to |

## Available Export Formats

- **CSV** — for analysis in Excel or BI tools
- **PDF** — for formal documentation and archiving
- **JSON** — for programmatic consumption by other systems
