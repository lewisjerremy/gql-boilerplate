"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../src/services/user.service");
const context_1 = require("../__mocks__/context");
const user_data_1 = require("../src/constants/user.data");
let mockCtx;
let ctx;
const testUser = user_data_1.userData[0];
beforeEach(() => {
    mockCtx = (0, context_1.createMockContext)();
    ctx = mockCtx;
});
describe('User ', () => {
    it('should create new user ', async () => {
        mockCtx.prisma.user.create.mockResolvedValue(testUser);
        const newUser = (0, user_service_1.createUser)({ input: { ...testUser } }, ctx);
        await expect(newUser).resolves.toEqual(testUser);
    });
    it('should get a user ', async () => {
        mockCtx.prisma.user.findFirst.mockResolvedValue(testUser);
        const foundUser = (0, user_service_1.getUser)({ id: testUser.id }, ctx);
        await expect(foundUser).resolves.toEqual(testUser);
    });
    it('should update a user ', async () => {
        mockCtx.prisma.user.update.mockResolvedValue(testUser);
        const updatedUser = (0, user_service_1.updateUser)({ id: testUser.id, input: { ...testUser } }, ctx);
        await expect(updatedUser).resolves.toEqual(testUser);
    });
});
//# sourceMappingURL=User.unit.js.map