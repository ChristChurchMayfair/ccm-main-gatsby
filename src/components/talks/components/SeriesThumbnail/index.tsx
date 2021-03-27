import React, { PureComponent, Fragment } from "react"
import styled from "styled-components"

import type { Series } from "../../types"
import Card from "../Card"

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`

const Subtitle = styled.div`
    margin-top: 0.2em;
`

interface Props {
    series: Series
}

class SeriesThumbnail extends PureComponent<Props> {
    render() {
        const { series } = this.props
        return (
            <Card
                renderDetails={() => (
                    <Fragment>
                        <Title>{series.name}</Title>
                        <Subtitle>{series.subtitle != null && series.subtitle != "" ? series.subtitle : series.name}</Subtitle>
                    </Fragment>
                )}
            />
        )
    }
}

export default SeriesThumbnail
