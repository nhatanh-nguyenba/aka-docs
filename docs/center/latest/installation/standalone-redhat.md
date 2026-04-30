---
id: standalone-redhat
title: Installation Guide for Standalone Model on Redhat v9.x
sidebar_label: Installation Guide for Standalone Model on Redhat v9.x
sidebar_position: 10
displayed_sidebar: centerSidebar
---

# Installation Guide for Standalone Model on Redhat v9.x

This guide covers deploying akaBot Center in a standalone configuration on Red Hat Enterprise Linux (RHEL) 9.x. In this model, all components run on a single server, making it suitable for development, testing, or small production environments where high availability is not a primary concern.

## Prerequisites

- Red Hat Enterprise Linux 9.x (64-bit), registered and subscribed for package updates
- Java JDK 17 installed (`sudo dnf install java-17-openjdk-devel -y`)
- One of the supported databases installed locally: MySQL 8.0, PostgreSQL 14, or MSSQL 2019
- akaBot Center 4.x Linux installation package
- `firewalld` configured to allow required ports
- Root or sudo access on the server
- Minimum 16 GB RAM and 100 GB SSD

## Installation Steps

1. **System Preparation**
   - Update the system: `sudo dnf update -y`
   - Set the hostname: `sudo hostnamectl set-hostname akabotcenter`
   - Disable SELinux enforcement or configure appropriate SELinux policies: `sudo setenforce 0` (temporarily) or configure a policy file.

2. **Install Java JDK 17**
   - Run: `sudo dnf install java-17-openjdk-devel -y`
   - Set `JAVA_HOME` in `/etc/profile.d/java.sh`:
     ```bash
     export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
     export PATH=$JAVA_HOME/bin:$PATH
     ```
   - Source the file: `source /etc/profile.d/java.sh`

3. **Install and Configure the Database**
   - Follow the appropriate database installation guide for your chosen database.
   - Create the akaBot database and dedicated user.

4. **Extract the akaBot Center Package**
   - Copy the package to the server and extract:
     ```bash
     sudo mkdir -p /opt/akabot/center
     sudo tar -xzf akabotcenter-4x-linux.tar.gz -C /opt/akabot/center
     ```

5. **Configure Application Settings**
   - Edit `/opt/akabot/center/conf/application.yml`.
   - Set the database connection URL, username, and password.
   - Set `server.port=8080` and `server.address=0.0.0.0`.

6. **Initialize the Database**
   - Run: `sudo /opt/akabot/center/bin/db-init.sh`

7. **Create a Dedicated System User**
   - `sudo useradd -r -s /bin/false akabotuser`
   - `sudo chown -R akabotuser:akabotuser /opt/akabot/center`

8. **Register as a systemd Service**
   - Copy the service file: `sudo cp /opt/akabot/center/bin/akabotcenter.service /etc/systemd/system/`
   - Enable and start: `sudo systemctl daemon-reload && sudo systemctl enable --now akabotcenter`

9. **Configure Firewall**
   - `sudo firewall-cmd --permanent --add-port=8080/tcp --add-port=8443/tcp --add-port=61616/tcp`
   - `sudo firewall-cmd --reload`

10. **Verify the Installation**
    - Check service status: `sudo systemctl status akabotcenter`
    - Open a browser and navigate to `http://<server-ip>:8080/center`.

## Notes and Warnings

> **Note:** If SELinux is enforcing, you may need to configure appropriate policies to allow akaBot Center to bind to the configured ports and access the file system. Consult your system administrator for SELinux policy configuration.

> **Warning:** Running akaBot Center as the root user is strongly discouraged. Always create and use a dedicated non-privileged system user as described in step 7.

> **Note:** Review the application logs at `/opt/akabot/center/logs/` if the service fails to start. Common issues include incorrect database credentials or port conflicts with other services.
