const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  clearMocks: true,
  coverageDirectory: "__tests__/coverage",
  coverageReporters: [
    "json",
    "lcov",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/src/" }),
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/**/*.spec.ts",
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
};
