---
id: st-dbp-003
title: ST-DBP-003 - Empty Catch Block
sidebar_label: ST-DBP-003 - Empty Catch Block
sidebar_position: 3
description: ST-DBP-003 - Empty Catch Block
displayed_sidebar: studioSidebar
---
# ST-DBP-003 - Empty Catch Block

**Rule ID:** ST-DBP-003

**Scope:** Activity

## Description

The rule checks whether exceptions are caught with a purpose, and not only to prevent error messages.

## Recommendation

It is recommended to insert log messages in the Catch block of a Try Catch activity, in addition to the exception handling itself.

![st-dbp-003](/static/img/st-dbp-003.png)
