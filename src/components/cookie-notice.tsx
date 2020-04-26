import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Cookies from "js-cookie"

const COOKIE_CONSENT_KEY = "ccm_cookie_consent"

const CookieNotice = () => {
    const data = useStaticQuery<GatsbyTypes.CookieNoticeQuery>(graphql`
        query CookieNotice {
            site {
                siteMetadata {
                    cookie_notice
                }
            }
        }
    `)

    const [consentResponse, setConsentResponse] = useState<string | undefined>(
        () => Cookies.get(COOKIE_CONSENT_KEY)
    )

    useEffect(() => {
        if (consentResponse != null) {
            Cookies.set(COOKIE_CONSENT_KEY, consentResponse, { expires: 365 })
        }
        if (consentResponse === "accepted") {
            // Enable GA
        } else {
            // Disable GA
        }
    }, [consentResponse])

    return (
        <div
            id="cookie-notice"
            className="cookie-notice"
            style={consentResponse == null ? { bottom: 0 } : undefined}
            aria-hidden={consentResponse != null}
        >
            <div className="notice">
                {data?.site?.siteMetadata?.cookie_notice}
            </div>
            <a
                id="decline-cookie-button"
                className="button decline"
                href="#"
                onClick={() => {
                    setConsentResponse("declined")
                }}
            >
                Decline
            </a>
            <a
                id="accept-cookie-button"
                className="button accept"
                href="#"
                onClick={() => {
                    setConsentResponse("accepted")
                }}
            >
                Accept
            </a>
        </div>
    )
}

export default CookieNotice
