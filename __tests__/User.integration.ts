import { userData } from '../src/constants/user.data'
import { createContext } from '../src/context'

const ctx = createContext({})

async function reset() {
  await ctx.prisma.user.deleteMany()

  for (const user of userData) {
    await ctx.prisma.user.create({ data: user })
  }
}

beforeAll(async () => {
  await reset()
})

afterAll(async () => {
  await reset()
})

describe('User', () => {
  it('should persist data', async () => {
    const users = await ctx.prisma.user.findMany()
    expect(users).toMatchSnapshot()
  })
})
