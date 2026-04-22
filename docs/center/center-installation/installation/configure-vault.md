---
id: configure-vault
title: Configure akaBot Center to use Vault
sidebar_label: Configure akaBot Center to use Vault
sidebar_position: 12
displayed_sidebar: centerSidebar
---

# Configure akaBot Center to use Vault

HashiCorp Vault integration allows akaBot Center to securely store and retrieve sensitive credentials such as database passwords, API keys, and robot credentials. This eliminates the need to store plain-text secrets in configuration files and provides centralized secret management with access auditing.

## Prerequisites

- akaBot Center 4.x installed and running
- HashiCorp Vault 1.12 or later installed and initialized
- Vault is unsealed and accessible from the akaBot Center server
- A Vault token or AppRole credentials with read access to the required secret paths
- Administrator access to both the akaBot Center server and the Vault instance
- Network connectivity from the akaBot Center server to the Vault API (typically port 8200)

## Configuration Steps

1. **Create Secrets in Vault**
   - Log in to Vault and enable the KV secrets engine:
     ```bash
     vault secrets enable -path=akabot kv-v2
     ```
   - Store the required secrets:
     ```bash
     vault kv put akabot/database username=akabot_user password=<db_password>
     vault kv put akabot/activemq username=amq_user password=<amq_password>
     ```

2. **Create a Vault Policy for akaBot**
   - Create a policy file `akabot-policy.hcl`:
     ```hcl
     path "akabot/*" {
       capabilities = ["read", "list"]
     }
     ```
   - Apply the policy: `vault policy write akabot-policy akabot-policy.hcl`

3. **Create an AppRole for akaBot Center**
   - Enable AppRole auth: `vault auth enable approle`
   - Create the role:
     ```bash
     vault write auth/approle/role/akabot-center policies="akabot-policy" ttl=1h
     ```
   - Retrieve the Role ID and Secret ID:
     ```bash
     vault read auth/approle/role/akabot-center/role-id
     vault write -f auth/approle/role/akabot-center/secret-id
     ```

4. **Configure akaBot Center to Use Vault**
   - Edit `conf/application.yml` (or `bootstrap.yml` if using Spring Cloud Config):
     ```yaml
     spring:
       cloud:
         vault:
           host: <vault-server>
           port: 8200
           scheme: https
           authentication: APPROLE
           app-role:
             role-id: <role_id>
             secret-id: <secret_id>
           kv:
             enabled: true
             backend: akabot
     ```

5. **Update Configuration References**
   - Replace plain-text credentials in `application.yml` with Vault property references:
     ```yaml
     spring:
       datasource:
         username: ${akabot.database.username}
         password: ${akabot.database.password}
     ```

6. **Restart akaBot Center**
   - Restart the service and check the logs to confirm Vault secrets are being resolved successfully.

## Notes and Warnings

> **Note:** Ensure the Vault instance is highly available in production. If Vault becomes unreachable, akaBot Center will be unable to retrieve secrets and may fail to start or reconnect to the database.

> **Warning:** Protect the AppRole Secret ID as carefully as any other credential. Rotate the Secret ID regularly and use Vault's response wrapping feature to securely deliver it to the akaBot Center server.

> **Note:** If using Vault with TLS, import the Vault server's CA certificate into the Java truststore on the akaBot Center server to prevent SSL handshake failures.
