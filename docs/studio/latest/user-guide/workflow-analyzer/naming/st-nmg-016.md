---
id: st-nmg-016
title: ST-NMG-016 - Argument Length
sidebar_label: ST-NMG-016 - Argument Length
sidebar_position: 10
description: ST-NMG-016 - Argument Length
displayed_sidebar: studioSidebar
---
# ST-NMG-016 - Argument Length

**Rule ID:** ST-NMG-016

**Scope:** Workflow

## Description

This rule checks whether the name of each argument defined in the workflow exceeds a certain number of characters.

![st-nmg-016](/static/img/st-nmg-016.png)

## Recommendation

The names of arguments should not be longer than a set number of characters. It is recommended to abbreviate longer words, as they make it difficult to monitor arguments during debugging, especially if the first part of the name is the same.

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can add a custom number of characters in the **MaxLength** field.

If we add the number 10, then the rule checks if the names of arguments defined in the file or project exceed 10 characters.

## Reset to Default Values

The default value for ST-NMG-016 is 30.

To reset the value to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![rtd-nmg-016](/static/img/rtd-nmg-016.png)