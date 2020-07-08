import classnames from "classnames"
import React, { FC, HTMLProps } from "react"

import styles from "./find-out-more.module.scss"
import Section from "./section"

interface FindOutMoreProps extends HTMLProps<HTMLDivElement> {}

const FindOutMore: FC<FindOutMoreProps> = ({
    children,
    className,
    ...elementProps
}) => (
    <Section
        colorScheme={"light"}
        className={classnames(className)}
        {...elementProps}
    >
        <div className={styles.findOutMore}>
            <h1 className={styles.heading}>Find out more</h1>
            {children}
        </div>
    </Section>
)

export default FindOutMore
