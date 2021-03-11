import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Bio from "../components/bio"
import Section from "../components/section"
import SectionText from "../components/section-text"
import { HeaderColour } from "../components/header"

const LittleLambsPageQuery = graphql`
    query LittleLambsPage {
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
                overlayCaption
                headerColour
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

const Families: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.LittleLambsPageQuery>(
        LittleLambsPageQuery
    )
    const littleLambsImageFluid = data.littleLambs!.frontmatter!.mainImage!
        .childImageSharp!.fluid

    return (
        <Layout
            headerColour={
                data.littleLambs!.frontmatter!.headerColour as HeaderColour
            }
            title={data.littleLambs!.frontmatter!.title}
            description={undefined}
        >
            <Hero
                sectionId="familes-hero"
                overlayCaption={data.littleLambs!.frontmatter!.overlayCaption}
                singleImageFluid={littleLambsImageFluid}
            />

            <Section intro wider colorScheme="light">
                <SectionText
                    intro
                    dangerouslySetInnerHTML={{
                        __html: data.littleLambs!.html!,
                    }}
                />
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
