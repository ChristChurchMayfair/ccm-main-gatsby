/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const remark = require("remark")
const remarkHTML = require("remark-html")

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        template
                        path
                    }
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    for (const node of result.data.allMarkdownRemark.nodes) {
        const { path: pagePath, template } = node.frontmatter
        if (pagePath == null || template == null) {
            // We can't make a page without these
            continue
        }

        const templateComponent = path.resolve(`src/templates/${template}.tsx`)
        createPage({
            path: pagePath,
            component: templateComponent,
            context: { remarkId: node.id }, // gets passed to the graphql query args on the template component
        })
    }
}
