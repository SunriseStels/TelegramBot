# Telegram bot

## bot can use socks5 proxy
For that you need: 
1. Download [Tor Browser](https://www.torproject.org/download/)
2. Open the torcc file with a text editor (Found in Tor Browser\Browser\TorBrowser\Data\Tor)
and find ```torcc``` file
3. Add the following lines: (configurations are described below)

```
EntryNodes {NL}
ExitNodes {NL}
StrictNodes 1
SocksPort 127.0.0.1:9050
```
4. Start Tor Browser

[![](https://sun9-54.userapi.com/c854028/v854028290/164932/qumrVX8WdGc.jpg)]()
