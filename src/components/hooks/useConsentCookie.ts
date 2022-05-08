import Cookies from "js-cookie"
import { useEffect, useState } from "react"

const COOKIE_CONSENT_KEY = "ccm_cookie_consent"
const DAYS_UNTIL_EXPIRY = 365

type ConsentCookieValue = "accepted" | "declined"
type ConsentCookieReturnValue = ConsentCookieValue | "unset" | undefined

/**
 * Returns a tuple of the value of the consent cookie and a setter for the consent cookie.
 *
 * The returned value of the consent cookie can take one of four values - "accepted", "declined",
 * "unset" or, while the value is being read, undefined. The consent cookie can be set to one of
 * two values - "accepted" or "declined".
 */
const useConsentCookie = (
    googleAnalyticsTrackingID: string
): [ConsentCookieReturnValue, (cookie: ConsentCookieValue) => void] => {
    const [consentCookieReturnValue, setConsentCookieReturnValue] = useState<
        ConsentCookieReturnValue
    >(undefined)

    const disableGoogleAnalyticsKey = `ga-disable-${googleAnalyticsTrackingID}`

    useEffect(() => {
        const cookie: ConsentCookieValue = Cookies.get(
            COOKIE_CONSENT_KEY
        ) as ConsentCookieValue
        setConsentCookieReturnValue(cookie ?? "unset")
    }, [disableGoogleAnalyticsKey])

    const setConsentCookie = (cookie: ConsentCookieValue) => {
        Cookies.set(COOKIE_CONSENT_KEY, cookie, {
            expires: DAYS_UNTIL_EXPIRY,
        })
        setConsentCookieReturnValue(cookie)

        if (cookie === "accepted") {
            // Enable Google Analytics
            // eslint-disable-next-line @typescript-eslint/no-extra-semi
            ;(window as any)[disableGoogleAnalyticsKey] = false // eslint-disable-line @typescript-eslint/no-explicit-any
        } else {
            // Disable Google Analytics
            // eslint-disable-next-line @typescript-eslint/no-extra-semi
            ;(window as any)[disableGoogleAnalyticsKey] = true // eslint-disable-line @typescript-eslint/no-explicit-any
        }
    }

    return [consentCookieReturnValue, setConsentCookie]
}

export default useConsentCookie
