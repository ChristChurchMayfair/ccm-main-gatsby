import React, { FC } from "react"

import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import MagnifyingGlassIcon from "../../assets/icons/magnifying-glass.inline.svg"
import QuestionMarkIcon from "../../assets/icons/question-mark.inline.svg"

import * as styles from "./welcome.module.scss"
import LargeNavigationButtons from "../../components/large-navigation-buttons"

const ChristianityPage: FC = () => (
    <Layout headerColour="dark" title="Welcome">
        <HeaderUnderlay colorScheme="light" />
        <Section colorScheme="light">
            <div className={styles.aboutCCM}>
                <LargeNavigationButtons
                    buttonRow={[
                        {
                            key: "what",
                            text: "What is Christianity?",
                            route: "/whatischristianity",
                            icon: QuestionMarkIcon,
                            colourScheme: "light",
                        },
                        {
                            key: "explore",
                            text: "How can I explore further?",
                            route: "/christianityexplored",
                            icon: MagnifyingGlassIcon,
                            colourScheme: "dark",
                        },
                    ]}
                />
            </div>
        </Section>
    </Layout>
)

export default ChristianityPage
