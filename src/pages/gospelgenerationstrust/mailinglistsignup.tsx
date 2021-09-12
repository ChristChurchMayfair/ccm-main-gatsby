import React, { useState } from "react"
import GospelGenerationsTrustLayout from "../../components/gospelgenerationstrust/layout"
import { Form, FormState } from "../../components/form/form"
import { FormInformationSection } from "../../components/form/fields/form-section-start"
import BasicTextField from "../../components/form/fields/basic-text-field"
import RadioButtonField from "../../components/form/fields/radio-button-field"
import DropDownField from "../../components/form/fields/drop-down-field"
import DateField from "../../components/form/fields/date-field"
import CheckBoxField from "../../components/form/fields/checkbox-field"
import { ValidationOptions } from "react-hook-form"
import {
    convertFormDateToGoogleFormUrl,
    GoogleFormConfig as GoogleFormSubmissionConfig,
    IndexableFormData,
} from "../../components/form/google-form-submit"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section"
import HeaderUnderlay from "../../components/header-underlay"
import {
    ValueIn,
    ValueEqual,
} from "../../components/form/conditional-visibility"
import SectionText from "../../components/section-text"
import { HiddenPageRobotsMetaData } from "../../components/robots"
import GospelGenerationsTrustHeaderStyles from "./gospelgenerationstrust.module.scss"

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
//https://docs.google.com/forms/d/e/
//1FAIpQLScvDqpDt9t9p1IWnaM3YyfUBq-mx0zRzyJYOmrsiZ1OEWDhsA
//viewform?usp=pp_url
//2119115224=name
//492615466=surname
//25928183=street
//146141917=extra+address
//1416274792=town
//677224156=postcode
//586409705=tele
//1335853443=email
//1152276734=giftamount
//448702037=gift+type
//1726603538=regular+freq
//99685333=regular+commencement+date
//1730771203=thesis+gift+aidable
//1993506998=future+gifts+are+giftaiable
//437826188=retrospecgicely+claim
//628085262=retrospectively+claim+from

//https://docs.google.com/forms/d/e/
//1FAIpQLSdKD7Xw1MM4obW7FeVqGQssDPI2dqaoNR20Tz_GCK-ZH64phw
//viewform?usp=pp_url
//2119115224=asdf
//492615466=asdf
//25928183=asdf
//146141917=asdf
//1416274792=asdf
//677224156=asdf
//586409705=asdf
//1335853443=asdf
//1152276734=asdf
//448702037=asdf
//1726603538=asdf
//99685333=asdf
//1730771203=asdf
//1993506998=asdf
//437826188=sad
//628085262=asdf

