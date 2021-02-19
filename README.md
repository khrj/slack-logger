<div align="center">
    <img src="assets/logo.svg" width="400" height="400" alt="slack_logger illustration">
    <h1>Slack Logger</h1>
    <p>
        <b>Logger for <a href="https://github.com/slack-deno">slack-deno</a> packages. Deno port of <a href="https://www.npmjs.com/package/@slack/logger">@slack/logger</a></b>
    </p>
    <p>
        <img alt="build status" src="https://img.shields.io/github/workflow/status/slack-deno/logger/Deno?label=checks" >
        <img alt="language" src="https://img.shields.io/github/languages/top/slack-deno/logger" >
        <img alt="code size" src="https://img.shields.io/github/languages/code-size/slack-deno/logger">
        <img alt="issues" src="https://img.shields.io/github/issues/slack-deno/logger" >
        <img alt="license" src="https://img.shields.io/github/license/slack-deno/logger">
        <img alt="version" src="https://img.shields.io/github/v/release/slack-deno/logger">
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
import { LogLevel, ConsoleLogger } from "https://deno.land/x/slack_logger@3.0.1/mod.ts"
const logger = new ConsoleLogger()

logger.setName(`MyLogger`)
logger.setLevel(LogLevel.INFO)

logger.debug(1, 2, 3)
logger.info(1, 2, 3)
logger.warn(1, 2, 3)
logger.error(1, 2, 3)
```

## API

See [generated documentation](https://doc.deno.land/https/deno.land/x/slack_logger@3.0.1/mod.ts)

## Supporters

[![Stargazers repo roster for @slack-deno/logger](https://reporoster.com/stars/slack-deno/logger)](https://github.com/slack-deno/logger/stargazers)

[![Forkers repo roster for @slack-deno/logger](https://reporoster.com/forks/slack-deno/logger)](https://github.com/slack-deno/logger/network/members)

## Related

- [Deno modules](https://github.com/KhushrajRathod/DenoModules)
