import classnames from "classnames"
import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Cookies from "js-cookie"

import styles from "./cookie-notice.module.scss"

const COOKIE_CONSENT_KEY = "ccm_cookie_consent"

type ConsentResponse = "accepted" | "declined" | undefined

const CookieNotice = () => {
    const data = useStaticQuery<GatsbyTypes.CookieNoticeQuery>(graphql`
        query CookieNotice {
            site {
                siteMetadata {
                    cookieNotice
                }
            }
        }
    `)

    const [consentResponse, setConsentResponse] = useState<ConsentResponse>(
        undefined
    )
    const [isInitialCookieLoaded, setIsInitialCookieLoaded] = useState(false)
    useEffect(() => {
        const cookie: ConsentResponse = Cookies.get(
            COOKIE_CONSENT_KEY
        ) as ConsentResponse
        setConsentResponse(cookie)
        setIsInitialCookieLoaded(true)
    }, [])

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

    // We don't want to show the notice until we've had a chance to read the
    // cookie, otherwise we will get jank from the notice briefly flashing up.
    const showNotice = consentResponse == null && isInitialCookieLoaded

    return (
        <div
            id="cookie-notice"
            className={classnames(styles.cookieNotice, {
                [styles["cookieNotice--show"]]: showNotice,
            })}
            aria-hidden={!showNotice}
        >
            <div className={styles.notice}>
                {data.site!.siteMetadata!.cookieNotice!}
            </div>
            <a
                id="decline-cookie-button"
                className={classnames(styles.button, styles["button--decline"])}
                href="#"
                onClick={() => {
                    setConsentResponse("declined")
                }}
            >
                Decline
            </a>
            <a
                id="accept-cookie-button"
                className={classnames(styles.button, styles["button--accept"])}
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
