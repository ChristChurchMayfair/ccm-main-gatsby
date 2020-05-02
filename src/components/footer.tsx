import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import ccmLogo from "../content/assets/images/ccm-logo-full.svg"

const links: Array<{ path: string; title: string }> = [
    { path: "/littlelambs", title: "Little Lambs" },
    { path: "/covid19", title: "Covid-19" },
    { path: "/our-beliefs", title: "Our Beliefs" },
    { path: "/talks", title: "Talks" },
    { path: "/privacy-notice", title: "Privacy Notice" },
    { path: "/music", title: "Music" },
    { path: "/families", title: "Families" },
    { path: "/safeguarding", title: "Safeguarding" },
    { path: "/students", title: "Students" },
    { path: "/aboutus", title: "About Us" },
    { path: "/accessibility", title: "Accessibility" },
    { path: "/staff", title: "Staff" },
    { path: "/blog", title: "Blog" },
]

const Footer = () => {
    const { site } = useStaticQuery<GatsbyTypes.FooterQuery>(
        graphql`
            query Footer {
                site {
                    siteMetadata {
                        church_address
                        office_maps_link
                        office_phone_number
                        footer {
                            smallprint
                            extra_links {
                                title
                                url
                            }
                        }
                        email
                    }
                }
            }
        `
    )

    const metadata = site!.siteMetadata
    const officePhoneNumber = metadata!.office_phone_number!
    const email = metadata!.email!
    const smallPrint = metadata!.footer!.smallprint!
    return (
        <footer>
            <div className="contact">
                <div className="logo">
                    <svg viewBox="0 0 720 162">
                        <use xlinkHref={`${ccmLogo}#full-logo`} />
                    </svg>
                </div>
                <address>
                    <a href={metadata!.office_maps_link}>
                        {metadata!.church_address!.map((line, i) => (
                            <Fragment key={i}>
                                {i !== 0 && <br />}
                                {line}
                            </Fragment>
                        ))}
                    </a>
                </address>
                <a className="phone" href={`tel:${officePhoneNumber}`}>
                    {officePhoneNumber}
                </a>
                <a className="email" href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
            <div className="all-links">
                {links.map(({ path, title }) => {
                    return (
                        <Link key={path} to={path}>
                            {title}
                        </Link>
                    )
                })}
            </div>
            <div className="smallprint">
                {smallPrint.map(line => (
                    <div key={line} className="item">
                        {line}
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
