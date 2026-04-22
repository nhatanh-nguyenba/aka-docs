---
id: backup-upgrade
title: Backup and Upgrade
sidebar_label: Backup and Upgrade
sidebar_position: 18
displayed_sidebar: centerSidebar
---

# Backup and Upgrade

Regular backups and a well-defined upgrade process are essential for maintaining the reliability and continuity of your akaBot Center deployment. This guide describes the recommended backup strategy and general upgrade procedure that applies to all akaBot Center patch and minor version upgrades.

## Prerequisites

- akaBot Center installed and operational
- Sufficient disk space for backup files (at least 2x the size of the database and application directory)
- Database backup tools: `mysqldump` (MySQL), `pg_dump` (PostgreSQL), or SQL Server Management Studio (MSSQL)
- Administrator or root access to the akaBot Center server
- The target upgrade package obtained from the akaBot support portal (for upgrade operations)

## Backup Steps

1. **Schedule a Maintenance Window**
   - Notify all stakeholders and robot operators of the planned downtime.
   - Stop all running automation jobs before proceeding.

2. **Stop the akaBot Center Service**
   - Windows: `net stop akabotcenter`
   - Linux: `systemctl stop akabotcenter`

3. **Back Up the Database**
   - MySQL:
     ```bash
     mysqldump -u akabot -p akabot_center > akabot_backup_$(date +%Y%m%d).sql
     ```
   - PostgreSQL:
     ```bash
     pg_dump -U akabot_pg akabot_center > akabot_backup_$(date +%Y%m%d).sql
     ```
   - MSSQL: Use SQL Server Management Studio or `sqlcmd` to create a full backup.

4. **Back Up the Application Directory**
   - Copy the entire akaBot Center directory:
     - Windows: `xcopy /E /I C:\akabot\center4 C:\akabot\backup\center4_<date>`
     - Linux: `cp -r /opt/akabot/center /opt/akabot/backup/center_$(date +%Y%m%d)`

5. **Store Backups Securely**
   - Transfer backup files to a remote storage location (e.g., network share, object storage, or tape).
   - Verify backup integrity by checking file sizes and, periodically, performing test restores.

## Upgrade Steps

1. **Review the Release Notes**
   - Read the target version's release notes for breaking changes, new prerequisites, or migration requirements.

2. **Restore from Backup if Needed Before Upgrade**
   - Confirm you have a verified recent backup before starting the upgrade.

3. **Extract the Upgrade Package**
   - Extract the new akaBot Center package to a staging directory.

4. **Apply the Upgrade**
   - Run the provided upgrade script: `bin\upgrade.bat` (Windows) or `bin/upgrade.sh` (Linux).
   - The script will update application files, run any required database migration scripts, and preserve your existing configuration.

5. **Verify Configuration**
   - Compare the upgraded `application.yml` with your backup to ensure no custom settings were overwritten.

6. **Start the Service and Validate**
   - Start akaBot Center and monitor logs for errors.
   - Log in to the portal, verify functionality, and confirm robot agents reconnect successfully.

## Notes and Warnings

> **Note:** Automate regular database backups using scheduled tasks (Windows Task Scheduler or Linux cron) to ensure backups occur daily without manual intervention.

> **Warning:** Never upgrade directly on the production system without first testing the upgrade procedure on a staging environment that mirrors your production configuration.

> **Note:** Keep at least three recent backup sets (daily/weekly rotation) to ensure you can roll back to a known-good state in case of upgrade failures or data corruption discovered after the upgrade.
