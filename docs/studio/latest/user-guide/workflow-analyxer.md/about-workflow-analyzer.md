---
id: about-workflow-analyzer
title: About Workflow Analyzer
sidebar_label: About Workflow Analyzer
sidebar_position: 1
description: Static code analysis in akaBot Studio
displayed_sidebar: studioSidebar
---

# About Workflow Analyzer

Workflow Analyzer is a static analysis tool in akaBot Studio that evaluates automation projects against predefined development rules. Instead of executing workflows, it analyzes workflow files, activities, variables, and project settings to identify issues that may affect code quality, maintainability, reliability, and compliance with development standards.

Running Workflow Analyzer during development helps identify issues early and improve project consistency before testing or publishing.

![Workflow Analyzer](/static/img/about-workflow-analyzer.png)

## How Workflow Analyzer Works

Workflow Analyzer performs static analysis without executing the automation.

During analysis, Workflow Analyzer:

1. Scans the selected workflow or project.
2. Evaluates workflow elements against the enabled rules.
3. Detects rule violations.
4. Reports the analysis results.

Analysis results include the severity, description, recommendation, and affected workflow for each detected issue.

## Key Concepts

Understanding the following concepts helps you interpret Workflow Analyzer results.

### Rules Naming Convention

Each Workflow Analyzer rule is identified by a unique rule code.

A rule code consists of three components:

- **ST (Studio)** – Indicates the rule applies to akaBot Studio.
- **NMG (Naming)** – Indicates the rule category.
- **001** – The unique rule identifier.

Example:

```text
ST-NMG-001
```

Rule codes are displayed throughout Workflow Analyzer, making it easier to identify and reference specific rules.

![Analyzer](/static/img/analyzer.png)

### Rule Categories

Workflow Analyzer organizes rules into categories based on the aspect of the project they validate.

The available rule categories include:

- Naming Rules
- Design Best Practices
- Project Anatomy Rules
- Maintainability and Readability Rules
- Usage Rules
- Performance and Reusability Rules
- Reliability Rules
- Security Rules

Each category validates a specific aspect of an automation project.

### Analysis Scope

Each rule is associated with a scope that defines the level at which it is evaluated.

| Scope | Description |
| ------ | ----------- |
| **Activity** | Validates individual activities and their properties. |
| **Workflow** | Validates workflow-level elements, such as arguments, variables, and workflow structure. |
| **Project** | Validates project-wide settings and overall project structure. |

You can filter rules by scope in the Analyzer window.

![Analysis Scope](/static/img/all-scopes-wa.png)

### Severity Levels

Each rule is assigned a severity level that indicates the importance of the reported issue.

| Severity | Description |
| -------- | ----------- |
| **Error** | Indicates an issue that should be resolved before publishing or deploying the project. |
| **Warning** | Indicates a recommended improvement to code quality or maintainability. |
| **Info** | Provides informational guidance and development recommendations. |

## Analysis Targets

Workflow Analyzer supports analyzing:

- The current workflow.
- The entire automation project.

Analyzing the entire project is recommended before publishing to ensure all workflows comply with the configured rules.

![Analysis Targets](/static/img/setting-wa.png)

## Actions

Workflow Analyzer provides actions for running analysis, reviewing results, and exporting reports.

Available actions include:

- Run analysis.
- Search analysis results.
- Filter reported issues.
- Export analysis results.

The available actions depend on the selected Workflow Analyzer window.

## Managing Rules

Workflow Analyzer uses configurable rules to validate automation projects. Rules can be enabled, disabled, or customized to match your organization's development standards.

## Configure Rules

Rules are configured from the **Analyzer** window.

Depending on the selected rule, you can:

- Enable or disable the rule.
- Change its severity level.
- Configure rule parameters, when supported.
- Save the updated configuration.

Changes take effect the next time Workflow Analyzer runs.

## Reset to Default

If a rule's default values, such as Regex or threshold values, have been modified, you can restore the original settings by right-clicking the rule and selecting **Reset to Default**.

![Reset to Default](/static/img/default.png)

## Validation

Workflow Analyzer validates workflow elements against the enabled analysis rules and reports any detected violations in the Analysis Results window.

Because Workflow Analyzer performs static analysis, it does not execute workflows or validate runtime behavior.

## Managing Errors

Detected issues are displayed in the **Analysis Results** window, where you can review their severity, description, recommendations, and affected workflow.

![Analysis Results](/static/img/managing-errors.png)

## Command-Line Support

Workflow Analyzer can be executed from the command line when supported by your environment.

> **Note:** This feature is available only in environments that support command-line execution.

## Exporting Workflow Analyzer Results

After an analysis completes, the **Analysis Results** window allows you to search, filter, review, and export analysis results.

## Enforcing the Workflow Analyzer before Run, Publish, or Push/Check in

Workflow Analyzer can be configured to validate projects before running, publishing, or submitting changes to source control.

When enabled, projects are validated against the configured rules before the selected action is performed.

## Next Steps

Continue with the following topics:

- Running Workflow Analyzer
- Configuring Workflow Analyzer Rules
- Workflow Analyzer Rule Categories
- Understanding Analysis Results
