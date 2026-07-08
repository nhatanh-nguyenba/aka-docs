---
id: st-nmg-008
title: ST-NMG-008 - Variable Length
sidebar_label: ST-NMG-008 - Variable Length
sidebar_position: 7
description: ST-NMG-008 - Variable Length
displayed_sidebar: studioSidebar
---
# ST-NMG-008 - Variable Length

**Rule ID:** ST-NMG-008

**Scope:** Activity

## Description

This rule checks whether the name of each variable defined in the workflow exceeds a certain number of characters.

![st-nmg-08](/static/img/st-nmg-08.png)

## Recommendation

The names of variables should not be longer than a set number of characters. It is recommended to abbreviate longer words, as they make it difficult to monitor variables during debugging, especially if the first part of the name is the same.

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can add a custom number of characters in the **MaxLength** field.

If we add the number 10, then the rule checks if the names of variables defined in the file or project exceed 10 characters.

## Reset to Default Value

The default value for ST-NMG-008 is 30.

To reset the value to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![rtd-nmg-008](/static/img/rtd-nmg-008.png)