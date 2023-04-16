# Filesystem

**🟢 Supported**

The `fs` registry backend uses jsonschemas stored on the local filesystem to back the onboard schema registry.

## Sample Filesystem Registry Backend Configuration

```
registry:
  backend:
    type: fs                        # The backend type
    path: /some/path/somewhere      # The path to consider as root
```
