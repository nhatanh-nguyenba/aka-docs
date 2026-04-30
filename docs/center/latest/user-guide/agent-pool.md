---
id: agent-pool
title: How to use Center's Agent Pool
sidebar_label: How to use Center's Agent Pool
sidebar_position: 5
displayed_sidebar: centerSidebar
---

An Agent Pool in akaBot Center is a named collection of agents that work together as a unified execution resource. When a workflow is assigned to an Agent Pool rather than a specific agent, akaBot Center automatically selects an available agent from the pool to execute the job. This provides load balancing and failover capabilities, ensuring that automation workloads are handled efficiently even when individual agents are busy or temporarily unavailable.

Agent Pools are particularly useful in high-volume automation scenarios where multiple instances of the same workflow need to run concurrently across different machines. For example, an organization processing thousands of invoice records daily might configure a pool of five agents, all capable of running the invoice processing workflow. When the workflow is triggered — whether manually, by schedule, or via a queue — Center picks the next idle agent from the pool and dispatches the job immediately without operator intervention.

Configuring and managing Agent Pools is done through the Resources section of akaBot Center. Administrators can add or remove agents from a pool at any time, allowing the pool size to scale up during peak periods and scale down during off-hours to conserve licensing resources. Combined with the Queue feature, Agent Pools enable robust parallel processing patterns for enterprise automation workloads.

## How to Set Up an Agent Pool

1. Navigate to **Resources > Agent Pool** in the left sidebar.
2. Click **Create New Agent Pool**.
3. Provide a name and optional description for the pool.
4. From the agent list, select the agents to include in the pool.
5. Click **Save** to create the pool.
6. When creating or editing a Workflow, select the Agent Pool as the execution target instead of a single agent.

## Agent Pool Properties

| Property | Description |
|---|---|
| Pool Name | Unique identifier for the pool within the organization |
| Assigned Agents | List of agents registered as members of the pool |
| Execution Mode | Sequential or parallel dispatching of jobs across pool members |
| Availability Status | Real-time count of idle vs. busy agents in the pool |
| Associated Workflows | Workflows currently configured to use this pool |
