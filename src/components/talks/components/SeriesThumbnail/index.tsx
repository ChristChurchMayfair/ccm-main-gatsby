import React, { PureComponent, Fragment } from "react"
import styled from "styled-components"

import type { Series } from "../../types"
import placeholderImage from "../../images/placeholderImage"
import Card from "../Card"

const Title = styled.div`
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
                imageUrl={series.image3x2Url ?? placeholderImage}
                renderDetails={() => (
                    <Fragment>
                        <Title>{series.name}</Title>
                        {series.subtitle != null && (
                            <Subtitle>{series.subtitle}</Subtitle>
                        )}
                    </Fragment>
                )}
            />
        )
    }
}

export default SeriesThumbnail
