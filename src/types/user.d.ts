import { Prisma } from '@prisma/client'

export type UserId = Prisma.UserWhereUniqueInput['id']

export type GetUserArgs = Prisma.UserWhereUniqueInput

export interface CreateUserArgs {
  input: Prisma.UserCreateInput
}

export interface UpdateUserArgs {
  id: UserId
  input: Prisma.UserUpdateInput
}
