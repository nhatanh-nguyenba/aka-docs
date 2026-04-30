---
id: install-3x-mysql-windows
title: Install Akabot Center 3x and MySQL on Microsoft Windows
sidebar_label: Install Akabot Center 3x and MySQL on Microsoft Windows
sidebar_position: 1
displayed_sidebar: centerSidebar
---

# Install Akabot Center 3x and MySQL on Microsoft Windows

This guide covers the installation of akaBot Center version 3.x together with MySQL 8.0 on a Microsoft Windows Server environment. Follow each step carefully to ensure a successful and stable installation.

## Prerequisites

- Windows Server 2016 or later (64-bit)
- Java JDK 11 or later installed and `JAVA_HOME` environment variable configured
- MySQL 8.0 installer downloaded from the official MySQL website
- akaBot Center 3.x installation package obtained from the akaBot support portal
- Administrator privileges on the target server
- At least 8 GB RAM and 50 GB free disk space

## Installation Steps

1. **Install MySQL 8.0**
   - Run the MySQL installer and choose **Server only** setup type.
   - Configure MySQL as a Windows Service with a strong root password.
   - Complete the installation and verify MySQL is running via Services Manager.

2. **Create the akaBot Database**
   - Open MySQL Workbench or a command prompt and log in as root.
   - Execute: `CREATE DATABASE akabot_center CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
   - Create a dedicated user: `CREATE USER 'akabot'@'localhost' IDENTIFIED BY '<password>';`
   - Grant privileges: `GRANT ALL PRIVILEGES ON akabot_center.* TO 'akabot'@'localhost'; FLUSH PRIVILEGES;`

3. **Extract the akaBot Center Package**
   - Extract the akaBot Center 3.x ZIP archive to `C:\akabot\center`.

4. **Configure Database Connection**
   - Open `C:\akabot\center\conf\application.properties`.
   - Set `spring.datasource.url=jdbc:mysql://localhost:3306/akabot_center`
   - Set `spring.datasource.username=akabot` and `spring.datasource.password=<password>`.

5. **Configure the Application Port**
   - In `application.properties`, set `server.port=8080` (or your preferred port).

6. **Run the Database Migration**
   - Open a command prompt in `C:\akabot\center\bin` and execute `migrate.bat`.

7. **Start akaBot Center**
   - Execute `startup.bat` from `C:\akabot\center\bin`.
   - Open your browser and navigate to `http://localhost:8080/center`.

8. **Verify the Installation**
   - Log in with the default administrator credentials.
   - Confirm that the dashboard loads without errors.

## Notes and Warnings

> **Note:** Change the default administrator password immediately after the first login to secure your installation.

> **Warning:** Do not use the MySQL root user for the akaBot database connection in production. Always use a dedicated database user with limited privileges.

> **Note:** If the server is behind a firewall, ensure that port 8080 (or your configured port) is open for inbound connections from client machines.
