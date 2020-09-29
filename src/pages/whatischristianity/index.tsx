import React, { FC } from "react"

import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import SectionText from "../../components/section-text"

import styles from "./whatischristianity.module.scss"
import BigVideo from "../../components/big-video"
import LargeNavigationButtons from "../../components/large-navigation-buttons"

const WhatIsChristianityPage: FC = () => (
    <Layout headerColour="dark" title="What is Christianity?">
        <HeaderUnderlay colorScheme="light" />
        <Section colorScheme="dark" intro wider>
            <SectionText intro>
                <h1 className={styles.title}>What is Christianity?</h1>
            </SectionText>
        </Section>
        <Section colorScheme="light">
            <div
                className={styles.whatIsChristianity}
                id="what-is-christianity"
            >
                <p>
                    Christianity is the good news about Jesus Christ. This 3
                    minute video gives a great introduction to the heart of
                    Chtistian faith.
                </p>
                <BigVideo youTubeVideoId="qjQLAay1HqM" />
                <LargeNavigationButtons
                    buttonRow={[
                        {
                            key: "ce",
                            text: "I'd like to explore Christianity further",
                            route: "/christianityexplored",
                            colourScheme: "dark",
                        },
                        {
                            key: "questions",
                            text: "I have some questions",
                            route: "/newcomer",
                            colourScheme: "light",
                        },
                    ]}
                />
            </div>
        </Section>
    </Layout>
)

export default WhatIsChristianityPage
