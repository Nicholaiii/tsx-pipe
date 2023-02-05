const pino = require('pino')
const logger = pino()

logger.info({ foo: 'bar'}, 'I would be prettier if I piped')
setInterval(() => logger.info({ foo: 'baz'}, Math.random()), 1000)