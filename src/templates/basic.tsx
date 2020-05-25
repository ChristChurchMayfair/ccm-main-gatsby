import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BasicText from "../components/basic-text-page"

interface BasicPageProps {
    data: GatsbyTypes.BasicPageQuery
}

const BasicPage: React.FC<BasicPageProps> = ({ data }) => (
    <Layout title={data.mainInfo!.frontmatter!.title} headerColour="dark">
        <BasicText html={data.mainInfo!.html} />
    </Layout>
)

export const query = graphql`
    query BasicPage($id: String!) {
        mainInfo: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default BasicPage
