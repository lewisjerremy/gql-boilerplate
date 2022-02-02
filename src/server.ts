import { ApolloServer } from 'apollo-server'
import { afterSchema } from './middleware'
import { createContext } from './context'

export const server = new ApolloServer({
  schema: afterSchema,
  context: createContext,
})
