import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BasicText from "../components/basic-text-page"

interface BasicPageProps {
    data: GatsbyTypes.BasicPageQuery
}

const BasicPage: React.FC<BasicPageProps> = ({ data }) => (
    <Layout title={data.mainInfo!.frontmatter!.title} headerColour="dark" robotsMetaData={data.mainInfo!.frontmatter!.robotsMetaData}>
        <BasicText html={data.mainInfo!.html} />
    </Layout>
)

export const query = graphql`
    query BasicPage($id: String!) {
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

export default BasicPage
