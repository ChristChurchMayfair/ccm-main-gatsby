import React from "react"

import Talks from "../components/talks"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { useStaticQuery, graphql } from "gatsby"

const TalksPageQuery = graphql`
    query TalksPage {
        markdownRemark(fileAbsolutePath: { regex: "/talks/index.md$/" }) {
            frontmatter {
                title
                overlayCaption
                itunesPodcastURL
                podcastURL
                iosAppStoreLink
                playStoreLink
                headerColour
                mainImage {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }
`

const TalksPage = () => {
    const data = useStaticQuery<GatsbyTypes.TalksPageQuery>(TalksPageQuery)
    const meta = data.markdownRemark!.frontmatter!
    return (
        <Layout title="Talks" headerColour={meta.headerColour}>
            <Hero
                sectionId="talks-hero"
                sectionClass="left bottom"
                fluid={meta.mainImage!.childImageSharp!.fluid}
                overlayCaption={meta.overlayCaption}
            />
            <section className="intro talks dark">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark!.html!,
                    }}
                />
                <a
                    id="apple-podcast-link"
                    className="podcast-link"
                    href={meta.itunesPodcastURL}
                    style={{
                        background:
                            "url(/assets/badges/US_UK_Apple_Podcasts_Listen_Color_Lockup_RGB_Wht_Type.svg) no-repeat",
                        height: 34,
                        backgroundSize: "contain",
                        width: 190,
                    }}
                ></a>
                <a
                    id="google-podcast-link"
                    className="podcast-link"
                    href={meta.podcastURL}
                    style={{
                        background:
                            "url(/assets/badges/google_podcasts_badge@2x.png) no-repeat",
                        height: 34,
                        backgroundSize: "contain",
                        width: 160,
                    }}
                ></a>
                <a
                    id="apple-appstore-link"
                    className="appstore-link"
                    href={meta.iosAppStoreLink}
                    style={{
                        background:
                            "url(/assets/badges/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg) no-repeat",
                        backgroundSize: "contain",
                        width: 120,
                    }}
                ></a>
                <a
                    id="google-playstore-link"
                    className="appstore-link"
                    href={meta.playStoreLink}
                    style={{
                        background:
                            "url(/assets/badges/google_play_en_badge_web_generic.png) no-repeat",
                        backgroundSize: "contain",
                        width: 135,
                    }}
                ></a>
            </section>
            <section className="talks-react-app">
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
                <Talks />
            </section>
        </Layout>
    )
}

export default TalksPage
