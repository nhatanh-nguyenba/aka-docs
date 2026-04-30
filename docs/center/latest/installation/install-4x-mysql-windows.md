---
id: install-4x-mysql-windows
title: Install Akabot Center 4x and MySQL on Microsoft Windows
sidebar_label: Install Akabot Center 4x and MySQL on Microsoft Windows
sidebar_position: 2
displayed_sidebar: centerSidebar
---

# Install Akabot Center 4x and MySQL on Microsoft Windows

This guide walks you through installing akaBot Center version 4.x with MySQL 8.0 as the backend database on Microsoft Windows Server. Version 4.x introduces significant architectural improvements including enhanced security, better scalability, and support for high-density agent deployments.

## Prerequisites

- Windows Server 2019 or 2022 (64-bit)
- Java JDK 17 or later installed with `JAVA_HOME` set
- MySQL 8.0.x installation package
- akaBot Center 4.x installer from the akaBot support portal
- Apache Tomcat 10.x (bundled with the akaBot Center package)
- Minimum 16 GB RAM and 100 GB SSD free space
- Administrator access to the server

## Installation Steps

1. **Install and Configure MySQL 8.0**
   - Run the MySQL Installer, select **Server Only**, and complete the setup wizard.
   - Set a secure root password and configure MySQL to start automatically as a Windows Service.
   - Verify the MySQL service is running in Windows Services Manager.

2. **Prepare the akaBot Database**
   - Connect to MySQL as root and run:
     ```sql
     CREATE DATABASE akabot4 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
     CREATE USER 'akabot4user'@'localhost' IDENTIFIED BY '<strong_password>';
     GRANT ALL PRIVILEGES ON akabot4.* TO 'akabot4user'@'localhost';
     FLUSH PRIVILEGES;
     ```

3. **Extract akaBot Center 4.x Package**
   - Extract the ZIP package to `C:\akabot\center4`.

4. **Configure Application Properties**
   - Edit `C:\akabot\center4\conf\application.yml`.
   - Update the datasource section with your MySQL host, database name, username, and password.

5. **Initialize the Database Schema**
   - Open a command prompt with administrator rights.
   - Navigate to `C:\akabot\center4\bin` and run `db-init.bat`.

6. **Configure ActiveMQ**
   - Open `C:\akabot\center4\conf\activemq.xml` and confirm the broker URL and port settings.
   - Ensure port 61616 is accessible within the network.

7. **Register akaBot Center as a Windows Service**
   - Run `install-service.bat` from `C:\akabot\center4\bin` with administrator privileges.

8. **Start the Service**
   - Open Services Manager, locate **akaBot Center**, and click **Start**.
   - Alternatively, run `net start akabotcenter` from an elevated command prompt.

9. **Access the Web Portal**
   - Open a browser and go to `http://<server-ip>:8080/center`.
   - Log in with default admin credentials and change the password immediately.

## Notes and Warnings

> **Note:** akaBot Center 4.x requires Java 17. Attempting to run with older JDK versions will cause startup failures.

> **Warning:** Ensure that the MySQL `max_connections` setting is sufficient for the expected number of concurrent robot connections. The default value (151) may be too low for production environments with many agents.

> **Note:** Keep the `application.yml` file secure, as it contains sensitive database credentials. Restrict file system permissions to the service account only.
