import React, { PureComponent } from "react"

import type { Series, Sermon } from "../../types"
import Grid from "../Grid"
import SeriesListItem from "./SeriesListItem"

interface Props {
    serieses: Array<Series>
}

class SeriesList extends PureComponent<Props> {
    render() {
        const { serieses } = this.props
        return (
            <Grid
                items={serieses}
                keyExtractor={series => series.id}
                renderItem={series => (
                    <SeriesListItem series={series} />
                )}
            />
        )
    }
}

export default SeriesList
