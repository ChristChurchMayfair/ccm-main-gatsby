import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import HandInTheAir from "../content/assets/images/desktop/hand_in_the_air.jpg"
import {
    OpenGraphMetaData,
    generateOpenGraphMetaTags,
    MetaTag,
} from "./open-graph"
import { generateRobotsMetaTag, RobotsMetaData } from "./robots"

interface HeadProps {
    title: string | undefined
    description: string | undefined
    openGraphData?: OpenGraphMetaData
    robotsMetaData?: RobotsMetaData
}
const Head: React.FC<HeadProps> = ({
    title,
    description,
    openGraphData,
    robotsMetaData,
}) => {
    const { site } = useStaticQuery<GatsbyTypes.HeadQuery>(
        graphql`
            query Head {
                site {
                    siteMetadata {
                        title
                        description
                        url
                        robotsMetaData {
                            allowFollowLinksOnThisPage
                            allowIndexing
                            allowImageIndexing
                            allowCaching
                            allowPageSnippets
                        }
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

    const defaultRobotsMetaData: RobotsMetaData = metadata.robotsMetaData!

    const defaultOpenGraphData: OpenGraphMetaData = {
        title: title ?? metadata.title ?? "Missing Title",
        type: "website",
        siteName: metadata.title!,
        url: metadata.url!,
        description: metaDescription,
        images: [
            {
                imageUrl: `${metadata.url}${HandInTheAir}`,
                imageAlternativeText: "Christ Church Mayfair",
            },
        ],
        email: metadata.email,
        phoneNumber: metadata.officePhoneNumber,
    }

    const openGraphMetaTags = generateOpenGraphMetaTags(
        openGraphData ?? defaultOpenGraphData
    )

    const robotsMetaTag = generateRobotsMetaTag(
        robotsMetaData ?? defaultRobotsMetaData
    )

    let helmetMeta: MetaTag[] = [
        // Basic HTML tags, SEO
        { name: `description`, content: metaDescription },
        { name: `url`, content: metadata.url! },
        robotsMetaTag,

        // Theme colour
        { name: `theme-color`, content: `#ffffff` },

        // iOS web app
        {
            name: `apple-mobile-web-app-status-bar-style`,
            content: `black-translucent`,
        },
    ]

    helmetMeta = helmetMeta.concat(openGraphMetaTags)

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
