---
id: trigger
title: Trigger
sidebar_label: Trigger
sidebar_position: 5
displayed_sidebar: centerSidebar
---

Triggers in akaBot Center provide event-driven execution of workflows, complementing the time-based Schedule feature. While Schedules run workflows at fixed calendar intervals, Triggers fire a workflow in response to a specific event — such as a new item arriving in a queue, a file being detected in a folder, or an external system sending an HTTP callback. This allows akaBot Center to integrate tightly with enterprise event streams and business processes, enabling automation workflows to start exactly when they are needed rather than on a polling cycle.

The most common trigger type is the **Queue Trigger**, which monitors a queue and automatically dispatches a workflow execution when new items are available. This pattern is used for real-time transactional processing — for example, when a customer places an order and the order data is added to a queue, the Queue Trigger immediately starts the order processing workflow on an available agent without any human intervention. This dramatically reduces processing latency compared to scheduled polling approaches.

akaBot Center also supports **Webhook Triggers**, which expose an HTTP endpoint that external systems can call to fire a workflow. This enables integration scenarios where a business application — such as an ERP, CRM, or ticketing system — can directly trigger an automation workflow as part of its own business process flow, passing structured data as the trigger payload. Webhook Triggers make akaBot Center a first-class participant in enterprise integration architectures.

## Trigger Types

| Type | Description | Use Case |
|---|---|---|
| Queue Trigger | Fires when new items are added to a specified queue | Real-time transactional processing |
| Webhook Trigger | Fires when an HTTP POST is received at the trigger endpoint | Integration with external business systems |
| File Trigger | Fires when a file matching a pattern appears in a watched folder | File-based data ingestion workflows |

## Configuring a Queue Trigger

1. Navigate to **Automation > Trigger** and click **Create New Trigger**.
2. Select **Queue Trigger** as the trigger type.
3. Choose the Queue to monitor.
4. Select the Workflow to execute when items arrive.
5. Set the minimum number of queue items required to fire the trigger.
6. Optionally set a maximum concurrent executions limit.
7. Click **Save** and enable the trigger.
