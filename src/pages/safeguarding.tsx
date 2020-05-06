import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import BasicText from "../components/basic-text-page"

const SafeguardingPage = () => {
    const data = useStaticQuery<GatsbyTypes.SafeguardingPageQuery>(graphql`
        query SafeguardingPage {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/safeguarding.md$/" }
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

export default SafeguardingPage
