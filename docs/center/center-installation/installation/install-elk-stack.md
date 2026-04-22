---
id: install-elk-stack
title: Install ELK Stack for akaBot Center
sidebar_label: Install ELK Stack for akaBot Center
sidebar_position: 5
displayed_sidebar: centerSidebar
---

# Install ELK Stack for akaBot Center

The ELK Stack (Elasticsearch, Logstash, and Kibana) can be integrated with akaBot Center to provide centralized log management, real-time search, and visualization of automation activity logs. This guide covers how to install and configure ELK Stack to work with akaBot Center on Windows or Linux environments.

## Prerequisites

- akaBot Center 4.x installed and running
- A dedicated server or VM for ELK Stack (separate from the akaBot Center server is recommended for production)
- Minimum 8 GB RAM and 100 GB disk for the ELK server
- Java JDK 17 (required by Elasticsearch and Logstash)
- Network connectivity between the akaBot Center server and the ELK server on port 5044 (Logstash) and 9200 (Elasticsearch)
- Administrator or root access to the ELK server

## Installation Steps

1. **Install Elasticsearch**
   - Download the Elasticsearch 8.x package from the official Elastic website.
   - Extract and configure `elasticsearch.yml`:
     - Set `network.host: 0.0.0.0` (or your server IP)
     - Set `cluster.name: akabot-logs`
   - Start Elasticsearch and verify it is running: `curl http://localhost:9200`

2. **Install Logstash**
   - Download and extract Logstash 8.x.
   - Create a pipeline configuration file at `logstash/pipeline/akabot.conf`:
     ```
     input { beats { port => 5044 } }
     filter { json { source => "message" } }
     output { elasticsearch { hosts => ["http://localhost:9200"] index => "akabot-logs-%{+YYYY.MM.dd}" } }
     ```
   - Start Logstash with: `bin/logstash -f pipeline/akabot.conf`

3. **Install Kibana**
   - Download and extract Kibana 8.x.
   - In `kibana.yml`, set `elasticsearch.hosts: ["http://localhost:9200"]`.
   - Start Kibana and access the UI at `http://<elk-server>:5601`.

4. **Install Filebeat on the akaBot Center Server**
   - Download and install Filebeat on the akaBot Center server.
   - Configure `filebeat.yml` to ship logs from `C:\akabot\center4\logs\*.log` to Logstash at `<elk-server>:5044`.
   - Start the Filebeat service.

5. **Configure akaBot Center Logging**
   - Open `C:\akabot\center4\conf\logback.xml`.
   - Set the log output pattern to JSON format for compatibility with Logstash.
   - Restart the akaBot Center service.

6. **Create Kibana Index Pattern**
   - In Kibana, navigate to **Management** > **Index Patterns**.
   - Create a pattern matching `akabot-logs-*` and set `@timestamp` as the time field.

7. **Verify Log Ingestion**
   - Trigger some activity in akaBot Center (e.g., start a robot).
   - In Kibana's **Discover** view, confirm that new log entries appear in near real-time.

## Notes and Warnings

> **Note:** All three ELK components (Elasticsearch, Logstash, Kibana) should be the same version to avoid compatibility issues.

> **Warning:** Elasticsearch by default listens on all network interfaces. In production, configure authentication and TLS encryption, or restrict access via firewall rules to prevent unauthorized access to log data.

> **Note:** ELK Stack can consume significant resources. Monitor the ELK server's CPU and memory usage after initial deployment and adjust the JVM heap settings in `jvm.options` if needed.
