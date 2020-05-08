import React, { Component } from "react"
import styled from "styled-components"

import FilterTextInput from "../FilterTextInput"

const Main = styled.div`
    line-height: normal;
    padding: 0 0 1.5rem;
`

const FilterComponent = styled.div``

interface Props {
    filterText: string
    modifyFilter: (text: string) => void
}

class Filters extends Component<Props> {
    render() {
        return (
            <Main>
                <FilterComponent>
                    <FilterTextInput
                        value={this.props.filterText}
                        onChange={this.props.modifyFilter}
                        placeholder="Search"
                    />
                </FilterComponent>
            </Main>
        )
    }
}

export default Filters
