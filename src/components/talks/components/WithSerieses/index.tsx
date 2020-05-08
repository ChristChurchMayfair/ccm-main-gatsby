import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import { SanityQuery } from "./sanityQuery"

import type { Series } from "../../types"

const SERIES_QUERY = gql`
    {
        allSeries {
            id
            name
            subtitle
            image3x2Url
            sermons(orderBy: preachedAt_ASC) {
                id
                name
                preachedAt
                url
                passage
                duration
                event {
                    id
                    name
                }
                speakers {
                    id
                    name
                }
            }
        }
    }
`

const sortSerieses = (serieses: Array<Series>): Array<Series> => {
    const mostRecentSermonDates = serieses.map(series => {
        const sermonDates = series.sermons.map(sermon =>
            new Date(sermon.preachedAt).getTime()
        )
        const mostRecentSermonDate = Math.max(...sermonDates)
        return [series.id, mostRecentSermonDate]
    })
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

class WithSerieses extends Component<Props> {
    render() {
        const { children } = this.props
        return (
            // @ts-ignore
            <Query query={SERIES_QUERY}>
                {/* @ts-ignore */}
                {({ loading, error, data }) => {
                    const serieses: Array<Series> =
                        data.allSeries != null ? data.allSeries : []
                    return children({
                        serieses: sortSerieses(serieses),
                        loading,
                        error: error != null ? error.message : null,
                    })
                }}
            </Query>
        )
    }
}

export default WithSerieses

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

export class WithSeriesesFromSanity extends Component<Props> {
    render() {
        const { children } = this.props
        return (
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
