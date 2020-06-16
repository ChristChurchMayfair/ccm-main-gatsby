import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Styles from "../components/howdoisharemyfaith.module.scss"
import Bio from "../components/bio"
import Section from "../components/section"
import HeaderUnderlay from "../components/header-underlay"
import SectionText from "../components/section-text"
import YouTubeGallery from "../components/youtube/youtube-gallery"

const HowDoIShareMyFaithPage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.LockdownOutreachQuery>(graphql`
        query LockdownOutreach {
            evangelists: allSanityPerson(
                filter: {
                    roles: {
                        elemMatch: { slug: { current: { eq: "evangelist" } } }
                    }
                }
            ) {
                nodes {
                    ...StaffProfile
                }
            }
            intro: markdownRemark(
                fileAbsolutePath: { regex: "/lockdownoutreach/intro.md$/" }
            ) {
                html
                fields {
                    frontmattermd {
                        findOutMoreText {
                            html
                        }
                    }
                }
            }
            videos: markdownRemark(
                fileAbsolutePath: { regex: "/lockdownoutreach/videos.md$/" }
            ) {
                html
                frontmatter {
                    sections {
                        title
                        videos {
                            id
                            title
                            description
                        }
                    }
                }
            }
            resources: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: {
                        regex: "/.*lockdownoutreach/resources/.*.md/"
                    }
                }
            ) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            title
                        }
                    }
                }
            }
            stories: markdownRemark(
                fileAbsolutePath: { regex: "/lockdownoutreach/stories.md$/" }
            ) {
                html
                frontmatter {
                    sections {
                        title
                        videos {
                            id
                            title
                            description
                        }
                    }
                }
            }
        }
    `)

    const resources = data.resources!.edges!.map(resource => {
        return (
            <div key={resource.node.id} className={Styles.resource}>
                <h2>{resource.node.frontmatter.title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: resource.node.html,
                    }}
                />
            </div>
        )
    })

    return (
        <Layout
            headerColour="dark"
            title={"Lockdown Outreach"}
            description={undefined}
        >
            <HeaderUnderlay />

            <Section intro dark wider className="intro wider dark">
                <SectionText
                    intro
                    dark
                    className={"text"}
                    dangerouslySetInnerHTML={{
                        __html: data.intro?.html,
                    }}
                />
            </Section>
            <Section intro className={"intro"}>
                <a
                    id="resources-button"
                    className="button index-top-section-btn"
                    href="#resources"
                >
                    Resources
                </a>
                <a
                    id="stories-button"
                    className="button index-top-section-btn"
                    href="#stories"
                >
                    Stories
                </a>
            </Section>

            <Section>
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.videos?.html ?? "Missing content",
                    }}
                />
            </Section>
            <Section>
                <YouTubeGallery videoSections={data.videos?.frontmatter?.sections ?? []} />
            </Section>

            <Section id={"resources"}>
                <div className={Styles.resourcesContainer}>
                    <h1>Resources</h1>
                    <div className={Styles.resources}>{resources}</div>
                </div>
            </Section>

            <Section id={"stories"}>
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.stories?.html ?? "Missing content",
                    }}
                />
            </Section>
            <Section>
                <YouTubeGallery videoSections={data.stories?.frontmatter?.sections ?? []} />
            </Section>

            <Bio
                people={data.evangelists.nodes}
                peoplePrecedenceByEmail={["nick@christchurchmayfair.org"]}
                descriptionHtml={
                    data.intro!.fields!.frontmattermd!.findOutMoreText!.html!
                }
            />
        </Layout>
    )
}

export default HowDoIShareMyFaithPage
