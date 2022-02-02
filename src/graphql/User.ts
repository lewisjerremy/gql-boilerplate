import {
  arg,
  extendType,
  inputObjectType,
  intArg,
  nonNull,
  objectType,
} from 'nexus'
import { createUser, getUser, updateUser } from '../services/user.service'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('name')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: 'User',
      args: {
        id: nonNull(intArg()),
      },
      resolve(_root, args, ctx) {
        return getUser(args, ctx)
      },
    })
  },
})

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: 'User',
      args: {
        input: nonNull(arg({ type: 'UserCreateInput' })),
      },
      resolve(_root, args, ctx) {
        return createUser(args, ctx)
      },
    })

    t.field('updateUser', {
      type: 'User',
      args: {
        id: nonNull(intArg()),
        input: nonNull(arg({ type: 'UserUpdateInput' })),
      },
      resolve(_root, args, ctx) {
        return updateUser(args, ctx)
      },
    })
  },
})
