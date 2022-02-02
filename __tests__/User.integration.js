"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_data_1 = require("../src/constants/user.data");
const context_1 = require("../src/context");
const ctx = (0, context_1.createContext)({});
async function reset() {
    await ctx.prisma.user.deleteMany();
    for (const user of user_data_1.userData) {
        await ctx.prisma.user.create({ data: user });
    }
}
beforeAll(async () => {
    await reset();
});
afterAll(async () => {
    await reset();
});
describe('User', () => {
    it('should persist data', async () => {
        const users = await ctx.prisma.user.findMany();
        expect(users).toMatchSnapshot();
    });
});
//# sourceMappingURL=User.integration.js.map