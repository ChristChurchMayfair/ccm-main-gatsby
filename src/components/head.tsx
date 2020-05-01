import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
    title: string | undefined
    description: string | undefined
    meta?: Array<{ name: string; content: string }>
}
const Head: React.FC<Props> = ({ title, description, meta = [] }) => {
    const { site } = useStaticQuery<GatsbyTypes.HeadQuery>(
        graphql`
            query Head {
                site {
                    siteMetadata {
                        title
                        description
                        podcast {
                            title
                            url
                        }
                    }
                }
            }
        `
    )
    const metadata = site!.siteMetadata

    const metaDescription = description ?? metadata!.description!
    const siteTitle = site!.siteMetadata!.title!

    return (
        <Helmet
            htmlAttributes={{
                lang: "en",
            }}
            title={title != null ? `${title} - ${siteTitle}` : siteTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: "og:site_name",
                    content: metadata!.title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta)}
        >
            <link
                type="application/rss+xml"
                rel="alternate"
                title={metadata!.podcast!.title}
                href={metadata!.podcast!.url}
            />
        </Helmet>
    )
}

export default Head
