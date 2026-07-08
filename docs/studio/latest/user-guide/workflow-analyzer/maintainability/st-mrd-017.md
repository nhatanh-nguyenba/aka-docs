---
id: st-mrd-017
title: ST-MRD-017 - Incomplete If
sidebar_label: ST-MRD-017 - Incomplete If
sidebar_position: 17
description: ST-MRD-017 - Incomplete If
displayed_sidebar: studioSidebar
---
# ST-MRD-017 - Incomplete If

**Rule ID:** ST-MRD-017

**Scope:** Activity

## Description

The rule checks whether there are any If activities that are empty or contain activities only in the Else branch

![st-mrd-017](/static/img/st-mrd-017.png)

## Recommendation

Remove or disable empty If activities. When only the Else branch is populated, consider switching the condition and moving the content to the Then branch
