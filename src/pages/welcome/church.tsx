import React from "react"

import Layout from "../../components/layout"
import Section from "../../components/section"
import HeaderUnderlay from "../../components/header-underlay"
import SectionText from "../../components/section-text"

import styles from "./welcome.module.scss"
import WelcomeForm from "../../components/welcome-form"
import { Link } from "gatsby"

const ChurchPage: React.FC<{}> = () => (
    <Layout headerColour="dark" title="Welcome" description={undefined}>
        <HeaderUnderlay colorScheme="light" />
        <Section colorScheme="dark" id="about-ccm">
            <SectionText dark className={styles.aboutCCM}>
                <h1>About Christ Church Mayfair</h1>
                <p>
                    For more information about the church and our activities,
                    you can have a look around this website to see who we are
                    and what we do. We&apos;d suggest starting with our{" "}
                    <Link to="/aboutus">About Us</Link> page.
                </p>
                <p>
                    If you have any questions or are looking into Christianity,
                    we&apos;d love to help you! Fill in the form below and a
                    member of church staff will get in touch with you.
                </p>
            </SectionText>
        </Section>

        <WelcomeForm />
    </Layout>
)

export default ChurchPage
