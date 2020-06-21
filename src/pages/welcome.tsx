import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Styles from "../components/sharingfaith.module.scss"
import Bio from "../components/bio"
import Section from "../components/section"
import HeaderUnderlay from "../components/header-underlay"
import SectionText from "../components/section-text"
import YouTubeGallery, {
    VideoSection,
} from "../components/youtube/youtube-gallery"
import { Form, FormState } from "../components/form/form"
import { FormSectionStart } from "../components/form/fields/form-section-start"
import BasicTextField from "../components/form/fields/basic-text-field"
import {
    IndexableFormData,
    convertFormDateToGoogleFormUrl,
    GoogleFormConfig,
} from "../components/form/google-form-submit"
import CheckBoxField from "../components/form/fields/checkbox-field"

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

type GiftFormData = {
    givenName: string
    familyName: string
    streetAddress: string
    extraAddressLine: string | null
    townCity: string
    postCode: string
    telephoneNumber: string | null
    emailAddress: string | null
    giftAmountInGBP: number
    giftType: "Standing Order" | "One Off" | "Give as you earn"
    regularGiftFrequency: string | null
    regularGiftRequencyOther: string
    regularGiftCommencementDate: Date | null
    thisGiftIsEligibleForGiftAid: boolean
    allFutureGiftsAreEligibleForGiftAid: boolean
    retrospectivelyReclaimGiftAid: boolean
    retrospectiveGiftAidClaimStartDate: Date | null
}

const allConfig: { [configName: string]: GoogleFormConfig } = {
    development: {
        formId: "asdfasdfasdfasdf", //This is the test form!
        fieldNameToEntryId: {
            givenName: 123123123,
            emailAddress: 123123123,
            morning: 123123123,
            evening: 123123123,
        },
        otherEnabledFields: {},
        warning: devevelopmentEnvironmentWarning,
        genericSubmissionError:
            "There was an error submitting the form. Please try again and if the problem persists please contact us via email.",
    },
    production: {
        formId: "asdfasdfasdf",
        fieldNameToEntryId: {
            givenName: 123123123,
            emailAddress: 123123123,
            morning: 123123123,
            evening: 123123123,
        },
        otherEnabledFields: {},
        warning: null,
        genericSubmissionError:
            "There was an error submitting the form. Please try again and if the problem persists please contact us via email.",
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
            contactForm: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/contactform.md$/" }
            ) {
                html
            }
            christianityExploredVideos: markdownRemark(
                fileAbsolutePath: { regex: "/welcome/ce_videos.md$/" }
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

    const [contactFormState, setContactFormState] = useState<FormState | null>(
        null
    )

    return (
        <Layout headerColour="dark" title={"Welcome"} description={undefined}>
            <HeaderUnderlay />

            <Section intro dark wider className="intro wider dark">
                <SectionText
                    intro
                    dark
                    className={"text"}
                    dangerouslySetInnerHTML={{
                        __html: data.intro!.html!,
                    }}
                />
            </Section>

            <Section>
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.contactForm?.html ?? "Missing content",
                    }}
                />
            </Section>

            <Form
                genericSubmissionErrorMessage={
                    googleFormSubmissionConfig.genericSubmissionError
                }
                doSubmit={sendToGoogleFormsApi}
                stateChangeCallback={setContactFormState}
            >
                <BasicTextField
                    name="givenName"
                    label="Full Name"
                    autoComplete="name"
                    validation={{ required: "Provide your name." }}
                />
                <BasicTextField
                    name="email"
                    label="Email Address"
                    autoComplete="email"
                    validation={{ required: "Provide an email address." }}
                />
                <CheckBoxField
                    name="serviceAttended"
                    label="Which Service Did You Attend?"
                    contextualHelp={"Please select all that apply."}
                    options={[
                        {
                            id: "morning",
                            label: "Morning - 10.15 AM",
                            defaultValue: false,
                        },
                        {
                            id: "evening",
                            label: "Evening - 6.00 PM",
                            defaultValue: false,
                        },
                    ]}
                />
            </Form>

            <Section>
                <article
                    dangerouslySetInnerHTML={{
                        __html:
                            data.christianityExploredVideos?.html ??
                            "Missing content",
                    }}
                />
            </Section>
            <Section>
                <YouTubeGallery
                    videoSections={
                        data.christianityExploredVideos!.frontmatter!
                            .sections as VideoSection[]
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
