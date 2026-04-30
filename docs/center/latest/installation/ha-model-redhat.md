---
id: ha-model-redhat
title: Installation Guide For High Availability Model on Redhat v9.x
sidebar_label: Installation Guide For High Availability Model on Redhat v9.x
sidebar_position: 8
displayed_sidebar: centerSidebar
---

# Installation Guide For High Availability Model on Redhat v9.x

The High Availability (HA) deployment model ensures that akaBot Center remains operational even if one of the application nodes fails. This guide covers setting up an active-passive HA cluster for akaBot Center on Red Hat Enterprise Linux 9.x, using a shared database and a load balancer.

## Prerequisites

- Two or more RHEL 9.x servers (64-bit) each with at least 16 GB RAM and 100 GB SSD
- Java JDK 17 installed on all nodes
- A shared external database (MySQL, PostgreSQL, or MSSQL) accessible from all nodes
- A load balancer (e.g., HAProxy or Nginx) or a virtual IP (VIP) configured for failover
- akaBot Center 4.x Linux installation package
- Root or sudo access on all servers
- Network connectivity between all nodes on required ports (8080, 8443, 61616)
- NTP configured on all servers to ensure time synchronization

## Installation Steps

1. **Prepare All Nodes**
   - Install Java JDK 17 on each node: `sudo dnf install java-17-openjdk-devel -y`
   - Set `JAVA_HOME` in `/etc/profile.d/java.sh`.
   - Synchronize time using `chronyc` or `timedatectl`.

2. **Set Up the Shared Database**
   - Install and configure your database on a dedicated DB server (not on the akaBot nodes).
   - Create the akaBot database and user as documented in the respective database guide.
   - Ensure each akaBot node can connect to the database server on port 3306 / 5432 / 1433.

3. **Install akaBot Center on Node 1**
   - Copy the akaBot Center 4.x tar.gz package to `/opt/akabot/center`.
   - Extract: `tar -xzf akabotcenter-4x.tar.gz -C /opt/akabot/center`
   - Configure `application.yml` with the shared database connection and the load balancer hostname for `server.address`.

4. **Initialize the Database (Run Once from Node 1 Only)**
   - Execute: `/opt/akabot/center/bin/db-init.sh`
   - This step should only be run once; running it on subsequent nodes will cause errors.

5. **Configure ActiveMQ for Shared Store HA**
   - Edit `activemq.xml` on both nodes to use a shared KahaDB store on a network file system (NFS).
   - Set the broker to `persistent="true"` and point `kahaDB directory` to the NFS mount path.

6. **Install akaBot Center on Node 2 (and Additional Nodes)**
   - Repeat steps 3 for Node 2 but skip the database initialization in step 4.
   - Use the same `application.yml` configuration as Node 1.

7. **Register akaBot Center as a systemd Service on Each Node**
   - Copy `akabotcenter.service` to `/etc/systemd/system/`.
   - Run `systemctl daemon-reload && systemctl enable akabotcenter`.

8. **Configure the Load Balancer**
   - Set up HAProxy or Nginx to balance HTTP/HTTPS traffic across Node 1 and Node 2.
   - Configure health check endpoint: `GET /center/actuator/health`.

9. **Start the Services**
   - Start akaBot Center on all nodes: `systemctl start akabotcenter`.
   - Verify both nodes register with the load balancer and are responding to health checks.

## Notes and Warnings

> **Note:** Only run the database initialization script (`db-init.sh`) on the first node. Running it on subsequent nodes will drop and recreate tables, resulting in data loss.

> **Warning:** The NFS share used for ActiveMQ's shared store must have adequate I/O performance. Network storage with high latency can degrade message broker performance significantly.

> **Note:** Ensure all akaBot Center nodes use the same application secret key configured in `application.yml`. Mismatched keys will cause session sharing failures and robot authentication errors.
