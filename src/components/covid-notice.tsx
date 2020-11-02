import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "./section"
import styles from "./covid-notice.module.scss"

const CovidNotice = () => {
    const { covid } = useStaticQuery<GatsbyTypes.CovidQuery>(graphql`
        query Covid {
            covid: markdownRemark(
                fileAbsolutePath: { regex: "/covid-notice.md$/" }
            ) {
                html
            }
        }
    `)
    return (
        <Section colorScheme="light" className={styles.covidNotice}>
            <div
                className={styles.covidNoticeContent}
                dangerouslySetInnerHTML={{ __html: covid!.html! }}
            />
        </Section>
    )
}

export default CovidNotice
