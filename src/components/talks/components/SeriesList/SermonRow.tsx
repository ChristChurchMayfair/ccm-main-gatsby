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
    font-size: 1.1em;
`

const MainTitleRow = styled.div`
    font-weight: bold;
    font-size: 1.2em;
`

interface Props {
    sermon: Sermon
    seriesName: string
}

export default class SermonRow extends PureComponent<Props> {
    render() {
        const { sermon, seriesName } = this.props
        return (
            <Main>
                <MainTitleRow>
                    <div>{sermon.name}</div>
                </MainTitleRow>
                <DetailRow>
                    <div>{sermon.passage}</div>
                    <div>
                        {format(new Date(sermon.preachedAt), "do MMM yyyy")}
                    </div>
                </DetailRow>
                {sermon.speakers.length > 0 && (
                    <DetailRow>
                        <div>{sermon.speakers.map(s => s.name).join(", ")}</div>
                        <div>{seriesName}</div>
                    </DetailRow>
                )}
            </Main>
        )
    }
}
