import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import GospelGenerationsTrustLogoFull from "../../content/assets/images/gospelgenerationstrust-logo.inline.svg"

import styles from "../footer.module.scss"

const links: Array<{ path: string; title: string }> = [
    { path: "/gospelgenerationstrust/alumni", title: "Testimonies" },
    {
        path: "/gospelgenerationstrust/mailinglistsignup",
        title: "Prayer Email Signup",
    },
    { path: "/gospelgenerationstrust/givingform", title: "Giving Form" },
    { path: "/gospelgenerationstrust/privacy", title: "Privacy Notice" },
    { path: "/cookies", title: "Cookies" },
    { path: "/", title: "Christ Church Mayfair" },
]

type Props = {
    email?: string
}

const GospelGenerationsTrustFooter = (props: Props) => {
    const { site } = useStaticQuery<
        GatsbyTypes.GospelGenerationsTrustFooterQuery
    >(
        graphql`
            query GospelGenerationsTrustFooter {
                site {
                    siteMetadata {
                        churchAddress
                        churchMapsLink
                        officePhoneNumber
                        gospelGenerationsTrust {
                            footer {
                                smallprint
                            }
                        }
                        socialMediaAccounts {
                            instagram
                            spotify
                            twitter
                        }
                        email
                    }
                }
            }
        `
    )

    const metadata = site!.siteMetadata
    const email = props.email ?? metadata!.email!
    const smallPrint = metadata!.gospelGenerationsTrust!.footer!.smallprint!
    const addressLines = metadata!.churchAddress!
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <div className={styles.logo}>
                    <GospelGenerationsTrustLogoFull />
                </div>
                <address className={styles.address}>
                    <a href={metadata!.churchMapsLink}>
                        Gospel Generations Trust
                        <br />
                        {addressLines.map((line, i) => (
                            <Fragment key={i}>
                                {i !== 0 && <br />}
                                {line}
                            </Fragment>
                        ))}
                    </a>
                </address>
                <a className={styles.email} href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
            <div className={styles.allLinksOneColumn}>
                {links.map(({ path, title }) => (
                    <Link key={path} to={path}>
                        {title}
                    </Link>
                ))}
            </div>
            <div className={styles.smallprint}>
                {smallPrint.map(line => (
                    <div key={line} className={styles.smallPrintItem}>
                        {line}
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default GospelGenerationsTrustFooter
