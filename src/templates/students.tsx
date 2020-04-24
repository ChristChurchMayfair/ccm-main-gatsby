import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const Students: React.FC<{ data: GatsbyTypes.StudentTemplateQuery }> = ({
    data,
}) => {
    const fluid =
        data.markdownRemark?.frontmatter?.mainImage?.childImageSharp?.fluid

    return (
        <Layout
            headerColour="black"
            title={data.markdownRemark?.frontmatter?.title}
            description={undefined}
        >
            <Hero
                sectionId="students-hero"
                overlayCaption={
                    data.markdownRemark?.frontmatter?.overlayCaption ?? ""
                }
                sectionClass="left bottom"
                fluid={fluid}
            />
            This is the student page!
        </Layout>
    )
}
export const pageQuery = graphql`
    query StudentTemplate($remarkId: String!) {
        markdownRemark(id: { eq: $remarkId }) {
            html
            frontmatter {
                title
                mainImage {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                overlayCaption
            }
        }
    }
`
export default Students
