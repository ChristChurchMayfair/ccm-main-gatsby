import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Bio from "../components/bio"

const Students: React.FC<{ data: GatsbyTypes.StudentTemplateQuery }> = ({
    data,
}) => {
    const fluid =
        data.mainContent?.frontmatter?.mainImage?.childImageSharp?.fluid

    return (
        <Layout
            headerColour="black"
            title={data.mainContent?.frontmatter?.title}
            description={undefined}
        >
            <Hero
                sectionId="students-hero"
                overlayCaption={
                    data.mainContent?.frontmatter?.overlayCaption ?? ""
                }
                sectionClass="left bottom"
                fluid={fluid}
            />
            <section className="intro wider">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data?.mainContent?.html ?? "",
                    }}
                />
            </section>
            <section className="info-panel dark image-right">
                <div className="text">
                    <h1>{data.extraContent?.frontmatter?.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.extraContent?.html ?? "",
                        }}
                    />
                </div>
                <div className="photo right" style={{ position: "relative" }}>
                    <Img
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        fluid={
                            data.extraContent?.frontmatter?.mainImage
                                ?.childImageSharp?.fluid
                        }
                        objectPosition="top center"
                    />
                </div>
            </section>
            <Bio
                people={data.studentWorkers?.nodes}
                peoplePrecedenceByEmail={[
                    "scott@christchurchmayfair.org",
                    "ellie.page@christchurchmayfair.org",
                ]}
                descriptionHtml={
                    data?.mainContent?.fields?.frontmattermd?.findOutMoreText
                        ?.html ?? ""
                }
            />
        </Layout>
    )
}
export const pageQuery = graphql`
    query StudentTemplate($remarkId: String!) {
        studentWorkers: allSanityStaff(
            filter: { roles: { elemMatch: { slug: { eq: "student_worker" } } } }
        ) {
            nodes {
                ...StaffProfile
            }
        }
        mainContent: markdownRemark(id: { eq: $remarkId }) {
            html
            fields {
                frontmattermd {
                    findOutMoreText {
                        html
                    }
                }
            }
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
        extraContent: markdownRemark(
            fileAbsolutePath: { regex: "/extra_student_section.md$/" }
        ) {
            html
            frontmatter {
                mainImage {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
            }
        }
    }
`
export default Students
