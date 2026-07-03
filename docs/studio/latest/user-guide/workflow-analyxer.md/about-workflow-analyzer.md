---
id: about-workflow-analyzer
title: About Workflow Analyzer
sidebar_label: About Workflow Analyzer
sidebar_position: 1
description: Static code analysis in akaBot Studio
displayed_sidebar: studioSidebar
---

# About Workflow Analyzer

Workflow Analyzer is a static code analysis tool that helps ensure your automation projects meet quality and development standards. Unlike runtime validation, Workflow Analyzer analyzes workflows without executing them.

Workflow Analyzer uses a predefined set of rules to identify inconsistencies that may affect code quality, maintainability, reliability, performance, and compliance with development standards.

![Workflow Analyzer](/static/img/about-workflow-analyzer.png)

The following commands are available:

- **Analyze File** – Analyzes the workflow currently open in the Designer.
- **Analyze Project** – Analyzes all workflows in the current automation project.
- **Analyze Settings** – Opens the **Analyzer** window, where you can configure Workflow Analyzer rules and their settings.

## Key Concepts

The following concepts help you understand how Workflow Analyzer validates automation projects.

### Rules Naming Convention

Each Workflow Analyzer rule is identified by a unique rule code.

A rule code consists of three components:

- **ST (Studio)** – Indicates the rule belongs to akaBot Studio.
- **NMG (Naming)** – Indicates the rule category.
- **001** – The unique rule identifier.

For example:

```text
ST-NMG-001
```

Rule codes are displayed throughout Workflow Analyzer, making it easier to identify, search for, and reference specific rules.

![Analyzer](/static/img/analyzer.png)

### Rule Categories

Workflow Analyzer groups rules into categories based on the aspect of the project they validate. Rule categories make it easier to browse, configure, and manage related rules.

The available rule categories include:

- Naming Rules
- Design Best Practices
- Project Anatomy Rules
- Maintainability and Readability Rules
- Usage Rules
- Performance and Reusability Rules
- Reliability Rules
- Security Rules

### Rule Scope

Each rule has a scope that defines the level at which it is evaluated.

| Scope | Description |
| ------ | ----------- |
| **Activity** | Validates individual activities and their properties. |
| **Workflow** | Validates workflow-level elements, such as variables, arguments, and workflow structure. |
| **Project** | Validates project-wide settings and project structure. |

You can filter rules by scope in the **Analyzer** window.

![Rule Scope](/static/img/all-scopes-wa.png)

### Severity Levels

Each rule is assigned a severity level that indicates the importance of a detected issue.

| Severity | Description |
| -------- | ----------- |
| **Error** | Indicates an issue that should be resolved before running, publishing, or deploying the project. |
| **Warning** | Indicates a recommended improvement to code quality or maintainability. |
| **Info** | Provides informational guidance and development recommendations. |

![Severity Levels](/static/img/severity-levels.png)

## Analysis Scope

Workflow Analyzer supports two analysis scopes:

- **Current Workflow** – Analyzes only the active workflow.
- **Entire Project** – Analyzes all workflows in the current project.

Running analysis on the entire project is recommended before publishing.

![Analysis Scope](/static/img/setting-wa.png)

## Managing Rules

Workflow Analyzer uses configurable rules to validate automation projects. Rules can be enabled, disabled, or customized to meet your organization's development standards.

## Configure Rules

Rules are configured in the **Analyzer** window.

For each rule, you can:

- Enable or disable the rule.
- Change its severity level.
- Configure rule parameters, when supported.
- Save the updated configuration.

Changes take effect the next time Workflow Analyzer runs.

## Reset to Default

If a rule's default values, such as Regex or threshold values, have been modified, you can restore the original settings by right-clicking the rule and selecting **Reset to Default**.

![Reset to Default](/static/img/default.png)

## Validation

Workflow Analyzer performs static code analysis to check your project against configured development rules. Because it runs static analysis, it does not execute workflows or validate runtime behavior.

**IMPORTANT**
> Before running Workflow Analyzer, ensure that the workflow contains no activity validation errors (no red validation indicators). Workflow Analyzer can analyze only valid workflows.

![validation-wa.png](/static/img/validation-wa.png)

## Managing Errors

Detected issues are displayed in the **Analysis Results** window, where you can review their severity, description, recommendations, and affected workflow.

![Analysis Results](/static/img/managing-errors.png)

## Command-Line Support

Workflow Analyzer can be executed from the command line when supported by your environment.

> **Note:** This feature is available only in environments that support command-line execution.

## Exporting Workflow Analyzer Results

Analysis results can be exported for documentation, project review, or integration with development workflows.

## Enforcing the Workflow Analyzer before Run, Publish, or Push/Check in

Workflow Analyzer can be configured to validate projects before running, publishing, or submitting changes to source control.

When enabled, projects are validated against the configured rules before the selected action is performed.

## Next Steps

To learn more, see:

- Running Workflow Analyzer
- Configuring Workflow Analyzer Rules
- Workflow Analyzer Rule Categories
- Understanding Analysis Results
