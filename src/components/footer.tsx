import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import ccmLogo from "../content/assets/images/ccm-logo-full.svg"

const Footer = () => {
    const { site, footerLinks } = useStaticQuery<GatsbyTypes.FooterQuery>(
        graphql`
            query Footer {
                footerLinks: allMarkdownRemark(
                    filter: {
                        frontmatter: {
                            showInFooter: { eq: true }
                            path: { ne: null }
                            title: { ne: null }
                        }
                    }
                ) {
                    nodes {
                        frontmatter {
                            title
                            path
                            showInFooter
                        }
                    }
                }
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

    const metadata = site?.siteMetadata
    const officePhoneNumber = metadata?.office_phone_number ?? ""
    const email = metadata?.email ?? ""
    const smallPrint = metadata?.footer?.smallprint ?? []
    const allFooterLinks: Array<{ path: string; title: string }> = [
        ...footerLinks?.nodes.flatMap(link => {
            const url = link?.frontmatter?.path
            const title = link?.frontmatter?.title
            if (url == null || title == null) {
                return []
            }
            return [{ path: url, title }]
        }),
        ...(metadata?.footer?.extra_links ?? []).flatMap(link => {
            const url = link?.url
            const title = link?.title
            if (url == null || title == null) {
                return []
            }
            return [{ path: url, title }]
        }),
    ]
    return (
        <footer>
            <div className="contact">
                <div className="logo">
                    <svg viewBox="0 0 720 162">
                        <use xlinkHref={`${ccmLogo}#full-logo`} />
                    </svg>
                </div>
                <address>
                    <a href={metadata?.office_maps_link}>
                        {metadata?.church_address?.map((line, i) => (
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
                {allFooterLinks.map(({ path, title }) => {
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
