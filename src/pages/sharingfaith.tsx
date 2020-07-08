import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Styles from "../components/sharingfaith.module.scss"
import Bio from "../components/bio"
import Section from "../components/section"
import HeaderUnderlay from "../components/header-underlay"
import SectionText from "../components/section-text"
import YouTubeGallery, {
    VideoSection,
} from "../components/youtube/youtube-gallery"

const SharingFaithPage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.SharingFaithQuery>(graphql`
        query SharingFaith {
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
                fileAbsolutePath: { regex: "/sharingfaith/intro.md$/" }
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
                fileAbsolutePath: { regex: "/sharingfaith/videos.md$/" }
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
                        regex: "/.*sharingfaith/resources/.*.md/"
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
                fileAbsolutePath: { regex: "/sharingfaith/stories.md$/" }
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

    const resources = data.resources.edges.map(resource => {
        return (
            <div key={resource.node.id} className={Styles.resource}>
                <h2>{resource.node.frontmatter!.title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: resource.node.html!,
                    }}
                />
            </div>
        )
    })

    return (
        <Layout
            headerColour="dark"
            title={"How Do I Share My Faith?"}
            description={undefined}
        >
            <HeaderUnderlay colorScheme="light" />

            <Section
                intro
                colorScheme="dark"
                wider
                className="intro wider dark"
            >
                <SectionText
                    intro
                    dark
                    className={"text"}
                    dangerouslySetInnerHTML={{
                        __html: data.intro!.html!,
                    }}
                />
            </Section>
            <Section intro className={"intro"} colorScheme="light">
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

            <Section colorScheme="light">
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.videos?.html ?? "Missing content",
                    }}
                />
            </Section>
            <Section colorScheme="light">
                <YouTubeGallery
                    videoSections={
                        data.videos!.frontmatter!.sections as VideoSection[]
                    }
                />
            </Section>

            <Section id={"resources"} colorScheme="light">
                <div className={Styles.resourcesContainer}>
                    <h1>Resources</h1>
                    <div className={Styles.resources}>{resources}</div>
                </div>
            </Section>

            <Section id={"stories"} colorScheme="light">
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.stories?.html ?? "Missing content",
                    }}
                />
            </Section>
            <Section colorScheme="light">
                <YouTubeGallery
                    videoSections={
                        data.stories!.frontmatter!.sections! as VideoSection[]
                    }
                />
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

export default SharingFaithPage
