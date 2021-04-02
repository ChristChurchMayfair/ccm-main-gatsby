import React from "react"

import type { Series } from "../../types"
import Grid from "../Grid"
import SeriesListItem from "./SeriesListItem"

interface Props {
    serieses: Array<Series>
}

const SeriesList: React.FC<Props> = ({ serieses }) => {
    return (
        <Grid
            items={serieses}
            keyExtractor={series => series.id}
            renderItem={series => <SeriesListItem series={series} />}
        />
    )
}

export default SeriesList
