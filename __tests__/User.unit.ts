import { createUser, getUser, updateUser } from '../src/services/user.service'
import { MockContext, Context, createMockContext } from '../__mocks__/context'
import { userData } from '../src/constants/user.data'

let mockCtx: MockContext
let ctx: Context

const testUser = userData[0]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe('User ', () => {
  it('should create new user ', async () => {
    mockCtx.prisma.user.create.mockResolvedValue(testUser)
    const newUser = createUser({ input: { ...testUser } }, ctx)
    await expect(newUser).resolves.toEqual(testUser)
  })

  it('should get a user ', async () => {
    mockCtx.prisma.user.findFirst.mockResolvedValue(testUser)
    const foundUser = getUser({ id: testUser.id }, ctx)
    await expect(foundUser).resolves.toEqual(testUser)
  })

  it('should update a user ', async () => {
    mockCtx.prisma.user.update.mockResolvedValue(testUser)
    const updatedUser = updateUser(
      { id: testUser.id, input: { ...testUser } },
      ctx,
    )
    await expect(updatedUser).resolves.toEqual(testUser)
  })
})
