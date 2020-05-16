import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import MapPin from "../assets/icons/mappin.inline.svg"
import Roundel from "../assets/icons/roundel2.inline.svg"

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

    // Defer loading the maps iframe until the initial rehydrate is done.
    const hardcodedIframeUrl = data.site!.siteMetadata!
        .googleMapEmbeddedIFrameURL!
    const [iframeUrl, setIframeUrl] = useState<string | undefined>(undefined)
    useEffect(() => {
        const id = setTimeout(() => {
            setIframeUrl(hardcodedIframeUrl)
        })
        return () => {
            clearTimeout(id)
        }
    }, [hardcodedIframeUrl])

    return (
        <section id="find-us" className="find-us">
            <h1>Find Us</h1>
            <div className="location">
                <MapPin className="pin" viewBox="0 0 100 100" />
                <div className="address">
                    {data.site!.siteMetadata!.churchAddress!.map((line, i) => (
                        <Fragment key={i}>
                            {line}
                            <br />
                        </Fragment>
                    ))}
                </div>
                <Roundel className="roundel" />
                <div className="tube-stations">
                    Nearest tube stations:
                    <br />
                    <span className="tube-station">
                        {data.site!.siteMetadata!.nearestTubeStations!.join(
                            " or "
                        )}
                    </span>
                </div>
            </div>
            <a
                id="directions-button"
                className="button"
                href="#"
                onClick={() => {
                    const latitude = 51.505263
                    const longitude = -0.148704
                    // const isMac = navigator.platform
                    //     .toUpperCase()
                    //     .includes("MAC")
                    if (
                        /* if we're on iOS, open in Apple Maps */
                        navigator.platform.includes("iPhone") ||
                        navigator.platform.includes("iPad") ||
                        navigator.platform.includes("iPod")
                    )
                        window.open(
                            `maps://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`
                        )
                    // else if (isMac) {
                    //   window.open(`maps://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`,'_self');
                    // }
                    else {
                        /* else use Google */
                        window.open(
                            `https://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`
                        )
                    }
                }}
            >
                Get Directions
            </a>
            <a
                className="button"
                href="https://citymapper.com/go/8hs1tgwo5g"
                target="_blank"
                rel="noopener noreferrer"
                title="Get directions with Citymapper"
            >
                Citymapper
            </a>
            <div className="map">
                <iframe
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={iframeUrl}
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}

export default FindUs
