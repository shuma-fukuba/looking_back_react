const esModules = ['antd/es', 'rc-pagination/es', 'rc-picker/es'].join('|')

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  // testEnvironment: 'node',
  transform: {
    '.+\\.(j|t)sx?$': '<rootDir>/node_modules/ts-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules}/.*)`, `/images/.+`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|svg|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^~/(.+)': '<rootDir>/src/$1',
    'react-markdown': '<rootDir>/src/tests/__mocks__/react-markdown.js',
    'remark-gfm': '<rootDir>/src/tests/__mocks__/remark-gfm.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
