import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Section from "../components/section"
import HeaderUnderlay from "../components/header-underlay"
import SectionText from "../components/section-text"
import YouTubeGallery, {
    VideoSection,
} from "../components/youtube/youtube-gallery"
import { Form } from "../components/form/form"
import BasicTextField from "../components/form/fields/basic-text-field"
import {
    IndexableFormData,
    convertFormDateToGoogleFormUrl,
    GoogleFormConfig,
} from "../components/form/google-form-submit"
import CheckBoxField from "../components/form/fields/checkbox-field"
import styles from "../components/welcome.module.scss"
import YouTube from "react-youtube"
import { FormInformationSection } from "../components/form/fields/form-section-start"

const devevelopmentEnvironmentWarning = (
    <div>
        <em>
            Warning - this form currently submits to a Google Spreadsheet owned
            by{" "}
            <a href="mailto:tom.duckering@gmail.com">tom.duckering@gmail.com</a>{" "}
            and is only for test purposes. Please do not submit any data that
            you do not wish him to see!
        </em>
    </div>
)

const allConfig: { [configName: string]: GoogleFormConfig } = {
    development: {
        formId: "1FAIpQLSeWH3Ykx4wd_2VqXKuZIFQ_621u8T8zPrix8VdIkWSnWYQESQ", //This is the test form!
        fieldNameToEntryId: {
            fullName: 930889699,
            emailAddress: 1863592346,
            morning: 1011494470,
            evening: 1435050375,
        },
        otherEnabledFields: {},
        warning: devevelopmentEnvironmentWarning,
    },
    production: {
        formId: "1FAIpQLSdjUjKxByZWdRkLQv3tbsfzQ2PidXuEzMNfHrp8BiCjMctAHw",
        fieldNameToEntryId: {
            fullName: 1930537097,
            emailAddress: 1284288054,
            morning: 1501517289,
            evening: 1960000090,
        },
        otherEnabledFields: {},
        warning: null,
    },
}

const configName = process.env.GATSBY_GIVING_FORM_CONFIG
const googleFormSubmissionConfig = allConfig[configName!] // want to die if this not set properly

async function sendToGoogleFormsApi(formData: IndexableFormData) {
    const googleFormApiSumbmitUrl = convertFormDateToGoogleFormUrl(
        formData,
        googleFormSubmissionConfig
    )
    return fetch(googleFormApiSumbmitUrl, {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        referrer: "no-referrer",
    }).then(() => {
        return
    })
}

const WelcomePage: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.WelcomeQuery>(graphql`
        query Welcome {
            evangelists: allSanityPerson(
                filter: {
                    roles: {
                        elemMatch: { slug: { current: { eq: "evangelist" } } }
                    }
                }
            ) {
                nodes {
                    ...StaffProfile
                }
            }
            intro: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/main.md$/" }
            ) {
                html
                fields {
                    frontmattermd {
                        findOutMoreText {
                            html
                        }
                    }
                }
            }
            bigVideo: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/big_video.md$/" }
            ) {
                html
                frontmatter {
                    videoId
                }
            }
            videos: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/videos.md$/" }
            ) {
                html
                frontmatter {
                    sections {
                        title
                        videos {
                            id
                            title
                            description
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout headerColour="dark" title={"Welcome"} description={undefined}>
            <HeaderUnderlay colorScheme="light" />

            <Section
                intro
                colorScheme="dark"
                wider
                className="intro wider dark"
            >
                <SectionText
                    intro
                    dark
                    className={"text"}
                    dangerouslySetInnerHTML={{
                        __html: data.intro!.html!,
                    }}
                />
            </Section>

            <Section colorScheme="light">
                <div className={styles.bigVideoContent}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.bigVideo!.html!,
                        }}
                    />
                    <YouTube
                        containerClassName={styles.bigVideoContainer}
                        className={styles.bigPlayer}
                        opts={{ playerVars: { autoplay: 0 } }}
                        videoId={data.bigVideo!.frontmatter!.videoId}
                    />
                </div>
            </Section>

            {googleFormSubmissionConfig?.warning != null ? (
                <Section id="developmentwarning" colorScheme="light">
                    <article style={{ backgroundColor: "red", color: "white" }}>
                        {googleFormSubmissionConfig.warning}
                    </article>
                </Section>
            ) : null}

            <Form
                genericSubmissionErrorMessage={
                    "There was an error submitting the form. Please try again and if the problem persists please contact us via email."
                }
                doSubmit={sendToGoogleFormsApi}
            >
                <FormInformationSection>
                    <h2>Get In Touch</h2>
                    If you are looking into Christianity or have questions about
                    Christ Church Mayfair we&apos;d love to help you. Fill out
                    this form and we will get in touch with you.
                </FormInformationSection>
                <BasicTextField
                    name="fullName"
                    label="Full Name"
                    autoComplete="name"
                    validation={{ required: "Provide your name." }}
                />
                <BasicTextField
                    name="emailAddress"
                    label="Email Address"
                    autoComplete="email"
                    validation={{ required: "Provide an email address." }}
                />
                <CheckBoxField
                    name="serviceAttended"
                    label="Which Service Did You Attend?"
                    contextualHelp={"Please select all that apply."}
                    itemsPerLine={2}
                    options={[
                        {
                            id: "morning",
                            label: "10.15 AM",
                            defaultValue: false,
                        },
                        {
                            id: "evening",
                            label: "6.00 PM",
                            defaultValue: false,
                        },
                    ]}
                />
            </Form>

            <Section colorScheme="light">
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.videos?.html ?? "Missing content",
                    }}
                />
            </Section>

            <Section colorScheme="light">
                <YouTubeGallery
                    videoSections={
                        data.videos!.frontmatter!.sections as VideoSection[]
                    }
                />
            </Section>

            <Bio
                people={data.evangelists.nodes}
                peoplePrecedenceByEmail={["nick@christchurchmayfair.org"]}
                descriptionHtml={
                    data.intro!.fields!.frontmattermd!.findOutMoreText!.html!
                }
            />
        </Layout>
    )
}

export default WelcomePage
