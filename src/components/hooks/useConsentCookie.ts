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
const useConsentCookie = (): [
    ConsentCookieReturnValue,
    (cookie: ConsentCookieValue) => void
] => {
    const [consentCookieReturnValue, setConsentCookieReturnValue] = useState<
        ConsentCookieReturnValue
    >(undefined)

    useEffect(() => {
        const cookie: ConsentCookieValue = Cookies.get(
            COOKIE_CONSENT_KEY
        ) as ConsentCookieValue
        setConsentCookieReturnValue(cookie ?? "unset")
    }, [])

    const setConsentCookie = (cookie: ConsentCookieValue) => {
        Cookies.set(COOKIE_CONSENT_KEY, cookie, {
            expires: DAYS_UNTIL_EXPIRY,
        })
        setConsentCookieReturnValue(cookie)

        if (cookie === "accepted") {
            // TODO: enable Google Analytics
        } else {
            // TODO: disable Google Analytics
        }
    }

    return [consentCookieReturnValue, setConsentCookie]
}

export default useConsentCookie
