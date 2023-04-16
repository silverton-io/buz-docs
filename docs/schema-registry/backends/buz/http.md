# HTTP/S

**🟢 Supported**

The `http` and `https` cache backends use jsonschemas stored at remote HTTP paths to back the onboard schema registry.

## Sample HTTP/S Cache Backend Configuration

```
registry:
  backend:
    type: https                     # The backend type
    host: registry.silverton.io     # The schema host
    path: /some/path/somewhere      # The path to consider as root
```
