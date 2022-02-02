import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: ['/*.unit.ts(?!.)', '/*.integration.ts(?!.)'],
    setupFiles: ['./__tests__/setup.ts'],
    collectCoverageFrom: ['src/**/*.ts', '!src/**/+(graphql|types|scripts)/*'],
  }
}
