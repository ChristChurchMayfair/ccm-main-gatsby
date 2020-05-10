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
    const basicPages = await graphql(`
        {
            allMarkdownRemark(
                filter: { frontmatter: { template: { eq: "basic" } } }
            ) {
                nodes {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    `)
    // Handle errors
    if (basicPages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    for (const page of basicPages.data.allMarkdownRemark.nodes) {
        createPage({
            path: page.frontmatter.path,
            component: path.resolve("src/templates/basic.tsx"),
            context: {
                id: page.id,
            },
        })
    }


    const mailchimpSignUpPages = await graphql(`
        {
            allMarkdownRemark(
                filter: { frontmatter: { template: { eq: "mailchimpsignup" } } }
            ) {
                nodes {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    `)
    // Handle errors
    if (mailchimpSignUpPages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    for (const page of mailchimpSignUpPages.data.allMarkdownRemark.nodes) {
        createPage({
            path: page.frontmatter.path,
            component: path.resolve("src/templates/mailchimpsignup.tsx"),
            context: {
                id: page.id,
            },
        })
    }
}
