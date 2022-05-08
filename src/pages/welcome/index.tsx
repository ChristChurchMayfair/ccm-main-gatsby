import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import Section from "../../components/section"
import HeaderUnderlay from "../../components/header-underlay"
import SectionText from "../../components/section-text"

import ChristianityOrCCMSection from "./components/christianity-or-ccm-section"

const WelcomePage: React.FC = () => {
    const data = useStaticQuery<GatsbyTypes.WelcomeQuery>(graphql`
        query Welcome {
            intro: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/main.md$/" }
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
            bigVideo: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/big_video.md$/" }
            ) {
                html
                frontmatter {
                    videoId
                }
            }
            videos: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/videos.md$/" }
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

    return (
        <Layout headerColour="dark" title="Welcome" description={undefined}>
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
                    dangerouslySetInnerHTML={{
                        __html: data.intro!.html!,
                    }}
                />
            </Section>
            <ChristianityOrCCMSection />
        </Layout>
    )
}

export default WelcomePage
