import React from "react"
import { Helmet } from "react-helmet"

// Technique copied from https://web.dev/defer-non-critical-css/#optimize

interface Props {
    url: string
}

const LazyLoadCss: React.FC<Props> = ({ url }) => {
    return (
        <Helmet>
            <link
                rel="preload"
                href={url}
                as="style"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onload="this.onload=null;this.rel='stylesheet'" // eslint-disable-line react/no-unknown-property
            />
            <noscript>{`<link rel="stylesheet" href="${url}" />`}</noscript>
        </Helmet>
    )
}

export default LazyLoadCss
