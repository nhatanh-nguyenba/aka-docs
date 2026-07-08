---
id: st-dbp-002
title: ST-DBP-002 - High Arguments Count
sidebar_label: ST-DBP-002 - High Arguments Count
sidebar_position: 2
description: ST-DBP-002 - High Arguments Count
displayed_sidebar: studioSidebar
---
# ST-DBP-002 - High Arguments Count

**Rule ID:** ST-DBP-002

**Scope:** Workflow

## Description

This rule checks whether the number of all arguments existing in the workflow surpasses a certain threshold.

## Recommendation

Reduce the number of arguments in a workflow to a minimum.

## Modifying the Rule

In the Project Settings window, select the Arguments Metrics tab. Find and select the rule, as in the image below:

![st-dbp-002](/static/img/st-dbp-002.png)

To change the threshold, simply modify the value in the MaxCount field. The default value is 20, which means that the rule requires the workflow not to have more than 20 arguments.

If you modify the default value to 10, then the rule would check if the number of arguments exceeds 10.

## Reset to Default Value

The default value for ST-DBP-002 is 20.

To reset the value to default right-click the rule in the Settings window, and then click Reset to default.

![st-dbp-002](/static/img/st-dbp-002-reset.png)
