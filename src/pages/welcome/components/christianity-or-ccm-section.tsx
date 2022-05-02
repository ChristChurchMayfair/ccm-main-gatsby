/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC } from "react"

import Section from "../../../components/section"
import LargeNavigationButtons from "../../../components/large-navigation-buttons"

import styles from "../welcome.module.scss"

import CongregationRaisedHandsImage from "./congregation-raised-hands.png"
import UncoverImage from "./uncover.png"

const ChristianityOrCCMSection: FC = () => (
    <Section colorScheme="light">
        <div className={styles.christianityOrCCMContainer}>
            <LargeNavigationButtons
                buttonRow={[
                    {
                        key: "faith",
                        text: "Tell me more about the Christian faith",
                        route: "/welcome/christianity",
                        colourScheme: "light",
                        image: UncoverImage,
                    },
                    {
                        key: "church",
                        text: "Tell me more about the church",
                        route: "/welcome/church",
                        colourScheme: "dark",
                        image: CongregationRaisedHandsImage,
                    },
                ]}
            />
        </div>
    </Section>
)

export default ChristianityOrCCMSection
