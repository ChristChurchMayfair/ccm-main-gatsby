import React, { PureComponent } from "react"

import type { Series, Sermon } from "../../types"
import Grid from "../Grid"
import SeriesListItem from "./SeriesListItem"

interface Props {
    serieses: Array<Series>
    shouldHighlightSermon: (sermon: Sermon) => boolean
}

class SeriesList extends PureComponent<Props> {
    render() {
        const { serieses, shouldHighlightSermon } = this.props
        return (
            <Grid
                items={serieses}
                keyExtractor={series => series.id}
                renderItem={series => (
                    <SeriesListItem series={series} shouldHighlightSermon={shouldHighlightSermon}/>
                )}
            />
        )
    }
}

export default SeriesList
