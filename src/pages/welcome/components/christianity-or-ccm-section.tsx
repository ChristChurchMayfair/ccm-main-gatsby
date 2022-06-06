import React, { FC } from "react"

import Section from "../../../components/section"
import LargeNavigationButtons from "../../../components/large-navigation-buttons"

import * as styles from "../welcome.module.scss"

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
