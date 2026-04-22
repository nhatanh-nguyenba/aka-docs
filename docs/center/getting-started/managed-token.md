---
id: managed-token
title: How to use Center's Managed Token
sidebar_label: How to use Center's Managed Token
sidebar_position: 4
displayed_sidebar: centerSidebar
---

Managed Tokens in akaBot Center provide a secure and centrally controlled mechanism for authenticating external systems, third-party integrations, and API consumers with the Center platform. Instead of using personal user credentials for programmatic access, administrators can generate dedicated tokens that carry specific permissions and can be revoked independently without affecting any user account. This separation of concerns is essential for maintaining security in enterprise automation environments.

Each Managed Token is scoped to defined permissions and can be assigned to specific automation workflows, external applications, or integration services. When a token is used to make API calls to akaBot Center — for example, triggering a workflow execution or querying job status — the platform validates the token and enforces its associated permission set. Tokens can be set with expiration dates to align with organizational security policies, and all token-based API calls are logged for audit trail purposes.

Managed Tokens are especially valuable when integrating akaBot Center with CI/CD pipelines, enterprise service buses, or external monitoring dashboards. By using tokens instead of user credentials, organizations avoid the risk of credential exposure and can rotate tokens on a schedule without disrupting dependent workflows.

## How to Create a Managed Token

1. Navigate to **Administration > Token** in the left sidebar.
2. Click **Create New Token**.
3. Enter a descriptive name and set an optional expiration date.
4. Assign the required permission scopes to the token.
5. Click **Generate** and securely copy the token value — it will not be shown again.
6. Use the token in the `Authorization: Bearer <token>` header for API requests.

## Token Permission Scopes

| Scope | Description |
|---|---|
| `workflow:read` | View workflow definitions and configurations |
| `workflow:execute` | Trigger workflow executions |
| `job:read` | Query job statuses and execution logs |
| `agent:read` | View agent status and configuration |
| `queue:read` | Read queue items and queue metadata |
| `queue:write` | Add or update items in a queue |
