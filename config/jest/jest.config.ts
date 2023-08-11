import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __SOCKET__: '',
        __PROJECT__: 'jest',
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
        'src',
    ],
    modulePaths: [
        '<rootDir>/src',
    ],
    testMatch: [
        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    transformIgnorePatterns:
        [
            '//node_modules'
        ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        ".+\\.(png|jpg|pdf)$": path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
}
