/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "./section"
import styles from "./post-lockdown-notice.module.scss"

const PostLockDownNotice = () => {
    const { postLockDown } = useStaticQuery<
        GatsbyTypes.PostLockDownQuery
    >(graphql`
        query PostLockDown {
            postLockDown: markdownRemark(
                fileAbsolutePath: { regex: "/post-lockdown-notice.md$/" }
            ) {
                html
            }
        }
    `)
    return (
        <Section colorScheme="light" className={styles.postLockDown}>
            <div
                className={styles.postLockdownContent}
                dangerouslySetInnerHTML={{ __html: postLockDown!.html! }}
            />
        </Section>
    )
}

export default PostLockDownNotice
