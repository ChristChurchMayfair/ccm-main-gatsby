import React, { Fragment, PureComponent } from "react"
import styled from "styled-components"
import format from "date-fns/format"

import type { Sermon, Series } from "../../types"
import Card from "../Card"

const Text = styled.div`
    margin: 0.2em 0;
`

const SermonName = styled(Text)`
    font-weight: bold;
    margin-top: 0.6em;
`

const Secondary = styled(Text)`
    opacity: 0.8;
`

interface Props {
    sermon: Sermon
    series: Series
}

class FeaturedSermon extends PureComponent<Props> {
    render() {
        const { sermon } = this.props

        const date = new Date(sermon.preachedAt)
        const passage = sermon.passage
        return (
            <Card
                renderDetails={() => (
                    <Fragment>
                        <SermonName>{sermon.name}</SermonName>
                        <Secondary>
                            {passage != null && passage != ""
                                ? passage
                                : sermon.name}
                        </Secondary>
                        <Secondary>{format(date, "dddd D MMM yyyy")}</Secondary>
                    </Fragment>
                )}
            />
        )
    }
}

export default FeaturedSermon
