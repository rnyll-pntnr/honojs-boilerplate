import moment from 'moment'
import pino, { type Logger } from 'pino'

export interface ILogger {
  info: (message: string) => void
  warn: (message: string) => void
  error: (message: string) => void
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

  info(message = ''): void {
    this.logger.info(message)
  }

  warn(message = ''): void {
    this.logger.warn(message)
  }

  error(message = ''): void {
    this.logger.error(message)
  }
}
