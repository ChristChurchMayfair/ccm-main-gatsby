import React, { useState, Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { InView } from "react-intersection-observer"

import MapPin from "../assets/icons/mappin.inline.svg"
import Roundel from "../assets/icons/roundel2.inline.svg"

import styles from "./find-us.module.scss"
import Section from "./section"

const LATITUDE = 51.505263
const LONGITUDE = -0.148704
const CITYMAPPER_DIRECTIONS_LINK = "https://citymapper.com/go/8hs1tgwo5g"
const GOOGLE_MAPS_DIRECTIONS_LINK = `https://maps.google.com/maps?daddr=${LATITUDE},${LONGITUDE}&amp;ll=`
const APPLE_MAPS_DIRECTIONS_LINK = `maps://maps.google.com/maps?daddr=${LATITUDE},${LONGITUDE}&amp;ll=`

const isIos = () =>
    ["iPhone", "iPad", "iPod"].some(p => navigator.platform.includes(p))

const FindUs = () => {
    const data = useStaticQuery<GatsbyTypes.FindUsQuery>(graphql`
        query FindUs {
            site {
                siteMetadata {
                    churchAddress
                    nearestTubeStations
                    googleMapEmbeddedIFrameURL
                }
            }
        }
    `)

    const [mapHasBeenInView, setMapHasBeenInView] = useState(false)

    return (
        <div className={styles.findUsContainer}>
            <Section id="find-us" className={styles.findUs} colorScheme="dark">
                <h1 className={styles.title}>Find Us</h1>
                <div className={styles.location}>
                    <MapPin className={styles.pin} viewBox="0 0 100 100" />
                    <div className={styles.address}>
                        {data.site!.siteMetadata!.churchAddress!.map(
                            (line, i) => (
                                <Fragment key={i}>
                                    {line}
                                    <br />
                                </Fragment>
                            )
                        )}
                    </div>
                    <Roundel className={styles.roundel} />
                    <div className={styles.tubeStations}>
                        Nearest tube stations:
                        <br />
                        <span className={styles.tubeStation}>
                            {data.site!.siteMetadata!.nearestTubeStations!.join(
                                " or "
                            )}
                        </span>
                    </div>
                </div>
                <a
                    id="directions-button"
                    className={styles.button}
                    href="#"
                    onClick={() =>
                        window.open(
                            isIos()
                                ? APPLE_MAPS_DIRECTIONS_LINK
                                : GOOGLE_MAPS_DIRECTIONS_LINK
                        )
                    }
                >
                    Get Directions
                </a>
                <a
                    className={styles.button}
                    href={CITYMAPPER_DIRECTIONS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Get directions with Citymapper"
                >
                    Citymapper
                </a>
                <InView
                    rootMargin="0px 0px 3000px 0px"
                    onChange={inView => {
                        if (inView === true) {
                            setMapHasBeenInView(true)
                        }
                    }}
                >
                    {({ ref }) => (
                        <div ref={ref} className={styles.map}>
                            <iframe
                                frameBorder="0"
                                style={{ border: 0 }}
                                src={
                                    mapHasBeenInView
                                        ? data.site!.siteMetadata!
                                              .googleMapEmbeddedIFrameURL
                                        : undefined
                                }
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </InView>
            </Section>
        </div>
    )
}

export default FindUs
