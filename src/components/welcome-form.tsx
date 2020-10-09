import React, { FC } from "react"
import {
    convertFormDateToGoogleFormUrl,
    IndexableFormData,
    GoogleFormConfig,
} from "./form/google-form-submit"
import Section from "./section"
import { Form } from "./form/form"
import { FormInformationSection } from "./form/fields/form-section-start"
import BasicTextField from "./form/fields/basic-text-field"

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

const WelcomeForm: FC = () => (
    <>
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
                <h2>Get in touch with us</h2>
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
            <BasicTextField name="morning" label="Your question" />
        </Form>
    </>
)

export default WelcomeForm
