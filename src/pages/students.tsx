import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Bio from "../components/bio"
import Section from "../components/section"
import SectionText from "../components/section-text"

const StudentsPageQuery = graphql`
    query StudentsPage {
        studentWorkers: allSanityPerson(
            filter: {
                roles: {
                    elemMatch: { slug: { current: { eq: "student-worker" } } }
                }
            }
        ) {
            nodes {
                ...StaffProfile
            }
        }
        mainContent: markdownRemark(
            fileAbsolutePath: { regex: "/students/index.md$/" }
        ) {
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
                            ...GatsbyImageSharpFluid_noBase64
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

// eslint-disable-next-line @typescript-eslint/ban-types
const Students: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.StudentsPageQuery>(
        StudentsPageQuery
    )
    const fluid = data.mainContent!.frontmatter!.mainImage!.childImageSharp!
        .fluid

    return (
        <Layout
            headerColour="black"
            title={data.mainContent!.frontmatter!.title}
            description={undefined}
        >
            <Hero
                sectionId="students-hero"
                overlayCaption={data.mainContent!.frontmatter!.overlayCaption}
                singleImageFluid={fluid}
            />
            <Section intro wider colorScheme="light">
                <SectionText
                    intro
                    dangerouslySetInnerHTML={{
                        __html: data.mainContent!.html!,
                    }}
                />
            </Section>
            <Section
                infoPanel
                infoPanelImage={
                    <Img
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        fluid={
                            data.extraContent!.frontmatter!.mainImage!
                                .childImageSharp!.fluid
                        }
                        objectPosition="top center"
                    />
                }
                imagePosition="right"
                imageBackgroundPosition="right"
                colorScheme="dark"
            >
                <SectionText infoPanel dark>
                    <h1>{data.extraContent!.frontmatter!.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.extraContent!.html!,
                        }}
                    />
                </SectionText>
            </Section>
            <Bio
                people={data.studentWorkers.nodes}
                peoplePrecedenceByEmail={[
                    "scott@christchurchmayfair.org",
                    "ellie.page@christchurchmayfair.org",
                ]}
                descriptionHtml={
                    data.mainContent!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            />
        </Layout>
    )
}

export default Students
