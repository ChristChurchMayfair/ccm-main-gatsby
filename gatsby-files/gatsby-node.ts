/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from "path"
import { GatsbyNode } from "gatsby"

// You can delete this file if you're not using it
export const createPages: GatsbyNode["createPages"] = async ({
    actions,
    graphql,
    reporter,
}) => {
    const { createPage } = actions
    const result = await graphql(`
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
    if (result.errors != null) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // @ts-ignore
    for (const page of result.data.allMarkdownRemark.nodes) {
        createPage({
            path: page.frontmatter.path,
            component: path.resolve("src/templates/basic.tsx"),
            context: {
                id: page.id,
            },
        })
    }

    // @ts-ignore
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
    if (mailchimpSignUpPages.errors != null) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // @ts-ignore
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
