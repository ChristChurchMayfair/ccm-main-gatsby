/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"

import HeaderUnderlay from "./header-underlay"
import Section from "./section"
import styles from "./basic-text-page.module.scss"

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
