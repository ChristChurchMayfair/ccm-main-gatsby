import React from "react"
import styled from "styled-components"

import FilterTextInput from "../FilterTextInput"

const Main = styled.div`
    line-height: normal;
    padding: 0 0 1.5rem;
`

interface Props {
    filterText: string
    modifyFilter: (text: string) => void
}

const Filters: React.FC<Props> = ({ filterText, modifyFilter }) => {
    return (
        <Main>
            <FilterTextInput
                value={filterText}
                onChange={modifyFilter}
                placeholder="Search"
            />
        </Main>
    )
}

export default Filters
