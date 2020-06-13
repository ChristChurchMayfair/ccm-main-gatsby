import React, { PureComponent } from "react"
import styled from "styled-components"
import format from "date-fns/format"

import type { Sermon } from "../../types"

const Main = styled.div`
    width: 100%;
`

const DetailRow = styled.div`
    display: flex;
    flex-flow row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7em;
`

interface Props {
    sermon: Sermon
}

export default class SermonRow extends PureComponent<Props> {
    render() {
        const { sermon } = this.props
        const passage = sermon.passage
        return (
            <Main>
                <div>{sermon.name}</div>
                <DetailRow>
                    <div>{passage}</div>
                    <div>
                        {format(new Date(sermon.preachedAt), "do MMM yyyy")}
                    </div>
                </DetailRow>
                {sermon.speakers.length > 0 && (
                    <DetailRow>
                        <div>{sermon.speakers.map(s => s.name).join(", ")}</div>
                    </DetailRow>
                )}
            </Main>
        )
    }
}
