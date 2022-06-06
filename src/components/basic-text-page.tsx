import React from "react"

import HeaderUnderlay from "./header-underlay"
import Section from "./section"
import * as styles from "./basic-text-page.module.scss"

type BasicTextProps = {
    html?: string
}

const BasicText: React.FC<BasicTextProps> = props => (
    <>
        <HeaderUnderlay colorScheme="light" />
        <Section colorScheme="light">
            <article
                className={styles.basicArticle}
                dangerouslySetInnerHTML={{
                    __html: props.html ?? "Missing content",
                }}
            />
        </Section>
    </>
)

export default BasicText
