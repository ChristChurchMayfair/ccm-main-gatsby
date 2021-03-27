import React from "react"
import styled from "styled-components"

type Props = { renderDetails: () => React.ReactNode }

const Main = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const DetailsContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.7em 0.5em;
`

const Card = ({ renderDetails }: Props) => (
    <Main>
        <DetailsContainer>{renderDetails()}</DetailsContainer>
    </Main>
)

export default Card
