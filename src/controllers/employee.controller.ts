import { type Context } from 'hono'
import Employee from '../models/employee.model'

export const getAllEmployee = async (c: Context) => {
  const employees = await Employee.find()
  return c.json(
    {
      success: true,
      data: employees.map((employee) => employee.toJSON()),
      message: 'Get all employees',
    },
    200,
  )
}
