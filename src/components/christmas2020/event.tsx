import classNames from "classnames"
import { format, isAfter, sub, add, isWithinInterval } from "date-fns"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import React from "react"
import { FC } from "react"

export type Event = {
    description?: string
    streamLink?: string
    datetime: Date
    streamed?: boolean
    inPerson?: boolean
    cancelled?: boolean
    styles: any
    ordinal?: number
}

export const hasEventPassedFilter: (
    datetime: Date,
    margin: Duration
) => (event: Event) => boolean = function (datetime: Date, margin: Duration) {
    const filterFunction: (event: Event) => boolean = function (
        event: Event
    ): boolean {
        const threshold_sub_margin = sub(datetime, margin)
        return isAfter(event.datetime, threshold_sub_margin)
    }
    return filterFunction
}

export const eventSortFunction: (
    descending: boolean
) => (event: Event, otherEvent: Event) => number = function (
    descending: boolean
) {
    const sortFunction: (event: Event, otherEvent: Event) => number = function (
        event: Event,
        otherEvent: Event
    ): number {
        let adjustment = 1
        if (!descending) {
            adjustment = -1
        }

        if (event.datetime > otherEvent.datetime) return 1 * adjustment
        if (event.datetime < otherEvent.datetime) return -1 * adjustment
        return 0
    }
    return sortFunction
}

const EventListing: FC<Event> = ({
    description,
    datetime,
    streamLink,
    streamed,
    inPerson,
    cancelled,
    styles,
}) => {
    let stream_link = <span className={styles.streamlink}></span>
    const startTolerance = { hours: 4 }
    const now: Date = new Date()
    const interval = { start: now, end: add(now, startTolerance) }
    let event_starts_soon = false
    if (isWithinInterval(datetime, interval)) {
        event_starts_soon = true
    }

    if (
        streamed !== undefined &&
        streamed &&
        event_starts_soon &&
        cancelled !== true
    ) {
        stream_link = (
            <OutboundLink
                className={classNames(styles.streamlink, {
                    [styles.disabled]: !event_starts_soon,
                })}
                href={streamLink}
            >
                Watch Live
            </OutboundLink>
        )
    }

    let service_type = "In person & online"
    if (cancelled == null || !cancelled) {
        if (
            streamed !== undefined &&
            streamed &&
            inPerson != undefined &&
            !inPerson
        ) {
            service_type = "Online"
        } else if (
            inPerson != undefined &&
            inPerson &&
            streamed !== undefined &&
            !streamed
        ) {
            service_type = "In person"
        }
    } else {
        service_type = "CANCELLED"
    }

    return (
        <div className={styles.event} key={format(datetime, "t")}>
            <span className={styles.eventtime}>
                {format(datetime, "h:mma").toLowerCase()}
            </span>
            {stream_link}
            <span
                className={classNames(styles.eventtype, {
                    [styles.cancelled]: cancelled,
                })}
            >
                {service_type}. {description}
            </span>
        </div>
    )
}

export default EventListing
