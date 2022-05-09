import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { HeaderColour } from "../components/header"
import HeaderUnderlay from "../components/header-underlay"
import useConsentCookie from "../components/hooks/useConsentCookie"
import Layout from "../components/layout"
import Section from "../components/section"
import SectionText from "../components/section-text"
import Switch from "../components/switch"

import styles from "./cookies.module.scss"

const CookiesPageQuery = graphql`
    query CookiesPage {
        mainContent: markdownRemark(
            fileAbsolutePath: { regex: "^/cookies/main.md$/" }
        ) {
            frontmatter {
                title
                headerColour
            }
            html
        }
        settingsContent: markdownRemark(
            fileAbsolutePath: { regex: "^/cookies/settings.md$/" }
        ) {
            frontmatter {
                title
            }
            html
        }
        site {
            siteMetadata {
                googleAnalyticsTrackingID
            }
        }
    }
`

const Cookies: React.FC = () => {
    const data = useStaticQuery<GatsbyTypes.CookiesPageQuery>(CookiesPageQuery)
    const [consentCookie, setConsentCookie] = useConsentCookie(
        data.site!.siteMetadata!.googleAnalyticsTrackingID!
    )

    return (
        <Layout
            title={data.mainContent!.frontmatter!.title}
            headerColour={
                data.mainContent!.frontmatter!.headerColour as HeaderColour
            }
        >
            <HeaderUnderlay colorScheme="light" />
            <Section intro colorScheme={"dark"} wider>
                <SectionText intro dark>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.mainContent!.html!,
                        }}
                    />
                </SectionText>
            </Section>
            <Section colorScheme="light">
                <div className={styles.settingsContainer}>
                    <div
                        className={styles.settingsIntroText}
                        dangerouslySetInnerHTML={{
                            __html: data.settingsContent!.html!,
                        }}
                    />
                    <div className={styles.switch}>
                        <Switch
                            checked={consentCookie === "accepted"}
                            disabled={consentCookie === undefined}
                            onChange={mayUseCookies =>
                                setConsentCookie(
                                    mayUseCookies ? "accepted" : "declined"
                                )
                            }
                            checkedText="On"
                            uncheckedText="Off"
                        />
                    </div>
                    <div className={styles.switchLabel}>
                        This website{" "}
                        <strong>
                            {consentCookie === "accepted" ? "may" : "may not"}
                        </strong>{" "}
                        use cookies.
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Cookies
