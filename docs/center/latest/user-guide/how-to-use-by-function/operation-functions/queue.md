---
id: queue
title: Queue
sidebar_label: Queue
sidebar_position: 6
displayed_sidebar: centerSidebar
---

The Queue feature in akaBot Center enables robust, scalable processing of work items by automation workflows. A Queue acts as a structured backlog of individual data records — called Queue Items — that need to be processed by a bot. For example, a data extraction workflow might populate a Queue with a list of invoice IDs, and a separate processing workflow running on multiple agents can then consume and process those invoices concurrently, with each item being picked up by exactly one agent.

Queues provide guaranteed delivery semantics: each Queue Item progresses through a well-defined lifecycle of statuses — New, In Progress, Successful, Failed, and Abandoned. If a workflow fails while processing an item, the item can be automatically retried or flagged for manual review depending on configured retry policies. This makes Queues an essential building block for high-volume, transactional automation scenarios where data integrity and traceability are critical requirements.

Administrators and operators can monitor queue health in real time from the Queue management screen, viewing the count of items in each status and drilling down to inspect individual item data and processing history. Queues also support reference fields and deadline timestamps on each item, enabling workflows to prioritize high-urgency items or skip items that have passed their due date.

## Queue Item Lifecycle

| Status | Meaning |
|---|---|
| New | Item has been added to the queue and is waiting to be picked up |
| In Progress | An agent has claimed the item and is currently processing it |
| Successful | Processing completed without errors |
| Failed | Processing encountered an error; retry may be attempted |
| Abandoned | Item exceeded retry count or deadline and was removed from active processing |

## Creating and Using Queues

1. Navigate to **Queue** in the left sidebar and click **Create New Queue**.
2. Set a name and optional maximum retry count for failed items.
3. Use the **Add Queue Item** API or akaBot Studio activities to populate items into the queue.
4. Configure a Workflow or Trigger to consume items from the queue using the Get Queue Item activity.
5. The workflow processes each item and marks it Successful or Failed upon completion.
