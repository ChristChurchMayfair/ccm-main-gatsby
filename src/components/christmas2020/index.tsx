import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./christmas2020.module.scss"
import { parseISO, format } from "date-fns"
import Section from "../section"
import Event, { eventSortFunction, hasEventPassedFilter } from "./event"
import PartiallyDisclosedList from "./partially-disclosed-list"

const Christmas2020 = () => {
    const data = useStaticQuery<GatsbyTypes.Christmas2020Query>(graphql`
        query Christmas2020 {
            christmas: markdownRemark(
                fileAbsolutePath: { regex: "/christmas2020/christmas2020.md$/" }
            ) {
                html
                frontmatter {
                    title
                    events {
                        title
                        description
                        streamLink
                        datetime
                        streamed
                        inPerson
                    }
                }
            }
        }
    `)

    const event_objects = data
        .christmas!.frontmatter!.events!.map((unstructured_event: any) => {
            return {
                title: unstructured_event.title,
                streamLink: unstructured_event.streamLink,
                styles: styles,
                datetime: parseISO(unstructured_event.datetime),
                inPerson: unstructured_event.inPerson,
                streamed: unstructured_event.streamed,
                key: unstructured_event.datetime,
            }
        })
        .sort(eventSortFunction(true))
        .filter(hasEventPassedFilter(new Date(), { hours: 2 }))

    const events = event_objects.map((event: Event) => (
        <Event key={format(event.datetime, "t")} {...event}></Event>
    ))

    return (
        <Section
            colorScheme="custom"
            className={styles.christmas2020}
            full-bleed
        >
            <div className={styles.content}>
                <div className={styles.title}>
                    {data.christmas!.frontmatter!.title!}
                </div>
                <div
                    className={styles.blurb}
                    dangerouslySetInnerHTML={{ __html: data.christmas!.html! }}
                />
                <div className={styles.events}>
                    <PartiallyDisclosedList
                        numberOfItemsToShowByDefault={5}
                        styles={styles}
                        itemTypeName="Events"
                    >
                        {events}
                    </PartiallyDisclosedList>
                </div>
            </div>
        </Section>
    )
}

export default Christmas2020
