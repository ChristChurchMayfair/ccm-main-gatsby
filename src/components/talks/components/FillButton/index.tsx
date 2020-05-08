import styled from "styled-components"

import BaseButton from "../BaseButton"
import { COLOURS, MEDIA_QUERIES } from "../../constants/styles"

const FillButton = styled(BaseButton)`
    transition: background-color 0.2s ease-out;

    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            background-color: ${COLOURS.lightGrey};
        }
    }
`
export default FillButton
