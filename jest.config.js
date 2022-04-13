module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '.*\.tsx?$': 'ts-jest'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "setupFiles":["<rootDir>/localStorageMock.js"],
  "testEnvironment": "jsdom"
}