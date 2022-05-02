import React, { Component } from "react"

import { SanityQuery } from "./sanityQuery"
import type { Series } from "../../types"

const sortSerieses = (serieses: Array<Series>): Array<Series> => {
    const mostRecentSermonDates = serieses.map(series => {
        const sermonDates = series.sermons.map(sermon =>
            new Date(sermon.preachedAt).getTime()
        )
        const mostRecentSermonDate = Math.max(...sermonDates)
        return [series.id, mostRecentSermonDate]
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mostRecentSermonDates.sort((a, b) => b[1] - a[1])
    return mostRecentSermonDates.flatMap(
        ([seriesId]) => serieses.find(s => s.id === seriesId) ?? []
    )
}

interface Props {
    children: (args: {
        serieses: Array<Series>
        loading: boolean
        error: string | null
    }) => React.ReactNode
}

const SANITY_SERIES_QUERY = `*[_type == "sermonSeries"] | order(_createdAt asc) {
    "id": _id, 
    name, 
    "image3x2Url": imageUrl, 
    subtitle, 
    "sermons": *[_type == "sermon" && references(^._id)] | order(preachedAt asc) {
        "id": _id,
        "name": title,
        preachedAt,
        url,
        "passage": passages[0],
        duration,
        "event": event->{
            "id": _id,
            name
        },
        "speakers": speakers[]->{
            "id": _id,
            name
        }
    } 
}`

export default class WithSeriesesFromSanity extends Component<Props> {
    render() {
        const { children } = this.props
        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore no idea what's going on here
            <SanityQuery<Array<Series>> query={SANITY_SERIES_QUERY}>
                {({ loading, error, data }) => {
                    const serieses = data ?? []
                    return children({
                        serieses: sortSerieses(serieses),
                        loading,
                        error: error != null ? error.message : null,
                    })
                }}
            </SanityQuery>
        )
    }
}
