import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import BasicText from "../components/basic-text-page"

const AccessibilityPage = () => {
    const data = useStaticQuery<GatsbyTypes.AccessibilityPageQuery>(graphql`
        query AccessibilityPage {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/accessibility.md$/" }
            ) {
                html
                frontmatter {
                    title
                    overlayCaption
                    headerColour
                }
            }
        }
    `)

    return (
        <Layout title={undefined} headerColour={data.mainInfo?.frontmatter?.headerColour ?? "dark"}>
            <BasicText html={data.mainInfo?.html}/>
        </Layout>
    )
}

export default AccessibilityPage
