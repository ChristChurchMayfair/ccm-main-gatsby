import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import YouTube from "react-youtube"

import Layout from "../components/layout"

import YouTubeThumbNail from "../components/youtube/youtube-thumbnail"

import videoStyles from "../components/videos.module.scss"
import Bio from "../components/bio"
import Section from "../components/section"
import HeaderUnderlay from "../components/header-underlay"
import SectionText from "../components/section-text"
import YouTubeGallery from "../components/youtube/youtube-gallery"

const MusicPage: React.FC<{}> = () => {
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
                    videos {
                        id
                        title
                    }
                }
            }
            resources: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: {
                        regex: "/lockdownoutreach/resources/*.md/"
                    }
                }
            ) {
                edges {
                    node {
                        id
                        html
                    }
                }
            }
            stories: markdownRemark(
                fileAbsolutePath: { regex: "/lockdownoutreach/stories.md$/" }
            ) {
                html
            }
        }
    `)

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
                    // id="find-us-button"
                    className="button index-top-section-btn"
                    href="#resources"
                >
                    Resources
                </a>
                <a
                    // id="services-button"
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
                <YouTubeGallery videoIds={data.videos?.frontmatter?.videos} />
            </Section>

            <Section id={"resources"}>
                
            </Section>

            <Section id={"stories"}>
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.stories?.html ?? "Missing content",
                    }}
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

export default MusicPage
