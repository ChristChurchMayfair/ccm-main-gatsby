import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Covid19 = () => {
    const { covid } = useStaticQuery<GatsbyTypes.CovidNoticeQuery>(graphql`
        query CovidNotice {
            covid: markdownRemark(
                fileAbsolutePath: { regex: "/_events/coronavirus2020.md$/" }
            ) {
                frontmatter {
                    name
                    lastUpdated
                    features {
                        title
                        description
                        buttonText
                        buttonLink
                    }
                }
                html
            }
        }
    `)

    const features = covid?.frontmatter?.features ?? []
    return (
        <section className="promotion full-bleed important-notice">
            <div>
                <h1>{covid?.frontmatter?.name}</h1>
                <div className="text">
                    <div
                        dangerouslySetInnerHTML={{ __html: covid?.html ?? "" }}
                    />
                    {covid?.frontmatter?.lastUpdated != null && (
                        <p className="last-updated" style={{ fontWeight: 300 }}>
                            This was last updated at{" "}
                            {covid?.frontmatter?.lastUpdated}.
                        </p>
                    )}
                </div>
                {features.length > 0 && (
                    <>
                        <hr className="separator" />
                        <div className="features">
                            {features.map(feature => {
                                if (feature == null) {
                                    return null
                                }

                                return (
                                    <div
                                        key={feature.title}
                                        className="feature"
                                    >
                                        <h2 className="title">
                                            {feature.title}
                                        </h2>
                                        <div className="description">
                                            <p>{feature.description}</p>
                                        </div>
                                        {feature.buttonText != null &&
                                            feature.buttonLink != null && (
                                                <Link
                                                    className="button"
                                                    to={feature.buttonLink}
                                                >
                                                    {feature.buttonText}
                                                </Link>
                                            )}
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
export default Covid19
