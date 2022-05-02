/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC, HTMLProps } from "react"

import styles from "./find-out-more.module.scss"
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
