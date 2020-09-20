import React, { FC } from "react"

import Layout from "../../components/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import SectionText from "../../components/section-text"
import BigVideo from "../../components/big-video"

import styles from "./christianityexplored.module.scss"

const ChristianityExploredPage: FC = () => (
    <Layout headerColour="dark" title="Christianity Explored">
        <HeaderUnderlay colorScheme="light" />
        <Section colorScheme="dark" intro wider>
            <SectionText intro className={styles.introText}>
                <h1>Christianity Explored</h1>
                <p>Starting 12th October 2020</p>
                <BigVideo youTubeVideoId="U8Ez57BMBHU" />
            </SectionText>
        </Section>
        <Section colorScheme="light">
            <div className={styles.information}>
                <h2>What is Christianity Explored?</h2>
                <p>
                    Christianity Explored gives you time and space to consider
                    who Jesus is, what he taught and why it matters. The course
                    explores some of the big questions of life and how the
                    Christian faith approaches them. We aim for the course to
                    help people by being an open and relaxed way to investigate
                    Christianity.
                </p>
                <h2>Who is it for?</h2>
                <p>
                    Whether you have absolutely no experience of Christianity,
                    or have attended church, the Christianity Explored course is
                    for anyone who is curious about what Christians believe.
                    People from a very large variety of backgrounds with lots of
                    different experiences and viewpoints take part in in the
                    Christianity Explored course.
                </p>
                <h2>How does it work?</h2>
                <p>
                    We&apos;ll be meeting online during an evening each week.
                    You&apos;ll hear a short talk and will then have time to
                    discuss, engage with and ask questions about what you have
                    heard in an informal, friendly and open environment. All
                    questions are welcome, and you are welcome to contribute to
                    the discussion as much or as little as you wish.
                </p>
                <p>
                    Once you have signed up, we will send you the link of the
                    video call - just make sure you have a webcam or camera on
                    your phone to join in!
                </p>
                <p>
                    <strong>The course will start on 12th October 2020.</strong>
                </p>
                <h2>I&apos;m interested in joining!</h2>
                <p>
                    Please email our Assistant Minister, Nick Ashton, at{" "}
                    <a href="mailto:nick@christchurchmayfair.org">
                        nick@christchurchmayfair.org
                    </a>
                    . He&apos;d love to help with any questions you may have!
                </p>
                {/* TODO: signup form */}
            </div>
        </Section>
        <Section colorScheme="dark">
            <div className={styles.videos}>
                <h1>Videos</h1>
                <p>
                    We will be watching a short video about a particular topic
                    during each of the sessions of the course. These will
                    provide a great introduction to how the Christian faith
                    approaches each of these topics.
                </p>
                <p>TODO: add videos</p>
            </div>
        </Section>
        <p>TODO: add Nick's profile</p>
    </Layout>
)

export default ChristianityExploredPage
