---
id: configure-ldap
title: Configure akaBot Center to use LDAP for authentication
sidebar_label: Configure akaBot Center to use LDAP for authentication
sidebar_position: 11
displayed_sidebar: centerSidebar
---

# Configure akaBot Center to use LDAP for authentication

akaBot Center supports LDAP (Lightweight Directory Access Protocol) integration, allowing organizations to authenticate users against their existing directory services such as Microsoft Active Directory or OpenLDAP. This eliminates the need to manage separate user accounts within akaBot Center and enables centralized access control.

## Prerequisites

- akaBot Center 4.x installed and running
- Access to an LDAP or Active Directory server with a service account (bind DN) for read access
- The LDAP server's hostname or IP, port (typically 389 for LDAP or 636 for LDAPS), and base DN
- Administrator access to the akaBot Center server and web portal
- Network connectivity between the akaBot Center server and the LDAP server

## Configuration Steps

1. **Gather LDAP Information**
   - Obtain the following from your directory administrator:
     - LDAP host and port
     - Base DN (e.g., `dc=example,dc=com`)
     - Bind DN (service account, e.g., `cn=svc-akabot,ou=ServiceAccounts,dc=example,dc=com`)
     - Bind password
     - User search filter (e.g., `(sAMAccountName={0})` for Active Directory)
     - Group search base and filter (if using group-based roles)

2. **Edit the Application Configuration**
   - Open `/opt/akabot/center/conf/application.yml` (Linux) or `C:\akabot\center4\conf\application.yml` (Windows).
   - Add or update the LDAP section:
     ```yaml
     spring:
       ldap:
         urls: ldap://<ldap-server>:389
         base: dc=example,dc=com
         username: cn=svc-akabot,ou=ServiceAccounts,dc=example,dc=com
         password: <bind_password>
     akabot:
       auth:
         type: ldap
         user-search-filter: (sAMAccountName={0})
         group-search-base: ou=Groups,dc=example,dc=com
         group-search-filter: (member={0})
     ```

3. **Map LDAP Groups to akaBot Roles**
   - Log in to the akaBot Center portal as an admin.
   - Navigate to **Administration** > **Role Management**.
   - Map LDAP group DNs to akaBot Center roles (Administrator, Operator, Viewer, etc.).

4. **Test the LDAP Connection**
   - In the akaBot Center administration panel, use the **Test LDAP Connection** button to verify connectivity with the LDAP server.

5. **Restart akaBot Center**
   - Restart the akaBot Center service to apply the LDAP configuration changes.

6. **Verify LDAP Login**
   - Open the akaBot Center login page and enter an LDAP user's credentials.
   - Confirm that the user is authenticated and assigned the correct roles.

## Notes and Warnings

> **Note:** For secure LDAP communication, use LDAPS (port 636) or StartTLS. Import the LDAP server's SSL certificate into the Java truststore on the akaBot Center server if using LDAPS.

> **Warning:** If the LDAP server is unreachable, LDAP-authenticated users will be unable to log in. Ensure at least one local administrator account remains active as a fallback for emergency access.

> **Note:** LDAP group membership changes in Active Directory may not be immediately reflected in akaBot Center. Users may need to log out and log back in to pick up updated role assignments.
