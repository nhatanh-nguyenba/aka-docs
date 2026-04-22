---
id: standalone-windows-server
title: Installation Guide for Standalone Model on Windows Server (Network Edition)
sidebar_label: Installation Guide for Standalone Model on Windows Server (Network Edition)
sidebar_position: 7
displayed_sidebar: centerSidebar
---

# Installation Guide for Standalone Model on Windows Server (Network Edition)

The standalone deployment model places all akaBot Center components — the application server, database, and message broker — on a single Windows Server machine. This model is suitable for small to medium deployments where high availability is not required. The Network Edition enables multiple robots to connect to the Center over a corporate network.

## Prerequisites

- Windows Server 2019 or 2022 (64-bit), with at least 16 GB RAM and 100 GB SSD
- Java JDK 17 installed and `JAVA_HOME` set in system environment variables
- One of the supported databases installed: MySQL 8.0, MSSQL 2019+, or PostgreSQL 14+
- akaBot Center 4.x full installer package (Network Edition)
- Administrator access to the server
- Firewall rules allowing inbound TCP on ports 8080 (HTTP), 8443 (HTTPS), and 61616 (ActiveMQ)
- A static IP address or fully qualified domain name (FQDN) for the server

## Installation Steps

1. **Prepare the Server**
   - Ensure Windows is fully updated and all prerequisites are installed.
   - Disable Windows Defender Firewall temporarily during installation (re-enable after).

2. **Install and Configure the Database**
   - Follow the appropriate database installation guide (MySQL, MSSQL, or PostgreSQL).
   - Create the akaBot database schema and user as described in the respective guide.

3. **Extract the akaBot Center Package**
   - Extract the akaBot Center 4.x Network Edition ZIP to `C:\akabot\center`.

4. **Configure Application Settings**
   - Edit `C:\akabot\center\conf\application.yml` to set the correct database connection, server hostname, and port.
   - Set `server.address` to the server's IP or hostname to allow network access.

5. **Initialize the Database**
   - Run `C:\akabot\center\bin\db-init.bat` with elevated privileges.

6. **Configure ActiveMQ**
   - Review `C:\akabot\center\conf\activemq.xml`.
   - Ensure the `brokerURL` uses the server's IP or hostname for network accessibility.

7. **Install as a Windows Service**
   - Run `C:\akabot\center\bin\install-service.bat` as an administrator.

8. **Configure Firewall Rules**
   - Open Windows Defender Firewall and add inbound rules for ports 8080, 8443, and 61616.

9. **Start the akaBot Center Service**
   - Start the service via Services Manager or run `net start akabotcenter`.

10. **Register Robots**
    - On each robot machine, configure the akaBot Agent to connect to `http://<server-ip>:8080/center`.
    - Accept the robot connection requests in the akaBot Center web portal under **Robot Management**.

## Notes and Warnings

> **Note:** For production deployments, configure SSL/TLS on port 8443 and instruct all robots to connect using HTTPS for secure communication.

> **Warning:** The standalone model has no redundancy. If the server goes offline, all robot automation will be interrupted. Consider the High Availability model for mission-critical deployments.

> **Note:** Ensure the server's hostname or IP address does not change after robots are registered. IP changes will break existing robot connections and require re-registration.
