import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./gospelgenerationstrust.module.scss"
import GospelGenerationsTrustLayout from "../../components/gospelgenerationstrust/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import Alum from "../../components/gospelgenerationstrust/alum"
import Hero from "../../components/hero"
import SectionText from "../../components/section-text"

const GospelGenerationsTrustAlumniPageQuery = graphql`
    query GospelGenerationsTrustAlumniPage {
        introduction: markdownRemark(
            fileAbsolutePath: { regex: "/gospelgenerationstrust/alumni.md$/" }
        ) {
            frontmatter {
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
        alums: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {
                    regex: "/gospelgenerationstrust/alums/.*.md$/"
                }
            }
        ) {
            nodes {
                id
                frontmatter {
                    name
                    years
                    role
                    image {
                        childImageSharp {
                            fluid(maxWidth: 900) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                html
            }
        }
    }
`

const AboutUs: React.FC<{}> = () => {
    const data = useStaticQuery<
        GatsbyTypes.GospelGenerationsTrustAlumniPageQuery
    >(GospelGenerationsTrustAlumniPageQuery)
    const alums = data.alums.nodes
    const title = "Testimonies"
    return (
        <GospelGenerationsTrustLayout title={title} headerColour="dark">
            <HeaderUnderlay colorScheme="light" />
            <Hero
                sectionId={"gospelgenerationstrustintro"}
                singleImageFluid={
                    data.introduction!.frontmatter!.image!.childImageSharp!
                        .fluid
                }
            >
                <h1>{title}</h1>
            </Hero>
            <Section colorScheme={"light"}>
                <SectionText
                    intro
                    dark
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.introduction!.html!,
                    }}
                />
            </Section>
            <Section colorScheme="light">
                <div className={styles.alums}>
                    {alums.map((alum: any) => (
                        <Alum
                            key={alum.frontmatter!.name!}
                            name={alum.frontmatter!.name!}
                            years={alum.frontmatter!.years!}
                            role={alum.frontmatter!.role!}
                            html={alum.html!}
                            image={
                                alum.frontmatter!.image!.childImageSharp!.fluid!
                            }
                        ></Alum>
                    ))}
                </div>
            </Section>
        </GospelGenerationsTrustLayout>
    )
}

export default AboutUs
