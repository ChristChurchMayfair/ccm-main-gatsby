/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Head from "./head"
import Header, { HeaderColour } from "./header"
import Footer from "./footer"
import CookieNotice from "./cookie-notice"
import "../assets/css/global.scss"
import "../assets/css/style.css"
import { OpenGraphMetaData } from "./open-graph"
import { RobotsMetaData } from "./robots"

interface Props {
    children: React.ReactNode
    title: string | undefined
    description?: string | undefined
    openGraphData?: OpenGraphMetaData
    headerColour?: HeaderColour
    robotsMetaData?: RobotsMetaData
}
const Layout: React.FC<Props> = ({
    headerColour,
    children,
    title,
    description,
    openGraphData,
    robotsMetaData
}) => {
    return (
        <>
            <Head
                title={title}
                description={description}
                openGraphData={openGraphData}
                robotsMetaData={robotsMetaData}
            />
            <Header headerColour={headerColour} />
            <main>{children}</main>
            <Footer />
            <CookieNotice />
        </>
    )
}

export default Layout
