import { GatsbyConfig } from "gatsby"

export const siteMetadata: GatsbyConfig["siteMetadata"] = {
    title: "Christ Church Mayfair",
    url: "https://christchurchmayfair.org",
    description: "",
    googleAnalyticsTrackingID: "UA-39016872-2",
    email: "info@christchurchmayfair.org",
    office_phone_number: "+44 (0) 207 629 5885",
    office_maps_link:
        "https://www.google.com/maps/place/Interpark+House/@51.5053727,-0.1506296,17z/data=!3m1!4b1!4m5!3m4!1s0x4876052f699cfa11:0x474e34fb6ba3f010!8m2!3d51.5053727!4d-0.1484409",
    ccm_charity_number: "1092036",
    office_address: [
        "Lower Ground Floor",
        "Interpark House",
        "7 Down Street",
        "London",
        "W1J 7AJ",
    ],
    google_map_embedded_iframe_url:
        "https://maps.google.com/maps?q=Christ%20Church%20Mayfair&t=&z=15&ie=UTF8&iwloc=&output=embed&z=14",
    nearest_tube_stations: ["Green Park", "Hyde Park Corner"],
    church_address: [
        "Christ Church Mayfair",
        "Down Street",
        "London",
        "W1J 7AN",
    ],
    footer: {
        extra_links: [{ title: "Blog", url: "/blog" }],
        smallprint: [
            `Christ Church Mayfair is a Church of England church and a member of the Co-Mission church planting network.`,
            `We're a registered charitable company named "Christ Church Mayfair", and our charity number is 1152061.`,
            `This website is © Copyright Christ Church Mayfair 2019. All Rights Reserved.`,
        ],
    },
    cookie_notice:
        "This site uses cookies in order to determine usage patterns to help us make improvements.",
    podcast: {
        title: "Christ Church Mayfair - Podcast",
        url: "https://rss.christchurchmayfair.org",
    },
    music_team_info_google_sheet: {
        id: "1BNfhAFMDq25GHh9KiPx0IYv7ktdooDW-LIR1uLSWv2w",
        morning_sheet_number: 1,
        evening_sheet_number: 2,
    },
}

export const plugins: GatsbyConfig["plugins"] = [
    `gatsby-plugin-typescript`,
    {
        resolve: `gatsby-plugin-typegen`,
        options: {
            emitSchema: {
                "src/__generated__/gatsby-introspection.json": true,
            },
            emitPluginDocuments: {
                "src/__generated__/gatsby-plugin-documents.graphql": true,
            },
        },
    },
    `gatsby-plugin-react-helmet`,
    {
        resolve: "gatsby-plugin-sharp",
        options: {
            useMozJpeg: true,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `content`,
            path: `src/content`,
        },
    },
    {
        resolve: `gatsby-source-sanity`,
        options: {
            projectId: `ip162aeb`,
            dataset: `production`,
            // a token with read permissions is required
            // if you have a private dataset
            //   token: process.env.MY_SANITY_TOKEN,

            // If the Sanity GraphQL API was deployed using `--tag <name>`,
            // use `graphqlTag` to specify the tag name. Defaults to `default`.
            //   graphqlTag: 'default',
        },
    },
    {
        resolve: "gatsby-transformer-remark-frontmatter",
        options: {
            // frontmatter fields to include, excluding all others
            whitelist: ["findOutMoreText"],
        },
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `Christ Church Mayfair`,
            short_name: `CCM`,
            start_url: `/`,
            display: `minimal-ui`,
            icon: `src/assets/favicons/favicon.png`, // This path is relative to the root of the site.
        },
    },
    {
        resolve: "gatsby-plugin-react-svg",
        options: {
            rule: {
                include: /\.inline\.svg$/,
            },
        },
    },
    {
        resolve: `gatsby-plugin-netlify`,
        options: {
            headers: {
                "/page-data/*": ["Cache-Control: public, max-age=0, must-revalidate"],
            },
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
]
