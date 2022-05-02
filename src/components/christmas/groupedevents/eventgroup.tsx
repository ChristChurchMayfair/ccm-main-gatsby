/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { format } from "date-fns"
import React from "react"
import { FC } from "react"
import GroupedEventListing, {
    GroupedEvent,
    eventSortFunction,
    hasEventPassedFilter,
} from "./groupedevent"

export type EventGroup = {
    title: string
    description: string
    events: GroupedEvent[]
    styles: any
}

export const hasEventGroupPassedFilter: (
    datetime: Date,
    margin: Duration
) => (event_group: EventGroup) => boolean = function (
    datetime: Date,
    margin: Duration
) {
    const filterFunction: (event_group: EventGroup) => boolean = function (
        event_group: EventGroup
    ): boolean {
        const event_filter = hasEventPassedFilter(datetime, margin)
        return event_group.events.every(event_filter)
    }
    return filterFunction
}

export const eventGroupSortFunction: (
    descending: boolean
) => (
    event_group: EventGroup,
    otherEventGroup: EventGroup
) => number = function (descending: boolean) {
    const sortFunction: (
        event_group: EventGroup,
        otherEventGroup: EventGroup
    ) => number = function (
        event_group: EventGroup,
        otherEventGroup: EventGroup
    ): number {
        let adjustment = 1
        if (!descending) {
            adjustment = -1
        }

        if (event_group.events[0].datetime > otherEventGroup.events[0].datetime)
            return 1 * adjustment
        if (event_group.events[0].datetime < otherEventGroup.events[0].datetime)
            return -1 * adjustment
        return 0
    }
    return sortFunction
}

const EventGroupListing: FC<EventGroup> = ({
    title,
    description,
    events,
    styles,
}) => {
    const event_objects = events
        .sort(eventSortFunction(true))
        .filter(hasEventPassedFilter(new Date(), { hours: 2 }))

    const events_items = event_objects.map((event: GroupedEvent) => (
        <GroupedEventListing
            key={format(event.datetime, "t")}
            {...event}
        ></GroupedEventListing>
    ))

    let common_date = "DATE"
    let day = "DAY"
    let time_of_day = "TIME OF DAY"
    if (events.length > 0) {
        common_date = format(events[0].datetime, "do LLLL")
        day = format(events[0].datetime, "cccc")
        const common_time_of_day = format(events[0].datetime, "a")
        time_of_day = "Morning"
        if (common_time_of_day === "PM") {
            time_of_day = "Evening"
        }
    }

    return (
        <div className={styles.eventgroup}>
            <div className={styles.eventgrouptitle}>{title}</div>
            <div className={styles.eventgroupdate}>
                {day} {time_of_day} {common_date}
            </div>
            <div className={styles.eventgroupdescription}>{description}</div>
            <div className={styles.eventgroupevents}>{events_items}</div>
        </div>
    )
}

export default EventGroupListing
