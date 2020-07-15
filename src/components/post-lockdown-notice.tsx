import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "./section"
import SectionText from "./section-text"
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
        <Section colorScheme="light">
            <div
                className={styles.postLockdownContent}
                dangerouslySetInnerHTML={{ __html: postLockDown!.html! }}
            />
        </Section>
    )
}

export default PostLockDownNotice
