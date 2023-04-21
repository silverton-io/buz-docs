---
sidebar_position: 6
---

# Splunk

**🟢 Supported**

The Splunk sink writes events into the configured indices.


## Sample Splunk Sink Configuration

```
sinks:
  - name: splunk
    type: splunk
    deliveryRequired: true
    url: https://<HOST>.splunkcloud.com:8088/services/collector/raw
    token: abdf41b4-f6e8-46a7-bb80-d349181af78c
    defaultOutput: main # This is tied to splunk HEC and is moot for now
    deadletterOutput: main # This is tied to splunk HEC and is moot for now
```
