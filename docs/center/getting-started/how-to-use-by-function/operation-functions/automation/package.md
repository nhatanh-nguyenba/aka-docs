---
id: package
title: Package
sidebar_label: Package
sidebar_position: 4
displayed_sidebar: centerSidebar
---

A Package in akaBot Center is the deployable unit of automation — the compiled output of an automation project created in akaBot Studio. When a developer finishes building and testing an automation in Studio, they publish it as a NuGet-format package file (.nupkg), which is then uploaded to akaBot Center. Center stores and manages all published packages in its Package Library, enabling version control, rollback, and controlled deployment of automation logic across the organization.

Each Package in the library can have multiple versions, reflecting the history of changes made to the automation. Center maintains all versions simultaneously, so teams can run version 1.0.2 in production while version 1.1.0 is being validated in a staging environment. This side-by-side versioning is critical for enterprise automation governance, where changes to production processes must go through an approval and testing cycle before being promoted. Workflows explicitly reference a package version, ensuring that a production workflow is never inadvertently upgraded.

Packages can be organized by tags and descriptions to make them discoverable in organizations with large automation libraries. The Package detail page shows metadata such as the package description, author, creation date, and the list of workflows currently using each version. Administrators can restrict which users are allowed to upload new packages or promote packages between environments using role-based access controls.

## Package Management Workflow

1. Developer completes the automation project in akaBot Studio.
2. Developer publishes the project as a `.nupkg` file from Studio.
3. Operator uploads the package file to akaBot Center via the **Package** page.
4. A new version entry appears in the Package Library.
5. Operator creates or updates a Workflow to reference the new package version.
6. The Workflow is tested on a staging agent before promoting to production.

## Package Fields

| Field | Description |
|---|---|
| Package Name | Unique identifier matching the project name in Studio |
| Version | Semantic version number (e.g., 1.2.0) |
| Description | Human-readable summary of what the automation does |
| Upload Date | Date and time the package was uploaded to Center |
| Uploaded By | User account that performed the upload |
| Used By Workflows | Number of workflows currently referencing this version |
