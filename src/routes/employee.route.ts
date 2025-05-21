import { Hono } from 'hono'
import * as employeeController from '../controllers/employee.controller.js'

export const routes = new Hono()

routes.get('/', employeeController.getAllEmployee)
