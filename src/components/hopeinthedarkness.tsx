import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./hopeinthedarkness.module.scss"
import Section from "./section"

const HopeInTheDarkness = () => {
    const data = useStaticQuery<GatsbyTypes.HopeInTheDarknessQuery>(graphql`
        query HopeInTheDarkness {
            hopeInTheDarkness: markdownRemark(
                fileAbsolutePath: { regex: "/_events/hopeinthedarkness.md$/" }
            ) {
                html
                frontmatter {
                    ticketsLink
                }
            }
        }
    `)

    return (
        <Section
            colorScheme="custom"
            className={styles.hopeInTheDarknessPromo}
            full-bleed
        >
            <div className={styles.content}>
                <div className={styles.title}>
                    <div className={styles.street}>Street</div>
                    <div className={styles.food}>food</div>
                    <div className={styles.market}>market</div>
                </div>
                <div className={styles.info}>
                    <div
                        className={styles.blurb}
                        dangerouslySetInnerHTML={{
                            __html: data.hopeInTheDarkness!.html!,
                        }}
                    />
                    <div className={styles.cuisines}>
                        <ul>
                            <li>middle eastern</li>
                            <li>thai</li>
                            <li>gelato</li>
                            <li>craft beer</li>
                        </ul>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.date}>Thursday 19th May</div>
                        <div className={styles.time}>Open from 19:30</div>
                        <div className={styles.cost}>
                            <strong>£13</strong> (£8 unwaged) - includes food
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <a
                            className={styles.button}
                            href={
                                data.hopeInTheDarkness!.frontmatter!.ticketsLink
                            }
                        >
                            Buy Tickets
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default HopeInTheDarkness
