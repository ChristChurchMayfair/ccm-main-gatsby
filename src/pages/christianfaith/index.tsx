import React, { FC } from "react"
import YouTube from "react-youtube"

import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import SectionText from "../../components/section-text"

import styles from "./christianfaith.module.scss"
import { Link } from "gatsby"

const ChristianFaithPage: FC = () => (
    <Layout headerColour="dark" title="The Christian faith">
        <HeaderUnderlay colorScheme="light" />
        <Section colorScheme="dark" intro wider>
            <SectionText intro>
                <h1>The Christian faith</h1>
                <p>
                    Christianity is centred around the good news of one man -
                    Jesus Christ.
                </p>
                <p>
                    It is about his birth, life, death and resurrection and the
                    implications of all of this on each on each and every human
                    being and on the whole world. It is a real and ongoing
                    relationship between a person and Jesus Christ.
                </p>
                <div className={styles.whatIsChristianityIntroButtonContainer}>
                    <a
                        href="#christianity-explored-intro"
                        className={styles.whatIsChristianityIntroButton}
                    >
                        Explore Christianity further
                    </a>
                </div>
            </SectionText>
        </Section>
        <Section colorScheme="light">
            <div
                className={styles.whatIsChristianity}
                id="what-is-christianity"
            >
                <h2>What is Christianity?</h2>
                <p>
                    This three-minute video gives a great introduction to Jesus
                    Christ and what he means to Christians.
                </p>
                <YouTube
                    containerClassName={styles.bigVideoContainer}
                    className={styles.bigVideoPlayer}
                    opts={{ playerVars: { autoplay: 0 } }}
                    videoId="qjQLAay1HqM"
                />
            </div>
        </Section>
        <Section colorScheme="light">
            <div
                className={styles.christianityExplored}
                id="christianity-explored-intro"
            >
                <h2>Learn more about Christianity</h2>
                <p>
                    If you are interested in finding out what it means to be a
                    Christian, we would encourage you to join one of our
                    Christianity Explored courses. Christianity Explored looks
                    at the big questions of life by exploring the heart of the
                    Christian faith in a relaxed and informal atmosphere.
                </p>
                <p>
                    We also have a series of videos which you can watch in the
                    meantime about some of these topics.
                </p>
                <Link to="/christianityexplored">
                    Find out more about Christianity Explored and watch the
                    videos.
                </Link>
            </div>
        </Section>
        <p>TODO: add Nick's profile</p>
    </Layout>
)

export default ChristianFaithPage
