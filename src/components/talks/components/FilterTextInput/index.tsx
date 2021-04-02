import React from "react"
import styled from "styled-components"
import { COLOURS } from "../../constants/styles"

interface Props {
    onChange: (value: string) => void
    placeholder: string
    value: string
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

const FilterTextInput: React.FC<Props> = ({ onChange, placeholder, value }) => {
    const [isFocused, setIsFocused] = React.useState(false)

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
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </Main>
    )
}

export default FilterTextInput
