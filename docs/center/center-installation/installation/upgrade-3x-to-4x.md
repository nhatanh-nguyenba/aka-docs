---
id: upgrade-3x-to-4x
title: Upgrade akaBot Center from version 3x to version 4x
sidebar_label: Upgrade akaBot Center from version 3x to version 4x
sidebar_position: 15
displayed_sidebar: centerSidebar
---

# Upgrade akaBot Center from version 3x to version 4x

Upgrading from akaBot Center 3.x to 4.x is a major version upgrade that introduces breaking changes in configuration, database schema, and component architecture. This guide provides a step-by-step path for performing this upgrade safely with minimal downtime.

## Prerequisites

- akaBot Center 3.x currently installed and operational
- Full backup of the existing database and configuration files completed
- Java JDK 17 available on the server (3.x used JDK 11)
- akaBot Center 4.x installation package obtained from the akaBot support portal
- A maintenance window scheduled (downtime required for this upgrade)
- All connected robot agents will need to be upgraded to 4.x after the Center upgrade

## Upgrade Steps

1. **Back Up the Existing System**
   - Stop akaBot Center 3.x: `net stop akabotcenter` (Windows) or `systemctl stop akabotcenter` (Linux).
   - Create a full backup of the database using your database tool (mysqldump, pg_dump, or SQL Server Backup).
   - Copy the entire `C:\akabot\center` (Windows) or `/opt/akabot/center` (Linux) directory to a backup location.

2. **Record Existing Configuration**
   - Note all custom settings from `application.properties` / `application.yml`:
     - Database connection details
     - Server port and address
     - LDAP or SSO configuration (if applicable)
     - Any custom timeout or pool settings

3. **Upgrade Java to JDK 17**
   - Install Java JDK 17 and update `JAVA_HOME` to point to the new JDK.
   - Verify: `java -version` should report version 17.x.

4. **Extract akaBot Center 4.x**
   - Extract the 4.x package to a new directory (e.g., `C:\akabot\center4`).
   - Do NOT overwrite the existing 3.x installation directory.

5. **Migrate Configuration**
   - Open the 4.x `application.yml` and replicate all settings from the 3.x configuration.
   - Note that the configuration format may have changed; refer to the 4.x configuration reference guide.

6. **Run the Database Migration Script**
   - Execute the migration script: `bin\db-migrate-3x-to-4x.bat` (Windows) or `bin/db-migrate-3x-to-4x.sh` (Linux).
   - Review migration output for any errors before proceeding.

7. **Unregister the Old Windows Service (Windows Only)**
   - Navigate to the old installation `bin` directory and run `uninstall-service.bat`.

8. **Install and Start akaBot Center 4.x**
   - Run `install-service.bat` (or create a systemd service on Linux) for the 4.x installation.
   - Start the service and monitor logs for startup errors.

9. **Upgrade Robot Agents**
   - Upgrade each connected akaBot Agent from 3.x to 4.x following the agent upgrade guide.
   - Reconnect agents and verify they appear as Connected in the portal.

10. **Validate the Upgrade**
    - Log in to the akaBot Center 4.x portal.
    - Verify all workflows, schedules, robot registrations, and user accounts are intact.
    - Run a test automation to confirm end-to-end functionality.

## Notes and Warnings

> **Warning:** This is a major upgrade. Do not skip the backup step. If any step fails, you will need the backup to roll back to the 3.x installation.

> **Warning:** akaBot Agent 3.x is not compatible with akaBot Center 4.x. All agents must be upgraded after the Center upgrade. During the transition, robots will appear offline until their agents are updated.

> **Note:** Review the 4.x release notes for any deprecated features or changed APIs before beginning the upgrade, especially if your workflows use custom integrations.
