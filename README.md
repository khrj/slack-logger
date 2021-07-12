<div align="center">
    <img src="assets/logo.svg" width="400" height="400" alt="slack_logger illustration">
    <h1>Slack Logger</h1>
    <p>
        <b>Logger for <a href="https://github.com/slack-deno">slack-deno</a> packages. Deno port of <a href="https://www.npmjs.com/package/@slack/logger">@slack/logger</a></b>
    </p>
    <p>
        <img alt="build status" src="https://img.shields.io/github/workflow/status/khrj/slack-logger/Deno?label=checks" >
        <img alt="language" src="https://img.shields.io/github/languages/top/khrj/slack-logger" >
        <img alt="code size" src="https://img.shields.io/github/languages/code-size/khrj/slack-logger">
        <img alt="issues" src="https://img.shields.io/github/issues/khrj/slack-logger" >
        <img alt="license" src="https://img.shields.io/github/license/khrj/slack-logger">
        <img alt="version" src="https://img.shields.io/github/v/release/khrj/slack-logger">
    </p>
    <p>
        <b><a href="https://deno.land/x/slack_logger">View on deno.land</a></b>
    </p>
    <br>
    <br>
    <br>
</div>

## Usage

```ts
import { LogLevel, ConsoleLogger } from "https://deno.land/x/slack_logger@3.0.2/mod.ts"
const logger = new ConsoleLogger()

logger.setName(`MyLogger`)
logger.setLevel(LogLevel.INFO)

logger.debug(1, 2, 3)
logger.info(1, 2, 3)
logger.warn(1, 2, 3)
logger.error(1, 2, 3)
```

## API

See [generated documentation](https://doc.deno.land/https/deno.land/x/slack_logger@3.0.2/mod.ts)

## Supporters

[![Stargazers repo roster for @khrj/slack-logger](https://reporoster.com/stars/khrj/slack-logger)](https://github.com/khrj/slack-logger/stargazers)

[![Forkers repo roster for @khrj/slack-logger](https://reporoster.com/forks/khrj/slack-logger)](https://github.com/khrj/slack-logger/network/members)

## Related

- [Deno Slack SDK](https://github.com/slack-deno/deno-slack-sdk)
- [Deno modules](https://github.com/khrj/deno-modules)
