import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import FindUs from "../components/find-us"
import Img from "../components/img"
import Services from "../components/services"
import MountAfter from "../components/mount-after"
import Section from "../components/section"
import SectionText from "../components/section-text"
import Hero from "../components/hero"
import LondonLivingPromo from "../components/london-living-promo"
import StudentPromo from "../components/student-promo"
import Christmas2021 from "../components/christmas/christmas2021"
import ImportantNotice from "../components/important-notice"

const IndexPageQuery = graphql`
    query Homepage {
        site {
            siteMetadata {
                title
                description
                url
                email
                officePhoneNumber
                podcast {
                    title
                    url
                }
            }
        }
        xmasPromoImage: file(
            absolutePath: { regex: "/christmas2020/invite-image.png$/" }
        ) {
            childImageSharp {
                fixed(width: 1200) {
                    src
                }
            }
        }
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
            filter: { name: { eq: "Sharon Walsh" } }
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

const CAROUSEL_INTERVAL = 5000

const IndexPage = () => {
    const data = useStaticQuery<GatsbyTypes.HomepageQuery>(IndexPageQuery)

    const [visibleHeroIndex, setVisibleHeroIndex] = useState(0)

    const carouselImages = data.mainInfo!.frontmatter!.carouselImages!
    useEffect(() => {
        const id = setInterval(() => {
            setVisibleHeroIndex(i => (i + 1) % carouselImages.length)
        }, CAROUSEL_INTERVAL)
        return () => {
            clearInterval(id)
        }
    }, [carouselImages.length])

    return (
        <Layout title={undefined} headerColour="light">
            <Hero
                sectionId="home-hero"
                overlayCaption={data.mainInfo!.frontmatter!.overlayCaption}
            >
                <div className="carousel-images">
                    {carouselImages.map((image, i) => {
                        if (image == null) {
                            throw new Error("Impossible")
                        }
                        const imageEl = (
                            <Img
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                }}
                                fluid={image.mainImage!.childImageSharp!.fluid}
                                objectPosition={`center ${image.position}`}
                                fadeIn={false}
                                loading="eager"
                            />
                        )
                        return (
                            <div
                                key={i}
                                className="carousel-image"
                                style={{
                                    opacity: visibleHeroIndex === i ? 1 : 0,
                                }}
                            >
                                {i === 0 ? (
                                    imageEl
                                ) : (
                                    <MountAfter
                                        delayMs={
                                            i * CAROUSEL_INTERVAL -
                                            0.8 * CAROUSEL_INTERVAL
                                        }
                                    >
                                        {imageEl}
                                    </MountAfter>
                                )}
                            </div>
                        )
                    })}
                </div>
            </Hero>

            <Section intro colorScheme="light">
                <SectionText
                    intro
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
            </Section>

            <Services />

            <Section
                id="midweek"
                infoPanel
                infoPanelImage={
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
                }
                colorScheme="light"
                imagePosition="right"
                imageBackgroundPosition="right"
            >
                <SectionText infoPanel>
                    <h1>{data.midweek!.frontmatter!.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.midweek!.html!,
                        }}
                    />
                </SectionText>
            </Section>

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
