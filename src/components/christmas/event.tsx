import { format, isAfter, sub } from "date-fns"
import React from "react"
import styles from "./christmas2022.module.scss"

export type SingleEvent = {
    title: string
    description: string
    datetime: Date
}

export const hasSingleEventPassedFilter: (
    datetime: Date,
    margin: Duration
) => (event: SingleEvent) => boolean = function (
    datetime: Date,
    margin: Duration
) {
    const filterFunction: (event: SingleEvent) => boolean = function (
        event: SingleEvent
    ): boolean {
        const threshold_sub_margin = sub(datetime, margin)
        return isAfter(event.datetime, threshold_sub_margin)
    }
    return filterFunction
}

export const EventListing = (props: SingleEvent) => {
    return (
        <div className={styles.event}>
            <div className={styles.eventtime}>
                {format(props.datetime, "EEEE do LLLL, h.mmaa")}
            </div>
            <div className={styles.eventtitle}>{props.title}</div>
            <div className={styles.eventdescription}>{props.description}</div>
        </div>
    )
}
