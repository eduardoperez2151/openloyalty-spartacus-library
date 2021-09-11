module.exports = {

    collectCoverageFrom: [
        '<rootDir>/projects/**/*.ts',
        '!<rootDir>/projects/**/index.ts',
        '!<rootDir>/projects/**/*.module.ts'
    ],

    coverageDirectory: 'coverage',

    coverageReporters: [
        'lcov',
        'text-summary'
    ],
    testMatch: [
        '<rootDir>/projects/**/*.spec.ts'
    ]
};
