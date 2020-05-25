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
        className={classnames(className, styles.findOutMore)}
        {...elementProps}
    >
        <h1 className={styles.heading}>Find out more</h1>
        {children}
    </Section>
)

export default FindOutMore
