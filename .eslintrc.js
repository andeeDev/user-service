module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['prettier', 'unicorn'],
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        semi: 'error',
        indent: [
            'error',
            4,
            {
                MemberExpression: 1,
                ignoredNodes: [
                    'FunctionExpression > .params[decorators.length > 0]',
                    'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                    'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
                ],
            },
        ],
        'no-debugger': 'off',
        'no-console': 0,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'newline-before-return': ['error'],
        'no-var': 'error',
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'no-multiple-empty-lines': 'error',
        'prefer-const': 'error',
        'no-use-before-define': 'error',
        'unicorn/prevent-abbreviations': 'off',
        '@typescript-eslint/typedef': [
            'error',
            {
                arrowParameter: true,
                variableDeclaration: true,
            },
        ],
        'unicorn/filename-case': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'keyword-spacing': ['error'],
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'newline-after-var': ['error', 'always']
    },
};
