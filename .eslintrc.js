module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/camelcase": 0,
        "react/prop-types": 0,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}
