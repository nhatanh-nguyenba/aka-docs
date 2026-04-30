---
id: install-4x-postgresql-windows
title: Install Akabot Center 4X and PostgreSQL on Microsoft Windows
sidebar_label: Install Akabot Center 4X and PostgreSQL on Microsoft Windows
sidebar_position: 4
displayed_sidebar: centerSidebar
---

# Install Akabot Center 4X and PostgreSQL on Microsoft Windows

This guide describes how to install akaBot Center 4.x using PostgreSQL as the backend database on Microsoft Windows Server. PostgreSQL is an open-source relational database known for its reliability, extensibility, and standards compliance. It is a suitable choice for organizations preferring a cost-effective yet powerful database solution.

## Prerequisites

- Windows Server 2019 or 2022 (64-bit)
- PostgreSQL 14 or later downloaded from the official PostgreSQL website
- Java JDK 17 or later installed with `JAVA_HOME` configured
- akaBot Center 4.x installation package from the akaBot support portal
- pgAdmin 4 (optional but recommended for database administration)
- Minimum 16 GB RAM and 100 GB SSD free space
- Administrator privileges on the server

## Installation Steps

1. **Install PostgreSQL**
   - Run the PostgreSQL installer and follow the setup wizard.
   - Set a strong password for the `postgres` superuser.
   - Accept the default port (5432) and complete the installation.
   - Ensure the PostgreSQL service is set to start automatically.

2. **Create the akaBot Database and User**
   - Open pgAdmin or a psql command prompt and execute:
     ```sql
     CREATE USER akabot_pg WITH PASSWORD '<strong_password>';
     CREATE DATABASE akabot_center OWNER akabot_pg ENCODING 'UTF8';
     GRANT ALL PRIVILEGES ON DATABASE akabot_center TO akabot_pg;
     ```

3. **Configure pg_hba.conf (if needed)**
   - Locate `pg_hba.conf` (typically in `C:\Program Files\PostgreSQL\14\data\`).
   - Ensure the entry for local connections uses `md5` or `scram-sha-256` authentication.
   - Restart the PostgreSQL service after any changes.

4. **Extract the akaBot Center Package**
   - Extract the akaBot Center 4.x archive to `C:\akabot\center4`.

5. **Configure PostgreSQL Connection**
   - Open `C:\akabot\center4\conf\application.yml`.
   - Update the datasource section:
     ```
     url: jdbc:postgresql://localhost:5432/akabot_center
     username: akabot_pg
     password: <strong_password>
     driver-class-name: org.postgresql.Driver
     ```

6. **Initialize the Database Schema**
   - Open an elevated command prompt, navigate to `C:\akabot\center4\bin`, and run `db-init.bat`.

7. **Register and Start the Windows Service**
   - Run `install-service.bat` from `C:\akabot\center4\bin` as administrator.
   - Start the service using Services Manager or `net start akabotcenter`.

8. **Verify the Installation**
   - Open a browser and go to `http://<server-ip>:8080/center`.
   - Log in with the administrator credentials and verify the portal is accessible.

## Notes and Warnings

> **Note:** Ensure PostgreSQL's `max_connections` is set appropriately. For production deployments with many robots, a value of 200 or higher is recommended. Edit `postgresql.conf` and restart the service to apply changes.

> **Warning:** The PostgreSQL JDBC driver must be included in the akaBot Center classpath. The 4.x package ships with the driver, but verify the version matches your PostgreSQL server version.

> **Note:** On Windows, the PostgreSQL service account may require additional permissions to write to certain directories. Ensure the service account has read/write access to the akaBot data directory.
