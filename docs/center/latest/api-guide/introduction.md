---
id: introduction
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Introduction

The **akaBot Center REST API** provides programmatic access to the core features of akaBot Center, enabling enterprise teams to integrate, automate, and orchestrate RPA (Robotic Process Automation) workflows from external systems, CI/CD pipelines, and custom applications.

## Overview

The API follows REST conventions and uses standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`). All request and response bodies are formatted in **JSON**. The API is versioned and all endpoints are served under a consistent base path.

## Base URL

```
https://<center-host>/api/v4
```

Replace `<center-host>` with the hostname or IP address of your akaBot Center installation. For example:

```
https://center.example.com/api/v4
```

## Authentication

All API requests must be authenticated using a **Bearer Token**. Include the token in the `Authorization` header of every request.

### Obtaining a Token

Tokens are generated from the akaBot Center web portal under **Settings > API Access**, or by calling the authentication endpoint:

```
POST /api/v4/auth/token
```

**Request body:**

```json
{
  "username": "your-username",
  "password": "your-password"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Using the Token

Pass the token in the `Authorization` header for all subsequent requests:

```
Authorization: Bearer <access_token>
```

## Content Type

All request bodies must use the `application/json` content type:

```
Content-Type: application/json
```

All responses are also returned as `application/json`.

## Pagination

Endpoints that return collections support cursor-based and offset-based pagination via the following query parameters:

| Parameter | Type    | Default | Description                              |
|-----------|---------|---------|------------------------------------------|
| `page`    | integer | `1`     | The page number to retrieve.             |
| `limit`   | integer | `20`    | The number of records per page (max 100). |
| `sortBy`  | string  | —       | Field name to sort results by.           |
| `sortDir` | string  | `asc`   | Sort direction: `asc` or `desc`.         |

**Example paginated response envelope:**

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalItems": 145,
    "totalPages": 8
  }
}
```

## Error Codes

The API uses standard HTTP status codes to indicate the result of a request. In the case of an error, the response body contains a machine-readable `errorCode` and a human-readable `message`.

| HTTP Status | Error Code           | Description                                                                 |
|-------------|----------------------|-----------------------------------------------------------------------------|
| `400`       | `BAD_REQUEST`        | The request was malformed or contained invalid parameters.                  |
| `401`       | `UNAUTHORIZED`       | The request is missing a valid authentication token, or the token expired.  |
| `403`       | `FORBIDDEN`          | The authenticated user does not have permission to perform this operation.  |
| `404`       | `NOT_FOUND`          | The requested resource does not exist.                                      |
| `409`       | `CONFLICT`           | The request conflicts with the current state of the resource.               |
| `500`       | `INTERNAL_ERROR`     | An unexpected server-side error occurred. Contact your administrator.       |

**Example error response:**

```json
{
  "errorCode": "NOT_FOUND",
  "message": "Process with id '42' was not found.",
  "timestamp": "2026-04-22T08:30:00Z"
}
```

## Rate Limiting

By default, the API allows up to **200 requests per minute** per API token. If the limit is exceeded, the server returns `429 Too Many Requests`. Check the following response headers to track your quota:

| Header                  | Description                                        |
|-------------------------|----------------------------------------------------|
| `X-RateLimit-Limit`     | Maximum number of requests allowed per minute.     |
| `X-RateLimit-Remaining` | Number of requests remaining in the current window.|
| `X-RateLimit-Reset`     | Unix timestamp when the rate limit window resets.  |

## SDK and Tools

In addition to direct HTTP calls, akaBot Center provides:

- **akaBot PowerShell Module** — cmdlets for common operations.
- **Swagger / OpenAPI UI** — accessible at `https://<center-host>/api/v4/swagger` for interactive exploration.
- **Postman Collection** — downloadable from the akaBot developer portal.
