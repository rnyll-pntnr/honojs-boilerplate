import { testClient } from 'hono/testing'
import { app } from '..'

describe('Employee', () => {
  const client: any = testClient(app)
  it('should fetch all employee', async () => {
    const res = await client.v1.api.employee.$get()
    const data = await res.json()
    expect(data.success).toBeTruthy()
    expect(data.data).toBeInstanceOf(Array)
  })
})
