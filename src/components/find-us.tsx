import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import mappin from "../assets/icons/mappin.svg"
import roundel from "../assets/icons/roundel2.svg"

const FindUs = () => {
    const data = useStaticQuery<GatsbyTypes.FindUsQuery>(graphql`
        query FindUs {
            site {
                siteMetadata {
                    church_address
                    nearest_tube_stations
                    google_map_embedded_iframe_url
                }
            }
        }
    `)
    return (
        <section id="find-us" className="find-us">
            <h1>Find Us</h1>
            <div className="location">
                <svg className="pin" viewBox="0 0 100 100">
                    <use xlinkHref={`${mappin}#mappin`} />
                </svg>
                <div className="address">
                    {(data.site?.siteMetadata?.church_address ?? []).map(
                        (line, i) => (
                            <Fragment key={i}>
                                {line}
                                <br />
                            </Fragment>
                        )
                    )}
                </div>
                <svg className="roundel" viewBox="0 0 640 520">
                    <use xlinkHref={`${roundel}#roundel`} />
                </svg>
                <div className="tube-stations">
                    Nearest tube stations:
                    <br />
                    <span className="tube-station">
                        {(
                            data?.site?.siteMetadata?.nearest_tube_stations ??
                            []
                        ).join(" or ")}
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
                    src={
                        data.site?.siteMetadata?.google_map_embedded_iframe_url
                    }
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}

export default FindUs
