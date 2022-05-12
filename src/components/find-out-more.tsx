import React, { FC, HTMLProps } from "react"

import * as styles from "./find-out-more.module.scss"
import Section from "./section"

interface FindOutMoreProps extends HTMLProps<HTMLDivElement> {}

const FindOutMore: FC<FindOutMoreProps> = ({ children, ...elementProps }) => (
    <Section colorScheme="light">
        <div className={styles.findOutMore} {...elementProps}>
            <h1 className={styles.heading}>Find out more</h1>
            {children}
        </div>
    </Section>
)

export default FindOutMore
