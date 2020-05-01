/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Head from "./head"
import Header from "./header"
import Footer from "./footer"
import CookieNotice from "./cookie-notice"
import "../assets/css/style.css"

interface Props {
    children: React.ReactNode
    title: string | undefined
    description?: string | undefined
    meta?: Array<{ name: string; content: string }>
    headerColour?: string
}
const Layout: React.FC<Props> = ({
    headerColour,
    children,
    title,
    description,
    meta,
}) => {
    return (
        <>
            <Head title={title ?? "Untitled Page"} description={description} meta={meta} />
            <Header headerColour={headerColour} />
            <main>{children}</main>
            <Footer />
            <CookieNotice />
        </>
    )
}

export default Layout
