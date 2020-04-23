// We only have this file to make the apollo vscode extension work.
module.exports = {
    client: {
        name: "ccm-site",
        tagName: "graphql",
        includes: [
            "./src/**/*.{ts,tsx}",
            "./src/__generated__/gatsby-plugin-documents.graphql",
        ],
        service: {
            name: "GatsbyJS",
            localSchemaFile: "./src/__generated__/gatsby-introspection.json",
        },
    },
}
