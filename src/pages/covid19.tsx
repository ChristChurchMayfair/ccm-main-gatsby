import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import BasicText from "../components/basic-text-page"

const Covid19Page = () => {
    const data = useStaticQuery<GatsbyTypes.Covid19PageQuery>(graphql`
        query Covid19Page {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/covid19.md$/" }
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

export default Covid19Page
