---
id: high-density-agents
title: High-Density Agents Setup
sidebar_label: High-Density Agents Setup
sidebar_position: 14
displayed_sidebar: centerSidebar
---

# High-Density Agents Setup

High-Density Agents (HDA) allow multiple robot sessions to run simultaneously on a single machine using Windows Remote Desktop Services (RDS) or similar session virtualization technologies. This setup maximizes hardware utilization by running many akaBot Agent instances concurrently on one server, reducing infrastructure costs for large-scale automation deployments.

## Prerequisites

- Windows Server 2019 or 2022 with Remote Desktop Services (RDS) role installed and licensed
- Per-user or per-device RDS CALs for all concurrent sessions
- akaBot Center 4.x with a license that supports High-Density Agents
- Sufficient hardware resources: at least 4 GB RAM per concurrent agent session, plus overhead for the OS and RDS
- A dedicated service account for each agent session, or a single service account with session isolation configured
- akaBot Agent 4.x installation package

## Setup Steps

1. **Enable Remote Desktop Services**
   - In Server Manager, add the **Remote Desktop Services** role.
   - Configure **Session-Based Desktop Deployment** and install the RD Licensing role.
   - Activate RDS CAL licenses through the RD Licensing Manager.

2. **Configure Session Limits**
   - In Group Policy (`gpedit.msc`), navigate to **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Remote Desktop Services**.
   - Set the maximum number of allowed sessions to the desired concurrent agent count.

3. **Install akaBot Agent for Each Session User**
   - Create a dedicated Windows user account for each agent session (e.g., `agent01`, `agent02`).
   - Log in as each user via RDP and install akaBot Agent to the user's profile directory.
   - Configure `agent.properties` for each user with unique agent names.

4. **Register Agents with akaBot Center**
   - Start each agent session. Each agent will register with akaBot Center as a separate robot.
   - In the akaBot Center portal, navigate to **Robot Management** and assign each robot to the appropriate robot pool.

5. **Configure Robot Pools**
   - Create a robot pool in akaBot Center to group all high-density agents on the same machine.
   - Assign automation packages to the pool to enable load distribution across agents.

6. **Tune System Resources**
   - Adjust Windows virtual memory settings to accommodate multiple simultaneous sessions.
   - Monitor CPU, memory, and disk I/O during peak operation and adjust session limits accordingly.

## Notes and Warnings

> **Note:** High-Density Agent setup requires an RDS-capable Windows Server license and appropriate RDS Client Access Licenses (CALs). Ensure compliance with Microsoft licensing terms before deploying.

> **Warning:** Running too many concurrent agent sessions on under-provisioned hardware will degrade performance for all sessions. Conduct load testing before promoting to production.

> **Note:** Each agent session must have a unique robot name registered in akaBot Center. Duplicate names will cause registration conflicts and connectivity issues.
