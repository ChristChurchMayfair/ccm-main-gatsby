import React, { Component } from "react"
import styled from "styled-components"

import FeaturedSermon from "../FeaturedSermon"
import type { Sermon, Series } from "../../types"
import Grid from "../Grid"
import { SHADOW, MEDIA_QUERIES } from "../../constants/styles"

const findSermonAndSeriesById = (
    serieses: Array<Series>,
    sermonId: string
): { series: Series; sermon: Sermon } | null => {
    for (const series of serieses) {
        const sermon = series.sermons.find(sermon => sermon.id === sermonId)
        if (sermon != null) {
            return { series, sermon }
        }
    }
    return null
}

const Link = styled.a`
    color: currentColor;
    text-decoration: none !important;
    display: block;
    width: 100%;

    transition: all 0.2s ease-out;

    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            opacity: 0.9;
            box-shadow: ${SHADOW};
        }
    }
`

interface Props {
    serieses: Array<Series>
    featuredSermonIds: Array<string>
}

class SermonList extends Component<Props> {
    render() {
        const { serieses, featuredSermonIds } = this.props
        return (
            <Grid
                items={featuredSermonIds.flatMap(id => {
                    const result = findSermonAndSeriesById(serieses, id)
                    if (result == null) {
                        return []
                    } else {
                        return [result]
                    }
                })}
                keyExtractor={({ sermon }) => sermon.id}
                renderItem={({ sermon }) => (
                    <Link
                        href={sermon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FeaturedSermon sermon={sermon} />
                    </Link>
                )}
            />
        )
    }
}

export default SermonList
