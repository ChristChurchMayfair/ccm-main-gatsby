import React, { PureComponent } from "react"
import styled from "styled-components"

import type { Series, Sermon } from "../../types"
import SermonRow from "./SermonRow"
import { MEDIA_QUERIES, COLOURS } from "../../constants/styles"

const PADDING_VERTICAL = "0.5em"

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const ListItem = styled.li<{ shouldHighlight: boolean }>`
    border-bottom: 1px solid ${COLOURS.lightGrey};
    background-color: ${props => {
        return props.shouldHighlight ? COLOURS.sermonHighlight : null
    }};
`

const HPadding = styled.div`
    padding: 0 1em;

    @media ${MEDIA_QUERIES.mobile} {
        padding: 0 0.8em;
    }
`

const Link = styled.a.attrs(() => ({
    target: "_blank",
    ref: "noopener noreferrer",
}))`
    display: block;
    text-decoration: none !important;
    color: currentColor;
    transition: background-color 0.2s ease-out;
    padding: ${PADDING_VERTICAL} 0;
    /* stupid firefox */
    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            background-color: ${COLOURS.lightGrey};
        }
    }
`

interface Props {
    series: Series
    shouldHighlightSermon: (sermon: Sermon) => boolean
}

export default class SeriesListItem extends PureComponent<Props> {
    render() {
        const { series, shouldHighlightSermon } = this.props
        const sortedSermons = [...series.sermons]
        sortedSermons.sort((a, b) => {
            return (
                new Date(b.preachedAt).getTime() -
                new Date(a.preachedAt).getTime()
            )
        })
        return (
            <List>
                {sortedSermons.map(sermon => (
                    <ListItem
                        key={sermon.id}
                        shouldHighlight={shouldHighlightSermon(sermon)}
                    >
                        <Link
                            href={sermon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <HPadding>
                                <SermonRow
                                    sermon={sermon}
                                    seriesName={series.name}
                                />
                            </HPadding>
                        </Link>
                    </ListItem>
                ))}
            </List>
        )
    }
}
