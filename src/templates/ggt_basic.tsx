import React from "react"
import { graphql } from "gatsby"

import BasicText from "../components/basic-text-page"
import GospelGenerationsTrustLayout from "../components/gospelgenerationstrust/layout"

interface BasicPageProps {
    data: GatsbyTypes.GGTBasicPageQuery
}

const GGTBasicPage: React.FC<BasicPageProps> = ({ data }) => (
    <GospelGenerationsTrustLayout
        title={data.mainInfo!.frontmatter!.title}
        headerColour="dark"
        robotsMetaData={data.mainInfo!.frontmatter!.robotsMetaData}
    >
        <BasicText html={data.mainInfo!.html} />
    </GospelGenerationsTrustLayout>
)

export const query = graphql`
    query GGTBasicPage($id: String!) {
        mainInfo: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                robotsMetaData {
                    allowFollowLinksOnThisPage
                    allowIndexing
                    allowImageIndexing
                    allowCaching
                    allowPageSnippets
                }
            }
        }
    }
`

export default GGTBasicPage
