import React from "react"

import Layout from "../components/layout"
import HeaderUnderlay from "../components/header-underlay"
import Section from "../components/section"

const NotFoundPage = () => (
    <Layout title="Page Not Found" description={undefined} headerColour="dark">
        <HeaderUnderlay />
        <Section>
            <article>
                <h1>Error: Page not found</h1>
                <p>
                    Sorry. The page you were looking for couldn&apos;t be found.
                    That could mean we&apos;ve made a mistake or you have an old
                    link.
                </p>
                <p>
                    Try the menu for some other options, or if you still
                    can&apos;t find what you&apos;re looking for then get in
                    touch with us and we&apos;ll try to help
                </p>
            </article>
        </Section>
    </Layout>
)

export default NotFoundPage
