import classnames from "classnames"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Bio from "../components/bio"

import SpotifyBadge from "../assets/badges/Listen_on_spotify.inline.svg"
import AppleMusicBadge from "../assets/badges/music-lrg.inline.svg"
import Section from "../components/section"
import SectionText from "../components/section-text"

import styles from "./music.module.scss"

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

    // TODO: extract into component with styles
    const releases = data.releases!.frontmatter!.releases!.map(release => {
        const appleLink =
            typeof release?.appleMusicLink !== "undefined" ? (
                <a
                    className={classnames(
                        styles.musicReleaseLink,
                        styles.appleMusicLink
                    )}
                    href={release.appleMusicLink}
                >
                    <AppleMusicBadge />
                </a>
            ) : undefined

        const spotifyLink =
            typeof release?.spotifyLink !== "undefined" ? (
                <a
                    className={classnames(
                        styles.musicReleaseLink,
                        styles.spotifyLink
                    )}
                    href={release.spotifyLink}
                >
                    <SpotifyBadge />
                </a>
            ) : undefined

        return (
            <div key={release!.title} className={styles.musicRelease}>
                <Img
                    className={styles.musicReleaseCover}
                    fluid={release!.coverImage!.childImageSharp!.fluid}
                />
                <div className={styles.musicReleaseTitle}>
                    {release!.title!} - {release!.type!}
                </div>
                <div className={styles.musicReleaseLinks}>
                    {spotifyLink}
                    {appleLink}
                </div>
            </div>
        )
    })

    const resources = data.resources!.frontmatter!.resources!.map(r => (
        <div key={r?.title} className={styles.track}>
            <div className={styles.trackTitle}>{r!.title}</div>
            {r!.files!.map(f => (
                <>
                    <a className={styles.trackLink} href={f!.url}>
                        {f!.name}
                    </a>
                </>
            ))}
        </div>
    ))

    return (
        <Layout
            headerColour="light"
            title={data.mainContent!.frontmatter!.title}
            description={undefined}
        >
            <Hero
                sectionId="students-hero"
                overlayCaption={data.mainContent!.frontmatter!.overlayCaption}
                singleImageFluid={fluid}
            />
            <Section intro wider>
                <SectionText
                    intro
                    dangerouslySetInnerHTML={{
                        __html: data.mainContent!.html!,
                    }}
                />
            </Section>
            <Section
                infoPanel
                infoPanelImage={
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
                }
                imagePosition="right"
                imageBackgroundPosition="right"
                dark
            >
                <SectionText infoPanel dark>
                    <h1>{data.extraContent!.frontmatter!.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.extraContent!.html!,
                        }}
                    />
                </SectionText>
            </Section>

            <Section>
                <div className={styles.musicReleasesContainer}>
                    <h1>Releases</h1>
                    <div className={styles.musicReleases}>{releases}</div>
                </div>
            </Section>

            <div className={styles.resourcesContainer}>
                <Section className={styles.resources}>
                    <h1 className={styles.resourcesTitle}>
                        {data.resources!.frontmatter!.title}
                    </h1>
                    <SectionText
                        className={styles.resourcesText}
                        dangerouslySetInnerHTML={{
                            __html: data.resources!.html!,
                        }}
                    />
                    <div className={styles.resourcesContent}>{resources}</div>
                </Section>
            </div>

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
