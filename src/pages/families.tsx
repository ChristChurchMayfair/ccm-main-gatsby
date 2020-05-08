import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Bio from "../components/bio"

const Families: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.FamiliesQuery>(graphql`
        query Families {
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
            childrensWorkers: allSanityStaff(
                filter: {
                    roles: { elemMatch: { slug: { eq: "childrens_worker" } } }
                }
            ) {
                nodes {
                    name
                    job_title
                    email
                    phone
                    headshot {
                        ...SanityHeadshot
                    }
                }
            }
            littleLambsWorker: allSanityStaff(
                filter: {
                    roles: { elemMatch: { slug: { eq: "little_lambs" } } }
                }
            ) {
                nodes {
                    name
                    job_title
                    email
                    phone
                    headshot {
                        ...SanityHeadshot
                    }
                }
            }
        }
    `)

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
            headerColour={data.mainContent!.frontmatter!.headerColour}
            title={data.mainContent!.frontmatter!.title}
            description={undefined}
        >
            <Hero
                sectionId="familes-hero"
                overlayCaption={data.mainContent!.frontmatter!.overlayCaption}
                sectionClass="left bottom"
                fluid={mainImageFluid}
            />

            <section className="double-image left">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.mainContent!.html!,
                    }}
                />
                <div className="photo topimage">
                    <Img fluid={firstIntroImageFluid} />
                </div>
                <div className="photo bottomimage">
                    <Img fluid={secondIntroImageFluid} />
                </div>
            </section>

            <section className="info-panel dark image-right mobile-image-text-swap">
                <div className="text">
                    <h1>{data.youthContent!.frontmatter!.title!}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.youthContent!.html!,
                        }}
                    />
                </div>
                <div className="photo right" style={{ position: "relative" }}>
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
                </div>
            </section>
            <Bio
                people={data.childrensWorkers.nodes}
                peoplePrecedenceByEmail={["james@christchurchmayfair.org"]}
                descriptionHtml={
                    data.mainContent!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            />

            <section
                className="info-panel full-bleed mobile-darken"
                style={{
                    position: "relative",
                }}
            >
                <div className="photo">
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
                </div>
                <div
                    className="text"
                    // We need this to ensure the text appears
                    // on top of the image.
                    style={{
                        position: "relative",
                    }}
                >
                    <h1>
                        {data.littleLambs!.frontmatter!.title!}
                    </h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.littleLambs!.html!,
                        }}
                    />
                </div>
            </section>

            <Bio
                people={data.littleLambsWorker.nodes}
                peoplePrecedenceByEmail={["sarah@christchurchmayfair.org"]}
                descriptionHtml={
                    data.littleLambs!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            />
        </Layout>
    )
}

export default Families
