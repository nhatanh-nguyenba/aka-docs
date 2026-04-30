---
id: hardware-software-requirements
title: Hardware & Software Requirements
sidebar_label: Hardware & Software Requirements
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Hardware & Software Requirements

Before installing akaBot Center, ensure that your environment meets the minimum hardware and software requirements listed below. Meeting these requirements ensures stable operation and optimal performance of the akaBot platform across all supported deployment models.

## Hardware Requirements

The following table lists the minimum and recommended hardware specifications for running akaBot Center:

| Component | Minimum | Recommended |
|---|---|---|
| CPU | 4 cores, 2.0 GHz | 8 cores, 2.5 GHz or higher |
| RAM | 8 GB | 16 GB or more |
| Disk Space | 50 GB SSD | 200 GB SSD |
| Network | 100 Mbps | 1 Gbps |

For High Availability (HA) deployments, each node in the cluster must individually meet the recommended specifications. Additional disk space may be required when enabling log aggregation via ELK Stack.

## Software Requirements

akaBot Center supports the following operating systems and third-party software versions:

| Software | Supported Versions |
|---|---|
| Operating System | Windows Server 2019/2022, Red Hat Enterprise Linux 9.x |
| Java (JDK) | OpenJDK 17 or later |
| Database | MySQL 8.0+, Microsoft SQL Server 2019+, PostgreSQL 14+ |
| Application Server | Apache Tomcat 10.x |
| Browser | Google Chrome 110+, Microsoft Edge 110+ |

> **Note:** It is strongly recommended to use a dedicated server for akaBot Center in production environments. Sharing the server with other enterprise applications may lead to resource contention and degraded performance.

> **Warning:** Running akaBot Center on unsupported operating systems or software versions is not recommended and may result in unexpected behavior or installation failures.
