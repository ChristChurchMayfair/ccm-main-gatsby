module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "react"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                ignoreRhs: true,
            },
        ],
        "@typescript-eslint/switch-exhaustiveness-check": 2,
        "@typescript-eslint/restrict-plus-operands": 2,
        "@typescript-eslint/ban-ts-ignore": 0,
        "react/prop-types": 0,
        "no-empty": 0,
        "no-console": 1,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}
