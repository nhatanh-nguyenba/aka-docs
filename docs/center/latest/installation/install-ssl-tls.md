---
id: install-ssl-tls
title: Install/Create an SSL/TLS Certificate for Center
sidebar_label: Install/Create an SSL/TLS Certificate for Center
sidebar_position: 6
displayed_sidebar: centerSidebar
---

# Install/Create an SSL/TLS Certificate for Center

Securing akaBot Center with an SSL/TLS certificate is essential for production deployments. HTTPS ensures that all communication between robot agents, client browsers, and the akaBot Center server is encrypted and protected against interception. This guide covers both creating a self-signed certificate for testing and installing a CA-signed certificate for production.

## Prerequisites

- akaBot Center installed and running (Tomcat-based deployment)
- Java JDK 17 installed (includes the `keytool` utility)
- For production: a valid SSL certificate and private key from a trusted Certificate Authority (CA)
- Administrator access to the akaBot Center server
- OpenSSL installed (optional, for generating CSRs or converting certificate formats)

## Installation Steps

### Option A: Create a Self-Signed Certificate (Testing Only)

1. Open a command prompt and run the following `keytool` command:
   ```
   keytool -genkeypair -alias akabotcenter -keyalg RSA -keysize 2048 -validity 365 -keystore C:\akabot\center4\conf\keystore.jks -storepass <keystore_password>
   ```
2. Fill in the prompted information (organization, country, etc.).
3. Note the keystore path and password for the next step.

### Option B: Install a CA-Signed Certificate (Production)

1. Generate a Certificate Signing Request (CSR):
   ```
   keytool -certreq -alias akabotcenter -keystore C:\akabot\center4\conf\keystore.jks -file akabotcenter.csr
   ```
2. Submit the CSR to your CA and receive the signed certificate file (e.g., `akabotcenter.crt`).
3. Import the CA chain certificates into the keystore:
   ```
   keytool -import -alias root -trustcacerts -file root-ca.crt -keystore C:\akabot\center4\conf\keystore.jks
   ```
4. Import the signed certificate:
   ```
   keytool -import -alias akabotcenter -file akabotcenter.crt -keystore C:\akabot\center4\conf\keystore.jks
   ```

### Configure Tomcat for HTTPS

5. Open `C:\akabot\center4\conf\server.xml`.
6. Add or update the SSL Connector:
   ```xml
   <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"
              SSLEnabled="true" scheme="https" secure="true"
              keystoreFile="conf/keystore.jks" keystorePass="<keystore_password>"
              clientAuth="false" sslProtocol="TLS" />
   ```
7. Restart the akaBot Center service.
8. Access the portal at `https://<server-ip>:8443/center` to verify HTTPS is working.

## Notes and Warnings

> **Warning:** Self-signed certificates will trigger browser security warnings and are not suitable for production environments. Always use a CA-signed certificate in production.

> **Note:** To redirect all HTTP traffic to HTTPS, add a redirect rule in `server.xml` or configure your reverse proxy (e.g., Nginx, Apache HTTP Server) to enforce HTTPS.

> **Note:** Keep the keystore file and password secure. Loss of the keystore prevents certificate renewal and may require regenerating the certificate.
