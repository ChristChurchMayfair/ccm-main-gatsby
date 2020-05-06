import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import BasicText from "../components/basic-text-page"

const PrivacyNoticePage = () => {
    const data = useStaticQuery<GatsbyTypes.PrivacyNoticePageQuery>(graphql`
        query PrivacyNoticePage {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/privacy-notice.md$/" }
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

export default PrivacyNoticePage