const allConfig: { [configName: string]: GoogleFormSubmissionConfig } = {
    development: {
        formId: "1FAIpQLScvDqpDt9t9p1IWnaM3YyfUBq-mx0zRzyJYOmrsiZ1OEWDhsA", //This is the test form!
        fieldNameToEntryId: {
            givenName: 2119115224,
            familyName: 492615466,
            streetAddress: 25928183,
            extraAddressLine: 146141917,
            townCity: 1416274792,
            postCode: 677224156,
            telephoneNumber: 586409705,
            emailAddress: 1335853443,
            giftAmountInGBP: 1152276734,
            giftType: 448702037,
            regularGiftFrequency: 1726603538,
            regularGiftCommencementDate: 99685333,
            thisGiftIsEligibleForGiftAid: 1730771203,
            allFutureGiftsAreEligibleForGiftAid: 1993506998,
            retrospectivelyReclaimGiftAid: 437826188,
            retrospectiveGiftAidClaimStartDate: 628085262,
        },
        otherEnabledFields: {
            regularGiftFrequency: {
                otherValue: "other",
                otherField: "regularGiftFrequencyOther",
            },
        },
        warning: devevelopmentEnvironmentWarning,
    },
    production: {
        formId: "1FAIpQLSdKD7Xw1MM4obW7FeVqGQssDPI2dqaoNR20Tz_GCK-ZH64phw",
        fieldNameToEntryId: {
            givenName: 2119115224,
            familyName: 492615466,
            streetAddress: 25928183,
            extraAddressLine: 146141917,
            townCity: 1416274792,
            postCode: 677224156,
            telephoneNumber: 586409705,
            emailAddress: 1335853443,
            giftAmountInGBP: 1152276734,
            giftType: 448702037,
            regularGiftFrequency: 1726603538,
            regularGiftCommencementDate: 99685333,
            thisGiftIsEligibleForGiftAid: 1730771203,
            allFutureGiftsAreEligibleForGiftAid: 1993506998,
            retrospectivelyReclaimGiftAid: 437826188,
            retrospectiveGiftAidClaimStartDate: 628085262,
        },
        otherEnabledFields: {
            regularGiftFrequency: {
                otherValue: "other",
                otherField: "regularGiftFrequencyOther",
            },
        },
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

const GospelGenerationsMailingListSignupPage: React.FC = () => {
    const data = useStaticQuery<
        GatsbyTypes.GospelGenerationsTrustGivingFormQuery
    >(graphql`
        query GospelGenerationsTrustMailingListSignup {
            mainInfo: markdownRemark(
                fileAbsolutePath: {
                    regex: "/gospelgenerationstrust/mailinglistsignup.md$/"
                }
            ) {
                html
                frontmatter {
                    title
                    headerColour
                }
            }
            notes: markdownRemark(
                fileAbsolutePath: {
                    regex: "/gospelgenerationstrust/givingformnotes.md$/"
                }
            ) {
                html
            }
        }
    `)

    const [givingFormState, setGivingFormState] = useState<FormState | null>(
        null
    )

    const showGiftFrequencyAndStartDate: ValueIn = {
        type: "valueInList",
        otherFieldName: "giftType",
        values: ["Give-As-You-Earn (GAYE)", "Standing Order"],
    }

    const showRetroSpectiveGiftAidClaimDate: ValueEqual = {
        type: "valueEqualTo",
        otherFieldName: "retrospectivelyReclaimGiftAid",
        hasValueEqualTo: true,
    }

    const giftAmountValidation: ValidationOptions = {
        required: {
            value: true,
            message: "You must provide a gift amount.",
        },
        validate: {
            mustBeGBPOrPlainNumber: (value: string) =>
                value.startsWith("£") ||
                !isNaN(parseFloat(value)) ||
                "The value must be GBP",
            positive: (value: string) =>
                parseFloat(value.replace(/^£/, "")) > 0.0 ||
                "The gift must be a positive number.",
            maxTwoDecimalPlaces: (value: string) =>
                !value.includes(".") ||
                value.split(".")[1].length <= 2 ||
                "The gift must have, at most, two decimal places",
        },
    }

    return (
        <GospelGenerationsTrustLayout
            title="Mailing List Sign Up"
            headerColour={"dark"}
            robotsMetaData={HiddenPageRobotsMetaData}
        >
            <HeaderUnderlay colorScheme="light" />
            <Section
                intro
                wider
                colorScheme="custom"
                // className="intro wider dark"
                className={
                    GospelGenerationsTrustHeaderStyles.givingFormIntroduction
                }
            >
                <SectionText
                    intro
                    dark
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.mainInfo?.html ?? "No Content!",
                    }}
                />
            </Section>

            {googleFormSubmissionConfig?.warning !== undefined ? (
                <Section id="notes" colorScheme="light">
                    <article style={{ backgroundColor: "red", color: "white" }}>
                        {googleFormSubmissionConfig.warning}
                    </article>
                </Section>
            ) : null}

            <Form
                genericSubmissionErrorMessage={
                    "There was an error submitting the form. Please try again and if the problem persists contact the technical help as listed in the Notes section at the bottom of the page."
                }
                doSubmit={sendToGoogleFormsApi}
                stateChangeCallback={setGivingFormState}
            >
                <BasicTextField
                    name="emailAddress"
                    label="Email Address"
                    autoComplete={"email"}
                />
            </Form>
            {/* {givingFormState !== "submitted" ? (
            ) : null} */}
        </GospelGenerationsTrustLayout>
    )
}

export default GospelGenerationsMailingListSignupPage
