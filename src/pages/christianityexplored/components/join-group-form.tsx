import React, { FC } from "react"

import BasicTextField from "../../../components/form/fields/basic-text-field"
import { FormInformationSection } from "../../../components/form/fields/form-section-start"
import { Form } from "../../../components/form/form"
import {
    convertFormDateToGoogleFormUrl,
    GoogleFormConfig,
    IndexableFormData,
} from "../../../components/form/google-form-submit"
import Section from "../../../components/section"

const devevelopmentEnvironmentWarning = (
    <div>
        <em>
            Warning - this form currently submits to a Google Spreadsheet owned
            by <a href="mailto:mauriceyap@hotmail.co.uk">Maurice Yap</a> and is
            only for test purposes. Please do not submit any data that you do
            not wish him to see!
        </em>
    </div>
)

const allConfig: { [configName: string]: GoogleFormConfig } = {
    development: {
        formId: "1FAIpQLSdugEq0d811olCdfKLcK4wpfE12CAvb0qCQPnck_bj_xHDI2g", //This is the test form!
        fieldNameToEntryId: {
            name: 939027200,
            emailAddress: 1489726579,
        },
        otherEnabledFields: {},
        warning: devevelopmentEnvironmentWarning,
    },
    production: {
        formId: "1FAIpQLSf9eUD0Q7eNnLzSzCc1JRpm-9i8_TF6jlVgv2r56WZQ32m0Og",
        fieldNameToEntryId: {
            name: 1318235249,
            emailAddress: 746350462,
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

const JoinGroupForm: FC = () => (
    <>
        {googleFormSubmissionConfig?.warning !== undefined ? (
            <Section id="notes" colorScheme="light">
                <article style={{ backgroundColor: "red", color: "white" }}>
                    {googleFormSubmissionConfig.warning}
                </article>
            </Section>
        ) : null}
        <Form
            genericSubmissionErrorMessage="There was an error submitting the form. Please try again and if the problem persists contact the technical help as listed in the Notes section at the bottom of the page."
            doSubmit={sendToGoogleFormsApi}
        >
            <FormInformationSection>
                <p>
                    Thanks for your interest. If you can give us your name and
                    email address we will be in touch with more information
                    about joining a group.
                </p>
            </FormInformationSection>
            <BasicTextField
                name="name"
                label="Your name"
                autoComplete="given-name"
                validation={{ required: "Please provide your name." }}
            />
            <BasicTextField
                name="emailAddress"
                label="Email address"
                autoComplete="email"
                validation={{ required: "Please provide your email address." }}
            />
        </Form>
    </>
)

export default JoinGroupForm
