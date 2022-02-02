import { rule, shield } from 'graphql-shield'
import { Context } from '../context'
import { getUserId } from '../utils/auth.utils'

const rules = {
  isAuthenticatedUser: rule({ cache: 'contextual' })(
    (_root, _args, ctx: Context) => {
      const userId = getUserId(ctx)
      return !!userId
    },
  ),
}

export const permissions = shield({
  Query: {
    '*': rules.isAuthenticatedUser,
  },
  Mutation: {
    '*': rules.isAuthenticatedUser,
  },
})
