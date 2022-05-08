import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./gospelgenerationstrust.module.scss"
import GospelGenerationsTrustLayout from "../../components/gospelgenerationstrust/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import Alum from "../../components/gospelgenerationstrust/alum"
import Hero from "../../components/hero"
import classNames from "classnames"

const GospelGenerationsTrustPageQuery = graphql`
    query GospelGenerationsTrustPage {
        introduction: markdownRemark(
            fileAbsolutePath: {
                regex: "/gospelgenerationstrust/introduction.md$/"
            }
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
        howcanyouhelp: markdownRemark(
            fileAbsolutePath: {
                regex: "/gospelgenerationstrust/howcanyouhelp.md$/"
            }
        ) {
            html
        }
        contact: markdownRemark(
            fileAbsolutePath: { regex: "/gospelgenerationstrust/contact.md$/" }
        ) {
            html
        }
        alums: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {
                    regex: "/gospelgenerationstrust/stories/.*.md$/"
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

const AboutUs: React.FC = () => {
    const data = useStaticQuery<GatsbyTypes.GospelGenerationsTrustPageQuery>(
        GospelGenerationsTrustPageQuery
    )
    const alums = data.alums.nodes
    const randomAlum = alums[Math.floor(Math.random() * alums.length)]
    return (
        <GospelGenerationsTrustLayout title="Home" headerColour="dark">
            <HeaderUnderlay colorScheme="light" />
            <Hero
                sectionId={"asdf"}
                singleImageFluid={
                    data.introduction!.frontmatter!.image!.childImageSharp!
                        .fluid
                }
            >
                <div className={styles.heroPullQuote}>
                    <p>
                        The Gospel Generations Trust provides financial support
                        for young people on the Christ Church Mayfair Ministry
                        Internship Scheme.
                    </p>
                </div>
            </Hero>
            <Section colorScheme={"light"}>
                <div
                    className={styles.introduction}
                    dangerouslySetInnerHTML={{
                        __html: data.introduction!.html!,
                    }}
                />
            </Section>
            <Section colorScheme={"light"}>
                <div className={styles.alums}>
                    <Alum
                        key={randomAlum.frontmatter!.name}
                        name={randomAlum.frontmatter!.name!}
                        years={randomAlum.frontmatter!.years!}
                        role={randomAlum.frontmatter!.role!}
                        html={randomAlum.html!}
                        image={
                            randomAlum.frontmatter!.image!.childImageSharp!
                                .fluid!
                        }
                    ></Alum>
                </div>
            </Section>
            <Section colorScheme={"light"}>
                <div className={styles.moreStoriesButton}>
                    <a
                        id="stories-button"
                        className={classNames("button", styles.storiesButton)}
                        href="/gospelgenerationstrust/stories"
                    >
                        Read More Stories
                    </a>
                </div>
            </Section>
            <Section colorScheme={"light"}>
                <div
                    className={styles.introduction}
                    dangerouslySetInnerHTML={{
                        __html: data.howcanyouhelp!.html!,
                    }}
                />
            </Section>
            <Section colorScheme={"light"}>
                <div className={styles.supportButtons}>
                    <a
                        id="pray-button"
                        className="button"
                        href="/gospelgenerationstrust/mailinglistsignup"
                    >
                        Pray
                    </a>
                    <a
                        id="give-button"
                        className="button"
                        href="/gospelgenerationstrust/givingform"
                    >
                        Give
                    </a>
                </div>
            </Section>
            <Section colorScheme={"light"}>
                <div
                    className={styles.introduction}
                    dangerouslySetInnerHTML={{
                        __html: data.contact!.html!,
                    }}
                />
            </Section>
        </GospelGenerationsTrustLayout>
    )
}

export default AboutUs
