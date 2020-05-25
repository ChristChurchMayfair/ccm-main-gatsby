import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "../components/img"
import HeaderUnderlay from "../components/header-underlay"
import FindOutMore from "../components/find-out-more"
import FindOutMoreText from "../components/find-out-more-text"
import Section, { SectionImagePosition } from "../components/section"
import SectionText from "../components/section-text"

const AboutUsPageQuery = graphql`
    query AboutUsPage {
        page: markdownRemark(
            fileAbsolutePath: { regex: "/aboutus/index.md$/" }
        ) {
            fields {
                frontmattermd {
                    findOutMoreText {
                        html
                    }
                }
            }
        }
        aboutUsSections: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/_about_us/.*.md$/" } }
            sort: { fields: frontmatter___order, order: ASC }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    dark
                    mainImage {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    noImageOnMobile
                    fullBleed
                    imagePosition
                    imageObjectPosition
                }
                html
            }
        }
    }
`

const AboutUs: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.AboutUsPageQuery>(AboutUsPageQuery)
    return (
        <Layout title="About us" headerColour="dark">
            <HeaderUnderlay />
            {data.aboutUsSections.nodes.map(section => (
                <Fragment key={section.id}>
                    <Section
                        infoPanel
                        infoPanelImage={
                            <Img
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                }}
                                fluid={
                                    section.frontmatter!.mainImage!
                                        .childImageSharp!.fluid
                                }
                                objectFit="cover"
                                objectPosition={
                                    section.frontmatter!.imageObjectPosition
                                }
                            />
                        }
                        dark={section.frontmatter!.dark}
                        fullBleed={section.frontmatter!.fullBleed}
                        noImageOnMobile={section.frontmatter!.noImageOnMobile}
                        imagePosition={
                            section.frontmatter!.imagePosition !== undefined
                                ? (section.frontmatter!
                                      .imagePosition as SectionImagePosition)
                                : undefined
                        }
                        style={{ position: "relative" }}
                    >
                        <SectionText
                            infoPanel
                            fullBleed={section.frontmatter!.fullBleed}
                            style={{ position: "relative" }}
                        >
                            <h1>{section.frontmatter!.title}</h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: section.html!,
                                }}
                            />
                        </SectionText>
                    </Section>
                </Fragment>
            ))}
            <FindOutMore>
                <FindOutMoreText
                    dangerouslySetInnerHTML={{
                        __html: data.page!.fields!.frontmattermd!
                            .findOutMoreText!.html!,
                    }}
                />
            </FindOutMore>
        </Layout>
    )
}

export default AboutUs
