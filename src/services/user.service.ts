import { Context } from '../context'
import { CreateUserArgs, GetUserArgs, UpdateUserArgs } from '../types/user'

export async function getUser(args: GetUserArgs, ctx: Context) {
  return ctx.prisma.user.findFirst({ where: args })
}

export async function createUser(args: CreateUserArgs, ctx: Context) {
  return ctx.prisma.user.create({ data: args.input })
}

export async function updateUser(args: UpdateUserArgs, ctx: Context) {
  return ctx.prisma.user.update({
    where: { id: Number(args.id) },
    data: args.input,
  })
}
