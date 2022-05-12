import classNames from "classnames"
import React, { FC } from "react"

import * as styles from "./special-service.module.scss"
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
