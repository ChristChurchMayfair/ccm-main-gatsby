import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Bio from "../components/bio"
import SectionText from "../components/section-text"
import DoubleImageSection from "../components/double-image-section"
import Section from "../components/section"
import { HeaderColour } from "../components/header"

const FamiliesPageQuery = graphql`
    query FamiliesPage {
        mainContent: markdownRemark(
            fileAbsolutePath: { regex: "/families.md$/" }
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
                firstIntroImage {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                secondIntroImage {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                overlayCaption
                headerColour
            }
        }
        youthContent: markdownRemark(
            fileAbsolutePath: { regex: "/youth.md$/" }
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
        littleLambs: markdownRemark(
            fileAbsolutePath: { regex: "/littlelambs.md$/" }
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
        childrensWorkers: allSanityPerson(
            filter: {
                roles: {
                    elemMatch: { slug: { current: { eq: "childrens-worker" } } }
                }
            }
        ) {
            nodes {
                name
                jobTitle
                email
                phone
                headshot {
                    ...SanityHeadshot
                }
            }
        }
        littleLambsWorker: allSanityPerson(
            filter: {
                roles: {
                    elemMatch: { slug: { current: { eq: "little-lambs" } } }
                }
            }
        ) {
            nodes {
                name
                jobTitle
                email
                phone
                headshot {
                    ...SanityHeadshot
                }
            }
        }
    }
`

const Families: React.FC = () => {
    const data = useStaticQuery<GatsbyTypes.FamiliesPageQuery>(
        FamiliesPageQuery
    )

    const mainImageFluid = data.mainContent!.frontmatter!.mainImage!
        .childImageSharp!.fluid
    const firstIntroImageFluid = data.mainContent!.frontmatter!.firstIntroImage!
        .childImageSharp!.fluid
    const secondIntroImageFluid = data.mainContent!.frontmatter!
        .secondIntroImage!.childImageSharp!.fluid
    const youthImageFluid = data.youthContent!.frontmatter!.mainImage!
        .childImageSharp!.fluid
    const littleLambsImageFluid = data.littleLambs!.frontmatter!.mainImage!
        .childImageSharp!.fluid

    return (
        <Layout
            headerColour={
                data.mainContent!.frontmatter!.headerColour as HeaderColour
            }
            title={data.mainContent!.frontmatter!.title}
            description={undefined}
        >
            <Hero
                sectionId="familes-hero"
                overlayCaption={data.mainContent!.frontmatter!.overlayCaption}
                singleImageFluid={mainImageFluid}
            />

            <DoubleImageSection
                imagesPosition="left"
                topImage={<Img fluid={firstIntroImageFluid} />}
                bottomImage={<Img fluid={secondIntroImageFluid} />}
            >
                <SectionText
                    dangerouslySetInnerHTML={{
                        __html: data.mainContent!.html!,
                    }}
                />
            </DoubleImageSection>

            <Section
                infoPanel
                infoPanelImage={
                    <Img
                        fluid={youthImageFluid}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                        }}
                        objectFit={"cover"}
                        objectPosition={"right"}
                    />
                }
                imagePosition="right"
                imageBackgroundPosition="right"
                colorScheme="dark"
                mobileImageTextSwap
            >
                <SectionText infoPanel dark>
                    <h1>{data.youthContent!.frontmatter!.title!}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.youthContent!.html!,
                        }}
                    />
                </SectionText>
            </Section>
            <Bio
                people={data.childrensWorkers.nodes}
                peoplePrecedenceByEmail={["james@christchurchmayfair.org"]}
                descriptionHtml={
                    data.mainContent!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            />

            <Section
                infoPanel
                infoPanelImage={
                    <Img
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        loading="eager"
                        fadeIn={false}
                        fluid={littleLambsImageFluid}
                        objectFit="cover"
                        objectPosition="center top"
                    />
                }
                colorScheme="light"
                fullBleed
                noImageOnMobile
                style={{
                    position: "relative",
                }}
            >
                <SectionText
                    infoPanel
                    fullBleed
                    // We need this to ensure the text appears
                    // on top of the image.
                    style={{
                        position: "relative",
                    }}
                >
                    <h1>{data.littleLambs!.frontmatter!.title!}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.littleLambs!.html!,
                        }}
                    />
                </SectionText>
            </Section>

            <Bio
                people={data.littleLambsWorker.nodes}
                peoplePrecedenceByEmail={["james@christchurchmayfair.org"]}
                descriptionHtml={
                    data.littleLambs!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            />
        </Layout>
    )
}

export default Families
