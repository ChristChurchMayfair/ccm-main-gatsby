import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Bio from "../components/bio"

const MusicPage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.MusicQuery>(graphql`
        query Music {
            musicians: allSanityPerson(
                filter: {
                    roles: { elemMatch: { slug: { current: { eq: "music" } } } }
                }
            ) {
                nodes {
                    ...StaffProfile
                }
            }
            mainContent: markdownRemark(
                fileAbsolutePath: { regex: "/music/main.md$/" }
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
                    overlayCaption
                }
            }
            extraContent: markdownRemark(
                fileAbsolutePath: { regex: "/music/extra.md$/" }
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
            releases: markdownRemark(
                fileAbsolutePath: { regex: "/music/releases.md$/" }
            ) {
                frontmatter {
                    releases {
                        type
                        title
                        coverImage {
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        appleMusicLink
                        spotifyLink
                    }
                }
            }
            resources: markdownRemark(
                fileAbsolutePath: { regex: "/music/resources.md$/" }
            ) {
                html
                frontmatter {
                    title
                    resources {
                        title
                        files {
                            name
                            url
                        }
                    }
                }
            }
        }
    `)
    const fluid = data.mainContent!.frontmatter!.mainImage!.childImageSharp!
        .fluid

    const releases = data.releases!.frontmatter!.releases!.map(release => {
        const appleLink = release!.appleMusicLink ? (
            <a
                className="music-service-link apple-music-link"
                href={release!.appleMusicLink}
            ></a>
        ) : undefined

        const spotifyLink = release!.spotifyLink ? (
            <a
                className="music-service-link spotify-link"
                href={release!.spotifyLink}
            ></a>
        ) : undefined

        return (
            <div key={release!.title} className="music-release">
                <Img
                    className="music-release-cover"
                    fluid={release!.coverImage!.childImageSharp!.fluid}
                />
                <div className="music-release-title">
                    {release!.title!} - {release!.type!}
                </div>
                <div className="music-service-links">
                    {spotifyLink}
                    {appleLink}
                </div>
            </div>
        )
    })

    const resources = data.resources!.frontmatter!.resources!.map(r => {
        const files = r!.files!.map(f => {
            return (
                <>
                    <a href={f!.url}>{f!.name}</a>
                </>
            )
        })
        return (
            <div key={r?.title} className="track">
                <div className="title">{r!.title}</div>
                {files}
            </div>
        )
    })

    return (
        <Layout
            headerColour="light"
            title={data.mainContent!.frontmatter!.title}
            description={undefined}
        >
            <Hero
                sectionId="students-hero"
                overlayCaption={data.mainContent!.frontmatter!.overlayCaption}
                sectionClass="left bottom"
                fluid={fluid}
            />
            <section className="intro wider">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.mainContent!.html!,
                    }}
                />
            </section>
            <section className="info-panel dark image-right">
                <div className="text">
                    <h1>{data.extraContent!.frontmatter!.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.extraContent!.html!,
                        }}
                    />
                </div>
                <div className="photo right" style={{ position: "relative" }}>
                    <Img
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        fluid={
                            data.extraContent!.frontmatter!.mainImage!
                                .childImageSharp!.fluid
                        }
                        objectPosition="top center"
                    />
                </div>
            </section>

            <section className="music-releases">
                <div>
                    <h1>Releases</h1>
                    <div className="music-release-list">{releases}</div>
                </div>
            </section>

            <section className="music-resources">
                <h1>{data.resources!.frontmatter!.title}</h1>
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.resources!.html!,
                    }}
                />
                <div className="resources">{resources}</div>
            </section>

            <Bio
                people={data.musicians.nodes}
                peoplePrecedenceByEmail={["ben@christchurchmayfair.org"]}
                descriptionHtml={
                    data.mainContent!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            />
        </Layout>
    )
}

export default MusicPage
