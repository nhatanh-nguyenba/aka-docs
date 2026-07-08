---
id: st-prr-004
title: ST-PRR-004 - Hardcoded Delay Activity
sidebar_label: ST-PRR-004 - Hardcoded Delay Activity
sidebar_position: 4
description: ST-PRR-004 - Hardcoded Delay Activity
displayed_sidebar: studioSidebar
---
# ST-PRR-004 - Hardcoded Delay Activity

**Rule ID:** ST-PRR-004

**Scope:** Workflow

## Description

The rule checks whether The Delay Activity is overly used. This activity may affect performance, and thus its use should be limited.

![st-prr-004](/static/img/st-prr-004.png)

## Recommendation

Consider using other mechanisms to wait for application states like use timeout/appear/exist instead of hardcoded delays.


