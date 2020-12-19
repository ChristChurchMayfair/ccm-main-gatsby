import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./christmas2020.module.scss"
import { parseISO } from "date-fns"
import Section from "../section"
import PartiallyDisclosedList from "./partially-disclosed-list"
import hash from "object-hash"
import EventGroupListing, {
    EventGroup,
    eventGroupSortFunction,
    hasEventGroupPassedFilter,
} from "./eventgroup"

const Christmas2020 = () => {
    const data = useStaticQuery<GatsbyTypes.Christmas2020Query>(graphql`
        query Christmas2020 {
            christmas: markdownRemark(
                fileAbsolutePath: { regex: "/christmas2020/christmas2020.md$/" }
            ) {
                html
                frontmatter {
                    title
                    event_groups {
                        title
                        description
                        events {
                            description
                            streamLink
                            datetime
                            streamed
                            inPerson
                            cancelled
                        }
                    }
                }
            }
        }
    `)
    const event_group_objects = data
        .christmas!.frontmatter!.event_groups!.map(
            (unstructured_event_group: any) => {
                const events = unstructured_event_group.events.map(
                    (unstructured_event: any) => {
                        return {
                            title: unstructured_event.title,
                            datetime: parseISO(unstructured_event.datetime),
                            description: unstructured_event.description,
                            streamed: unstructured_event.streamed,
                            inPerson: unstructured_event.inPerson,
                            streamLink: unstructured_event.streamLink,
                            cancelled: unstructured_event.cancelled,
                            styles: styles,
                        }
                    }
                )

                return {
                    title: unstructured_event_group.title,
                    description: unstructured_event_group.description,
                    events: events,
                    styles: styles,
                }
            }
        )
        .sort(eventGroupSortFunction(true))
        .filter(hasEventGroupPassedFilter(new Date(), { hours: 2 }))

    const event_groups = event_group_objects.map((event_group: EventGroup) => (
        <EventGroupListing
            key={hash(event_group)}
            {...event_group}
        ></EventGroupListing>
    ))

    return (
        <Section
            id="christmas"
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
                <div className={styles.eventgroups}>
                    <PartiallyDisclosedList
                        numberOfItemsToShowByDefault={3}
                        styles={styles}
                        itemTypeName="Events"
                    >
                        {event_groups}
                    </PartiallyDisclosedList>
                </div>
            </div>
        </Section>
    )
}

export default Christmas2020
