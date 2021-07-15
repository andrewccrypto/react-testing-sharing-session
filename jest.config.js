const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".next",
    "jest.config.js",
    "coverage",
  ],
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
  coverageProvider: "v8",
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/components/$1",
    "@hooks/(.*)": "<rootDir>/hooks/$1",
    "@types": "<rootDir>/types.ts",
  },
  testEnvironment: "jsdom",
};

module.exports = config;
