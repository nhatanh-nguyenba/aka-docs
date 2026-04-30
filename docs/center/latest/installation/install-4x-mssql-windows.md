---
id: install-4x-mssql-windows
title: Install Akabot Center 4X and MSSQL on Microsoft Windows
sidebar_label: Install Akabot Center 4X and MSSQL on Microsoft Windows
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# Install Akabot Center 4X and MSSQL on Microsoft Windows

This guide describes the process for installing akaBot Center 4.x using Microsoft SQL Server (MSSQL) as the database backend on a Windows Server environment. MSSQL is recommended for organizations that already manage a Microsoft data platform or require enterprise-grade database features such as Always On availability groups.

## Prerequisites

- Windows Server 2019 or 2022 (64-bit)
- Microsoft SQL Server 2019 or 2022 (Standard or Enterprise Edition) installed and running
- SQL Server Management Studio (SSMS) for database administration
- Java JDK 17 or later with `JAVA_HOME` configured
- akaBot Center 4.x installation package
- Minimum 16 GB RAM and 100 GB SSD free space
- SQL Server TCP/IP protocol enabled and port 1433 accessible

## Installation Steps

1. **Prepare the SQL Server Database**
   - Open SSMS and connect to your SQL Server instance.
   - Create a new database:
     ```sql
     CREATE DATABASE AkaBotCenter COLLATE SQL_Latin1_General_CP1_CI_AS;
     ```
   - Create a SQL login for akaBot:
     ```sql
     CREATE LOGIN akabot_user WITH PASSWORD = '<strong_password>';
     USE AkaBotCenter;
     CREATE USER akabot_user FOR LOGIN akabot_user;
     ALTER ROLE db_owner ADD MEMBER akabot_user;
     ```

2. **Enable TCP/IP on SQL Server**
   - Open **SQL Server Configuration Manager**.
   - Under **SQL Server Network Configuration**, select **Protocols for MSSQLSERVER**.
   - Right-click **TCP/IP** and choose **Enable**. Restart the SQL Server service.

3. **Extract the akaBot Center Package**
   - Extract the akaBot Center 4.x archive to `C:\akabot\center4`.

4. **Configure MSSQL Connection**
   - Open `C:\akabot\center4\conf\application.yml`.
   - Set the datasource type to `mssql` and provide the JDBC URL:
     ```
     url: jdbc:sqlserver://localhost:1433;databaseName=AkaBotCenter;encrypt=false
     username: akabot_user
     password: <strong_password>
     ```

5. **Run Database Initialization**
   - Run `db-init.bat` from `C:\akabot\center4\bin` as an administrator.

6. **Register and Start the Windows Service**
   - Execute `install-service.bat` to register akaBot Center as a Windows service.
   - Start the service via Services Manager or `net start akabotcenter`.

7. **Verify the Installation**
   - Navigate to `http://<server-ip>:8080/center` in your browser.
   - Log in with admin credentials and confirm the portal loads correctly.

## Notes and Warnings

> **Note:** Ensure SQL Server Browser service is running if you are using a named SQL Server instance instead of the default instance.

> **Warning:** Using Windows Authentication (Integrated Security) with the JDBC connection requires additional configuration of the Microsoft JDBC driver and may not be supported in all deployment scenarios. Use SQL authentication for simplicity.

> **Note:** Regularly back up the `AkaBotCenter` database using SQL Server's built-in backup tools to prevent data loss.
