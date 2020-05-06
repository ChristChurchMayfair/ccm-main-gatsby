import React from "react"

type Props = {
    html?: string
}

const BasicText: React.FC<Props> = (props) => {
    return (
        <>
            <section className="header-underlay" />
            <section>
                <article>
                    <div
                        className="text"
                        dangerouslySetInnerHTML={{
                            __html: props.html ?? "Missing content",
                        }}
                    />
                </article>
            </section>
        </>
    )
}

export default BasicText