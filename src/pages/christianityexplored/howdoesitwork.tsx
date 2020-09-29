import React, { FC } from "react"

import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import SectionText from "../../components/section-text"

import styles from "./christianityexplored.module.scss"
import BigVideo from "../../components/big-video"
import LargeNavigationButtons from "../../components/large-navigation-buttons"

const HowDoesItWorkPage: FC = () => (
    <Layout
        headerColour="light"
        title="Christianity Explored | How does it work?"
    >
        <HeaderUnderlay colorScheme="dark" />
        <Section colorScheme="light" intro wider>
            <SectionText intro>
                <h1>How does it work?</h1>
            </SectionText>
        </Section>
        <Section colorScheme="light">
            <SectionText className={styles.information}>
                <BigVideo youTubeVideoId="cTASHKTPQZ0" />
            </SectionText>
        </Section>
        <Section colorScheme="light">
            <SectionText className={styles.information}>
                <p>
                    The course runs over 7 weeks. Each session consists of a
                    talk followed by time to discuss, and ask questions about
                    what you have heard in an informal, friendly and open
                    environment. All questions are welcome, and people are
                    welcome to contribute to the discussion as much or as little
                    as they wish.
                </p>
                <p>
                    The course is designed to be experienced as a part of these
                    groups, but we can make the videos available to watch on
                    your own, just click the link below.
                </p>
                <LargeNavigationButtons
                    buttonRow={[
                        {
                            key: "interested-group",
                            text: "I'm interested in joining a group",
                            route: "/",
                            colourScheme: "dark",
                        },
                        {
                            key: "videos",
                            text: "I'd like access to the videos",
                            route: "/",
                            colourScheme: "light",
                        },
                        {
                            key: "videos",
                            text: "I have questions",
                            route: "/newcomer",
                            colourScheme: "dark",
                        },
                    ]}
                />
            </SectionText>
        </Section>
    </Layout>
)

export default HowDoesItWorkPage
