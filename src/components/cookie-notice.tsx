import classnames from "classnames"
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import styles from "./cookie-notice.module.scss"
import useConsentCookie from "./hooks/useConsentCookie"

type CCMTrackingConsentCookie = "accepted" | "declined" | undefined

const CookieNotice = () => {
    const data = useStaticQuery<GatsbyTypes.CookieNoticeQuery>(graphql`
        query CookieNotice {
            site {
                siteMetadata {
                    cookieNotice
                    cookieNoticePrivacyPolicyLinkText
                    googleAnalyticsTrackingID
                }
            }
        }
    `)

    const [consentCookie, setConsentCookie] = useConsentCookie(data.site?.siteMetadata?.googleAnalyticsTrackingID!)

    const showNotice = consentCookie === "unset"

    return (
        <div
            id="cookie-notice"
            className={classnames(styles.cookieNotice, {
                [styles["cookieNotice--show"]]: showNotice,
            })}
            aria-hidden={!showNotice}
        >
            <div className={styles.notice}>
                {data.site!.siteMetadata!.cookieNotice!}{" "}
                <Link to="/privacy-notice/#cookies">
                    {
                        data.site!.siteMetadata!
                            .cookieNoticePrivacyPolicyLinkText!
                    }
                </Link>
            </div>
            <a
                id="decline-cookie-button"
                className={classnames(styles.button, styles["button--decline"])}
                href="#"
                onClick={() => {
                    setConsentCookie("declined")
                }}
            >
                Decline
            </a>
            <a
                id="accept-cookie-button"
                className={classnames(styles.button, styles["button--accept"])}
                href="#"
                onClick={() => {
                    setConsentCookie("accepted")
                }}
            >
                Accept
            </a>
        </div>
    )
}

export default CookieNotice
