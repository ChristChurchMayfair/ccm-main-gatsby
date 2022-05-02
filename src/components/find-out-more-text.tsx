/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC } from "react"

import styles from "./find-out-more-text.module.scss"

interface FindOutMoreTextProps {
    innerHTML: string
}

const FindOutMoreText: FC<FindOutMoreTextProps> = ({ children, innerHTML }) => (
    <div
        className={styles.findOutMoreText}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
    >
        {children}
    </div>
)

export default FindOutMoreText
