import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import YouTube from "react-youtube"

import Layout from "../components/layout"

import YouTubeThumbNail from "../components/youtube-thumbnail"

import videoStyles from "../components/videos.module.scss"

const MusicPage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.LockdownOutreachQuery>(graphql`
        query LockdownOutreach {
            intro: markdownRemark(
                fileAbsolutePath: { regex: "/lockdownoutreach/intro.md$/" }
            ) {
                html
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
            resources: markdownRemark(
                fileAbsolutePath: { regex: "/lockdownoutreach/resources.md$/" }
            ) {
                html
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
            <section className="header-underlay" />

            <section className="intro wider dark">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.intro?.html,
                    }}
                /> 
            </section>
            <section className={"intro"}>
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
            </section>

            <section>
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.videos?.html ?? "Missing content",
                    }}
                />
            </section>
            <section>
                <div className={videoStyles.videoLinks}>
                    {data.videos?.frontmatter.videos.map((video: any) => (
                        <div className={videoStyles.videoThumbnail}>
                            <h2>{video.title}</h2>
                            <YouTubeThumbNail
                                videoId={video.id}
                                imageIndex={0}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section id={"resources"}>
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.resources?.html ?? "Missing content",
                    }}
                />
            </section>

            <section id={"stories"}>
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.stories?.html ?? "Missing content",
                    }}
                />
            </section>

            {/* <Bio
                people={data.musicians.nodes}
                peoplePrecedenceByEmail={["ben@christchurchmayfair.org"]}
                descriptionHtml={
                    data.mainContent!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            /> */}
        </Layout>
    )
}

export default MusicPage
