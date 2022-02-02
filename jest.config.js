"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async () => {
    return {
        preset: 'ts-jest',
        testEnvironment: 'node',
        testRegex: ['/*.unit.ts(?!.)', '/*.integration.ts(?!.)'],
        setupFiles: ['./__tests__/setup.ts'],
        collectCoverageFrom: ['src/**/*.ts', '!src/**/+(graphql|types|scripts)/*'],
    };
};
//# sourceMappingURL=jest.config.js.map