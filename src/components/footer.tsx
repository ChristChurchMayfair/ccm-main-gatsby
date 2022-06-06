import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import CcmLogo from "../content/assets/images/ccm-logo-full.inline.svg"

import * as styles from "./footer.module.scss"
import SocialMediaIcon from "./social-media-icon"

const links: Array<{ path: string; title: string }> = [
    { path: "/littlelambs", title: "Little Lambs" },
    { path: "/our-beliefs", title: "Our Beliefs" },
    { path: "/talks", title: "Talks" },
    { path: "/privacy-notice", title: "Privacy Notice" },
    { path: "/cookies", title: "Cookies" },
    { path: "/music", title: "Music" },
    { path: "/families", title: "Families" },
    { path: "/safeguarding", title: "Safeguarding" },
    { path: "/students", title: "Students" },
    { path: "/aboutus", title: "About Us" },
    { path: "/accessibility", title: "Accessibility" },
    { path: "/staff", title: "Staff" },
    { path: "/givingform", title: "Giving Form" },
    { path: "/complaints", title: "Complaints" },
    { path: "/gospelgenerationstrust", title: "Gospel Generations Trust" },
]

const Footer = () => {
    const { site } = useStaticQuery<GatsbyTypes.FooterQuery>(
        graphql`
            query Footer {
                site {
                    siteMetadata {
                        churchAddress
                        churchMapsLink
                        officePhoneNumber
                        footer {
                            smallprint
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
    const officePhoneNumber = metadata!.officePhoneNumber!
    const email = metadata!.email!
    const smallPrint = metadata!.footer!.smallprint!
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <div className={styles.logo}>
                    <CcmLogo />
                </div>
                <address className={styles.address}>
                    <a href={metadata!.churchMapsLink}>
                        {metadata!.churchAddress!.map((line, i) => (
                            <Fragment key={i}>
                                {i !== 0 && <br />}
                                {line}
                            </Fragment>
                        ))}
                    </a>
                </address>
                <a className={styles.phone} href={`tel:${officePhoneNumber}`}>
                    {officePhoneNumber}
                </a>
                <a className={styles.email} href={`mailto:${email}`}>
                    {email}
                </a>
                <div className={styles.socialMedia}>
                    <SocialMediaIcon
                        platform="twitter"
                        username={
                            site!.siteMetadata!.socialMediaAccounts!.twitter!
                        }
                    />
                    <SocialMediaIcon
                        platform="instagram"
                        username={
                            site!.siteMetadata!.socialMediaAccounts!.instagram!
                        }
                    />
                    <SocialMediaIcon
                        platform="spotify"
                        username={
                            site!.siteMetadata!.socialMediaAccounts!.spotify!
                        }
                    />
                </div>
            </div>
            <div className={styles.allLinks}>
                {links.map(({ path, title }) => (
                    <Link key={path} to={path}>
                        {title}
                    </Link>
                ))}
                <Link to="http://blog.christchurchmayfair.org">Blog</Link>
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

export default Footer
