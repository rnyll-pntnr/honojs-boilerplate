import { routes as EmployeeRoutes } from './employee.route'

const basePath = 'v1/api'

export const defaultRoutes = [
  {
    path: `/${basePath}/employee`,
    route: EmployeeRoutes,
  },
]
