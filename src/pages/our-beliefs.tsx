import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import BasicText from "../components/basic-text-page"

const OurBeliefsPage = () => {
    const data = useStaticQuery<GatsbyTypes.OurBeliefsPageQuery>(graphql`
        query OurBeliefsPage {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/our-beliefs.md$/" }
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

export default OurBeliefsPage
