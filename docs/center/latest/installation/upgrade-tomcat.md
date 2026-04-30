---
id: upgrade-tomcat
title: How to Upgrade Apache Tomcat 10
sidebar_label: How to Upgrade Apache Tomcat 10
sidebar_position: 17
displayed_sidebar: centerSidebar
---

# How to Upgrade Apache Tomcat 10

Apache Tomcat is the web application server that hosts the akaBot Center application. Periodic upgrades of Tomcat are necessary to patch security vulnerabilities and maintain compatibility with the Java ecosystem. This guide explains how to safely upgrade the Tomcat instance bundled with akaBot Center to a newer Tomcat 10.x release.

## Prerequisites

- akaBot Center installed with an embedded Apache Tomcat 10.x deployment
- The target Tomcat 10.x release downloaded from the Apache Tomcat website (choose the same major version, e.g., 10.1.x)
- A maintenance window scheduled — akaBot Center will be offline during the upgrade
- A full backup of the current Tomcat `conf` directory and all custom configuration files
- Administrator or root access to the server

## Upgrade Steps

1. **Stop akaBot Center**
   - Windows: `net stop akabotcenter`
   - Linux: `systemctl stop akabotcenter`
   - Confirm that the Tomcat process is no longer running.

2. **Back Up the Current Tomcat Installation**
   - Copy the existing Tomcat directory to a backup location:
     - e.g., `C:\akabot\center4\tomcat` → `C:\akabot\center4\tomcat_backup_<date>`
   - Specifically ensure the following are backed up:
     - `conf\server.xml`
     - `conf\context.xml`
     - `conf\web.xml`
     - Any SSL keystore files referenced in `server.xml`

3. **Download and Extract the New Tomcat 10.x Release**
   - Download the binary ZIP/tar.gz from https://tomcat.apache.org.
   - Extract it to a temporary directory.

4. **Replace Tomcat Binaries**
   - Copy the `bin\` and `lib\` directories from the new Tomcat release into the akaBot Center Tomcat directory, overwriting the existing files.
   - Do NOT replace the `conf\`, `webapps\`, or `logs\` directories.

5. **Verify Configuration Compatibility**
   - Compare your existing `server.xml` and `web.xml` with the defaults from the new Tomcat release.
   - Apply any required updates for removed or changed configuration elements (check the Tomcat 10.x migration notes).

6. **Update File Permissions (Linux Only)**
   - Ensure the new `bin\` scripts are executable:
     ```bash
     chmod +x /opt/akabot/center/tomcat/bin/*.sh
     ```

7. **Start akaBot Center**
   - Windows: `net start akabotcenter`
   - Linux: `systemctl start akabotcenter`

8. **Verify the Upgrade**
   - Check the Tomcat startup logs in the `logs\` directory.
   - Confirm the new Tomcat version number appears in the startup log.
   - Access the akaBot Center portal and verify it loads normally.

## Notes and Warnings

> **Note:** Only upgrade within the same major version (e.g., 10.0.x to 10.1.x). Cross-major upgrades (e.g., Tomcat 9 to Tomcat 10) involve Jakarta EE namespace changes and require application code changes that must be coordinated with the akaBot product team.

> **Warning:** Do not overwrite the `conf\` directory with the new Tomcat defaults, as this would erase your custom `server.xml` settings including SSL/TLS configuration and connector ports.

> **Note:** After the upgrade, test all akaBot Center functionality including robot connections, job scheduling, and the web portal to ensure no regressions were introduced by the Tomcat update.
