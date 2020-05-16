import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import HandInTheAir from "../content/assets/images/desktop/hand_in_the_air.jpg"

interface HeadProps {
    title: string | undefined
    description: string | undefined
    meta?: Array<{ name: string; content: string }>
}
const Head: React.FC<HeadProps> = ({ title, description, meta = [] }) => {
    const { site } = useStaticQuery<GatsbyTypes.HeadQuery>(
        graphql`
            query Head {
                site {
                    siteMetadata {
                        title
                        description
                        url
                        robots
                        email
                        officePhoneNumber
                        podcast {
                            title
                            url
                        }
                    }
                }
            }
        `
    )

    const metadata = site!.siteMetadata!
    const metaDescription = description ?? metadata.description!

    const helmetMeta = [
        ...meta,

        // Basic HTML tags, SEO
        { name: `description`, content: metaDescription },
        { name: `url`, content: metadata.url! },
        { name: `robots`, content: metadata.robots! },

        // OpenGraph tags
        { property: `og:title`, content: title },
        { property: "og:site_name", content: metadata.title! },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: metadata.url! },
        { property: `og:image`, content: HandInTheAir },
        { property: `og:image:alt`, content: `Christ Church Mayfair` },
        { property: `og:email`, content: metadata.email! },
        { property: `og:phone_number`, content: metadata.officePhoneNumber! },

        // Theme colour
        { name: `theme-color`, content: `#ffffff` },

        // iOS web app
        {
            name: `apple-mobile-web-app-status-bar-style`,
            content: `black-translucent`,
        },
    ]

    const pageTitle =
        title != null ? `${title} - ${metadata.title!}` : metadata.title!

    return (
        <Helmet
            htmlAttributes={{
                lang: "en",
            }}
            title={pageTitle}
            meta={helmetMeta}
        >
            <link
                type="application/rss+xml"
                rel="alternate"
                title={metadata.podcast!.title}
                href={metadata.podcast!.url}
            />
        </Helmet>
    )
}

export default Head
