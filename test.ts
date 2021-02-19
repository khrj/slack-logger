import { LogLevel, ConsoleLogger } from "./mod.ts"
const logger = new ConsoleLogger()
logger.setName(`Test logger`)

Deno.test("Debug", () => {
    console.log('')
    logger.setLevel(LogLevel.DEBUG)
    logNumbers()
})

Deno.test("Info", () => {
    console.log('')
    logger.setLevel(LogLevel.INFO)
    logNumbers()
})

Deno.test("Warn", () => {
    console.log('')
    logger.setLevel(LogLevel.WARN)
    logNumbers()
})

Deno.test("Error", () => {
    console.log('')
    logger.setLevel(LogLevel.ERROR)
    logNumbers()
})

function logNumbers () {
    logger.debug(1, 2, 3)
    logger.info(1, 2, 3)
    logger.warn(1, 2, 3)
    logger.error(1, 2, 3)
}