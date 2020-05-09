import React from "react"
import { storiesOf } from "@storybook/react"

import StorybookContainer from "../StorybookContainer"
import HeadingInfoPanel from "./HeadingInfoPanel"

storiesOf(`Typography/HeadingInfoPanel`, module)
    .add(`default`, () => (
        <StorybookContainer showSpacing>
            <HeadingInfoPanel>
                Heading for an information panel
            </HeadingInfoPanel>
        </StorybookContainer>
    ))
    .add(`dark`, () => (
        <StorybookContainer dark showSpacing>
            <HeadingInfoPanel dark>
                Heading for a dark information panel
            </HeadingInfoPanel>
        </StorybookContainer>
    ))
