const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.next',
    'jest.config.js',
    'coverage',
  ],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/components/$1',
    '@fluentui/react/lib/(.*)$': '@fluentui/react/lib-commonjs/$1',
    '@hooks/(.*)': '<rootDir>/hooks/$1',
    '@types': '<rootDir>/types.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!office-ui-fabric-react)'],
};

module.exports = config;
