import React from "react"

type Props = {
    html?: string
}

const BasicText: React.FC<Props> = (props) => {
    return (
        <>
            <section className="header-underlay" />
            <section>
                <article
                        dangerouslySetInnerHTML={{
                            __html: props.html ?? "Missing content",
                        }}
                />
            </section>
        </>
    )
}

export default BasicText