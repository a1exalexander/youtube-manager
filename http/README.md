# Media Scout API

## Setup

Plugin: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

Add next code to the `.vscode/settings.json` file:

```json
{
  "rest-client.environmentVariables": {
    "$shared": {
        "dev_url": "http://dev.api.mediascout.co/api",
        "fake_url": "https://media-scout-fake-server.herokuapp.com/api"
    },
  }
}
```