import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"

import SpotifyBadge from "../content/londonliving/badges/Listen_on_spotify.inline.svg"
import ApplePodcastBadge from "../content/londonliving/badges/US_UK_Apple_Podcasts_Listen_Color_Lockup_RGB_Wht_Type.inline.svg"
<<<<<<< HEAD
=======
import RSSBadge from "../content/londonliving/badges/rss.inline.svg"
>>>>>>> Add london living page back to the site

import LondonLivingLogo from "../content/londonliving/LL_logo.inline.svg"

import Section from "../components/section"

import styles from "./londonliving.module.scss"

import HeaderUnderlay from "../components/header-underlay"

import YouTube from "react-youtube"

const LondonLivingPage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.LondonLivingQuery>(graphql`
        query LondonLiving {
            mainContent: markdownRemark(
                fileAbsolutePath: { regex: "/londonliving/main.md$/" }
            ) {
                html
                frontmatter {
                    title
                }
            }
            podcast: markdownRemark(
                fileAbsolutePath: { regex: "/londonliving/podcast.md$/" }
            ) {
                frontmatter {
                    blurb
                    links {
                        name
                        link
                        type
                    }
                    episodes {
                        title
                        person
                        blurb
                        audioUrl
                        youTubeVideoId
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const episodes = data.podcast!.frontmatter!.episodes!.map(episode => {
<<<<<<< HEAD
        const imageFlud = episode!.image!.childImageSharp!.fluid
        return (
            <div key={episode!.title} className={styles.episode}>
                <h2>
                    {episode!.title} : {episode!.person}
                </h2>
                <div className={styles.blurb}>
                    <p>{episode!.blurb}</p>
=======
        const imageFlud = episode.image!.childImageSharp!.fluid
        return (
            <div key={episode.title} className={styles.episode}>
                <h2>
                    {episode.title} : {episode.person}
                </h2>
                <div className={styles.blurb}>
                    <p>{episode.blurb}</p>
>>>>>>> Add london living page back to the site
                </div>
                <div className={styles.image}>
                    <Img fluid={imageFlud} />
                </div>
                <div className={styles.media}>
                    <div className={styles.audio}>
                        <audio controls={true} preload="metadata">
<<<<<<< HEAD
                            <source src={episode!.audioUrl} type="audio/mpeg" />
                        </audio>
                    </div>
                    <div>
                        {episode!.youTubeVideoId != null ? (
                            <YouTube
                                className={styles.video}
                                videoId={episode!.youTubeVideoId}
                            />
=======
                            <source src={episode.audioUrl} type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className={styles.video}>
                        {episode.youTubeVideoId != null ? (
                            <YouTube videoId={episode.youTubeVideoId} />
>>>>>>> Add london living page back to the site
                        ) : null}
                    </div>
                </div>
            </div>
        )
    })

<<<<<<< HEAD
    const links = data.podcast!.frontmatter!.links!.map(link => {
        let badge = <></>

        if (link!.type === "Spotify") {
            badge = <SpotifyBadge />
        }
        if (link!.type === "ApplePodcasts") {
            badge = <ApplePodcastBadge />
        }

        return (
            <a
                key={link!.link}
                className={styles.linkBadge}
                href={link!.link}
                target="_blank"
                rel="noopener noreferrer"
            >
=======
    const links = data.podcast?.frontmatter.links.map(link => {
        let badge = <></>

        if (link.type === "Spotify") {
            badge = <SpotifyBadge />
        }
        if (link.type === "ApplePodcasts") {
            badge = <ApplePodcastBadge />
        }
        if (link.type === "RSS") {
            badge = <RSSBadge />
        }

        return (
            <a className={styles.linkBadge} href={link.link} target="_blank" rel="noopener noreferrer">
>>>>>>> Add london living page back to the site
                {badge}
            </a>
        )
    })

    return (
        <Layout
            headerColour="light"
            title={data.mainContent!.frontmatter!.title}
            description={undefined}
        >
            <HeaderUnderlay className={styles.londonLiving} />
            <Section className={styles.londonLiving}>
                <div className={styles.content}>
                    <div className={styles.intro}>
                        <div className={styles.header}>
                            <LondonLivingLogo />
                        </div>
                        <div
                            className={styles.blurb}
                            dangerouslySetInnerHTML={{
<<<<<<< HEAD
                                __html: data.mainContent!.html!,
=======
                                __html: data.mainContent?.html ?? "No Content!",
>>>>>>> Add london living page back to the site
                            }}
                        />

                        <div className={styles.links}>{links}</div>
                    </div>

                    <div className={styles.podcast}>
                        <h1>Episodes</h1>
                        <div className={styles.blurb}>
<<<<<<< HEAD
                            <p>{data.podcast!.frontmatter!.blurb!}</p>
=======
                            <p>{data.podcast.frontmatter.blurb}</p>
>>>>>>> Add london living page back to the site
                        </div>
                        <div className={styles.episodes}>{episodes}</div>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default LondonLivingPage
