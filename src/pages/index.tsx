import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import FindUs from "../components/find-us"
import Img from "../components/img"
import Services from "../components/services"
import Covid19 from "../components/covid-19"

const IndexPageQuery = graphql`
    query Homepage {
        mainInfo: markdownRemark(
            fileAbsolutePath: { regex: "/homepage.md$/" }
        ) {
            html
            frontmatter {
                title
                overlayCaption
                headerColour
                carouselImages {
                    mainImage {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_noBase64
                            }
                        }
                    }
                    position
                }
            }
            fields {
                frontmattermd {
                    findOutMoreText {
                        html
                    }
                }
            }
        }
        administrators: allSanityPerson(
            filter: {
                roles: {
                    elemMatch: { slug: { current: { eq: "administrator" } } }
                }
            }
        ) {
            nodes {
                name
                jobTitle
                email
                phone
                headshot {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
        midweek: markdownRemark(fileAbsolutePath: { regex: "/midweek.md$/" }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }
`

const IndexPage = () => {
    const data = useStaticQuery<GatsbyTypes.HomepageQuery>(IndexPageQuery)

    const [visibleHeroIndex, setVisibleHeroIndex] = useState(0)

    const carouselImages = data.mainInfo!.frontmatter!.carouselImages!
    useEffect(() => {
        const id = setInterval(() => {
            setVisibleHeroIndex(i => (i + 1) % carouselImages.length)
        }, 5000)
        return () => {
            clearInterval(id)
        }
    }, [carouselImages.length])

    return (
        <Layout title={undefined} headerColour="light">
            <section id="home-hero" className="hero left bottom">
                <div className="carousel-overlay">
                    <h1>{data.mainInfo!.frontmatter!.overlayCaption}</h1>
                </div>
                <div className="carousel-images">
                    {carouselImages.map((image, i) => {
                        if (image == null) {
                            throw new Error("Impossible")
                        }

                        return (
                            <div
                                key={i}
                                className="carousel-image"
                                style={{
                                    opacity: visibleHeroIndex === i ? 1 : 0,
                                }}
                            >
                                <Img
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                    }}
                                    fluid={
                                        image.mainImage!.childImageSharp!.fluid
                                    }
                                    objectPosition={`center ${image.position}`}
                                    fadeIn={false}
                                    loading={i === 0 ? "eager" : "lazy"}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="intro">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.mainInfo!.html!,
                    }}
                />
                <a
                    id="find-us-button"
                    className="button index-top-section-btn"
                    href="#find-us"
                >
                    Find Us
                </a>
                <a
                    id="services-button"
                    className="button index-top-section-btn"
                    href="#services"
                >
                    Sunday Services
                </a>
            </section>

            <Covid19 />

            <Services />

            <section id="midweek" className="info-panel image-right">
                <div
                    id="midweek-photo-right"
                    className="photo right"
                    style={{ position: "relative" }}
                >
                    <Img
                        fluid={
                            data.midweek!.frontmatter!.image!.childImageSharp!
                                .fluid
                        }
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        objectPosition="center right"
                    />
                </div>
                <div className="text">
                    <h1>{data.midweek!.frontmatter!.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.midweek!.html!,
                        }}
                    />
                </div>
            </section>

            <FindUs />

            <Bio
                people={data.administrators.nodes}
                descriptionHtml={
                    data.mainInfo!.fields!.frontmattermd!.findOutMoreText!.html!
                }
            />
        </Layout>
    )
}

export default IndexPage

// I wish gatsby gave us a way to specify this in the config file or something. For now, let's keep it here.
export const globallyReusableFragments = graphql`
    fragment SanityHeadshot on SanityImage {
        asset {
            fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
            }
        }
    }
`
