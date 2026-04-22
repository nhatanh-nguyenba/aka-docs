---
id: auto-login
title: Auto-Login Setup & Troubleshooting
sidebar_label: Auto-Login Setup & Troubleshooting
sidebar_position: 13
displayed_sidebar: centerSidebar
---

# Auto-Login Setup & Troubleshooting

The auto-login feature in akaBot Center allows robot agents to automatically authenticate with the Center without requiring manual credential entry at each connection. This is particularly useful for unattended automation scenarios where robots must start and connect automatically after system restarts or scheduled maintenance windows.

## Prerequisites

- akaBot Center 4.x installed and running
- akaBot Agent installed on the robot machine
- A valid robot user account created in akaBot Center with appropriate permissions
- The robot machine must have network connectivity to the akaBot Center server
- Administrator access to the robot machine for service and credential configuration

## Setup Steps

1. **Create a Dedicated Robot User in akaBot Center**
   - Log in to the akaBot Center portal as an administrator.
   - Navigate to **User Management** > **Add User**.
   - Create a user with the **Robot** role and set a strong password.

2. **Configure the akaBot Agent Service**
   - On the robot machine, open the akaBot Agent configuration file at `C:\akabot\agent\conf\agent.properties`.
   - Set the Center URL: `center.url=http://<center-server>:8080/center`
   - Set the auto-login credentials:
     ```
     agent.auto-login=true
     agent.username=<robot_user>
     agent.password=<encrypted_password>
     ```

3. **Encrypt the Password**
   - Use the akaBot Agent encryption utility:
     ```
     C:\akabot\agent\bin\encrypt-password.bat <plain_password>
     ```
   - Copy the encrypted output and paste it as the value of `agent.password`.

4. **Configure the Agent to Start Automatically**
   - Ensure the akaBot Agent is registered as a Windows Service set to start automatically.
   - Run `install-service.bat` if not already registered.

5. **Test Auto-Login**
   - Restart the akaBot Agent service.
   - In the akaBot Center portal, navigate to **Robot Management** and confirm the robot appears as **Connected**.

## Troubleshooting

| Issue | Possible Cause | Resolution |
|---|---|---|
| Robot shows as Disconnected | Incorrect Center URL | Verify `center.url` in `agent.properties` |
| Authentication failure | Wrong credentials or expired password | Re-encrypt the password and update `agent.properties` |
| Service does not start | Java not found | Verify `JAVA_HOME` is set correctly on the robot machine |
| Intermittent disconnections | Network instability | Check network path and increase `agent.reconnect-interval` |

## Notes and Warnings

> **Warning:** Do not store plain-text passwords in `agent.properties`. Always use the encryption utility to protect credentials.

> **Note:** If the robot machine rejoins the domain or has its hostname changed, the robot registration in akaBot Center may need to be updated to reflect the new identity.

> **Note:** Auto-login credentials are tied to the robot user account. If the account password is changed in akaBot Center, update `agent.properties` with the new encrypted password and restart the agent service.
