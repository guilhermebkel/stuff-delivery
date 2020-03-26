const { pathsToModuleNameMapper } = require("ts-jest/utils")
const { compilerOptions } = require("../../tsconfig.json")
const path = require("path")

module.exports = {
  clearMocks: true,
  coverageDirectory: "__tests__/coverage",
  coverageReporters: [
    "json",
    "lcov",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: `${path.resolve(__dirname, "..", "..")}/` }),
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/**/*.spec.ts",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
}
