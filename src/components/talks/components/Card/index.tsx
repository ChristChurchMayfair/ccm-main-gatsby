import React from "react"
import styled from "styled-components"

type Props = { imageUrl: string; renderDetails: () => React.ReactNode }

const Main = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    flex-grow: 0;
    flex-shrink: 0;
`

const DetailsContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.7em 0.5em;
`

const Card = ({ imageUrl, renderDetails }: Props) => (
    <Main>
        <Image src={imageUrl} />
        <DetailsContainer>{renderDetails()}</DetailsContainer>
    </Main>
)

export default Card
