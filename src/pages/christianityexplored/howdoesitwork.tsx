import React, { FC, useState } from "react"

import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import SectionText from "../../components/section-text"

import styles from "./christianityexplored.module.scss"
import BigVideo from "../../components/big-video"
import LargeNavigationButtons from "../../components/large-navigation-buttons"
import JoinGroupForm from "./components/join-group-form"
import AccessVideosForm from "./components/access-videos-form"
import AskQuestionsForm from "./components/ask-questions-form"

type DynamicSubPage = "JOIN GROUP" | "ACCESS VIDEOS" | "ASK QUESTION"

const HowDoesItWorkPage: FC = () => {
    const [
        activeDynamicSubPage,
        setActiveDynamicSubPage,
    ] = useState<DynamicSubPage | null>(null)
    return (
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
                        The course runs over 4 weeks. Each session consists of a
                        talk followed by time to discuss, and ask questions
                        about what you have heard in an informal, friendly and
                        open environment. All questions are welcome, and people
                        are welcome to contribute to the discussion as much or
                        as little as they wish.
                    </p>
                    <p>
                        Our next course is running on Wednesday 8th, 15th, 22nd,
                        29th June from 7.30-8.45pm at Christ Church Mayfair,
                        Down Street, London, W1J 7AN.
                    </p>
                    <p>
                        The course is designed to be experienced as a part of
                        these groups, but we can make the videos available to
                        watch on your own, just click the button below.
                    </p>
                    <LargeNavigationButtons
                        buttonRow={[
                            {
                                key: "interested-group",
                                text: "I'm interested in joining a group",
                                route:
                                    "christianityexplored/howdoesitwork/#more",
                                colourScheme:
                                    activeDynamicSubPage === "JOIN GROUP"
                                        ? "dark"
                                        : "light",
                                onClick: () =>
                                    setActiveDynamicSubPage("JOIN GROUP"),
                            },
                            {
                                key: "videos",
                                text: "I have questions",
                                route:
                                    "christianityexplored/howdoesitwork/#more",
                                colourScheme:
                                    activeDynamicSubPage === "ASK QUESTION"
                                        ? "dark"
                                        : "light",
                                onClick: () =>
                                    setActiveDynamicSubPage("ASK QUESTION"),
                            },
                        ]}
                    />
                </SectionText>
            </Section>
            <span id="more" />
            {activeDynamicSubPage === "JOIN GROUP" && <JoinGroupForm />}
            {activeDynamicSubPage === "ACCESS VIDEOS" && <AccessVideosForm />}
            {activeDynamicSubPage === "ASK QUESTION" && <AskQuestionsForm />}
        </Layout>
    )
}

export default HowDoesItWorkPage
