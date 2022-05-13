const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

const IGNORED_FILES = ['<rootDir>/src/components/GlobalStyle/index.tsx']
const SETUP_FILE = '<rootDir>/src/config/setupTests.ts'

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  moduleDirectories: ['src', 'node_modules'],
  preset: 'ts-jest',
  setupFilesAfterEnv: [SETUP_FILE],
  testPathIgnorePatterns: IGNORED_FILES,
  coveragePathIgnorePatterns: IGNORED_FILES,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
