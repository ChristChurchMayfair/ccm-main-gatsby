import React, { FC } from "react"

import Section from "../../../components/section"
import BibleIcon from "../../../assets/icons/bible.inline.svg"
import PeopleIcon from "../../../assets/icons/people.inline.svg"

import styles from "../welcome.module.scss"
import LargeNavigationButtons from "../../../components/large-navigation-buttons"

const ChristianityOrCCMSection: FC = () => (
    <Section colorScheme="light">
        <div className={styles.christianityOrCCMContainer}>
            <LargeNavigationButtons
                buttonRow={[
                    {
                        key: "faith",
                        text: "Tell me more about the Christian faith",
                        route: "/welcome/christianity",
                        icon: BibleIcon,
                        colourScheme: "light",
                    },
                    {
                        key: "church",
                        text: "Tell me more about the church",
                        route: "/welcome/church",
                        icon: PeopleIcon,
                        colourScheme: "dark",
                    },
                ]}
            />
        </div>
    </Section>
)

export default ChristianityOrCCMSection
