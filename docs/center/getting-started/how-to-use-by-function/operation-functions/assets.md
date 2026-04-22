---
id: assets
title: Assets
sidebar_label: Assets
sidebar_position: 5
displayed_sidebar: centerSidebar
---

Assets in akaBot Center are a secure, centralized store for values that automation workflows need at runtime but that should not be hard-coded inside the workflow itself. Common examples include database connection strings, API endpoint URLs, email addresses, environment-specific configuration flags, and credential pairs (username and password). By externalizing these values into Assets, organizations can update configurations across all workflows in one place without modifying or redeploying the automation packages themselves.

Each Asset has a name, a type, and a value. akaBot Center supports several Asset types including Text (plain string), Integer, Boolean, and Credential (encrypted username and password pair). Credential-type Assets are stored with encryption and their values are never exposed in plain text through the user interface after creation — only the automation runtime can retrieve the decrypted value when executing a workflow. This design ensures sensitive credentials are managed securely even in large teams where multiple operators have access to Center.

Assets can also be scoped to specific agents, allowing different agents to use different values for the same Asset name. This is useful in multi-environment deployments — for example, a `DatabaseConnectionString` Asset can resolve to the test database for agents in the test group and the production database for agents in the production group, all without changing the workflow logic.

## Asset Types

| Type | Description | Example |
|---|---|---|
| Text | Plain string value | API endpoint URL, folder path |
| Integer | Whole number value | Retry count, batch size |
| Boolean | True or false flag | Enable/disable a feature toggle |
| Credential | Encrypted username and password pair | System login credentials |

## Managing Assets

- Navigate to **Assets** in the left sidebar.
- Click **Create New Asset** to define a new asset.
- Choose the asset type and enter the value.
- For Credential assets, enter both the username and password fields.
- Use the Asset name in your workflow by referencing it via the Get Asset activity in akaBot Studio.
