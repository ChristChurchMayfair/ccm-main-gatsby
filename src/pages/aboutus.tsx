import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"

import Layout from "../components/layout"
import Img from "../components/img"

const AboutUsPageQuery = graphql`
    query AboutUs {
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
                    style_classes
                    mainImage {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    fullBleed
                    imageObjectPosition
                }
                html
            }
        }
    }
`

const AboutUs = () => {
    const data = useStaticQuery<GatsbyTypes.AboutUsPageQuery>(AboutUsPageQuery)
    return (
        <Layout title="About us" headerColour="dark">
            <section className="header-underlay"></section>
            {data.aboutUsSections.nodes.map(section => {
                return (
                    <Fragment key={section.id}>
                        <section
                            className={classnames(
                                "info-panel",
                                section.frontmatter!.style_classes
                            )}
                            style={{ position: "relative" }}
                        >
                            <div
                                className="photo"
                                style={
                                    section.frontmatter!.fullBleed === true
                                        ? {
                                              position: "absolute",
                                              left: 0,
                                              top: 0,
                                              bottom: 0,
                                              right: 0,
                                          }
                                        : { position: "relative" }
                                }
                            >
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
                                        section.frontmatter!
                                            .imageObjectPosition!
                                    }
                                />
                            </div>
                            <div
                                className="text"
                                // We need this to ensure the text appears
                                // on top of the image.
                                style={{ position: "relative" }}
                            >
                                <h1>{section.frontmatter!.title}</h1>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: section.html!,
                                    }}
                                />
                            </div>
                        </section>
                    </Fragment>
                )
            })}
            <section className="find-out-more no-bio">
                <h1>Find out more</h1>
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.page!.fields!.frontmattermd!
                            .findOutMoreText!.html!,
                    }}
                ></div>
            </section>
        </Layout>
    )
}

export default AboutUs
