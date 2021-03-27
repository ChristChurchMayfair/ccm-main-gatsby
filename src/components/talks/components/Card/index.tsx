import React from "react"
import styled from "styled-components"
import { COLOURS } from "../../constants/styles"

type Props = { renderDetails: () => React.ReactNode }

const Main = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const DetailsContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.7em 0.5em;
    border-bottom: 1px solid ${COLOURS.lightGrey};
`

const Card = ({ renderDetails }: Props) => (
    <Main>
        <DetailsContainer>{renderDetails()}</DetailsContainer>
    </Main>
)

export default Card
