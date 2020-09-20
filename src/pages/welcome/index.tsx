import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import Bio from "../../components/bio"
import Section from "../../components/section"
import HeaderUnderlay from "../../components/header-underlay"
import SectionText from "../../components/section-text"
import YouTubeGallery, {
    VideoSection,
} from "../../components/youtube/youtube-gallery"

import ChristianityOrCCMSection from "./components/christianity-or-ccm-section"

import styles from "./welcome.module.scss"
import WelcomeForm from "../../components/welcome-form"
import BigVideo from "../../components/big-video"

const WelcomePage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.WelcomeQuery>(graphql`
        query Welcome {
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
            christianityOrCcm: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/christianity_or_ccm.md$/" }
            ) {
                ...ChristianityOrCCMSection
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

            <ChristianityOrCCMSection
                christianityImage={
                    data.christianityOrCcm!.frontmatter!.christianityImage!
                        .childImageSharp!.fluid!
                }
                ccmImage={
                    data.christianityOrCcm!.frontmatter!.ccmImage!
                        .childImageSharp!.fluid!
                }
            />

            <Section colorScheme="dark" id="about-ccm">
                <SectionText dark className={styles.aboutCCM}>
                    <h1>About Christ Church Mayfair</h1>
                    <p>
                        For more information about the church and our
                        activities, you can have a look around this website to
                        see who we are and what we do. We&apos;d suggest
                        starting with our <Link to="/aboutus">About Us</Link>{" "}
                        page.
                    </p>
                    <p>
                        If you have any questions or are looking into
                        Christianity, we&apos;d love to help you! Fill in the
                        form below and a member of church staff will get in
                        touch with you.
                    </p>
                </SectionText>
            </Section>

            <WelcomeForm />

            {/* <Section colorScheme="light">
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
            </Section> */}

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

export default WelcomePage
