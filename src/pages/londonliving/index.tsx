import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SpotifyBadge from "../../content/londonliving/badges/Listen_on_spotify.inline.svg"
import ApplePodcastBadge from "../../content/londonliving/badges/US_UK_Apple_Podcasts_Listen_Color_Lockup_RGB_Wht_Type.inline.svg"

import LondonLivingLogo from "../../content/londonliving/LL_logo.inline.svg"

import styles from "../londonliving.module.scss"
import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import PodcastEpisode from "./_components/podcast-episode"
import YouTube from "react-youtube"
import Bio from "../../components/bio"
import Section from "../../components/section"
import { OpenGraphMetaData } from "../../components/open-graph"

type PodcastServiceLink = {
    name: string
    link: string
    type: "ApplePodcasts" | "Spotify"
}

const LondonLivingPage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.LondonLivingQuery>(graphql`
        query LondonLiving {
            site {
                siteMetadata {
                    title
                    description
                    url
                    robots
                    email
                    officePhoneNumber
                    podcast {
                        title
                        url
                    }
                }
            }
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
            mainContent: markdownRemark(
                fileAbsolutePath: { regex: "/londonliving/main.md$/" }
            ) {
                html
                frontmatter {
                    title
                    openGraphData {
                        image {
                            url
                            width
                            height
                            alt
                        }
                        description
                    }
                }
                fields {
                    frontmattermd {
                        findOutMoreText {
                            html
                        }
                    }
                }
            }
            followup: markdownRemark(
                fileAbsolutePath: { regex: "/londonliving/followup.md$/" }
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
                    links {
                        name
                        link
                        type
                    }
                    seasons {
                        title
                        episodes {
                            title
                            blurb
                            audioUrl
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        # This needs to be increased when we have higher res images
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const episodes = data.podcast!.frontmatter!.seasons!.map((season: any) => {
        const episodes = season.episodes.map((episode: any) => (
            <PodcastEpisode
                key={episode.audioUrl}
                title={episode.title}
                blurb={episode.blurb}
                audioUrl={episode.audioUrl}
                image={episode.image.childImageSharp.fluid}
            />
        ))
        return (
            <div className={styles.season} key={season.title}>
                <h3>Season {season.title}</h3>
                <div className={styles.episodes}>{episodes}</div>
            </div>
        )
    })

    const links = (data.podcast?.frontmatter?.links ?? []).map((link: any) => {
        let badge = <></>

        switch (link.type) {
            case "ApplePodcasts": {
                badge = <ApplePodcastBadge />
                break
            }
            case "Spotify": {
                badge = <SpotifyBadge />
                break
            }
        }

        return (
            <a
                key={link.link}
                className={styles.linkBadge}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {badge}
            </a>
        )
    })

    const customOpenGraphData: OpenGraphMetaData = {
        title: data.mainContent!.frontmatter!.title!,
        description: data.mainContent!.frontmatter!.openGraphData!.description!,
        url: data.site!.siteMetadata!.url! + "/londonliving",
        type: "website",
        images: [
            {
                imageUrl: data.mainContent!.frontmatter!.openGraphData!.image!
                    .url!,
                imageWidth: data.mainContent!.frontmatter!.openGraphData!.image!
                    .width!,
                imageHeight: data.mainContent!.frontmatter!.openGraphData!
                    .image!.height!,
            },
        ],
    }

    return (
        <Layout
            headerColour="light"
            title={data.mainContent!.frontmatter!.title}
            description={
                data.mainContent!.frontmatter!.openGraphData!.description
            }
            openGraphData={customOpenGraphData}
        >
            <HeaderUnderlay
                className={styles.londonLiving}
                colorScheme="custom"
            />
            <Section colorScheme="custom" className={styles.londonLiving}>
                <div className={styles.content}>
                    <div className={styles.intro}>
                        <div className={styles.header}>
                            <LondonLivingLogo />
                        </div>
                        <div
                            className={styles.blurb}
                            dangerouslySetInnerHTML={{
                                __html: data.mainContent!.html!,
                            }}
                        />
                        <div className={styles.links}>{links}</div>
                    </div>
                    <div className={styles.podcast}>
                        <div className={styles.seasons}>{episodes}</div>
                    </div>
                </div>
            </Section>
            <Section colorScheme="custom" className={styles.londonLiving}>
                <div className={styles.content}>
                    <div>
                        <h1>Got Questions?</h1>
                        <p>
                            Maybe you have questions about how the Christian
                            faith and it&apos;s message about Jesus can bring
                            hope to all types of people in all kinds of
                            situations. Here are some ways you might have those
                            questions answered:
                        </p>
                    </div>
                    <div className={styles.followupOptions}>
                        <div className={styles.followupOption}>
                            <h2>1. Talk to a Friend</h2>
                            <p>
                                If a friend shared this podcast with you then
                                you could talk to them and ask them how their
                                faith helps them through the ups-and-downs of
                                life.
                            </p>
                        </div>
                        <div className={styles.followupOption}>
                            <h2>2. Listen to a Service</h2>
                            <p>
                                You&apos;d be welcome to join our weekly
                                services where you could hear more on what
                                Christianity says to modern Londoners from all
                                backgrounds. Service times and details are on
                                our <a href="/#services">homepage</a>.
                            </p>
                        </div>
                        <div className={styles.followupOption}>
                            <h2>3. Get in Touch</h2>
                            <p>
                                We&apos;d be glad to answer any questions you
                                have and share with you the hope we have. You
                                can find Nick&apos;s details at the bottom of
                                this page.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Alternatively this short video explains the person
                            at the heart of the solid hope that Christians
                            enjoy.
                        </p>
                    </div>
                </div>
            </Section>
            <Section colorScheme="custom" className={styles.londonLiving}>
                <div className={styles.bigVideoContent}>
                    <YouTube
                        containerClassName={styles.bigVideoContainer}
                        className={styles.bigPlayer}
                        opts={{ playerVars: { autoplay: 0 } }}
                        videoId={"qjQLAay1HqM"}
                    />
                </div>
            </Section>
            <Bio
                people={data.evangelists.nodes}
                peoplePrecedenceByEmail={["nick@christchurchmayfair.org"]}
                descriptionHtml={
                    data.mainContent!.fields!.frontmattermd!.findOutMoreText!
                        .html!
                }
            />
        </Layout>
    )
}

export default LondonLivingPage
