import { serve } from '@hono/node-server'
import 'dotenv/config'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { ZodError, type ZodIssue } from 'zod'
import { dbConfig } from './config/database'
import { defaultRoutes } from './routes'
import { PinoLogger } from './utils/logger'

const pinoLogger: PinoLogger = new PinoLogger()
export const app: Hono = new Hono()

app.use(logger())
app.use(cors())

app.onError((error, c) => {
  if (error instanceof ZodError) {
    const errors = error.errors.map(
      (err: ZodIssue & { unionErrors?: ZodError[] }) => {
        if (err?.unionErrors) {
          return err.unionErrors.flatMap((unionErr: ZodError) =>
            unionErr.issues.map((issue: ZodIssue) => ({
              message: issue.message,
              errorCode: issue.code,
              path: issue.path,
            })),
          )
        }

        return {
          message: err.message,
          errorCode: err.code,
          path: err.path,
        }
      },
    )

    return c.json({ error: errors.flat(), message: 'ZodError' }, 400)
  }

  return c.json(
    { error, message: error.message || 'Custom Error Message' },
    500,
  )
})

app.notFound((c) => {
  return c.json(
    {
      success: false,
      message: 'Route not found',
    },
    404,
  )
})

app.get('/health', (c) => {
  return c.json(
    {
      success: true,
      message: 'OK',
    },
    200,
  )
})

defaultRoutes.forEach((route) => {
  app.route(route.path, route.route)
})

const server = serve(
  {
    fetch: app.fetch,
    port: parseInt(`${process.env.PORT}`) ?? 3000,
  },
  async (info) => {
    await dbConfig(pinoLogger)
    pinoLogger.info(`Server is running on PORT:${info.port}`)
  },
)

export default {
  app: server,
}
