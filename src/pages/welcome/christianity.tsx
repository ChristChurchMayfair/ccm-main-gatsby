/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC } from "react"

import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import MagnifyingGlassIcon from "../../assets/icons/magnifying-glass.inline.svg"
import QuestionMarkIcon from "../../assets/icons/question-mark.inline.svg"

import styles from "./welcome.module.scss"
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
