/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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

    const [consentCookie, setConsentCookie] = useConsentCookie(
        data.site?.siteMetadata?.googleAnalyticsTrackingID as string
    )

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
