/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classNames from "classnames"
import React, { FC } from "react"

import styles from "./special-service.module.scss"
import Section from "./section"

interface SpecialServiceProps {
    title: string
    time: string
    link?: string
}

const SpecialService: FC<SpecialServiceProps> = (
    props: React.PropsWithChildren<SpecialServiceProps>
) => (
    <Section className={styles.specialService} fullBleed colorScheme="light">
        <div className={styles.content}>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.time}>{props.time}</div>
            <div className={styles.text}>{props.children}</div>
        </div>
        <a
            id="special-service-button"
            className={classNames(["button", styles.specialServiceButton])}
            href={props.link}
        >
            Watch Online
        </a>
    </Section>
)

export default SpecialService
