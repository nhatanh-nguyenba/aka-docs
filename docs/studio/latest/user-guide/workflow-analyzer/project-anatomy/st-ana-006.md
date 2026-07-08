---
id: st-ana-006
title: ST-ANA-006 - Main Workflow Exists
sidebar_label: ST-ANA-006 - Main Workflow Exists
sidebar_position: 6
description: ST-ANA-006 - Main Workflow Exists
displayed_sidebar: studioSidebar
---
# ST-ANA-006 - Main Workflow Exists

**Rule ID:** ST-ANA-006

**Scope:** Project

## Description

The rule checks whether the `Main.xaml` file mentioned in the `project.json` file exists. 

![st-ana-006](/static/img/st-ana-006.png)

## Recommendation

Projects with a defined entry point or main file have this specific file name mentioned in the `project.json` file, as a value for the main parameter. Read more About the Project.json File.

It is recommended to fix the `project.json` file to point to the entry/main workflow.
