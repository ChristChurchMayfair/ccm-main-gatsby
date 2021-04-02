import React from "react"
import styled from "styled-components"

import FilterTextInput from "../FilterTextInput"

const Main = styled.div`
    line-height: normal;
    padding: 0 0 1.5rem;
`

interface Props {
    setTalksFilter: (text: string) => void
}

const Filters: React.FC<Props> = ({ setTalksFilter }) => {
    return (
        <Main>
            <FilterTextInput
                setTalksFilter={setTalksFilter}
                placeholder="Search"
            />
        </Main>
    )
}

export default Filters
