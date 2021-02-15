import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"

import styles from "./missionpartners.module.scss"
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps"
import classNames from "classnames"
import MissionPartner from "../components/missionpartner"

const MissionPartnersQuery = graphql`
    fragment MissionPartner on MarkdownRemark {
        id
        frontmatter {
            name
            country
            email
            pin_location {
                lat
                lon
            }
            image {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        html
    }
    query MissionPartners {
        missionPartners: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/missionpartners.*/" } }
        ) {
            nodes {
                ...MissionPartner
            }
        }
    }
`

function nameToId(name: string): string {
    return name.replace(" ", "")
}

const MissionPartners = () => {
    const data = useStaticQuery<GatsbyTypes.MissionPartnersQuery>(
        MissionPartnersQuery
    )

    const missionPartners = data.missionPartners.nodes

    console.log(data)

    const continents_to_hide = ["Antarctica"]

    console.log(missionPartners)
    const countries_to_highlight = missionPartners.map(
        mp => mp.frontmatter?.country
    )
    console.log(countries_to_highlight)

    const markers: any = missionPartners.map(mp => ({
        linkId: nameToId(mp.frontmatter!.name!),
        markerInfo: {
            markerOffset: -15,
            name: mp.frontmatter!.name!,
            coordinates: [
                mp.frontmatter?.pin_location!.lat!,
                mp.frontmatter?.pin_location!.lon!,
            ],
        },
    }))

    const [hoverContent, setHoverContent] = useState("")

    const geoUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

    return (
        <Layout
            title={"Mission Partners"}
            headerColour="light"
            blurHeaderBackground={true}
        >
            {/* <HeaderUnderlay colorScheme="dark" /> */}
            {/* <Section intro wider colorScheme="dark">
                <SectionText intro>Blah</SectionText>
            </Section> */}
            <Section colorScheme={"light"} className={styles.map}>
                <div>
                    <ComposableMap
                        projection="geoMercator"
                        width={650}
                        height={400}
                        projectionConfig={{ scale: 100, center: [0, 0] }}
                    >
                        {/* <Sphere stroke="#DDD" strokeWidth={1} fill={"transparent"} id={"adsF"}/> */}
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies
                                    .filter(geo => {
                                        return !continents_to_hide.includes(
                                            geo.properties.CONTINENT
                                        )
                                    })
                                    .map(geo => {
                                        const shouldHighlight = countries_to_highlight.includes(
                                            geo.properties.ISO_A3
                                        )
                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                className={classNames(
                                                    styles.geography,
                                                    {
                                                        [styles.highlight]: shouldHighlight,
                                                    }
                                                )}
                                            />
                                        )
                                    })
                            }
                        </Geographies>
                        {markers.map((marker: any) => (
                            <a
                                // xlinkHref={`#${marker.linkId}`}
                                href={`#${marker.linkId}`}
                                key={marker.linkId}
                            >
                                <Marker
                                    key={marker.markerInfo.name}
                                    coordinates={marker.markerInfo.coordinates}
                                    onMouseEnter={() => {
                                        setHoverContent(marker.markerInfo.name)
                                    }}
                                    onMouseLeave={() => {
                                        setHoverContent("")
                                    }}
                                >
                                    <circle
                                        className={styles.mapmarker}
                                        r={3}
                                    />
                                </Marker>
                            </a>
                        ))}
                    </ComposableMap>
                </div>
            </Section>
            <Section colorScheme="light">
                <div className={styles.missionpartners}>
                    {missionPartners.map(missionPartner => {
                        return (
                            <MissionPartner
                                key={missionPartner.id}
                                id={nameToId(missionPartner.frontmatter!.name!)}
                                name={missionPartner.frontmatter!.name!}
                                html={missionPartner.html!}
                                image={
                                    missionPartner.frontmatter!.image!
                                        .childImageSharp!.fluid!
                                }
                            />
                        )
                    })}
                </div>
            </Section>
        </Layout>
    )
}

export default MissionPartners
