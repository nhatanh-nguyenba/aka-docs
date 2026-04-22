---
id: license-activation
title: License Activation
sidebar_label: License Activation
sidebar_position: 3
displayed_sidebar: centerSidebar
---

# License Activation

License activation is required to unlock the full functionality of akaBot Center. After completing the installation, you must activate a valid license to enable robot management, workflow scheduling, and all other enterprise features. akaBot supports both online and offline activation methods.

## Prerequisites

- akaBot Center must be successfully installed and running before attempting activation.
- You must have received a valid license key from the akaBot sales or support team.
- For online activation, the server must have outbound internet access to reach the akaBot licensing server.
- For offline activation, contact akaBot support to obtain an offline license file.

## Activation Steps

1. Open your browser and navigate to the akaBot Center web portal (e.g., `http://<server-ip>:8080/center`).
2. Log in using the administrator credentials configured during installation.
3. Navigate to **Administration** > **License Management** from the left-hand menu.
4. Click the **Activate License** button.
5. In the dialog that appears, enter your license key in the provided field.
6. Select **Online Activation** if the server has internet access, or **Offline Activation** if it does not.
7. For online activation, click **Activate** and wait for the system to contact the licensing server.
8. For offline activation, download the activation request file, send it to akaBot support, then upload the received license response file.
9. Once activation is successful, the license details (expiry date, number of robots, modules) will be displayed on the License Management page.

## Notes and Warnings

> **Note:** Each license key can only be activated on one akaBot Center instance. Attempting to use the same key on multiple instances will result in an activation error.

> **Warning:** If your license expires, akaBot Center will enter a restricted mode where existing automations continue to run but new robots cannot be added and certain management features will be disabled. Renew your license before expiry to avoid disruption.

> **Note:** After activation, restart the akaBot Center service to ensure all licensed features are fully enabled.
