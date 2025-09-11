## GitHub Copilot Chat

- Extension Version: 0.28.5 (prod)
- VS Code: vscode/1.103.0
- OS: Mac

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.207.73.85 (1 ms)
- DNS ipv6 Lookup: ::ffff:20.207.73.85 (3 ms)
- Proxy URL: None (4 ms)
- Electron fetch (configured): HTTP 200 (36 ms)
- Node.js https: HTTP 200 (160 ms)
- Node.js fetch: HTTP 200 (374 ms)
- Helix fetch: HTTP 200 (246 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.22 (1 ms)
- DNS ipv6 Lookup: ::ffff:140.82.114.22 (1 ms)
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 403 (69 ms)
- Node.js https: HTTP 403 (685 ms)
- Node.js fetch: HTTP 403 (77 ms)
- Helix fetch: HTTP 403 (128 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).