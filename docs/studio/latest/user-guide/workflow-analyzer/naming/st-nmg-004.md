---
id: st-nmg-004
title: ST-NMG-004 - Display Name Duplication
sidebar_label: ST-NMG-004 - Display Name Duplication
sidebar_position: 4
description: ST-NMG-004 - Display Name Duplication
displayed_sidebar: studioSidebar
---
# ST-NMG-004 - Display Name Duplication

**Rule ID:** ST-NMG-004

**Scope:** Workflow

## Description

This rule analyzes the display names of activities and determines whether they are repetitive or generic.

The display names of activities should clearly indicate how they are used in the workflow. This makes the project meaningful and avoids any confusion in terms of usage.

## Recommendation

Make sure default names of activities are changed into more meaningful names and are not repeated throughout the workflow.

By adding a more descriptive display name, it might become easier to understand what the activity does. For example, if your workflow uses the Click activity for clicking the Save button in an application, then you could name the activity to Click Save Button, giving it a unique and descriptive name.

## Modifying the Rule

In the Analyzer window, find and select the rule, as in the image below:

![st-nmg-04](/static/img/st-nmg-04.png)

You can enable or disable this rule according to your preferences.