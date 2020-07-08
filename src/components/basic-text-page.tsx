import React from "react"

import HeaderUnderlay from "./header-underlay"
import Section from "./section"

type BasicTextProps = {
    html?: string
}

const BasicText: React.FC<BasicTextProps> = props => (
    <>
        <HeaderUnderlay colorScheme="light" />
        <Section colorScheme="light">
            <article
                dangerouslySetInnerHTML={{
                    __html: props.html ?? "Missing content",
                }}
            />
        </Section>
    </>
)

export default BasicText
