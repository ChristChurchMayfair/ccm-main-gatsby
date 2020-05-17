import { GatsbyConfig } from "gatsby"

export const siteMetadata: GatsbyConfig["siteMetadata"] = {
    // Basic HTML tags, SEO
    url: "https://christchurchmayfair.org",
    description:
        "We are a dynamic Central London church family committed to making disciples for Jesus Christ.",
    robots: "index,follow",

    // Site data
    title: "Christ Church Mayfair",
    email: "info@christchurchmayfair.org",
    officePhoneNumber: "+44 (0) 207 629 5885",
    churchMapsLink: "https://goo.gl/maps/4FMKFMJVoVR46WSA7",
    googleMapEmbeddedIFrameURL:
        "https://maps.google.com/maps?q=Christ%20Church%20Mayfair&t=&z=15&ie=UTF8&iwloc=&output=embed&z=14",
    nearestTubeStations: ["Green Park", "Hyde Park Corner"],
    churchAddress: [
        "Christ Church Mayfair",
        "Down Street",
        "London",
        "W1J 7AN",
    ],
    footer: {
        extraLinks: [{ title: "Blog", url: "/blog" }],
        smallprint: [
            `Christ Church Mayfair is a Church of England church and a member of the Co-Mission church planting network.`,
            `We're a registered charitable company named "Christ Church Mayfair", and our charity number is 1152061.`,
            `This website is © Copyright Christ Church Mayfair 2019. All Rights Reserved.`,
        ],
    },
    cookieNotice:
        "This site uses cookies in order to determine usage patterns to help us make improvements.",
    podcast: {
        title: "Christ Church Mayfair - Podcast",
        url: "https://rss.christchurchmayfair.org",
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
    `gatsby-source-local-git`,
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
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "UA-39016872-2",
          respectDNT: true,
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
]
