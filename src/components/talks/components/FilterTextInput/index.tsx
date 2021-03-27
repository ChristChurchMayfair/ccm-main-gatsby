import React, { Component } from "react"
import styled from "styled-components"
import { COLOURS } from "../../constants/styles"

interface Props {
    onChange: (value: string) => void
    placeholder: string
    value: string
}

interface State {
    isFocused: boolean
}

const Main = styled.label<{ isFocused: boolean }>`
    cursor: text;
    padding: 0.1em 0.3em;
    border: 3px solid ${COLOURS.lightGrey};
    transition: border-color 0.2s, width 0.2s;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-color: ${props => (props.isFocused ? COLOURS.darkGrey : null)};
`

const TextInput = styled.input`
    font-size: 0.6em;
    font-family: inherit;
    outline: none;
    border: none;
    width: 100%;
`

class FilterTextInput extends Component<Props, State> {
    state = { isFocused: false }

    onFocus = () => this.setState({ isFocused: true })

    onBlur = () => this.setState({ isFocused: false })

    render() {
        const { onChange, placeholder, value } = this.props
        const { isFocused } = this.state
        return (
            <Main isFocused={isFocused}>
                <TextInput
                    value={value}
                    type="text"
                    onChange={event => {
                        //$FlowFixMe
                        const newFilterValue: string = event.target.value
                        onChange(newFilterValue)
                    }}
                    placeholder={placeholder}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
            </Main>
        )
    }
}

export default FilterTextInput
