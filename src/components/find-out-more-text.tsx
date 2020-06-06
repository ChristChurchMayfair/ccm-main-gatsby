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
