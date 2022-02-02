import { schema } from './schema'
import { permissions } from './config/permissions'
import { applyMiddleware } from 'graphql-middleware'

const afterSchema = applyMiddleware(schema, permissions)

export { afterSchema }
