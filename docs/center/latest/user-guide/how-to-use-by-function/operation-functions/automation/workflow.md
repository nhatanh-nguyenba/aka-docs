---
id: workflow
title: Workflow
sidebar_label: Workflow
sidebar_position: 2
displayed_sidebar: centerSidebar
---

A Workflow in akaBot Center is the configuration that connects an automation package to an execution target (an agent or agent pool) and defines the parameters under which the automation should run. Think of a Workflow as a deployment descriptor: it specifies which package version to use, which agent or pool should execute it, what input arguments to pass, and various operational settings such as timeout limits and alert configurations. Creating a Workflow is a required step before any automated process can be executed or scheduled.

When you create a Workflow, you select a previously uploaded Package and bind it to an Agent or Agent Pool. You can also configure input arguments that will be passed to the automation at runtime, allowing the same package to be reused across multiple Workflows with different parameterizations. For example, a single data processing package could be deployed as three separate Workflows — one for each business department — each passing a different folder path or configuration file as an input argument.

Workflows support versioning through their Package association. When a new version of a package is published, the Workflow can be updated to reference the new version while maintaining the previous version for rollback purposes. This enables controlled, zero-downtime deployments of updated automation logic in production environments.

## Workflow Configuration Fields

| Field | Description |
|---|---|
| Workflow Name | Unique name to identify this workflow in the Center |
| Package | The automation package to execute |
| Package Version | Specific version of the package to use |
| Agent / Agent Pool | Execution target for this workflow |
| Input Arguments | Key-value pairs passed to the automation at runtime |
| Timeout | Maximum allowed duration before the task is force-stopped |
| Alert on Failure | Whether to send a notification when a task fails |
| Enabled | Toggle to activate or deactivate the workflow |
