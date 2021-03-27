import React from "react"
import styled from "styled-components"

import { MEDIA_QUERIES } from "../../constants/styles"

const Main = styled.div`
    font-size: 1rem;
    line-height: normal;
`

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1.5em;
    grid-column-gap: 1.5em;
`

const Item = styled.div``

interface Props<T> {
    items: Array<T>
    keyExtractor: (item: T) => string
    renderItem: (item: T) => React.ReactNode
}

const Grid = <T extends {}>({ items, keyExtractor, renderItem }: Props<T>) => (
    <Main>
        <List>
            {items.map(item => (
                <Item key={keyExtractor(item)}>{renderItem(item)}</Item>
            ))}
        </List>
    </Main>
)

export default Grid
