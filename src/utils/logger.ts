import moment from 'moment'
import pino, { type Logger } from 'pino'

export interface ILogger {
  info: (message: string | object) => void
  warn: (message: string | object) => void
  error: (message: string | object) => void
}

export class PinoLogger implements ILogger {
  private readonly logger: Logger

  constructor() {
    this.logger = pino({
      transport: {
        target: 'pino-pretty',
      },
      base: {
        pid: false,
      },
      timestamp: () => `,"time":"${moment()}"`,
    })
  }

  info(message: string | object): void {
    this.logger.info(message)
  }

  warn(message: string | object): void {
    this.logger.warn(message)
  }

  error(message: string | object): void {
    this.logger.error(message)
  }
}
