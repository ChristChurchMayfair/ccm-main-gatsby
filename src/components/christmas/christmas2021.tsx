import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./christmas2021.module.scss"
import Section from "../section"
import ChristmasTitle from "../../content/christmas2021/christmaswordmark.inline.svg"
import { EventListing, hasSingleEventPassedFilter, SingleEvent } from "./event"
import { parseISO } from "date-fns"

const Christmas2021 = () => {
    const data = useStaticQuery<GatsbyTypes.Christmas2021Query>(graphql`
        query Christmas2021 {
            christmas: markdownRemark(
                fileAbsolutePath: { regex: "/christmas2021/christmas2021.md$/" }
            ) {
                html
                frontmatter {
                    title
                    events {
                        title
                        description
                        datetime
                    }
                }
            }
        }
    `)
    const upcomingEvents: SingleEvent[] =
        data?.christmas?.frontmatter?.events
            ?.map((eventData: any) => ({
                title: eventData.title as string,
                description: eventData.description as string,
                datetime: parseISO(eventData.datetime as string),
            }))
            .filter(hasSingleEventPassedFilter(new Date(), { hours: 2 })) ?? []

    return (
        <Section
            id="christmas"
            colorScheme="custom"
            className={styles.christmas2021}
            full-bleed
        >
            <div className={styles.content}>
                <div className={styles.title}>
                    <ChristmasTitle />
                </div>
                <div className={styles.year}>2021</div>
                <div className={styles.events}>
                    {upcomingEvents.map(event => (
                        <EventListing
                            key={event.datetime.toJSON()}
                            {...event}
                        />
                    ))}
                </div>
                <div
                    className={styles.blurb}
                    dangerouslySetInnerHTML={{ __html: data.christmas!.html! }}
                />
                <a
                    id="christmas-find-us-button"
                    className={styles.button}
                    href="#find-us"
                >
                    Find Us
                </a>
            </div>
        </Section>
    )
}

export default Christmas2021
