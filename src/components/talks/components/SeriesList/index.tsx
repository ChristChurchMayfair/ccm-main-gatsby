import React, { PureComponent } from "react"

import type { Series } from "../../types"
import Grid from "../Grid"
import SeriesListItem from "./SeriesListItem"

interface Props {
    serieses: Array<Series>
    onSelectSeries: (seriesId: string) => void
}

class SeriesList extends PureComponent<Props> {
    render() {
        const { serieses, onSelectSeries } = this.props
        return (
            <Grid
                items={serieses}
                keyExtractor={series => series.id}
                renderItem={series => (
                    <SeriesListItem onClick={onSelectSeries} series={series} />
                )}
            />
        )
    }
}

export default SeriesList
