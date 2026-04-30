---
id: upgrade-activemq
title: Upgrade ActiveMQ Version in akaBot Center
sidebar_label: Upgrade ActiveMQ Version in akaBot Center
sidebar_position: 16
displayed_sidebar: centerSidebar
---

# Upgrade ActiveMQ Version in akaBot Center

Apache ActiveMQ is the message broker bundled with akaBot Center for handling communication between the Center and robot agents. Upgrading ActiveMQ may be required to address security vulnerabilities, obtain bug fixes, or improve performance. This guide describes the safe procedure for upgrading the embedded ActiveMQ version within an existing akaBot Center installation.

## Prerequisites

- akaBot Center 4.x installed and running
- The target ActiveMQ version package (downloaded from the Apache ActiveMQ website)
- A maintenance window scheduled — akaBot Center must be stopped during the upgrade
- A full backup of the `activemq-data` directory (contains persistent message queues)
- Administrator or root access to the akaBot Center server
- Confirmation that the target ActiveMQ version is compatible with your akaBot Center version (check the release notes)

## Upgrade Steps

1. **Stop akaBot Center**
   - Windows: `net stop akabotcenter`
   - Linux: `systemctl stop akabotcenter`
   - Verify all processes have stopped before proceeding.

2. **Back Up the Existing ActiveMQ Data**
   - Copy the `activemq-data` directory to a safe backup location:
     - Windows: `C:\akabot\center4\data\activemq-data`
     - Linux: `/opt/akabot/center/data/activemq-data`

3. **Back Up the Existing ActiveMQ Configuration**
   - Copy `conf\activemq.xml` (and any referenced files) to a backup location.

4. **Extract the New ActiveMQ Package**
   - Download the target ActiveMQ release (e.g., 5.18.x).
   - Extract it to a temporary directory.

5. **Replace ActiveMQ Libraries**
   - Navigate to the akaBot Center `lib` directory.
   - Remove or rename the existing `activemq-*.jar` files.
   - Copy the new `activemq-broker-*.jar`, `activemq-client-*.jar`, and related JARs from the new ActiveMQ distribution into the `lib` directory.

6. **Update the ActiveMQ Configuration (if required)**
   - Compare the existing `activemq.xml` with the sample configuration from the new ActiveMQ version.
   - Apply any required syntax or property changes as described in the ActiveMQ upgrade guide.

7. **Start akaBot Center**
   - Windows: `net start akabotcenter`
   - Linux: `systemctl start akabotcenter`

8. **Verify the Upgrade**
   - Check the akaBot Center logs for ActiveMQ startup messages.
   - Confirm the broker version in the logs matches the new version.
   - Verify that robot agents reconnect successfully and jobs execute normally.

## Notes and Warnings

> **Warning:** Do not upgrade ActiveMQ while robot jobs are running. Always stop all automation activity and take a maintenance window before performing the upgrade.

> **Note:** ActiveMQ stores persistent messages in the `activemq-data` directory. Backing this up ensures that any messages queued at the time of upgrade are not lost.

> **Warning:** ActiveMQ major version upgrades (e.g., 5.15 to 5.18) may include breaking changes in configuration syntax or network protocol. Review the ActiveMQ release notes and migration guide carefully before upgrading across major versions.
