// eslint-disable-next-line no-undef
module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  coveragePathIgnorePatterns: ['stories.*', 'reportWebVitals.ts'],
  testEnvironment: 'jsdom',
};
