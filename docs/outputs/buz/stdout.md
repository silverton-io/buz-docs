---
sidebar_position: 4
---


# Stdout

**🟢 Supported**


The stdout sink writes colorized events to.... stdout! It is especially useful when wanting feedback during development or when taking Buz for a test drive.


## Sample Stdout Sink Configuration

```
sinks:
  - name: easyfeedback
    type: stdout
    deliveryRequired: true
    defaultOutput: console
    deadletterOutput: console
```
