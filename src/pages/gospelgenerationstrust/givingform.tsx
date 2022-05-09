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
import Hero from "../../components/hero"

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        formId: "1FAIpQLSe1dpacAGEYESvD1GOQQ8oMGVmUsHdQwsXk5OLY78eqt56mCA",
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

const GospelGenerationsTrustGivingFormPage: React.FC = () => {
    const data = useStaticQuery<
        GatsbyTypes.GospelGenerationsTrustGivingFormQuery
    >(graphql`
        query GospelGenerationsTrustGivingForm {
            mainInfo: markdownRemark(
                fileAbsolutePath: {
                    regex: "/gospelgenerationstrust/givingform.md$/"
                }
            ) {
                html
                frontmatter {
                    title
                    headerColour
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
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

    const title = "Giving"

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
            title={title}
            headerColour={"dark"}
            robotsMetaData={HiddenPageRobotsMetaData}
        >
            <HeaderUnderlay colorScheme="light" />
            <Hero
                sectionId={"asdf"}
                singleImageFluid={
                    data.mainInfo!.frontmatter!.image!.childImageSharp!.fluid
                }
            >
                {/* <div className={GospelGenerationsTrustHeaderStyles.heroPullQuote}>
                    <p>
                        Then he said to his disciples, "The harvest is plentiful
                        but the workers are few. Ask the LORD of the harvest,
                        therefore, to send out workers into his harvest field."
                    </p>
                    <p>Matthew 9:37-38</p>
                </div> */}
                <h1>{title}</h1>
            </Hero>
            <Section
                colorScheme="light"
                // // className="intro wider dark"
                // className={
                //     GospelGenerationsTrustHeaderStyles.givingFormIntroduction
                // }
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
                <FormInformationSection>
                    <h1>Giving Form</h1>
                    <h2>Information About You</h2>
                    We need this information to help us claim gift aid for your
                    donations.
                </FormInformationSection>
                <FormInformationSection>
                    <h3>Name</h3>
                </FormInformationSection>
                <BasicTextField
                    name="givenName"
                    label="Given Name"
                    autoComplete="given-name"
                    validation={{ required: "Provide your given name." }}
                />
                <BasicTextField
                    name="familyName"
                    label="Family Name"
                    autoComplete="family-name"
                    validation={{ required: "Provide your family name." }}
                />
                <FormInformationSection>
                    <h3>Home Address</h3>
                </FormInformationSection>
                <BasicTextField
                    name="streetAddress"
                    label="Street Address"
                    autoComplete="street-address"
                    validation={{ required: "Provide a street address." }}
                />
                <BasicTextField
                    name="extraAddressLine"
                    label="Extra Address Line"
                    autoComplete="address-line1"
                    validation={{ required: false }}
                />
                <BasicTextField
                    name="townCity"
                    label="Town or City"
                    autoComplete="address-level1"
                    validation={{ required: "Provide a town or city." }}
                />
                <BasicTextField
                    name="postCode"
                    label="Post Code"
                    autoComplete="postal-code"
                    validation={{ required: "Provide a post code." }}
                />

                <FormInformationSection>
                    <h3>Contact Information</h3>
                    In case we need to contact you with a query, please provide
                    either an email address or telephone number.
                </FormInformationSection>
                <BasicTextField
                    name="telephoneNumber"
                    label="Telephone Number"
                    autoComplete={"tel"}
                />
                <BasicTextField
                    name="emailAddress"
                    label="Email Address"
                    autoComplete={"email"}
                />

                <FormInformationSection>
                    <h2>Your Gift</h2>
                    Tell us about your gift.
                </FormInformationSection>
                <BasicTextField
                    name="giftAmountInGBP"
                    label="Gift Amount"
                    contextualHelp="In GBP. Find our bank account details in the Notes section below this form."
                    validation={giftAmountValidation}
                />
                <RadioButtonField
                    name="giftType"
                    label="Gift Type"
                    contextualHelp={"Select one."}
                    options={[
                        { id: "oneoff", name: "One-Off" },
                        { id: "standingOrder", name: "Standing Order" },
                        { id: "gaye", name: "Give-As-You-Earn (GAYE)" },
                    ]}
                    validation={{ required: "Please select a gift type" }}
                />
                <DropDownField
                    name="regularGiftFrequency"
                    label="Gift Frequency"
                    choices={[
                        { id: "weekly", label: "Weekly" },
                        { id: "monthly", label: "Monthly" },
                        { id: "quarterly", label: "Quarterly" },
                        { id: "annually", label: "Annually" },
                    ]}
                    allowOther={true}
                    otherInputLabel="Other Gift Frequency"
                    otherOptionLabel="Other Frequency"
                    validation={{
                        required:
                            "Please select a regular gift frequency or enter your own",
                    }}
                    showWhen={showGiftFrequencyAndStartDate}
                />
                <DateField
                    name="regularGiftCommencementDate"
                    label="Regular Gift Commences From"
                    showWhen={showGiftFrequencyAndStartDate}
                />
                <FormInformationSection>
                    <h2>Gift Aid</h2>
                    If you are a UK taxpayer and eligible to Gift Aid your
                    donation, please complete the declaration below. This will
                    increase your gift by 25p for every £1 given at no extra
                    cost to you or us. Thank you.
                </FormInformationSection>
                <FormInformationSection>
                    <h3>Your Declaration</h3>&ldquo;
                    <em>
                        I am a UK taxpayer and understand that if I pay less
                        Income Tax and/or Capital Gains Tax than the amount of
                        Gift Aid claimed on all my donations in that tax year it
                        is my responsibility to pay any difference.
                    </em>
                    &rdquo;
                </FormInformationSection>
                <CheckBoxField
                    name="giftAidDeclarations"
                    label="On Which Gift Can We Claim Gift Aid?"
                    contextualHelp={"Please select all that apply."}
                    options={[
                        {
                            id: "thisGiftIsEligibleForGiftAid",
                            label: "Claim Gift Aid On This Gift",
                            defaultValue: false,
                        },
                        {
                            id: "allFutureGiftsAreEligibleForGiftAid",
                            label: "Claim Gift Aid On Future Gifts",
                            defaultValue: false,
                        },
                        {
                            id: "retrospectivelyReclaimGiftAid",
                            label: "Claim Gift Aid On Previous Gifts",
                            defaultValue: false,
                        },
                    ]}
                />
                <DateField
                    name="retrospectiveGiftAidClaimStartDate"
                    label="Claim Gift Aid Back Until"
                    maxDate={new Date()}
                    validation={{ required: "Please select a date." }}
                    showWhen={showRetroSpectiveGiftAidClaimDate}
                />
            </Form>
            {givingFormState !== "submitted" ? (
                <Section id="notes" colorScheme="light">
                    <article
                        dangerouslySetInnerHTML={{
                            __html: data.notes?.html ?? "No Content!",
                        }}
                    />
                </Section>
            ) : null}
        </GospelGenerationsTrustLayout>
    )
}

export default GospelGenerationsTrustGivingFormPage
