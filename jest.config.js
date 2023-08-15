/** @type {import('jest').Config} */
const config = {
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = config
