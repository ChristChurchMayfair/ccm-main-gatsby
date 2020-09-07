import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BasicTextField from "../components/form/fields/basic-text-field"
import CheckBoxField from "../components/form/fields/checkbox-field"
import { FormInformationSection } from "../components/form/fields/form-section-start"
import { Form } from "../components/form/form"
import {
    convertFormDateToGoogleFormUrl,
    GoogleFormConfig,
    IndexableFormData,
} from "../components/form/google-form-submit"
import HeaderUnderlay from "../components/header-underlay"
import Layout from "../components/layout"
import Section from "../components/section"
import SectionText from "../components/section-text"

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
        formId: "1FAIpQLSegUzndIutQ9EigxT9d4chyQnq9g39tXwQottslXZqrgWsLFw", //This is the test form!
        fieldNameToEntryId: {
            fullName: 1084317887,
            emailAddress: 1010894531,
            telephoneNumber: 1068111817,
            emailConsent: 796689154,
            telephoneConsent: 1241833160,
            textMessageConsent: 1217356119,
            attendedMorning: 1242537248,
            attendedEvening: 1253556287,
            interestedInExploringChristianity: 24080750,
            interestedInNewcomerGroups: 1772238522,
            interestedInStudentGroups: 1449088883,
            interestedInCCMNewsAndEvents: 441404971,
        },
        otherEnabledFields: {},
        warning: devevelopmentEnvironmentWarning,
    },
    production: {
        formId: "1FAIpQLSdqsyIWIY7B9iUwrnzhl8BwYzsoTFsEpzO5xq_-PFlugGlYkQ",
        fieldNameToEntryId: {
            fullName: 1084317887,
            emailAddress: 1010894531,
            telephoneNumber: 1068111817,
            emailConsent: 796689154,
            telephoneConsent: 1241833160,
            textMessageConsent: 1217356119,
            attendedMorning: 1242537248,
            attendedEvening: 1253556287,
            interestedInExploringChristianity: 24080750,
            interestedInNewcomerGroups: 1772238522,
            interestedInStudentGroups: 1449088883,
            interestedInCCMNewsAndEvents: 441404971,
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

const ContactCard: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.NewcomerQuery>(graphql`
        query Newcomer {
            intro: markdownRemark(
                fileAbsolutePath: { regex: "/newcomer.md$/" }
            ) {
                html
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
                    contextualHelp={
                        "Provide at least an email address or phone number."
                    }
                />
                <BasicTextField
                    name="telephoneNumber"
                    label="Phone Number"
                    autoComplete="tel"
                />
                <CheckBoxField
                    name="contactPreference"
                    label="Contact preference"
                    itemsPerLine={3}
                    contextualHelp={"Let us know how best to contact you."}
                    validation={{
                        required:
                            "Please tell us how you'd prefer to be contacted.",
                    }}
                    options={[
                        {
                            id: "emailConsent",
                            label: "Email",
                            defaultValue: false,
                        },
                        {
                            id: "telephoneConsent",
                            label: "Phone",
                            defaultValue: false,
                        },
                        {
                            id: "textMessageConsent",
                            label: "Text",
                            defaultValue: false,
                        },
                    ]}
                />
                <CheckBoxField
                    name="serviceAttended"
                    label="Which Service Did You Attend?"
                    contextualHelp={"Please select all that apply."}
                    itemsPerLine={2}
                    options={[
                        {
                            id: "attendedMorning",
                            label: "Morning",
                            defaultValue: false,
                        },
                        {
                            id: "attendedEvening",
                            label: "Evening",
                            defaultValue: false,
                        },
                    ]}
                />
                <CheckBoxField
                    name="tellMeAbout"
                    label="What would you like to know more about?"
                    contextualHelp={"Please select all that apply."}
                    options={[
                        {
                            id: "interestedInExploringChristianity",
                            label: "Exploring Christianity",
                            defaultValue: false,
                        },
                        {
                            id: "interestedInNewcomerGroups",
                            label: "Newcomer Groups",
                            defaultValue: false,
                        },
                        {
                            id: "interestedInStudentGroups",
                            label: "Student Groups",
                            defaultValue: false,
                        },
                        {
                            id: "interestedInCCMNewsAndEvents",
                            label: "CCM News & Events",
                            defaultValue: false,
                        },
                    ]}
                />

                <FormInformationSection>
                    <h3>What we do with your information</h3>
                    <em>
                        We will endeavour to your details safe and use your
                        information in accordance with our{" "}
                        <a href="/privacy-notice">Privacy Notice</a>. If at any
                        time you wish to stop recieving communications from us,
                        or want to withdraw or chance your consents, please
                        contact us at{" "}
                        <a href="mailto:info@christchurchmayfair.org">
                            info@christchurchmayfair.org
                        </a>{" "}
                        or{" "}
                        <a href="tel:+44%20(0)%20207%20629%205885">
                            +44 (0) 207 629 5885
                        </a>
                        .
                    </em>
                </FormInformationSection>
            </Form>
        </Layout>
    )
}

export default ContactCard
