import React, { useState } from "react"
import Layout from "../components/layout"
import { Form, FormState } from "../components/form/form"
import { FormInformationSection } from "../components/form/fields/form-section-start"
import RadioButtonField from "../components/form/fields/radio-button-field"
import CheckBoxField from "../components/form/fields/checkbox-field"
import {
    convertFormDateToGoogleFormUrl,
    GoogleFormConfig as GoogleFormSubmissionConfig,
    IndexableFormData,
} from "../components/form/google-form-submit"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../components/section"
import HeaderUnderlay from "../components/header-underlay"
import { ValueEqual } from "../components/form/conditional-visibility"
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

//https://docs.google.com/forms/d/e/1FAIpQLSfn5BMopACCRB6uyq1tt4ToasAEW-4kTO8-JTxIWjKS-TIqOw/viewform?usp=pp_url
//&entry.550250439=Age+bracket
//&entry.604740151=Gender
//&entry.667287122=Student
//&entry.1139405390=Location
//&entry.763676208=Language
//&entry.2011835526=Service+Attended
//&entry.910814374=Mode+of+attendance
//&entry.1010576021=Also+morning
//&entry.1138595067=Regular
//&entry.644735760=time+at+ccm
//&entry.876585463=discovery+method
//&entry.1299702266=attended+DG
//&entry.878596455=attended+PTS
//&entry.127480616=attended+HG
//&entry.537688540=Extra+event

//https://docs.google.com/forms/d/e/1FAIpQLSdxYowdnoXoos2GTvDbHgvdDPEDGN8hJiV5eXhZNZ-fmnYikw/viewform?usp=pp_url
//&entry.550250439=Age+Bracket
//&entry.604740151=Gender
//&entry.667287122=Studen
//&entry.1139405390=Location
//&entry.763676208=Language
//&entry.2011835526=Service+Attended
//&entry.910814374=Attendance+mode
//&entry.1010576021=Morning+Attended+Too
//&entry.1138595067=regular+or+visitor
//&entry.644735760=time+at+ccm
//&entry.876585463=discovery+method
//&entry.1299702266=DG
//&entry.878596455=PTS
//&entry.127480616=HQ
//&entry.537688540=other+events

const allConfig: { [configName: string]: GoogleFormSubmissionConfig } = {
    development: {
        formId: "1FAIpQLSfn5BMopACCRB6uyq1tt4ToasAEW-4kTO8-JTxIWjKS-TIqOw", //This is the test form!
        fieldNameToEntryId: {
            ageBracket: 550250439,
            gender: 604740151,
            areYouAStudent: 667287122,
            yourLocation: 1139405390,
            yourFirstLanguage: 763676208,
            dg: 1299702266,
            PTS: 878596455,
            honestQuestions: 127480616,
            alsoWatchedMorningService: 1010576021,
            liveOrCatchUp: 910814374,
            serviceAttended: 2011835526,
            regularOrVisitor: 1138595067,
            howLongHaveYouBeenAttending: 644735760,
            howDidYouFindThisService: 876585463,
            otherCCMEventsOther: 537688540,
        },
        otherEnabledFields: {
            yourLocation: {
                otherValue: "Other Location",
                otherField: "yourLocationOther",
            },
            howDidYouFindThisService: {
                otherValue: "Another Way",
                otherField: "howDidYouFindThisServiceOther",
            },
            yourFirstLanguage: {
                otherValue: "Other Language",
                otherField: "yourFirstLanguageOther",
            },
            otherCCMEventsOther: {
                otherValue: true,
                otherField: "otherCCMEventsOtherInput",
            },
        },
        warning: devevelopmentEnvironmentWarning,
    },
    production: {
        formId: "1FAIpQLSdxYowdnoXoos2GTvDbHgvdDPEDGN8hJiV5eXhZNZ-fmnYikw",
        fieldNameToEntryId: {
            ageBracket: 550250439,
            gender: 604740151,
            areYouAStudent: 667287122,
            yourLocation: 1139405390,
            yourFirstLanguage: 763676208,
            dg: 1299702266,
            PTS: 878596455,
            honestQuestions: 127480616,
            alsoWatchedMorningService: 1010576021,
            liveOrCatchUp: 910814374,
            serviceAttended: 2011835526,
            regularOrVisitor: 1138595067,
            howLongHaveYouBeenAttending: 644735760,
            howDidYouFindThisService: 876585463,
            otherCCMEventsOther: 537688540,
        },
        otherEnabledFields: {
            gender: {
                otherValue: "Other",
                otherField: "genderOther",
            },
            yourLocation: {
                otherValue: "Other Location",
                otherField: "yourLocationOther",
            },
            howDidYouFindThisService: {
                otherValue: "Another Way",
                otherField: "howDidYouFindThisServiceOther",
            },
            yourFirstLanguage: {
                otherValue: "Other Language",
                otherField: "yourFirstLanguageOther",
            },
            otherCCMEventsOther: {
                otherValue: true,
                otherField: "otherCCMEventsOtherInput",
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

const SurveyPage: React.FC = () => {
    const data = useStaticQuery<GatsbyTypes.SurveyQuery>(graphql`
        query Survey {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/survey/main.md$/" }
            ) {
                html
                frontmatter {
                    title
                    headerColour
                }
            }
            notes: markdownRemark(
                fileAbsolutePath: { regex: "/survey/notes.md$/" }
            ) {
                html
            }
        }
    `)

    const [surveyFormState, setSurveyFormState] = useState<FormState | null>(
        null
    )

    const showRegularAttenderQuestions: ValueEqual = {
        type: "valueEqualTo",
        otherFieldName: "regularOrVisitor",
        hasValueEqualTo: "Regular",
    }

    const showQuestionsForEveningService: ValueEqual = {
        type: "valueEqualTo",
        otherFieldName: "serviceAttended",
        hasValueEqualTo: "Evening (6.00 pm)",
    }

    const showOldTimerMessage: ValueEqual = {
        type: "valueEqualTo",
        otherFieldName: "howLongHaveYouBeenAttending",
        hasValueEqualTo: "20 years or more",
    }

    return (
        <Layout title="2021 Congregational Survey" headerColour={"dark"}>
            <HeaderUnderlay colorScheme="light" />
            <Section
                intro
                wider
                colorScheme="dark"
                className="intro wider dark"
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
                stateChangeCallback={setSurveyFormState}
            >
                <FormInformationSection>
                    <p>
                        Please complete this form if you are aged 18+ and attended one of our services today either in person or online. It should take you only a minute or two. For under 18s, please could a parent answer the questions below on their behalf.
                    </p>
                    <p>
                        Please fill in one form for each person watching, and for each service you attend.
                    </p>
                    <p>
                        This survey is anonymous, please do not share any personal information which could be used to identify you.
                    </p>
                </FormInformationSection>
                <FormInformationSection>
                    <h2>Information About You</h2>
                </FormInformationSection>
                <RadioButtonField
                    name="regularOrVisitor"
                    label="Are you a regular member of Christ Church Mayfair or just visiting today?"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        { id: "regular", name: "Regular" },
                        { id: "visitor", name: "Visitor" },
                    ]}
                />
                <RadioButtonField
                    name="ageBracket"
                    label="Please indicate your age bracket"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    showWhen={showRegularAttenderQuestions}
                    options={[
                        {
                            id: "eighteenToThirtyStudent",
                            name: "18 to 30 - Student",
                        },
                        {
                            id: "eighteenToThirtyNonStudent",
                            name: "18 to 30 - Non-Student",
                        },
                        {
                            id: "thirtyOneToFourty",
                            name: "31 to 40",
                        },
                        {
                            id: "fourtyOneToFiftyFive",
                            name: "41 to 55",
                        },
                        { id: "fiftySixAndOlder", name: "56 and over" },
                        //{ id: "preferNotToSayAge", name: "Prefer not to say" },
                    ]}
                />
                {/*<RadioButtonField
                    name="areYouAStudent"
                    label="Are you a student?"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        { id: "student", name: "Student" },
                        {
                            id: "notAStudent",
                            name: "Non-Student",
                            checked: true,
                        },
                    ]}
                />*/}
                <RadioButtonField
                    name="gender"
                    label="Please indicate your gender"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        { id: "male", name: "Male" },
                        { id: "female", name: "Female" },
                        {
                            id: "preferNotToSayGender",
                            name: "Prefer not to say",
                        },
                    ]}
                    allowOther={true}
                    otherInputLabel="Other"
                    otherOptionName="Other"
                />
                <RadioButtonField
                    name="yourFirstLanguage"
                    label="Please tell us your first language"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        { id: "english", name: "English", checked: true },
                    ]}
                    allowOther={true}
                    otherInputLabel="Language"
                    otherOptionName="Other Language"
                />
                <FormInformationSection>
                    <h2>Your Attendance Today</h2>
                </FormInformationSection>
                <RadioButtonField
                    name="serviceAttended"
                    label="Which service have you just attended?"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        { id: "morning", name: "Morning (10.30 am)" },
                        { id: "evening", name: "Evening (6.00 pm)" },
                    ]}
                />
                <RadioButtonField
                    name="liveOrCatchUp"
                    label="How did you attend today?"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        { id: "inPerson", name: "In Person" },
                        { id: "liveStreamed", name: "Online - Live" },
                        { id: "catchUp", name: "Online - Afterwards" },
                    ]}
                />
                <RadioButtonField
                    name="yourLocation"
                    label="Please tell us where you're watching from today"
                    contextualHelp={"City and/or Region."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        {
                            id: "london",
                            name: "London",
                            checked: true,
                        },
                        {
                            id: "ratherNotSay",
                            name: "I'd rather not say",
                        },
                    ]}
                    allowOther={true}
                    otherInputLabel="Location"
                    otherOptionName="Other City/Region"
                />
                <RadioButtonField
                    name="alsoWatchedMorningService"
                    label="Did you also attend the 10.30 am service at CCM?"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    options={[
                        { id: "yesInPerson", name: "Yes - In Person" },
                        { id: "yesLiveStreamed", name: "Yes - Online" },
                        { id: "no", name: "No" },
                    ]}
                    showWhen={showQuestionsForEveningService}
                />
                <RadioButtonField
                    name="howLongHaveYouBeenAttending"
                    label="How long have you been attending Christ Church Mayfair?"
                    contextualHelp={"Select one."}
                    validation={{ required: "This is a required field" }}
                    showWhen={showRegularAttenderQuestions}
                    options={[
                        { id: "lessThanAYear", name: "Less than a year" },
                        { id: "oneToThreeYears", name: "1 to 3 years" },
                        { id: "fourToSixYears", name: "4 to 6 years" },
                        { id: "sevenToNineYears", name: "7 to 9 years" },
                        { id: "tenToFourteen", name: "10 to 14 years" },
                        { id: "fifteenToNineteen", name: "15 to 19 years" },
                        { id: "twentyYearsOrMore", name: "20 years or more" },
                    ]}
                />
                <FormInformationSection showWhen={showOldTimerMessage}>
                    Wow. You must have been part of the founding group!
                </FormInformationSection>
                <RadioButtonField
                    name="howDidYouFindThisService"
                    label="How did you discover Christ Church Mayfair?"
                    contextualHelp={"Optional."}
                    validation={{ required: "This is a required field" }}
                    allowOther={true}
                    otherInputLabel="Another Way"
                    otherOptionName="Another Way"
                    options={[
                        {
                            id: "foundItOnTheInternet",
                            name: "Found via the internet",
                        },
                        {
                            id: "recommendedByAFriend",
                            name: "Friend's Recommendation",
                        },
                        {
                            id: "recommendedByAnotherChurch",
                            name: "Other Church's Recommendation",
                        },
                        {
                            id: "recommendedByMyCU",
                            name: "CU Recommendation",
                        },
                        {
                            id: "HereFromTheStart",
                            name: "Here From The Start!",
                        },
                    ]}
                />
                {/* <CheckBoxField
                    name="otherCCMEvents"
                    label="Have you attended other CCM events in the past week?"
                    contextualHelp={
                        "Select one. DG includes DG central, Student DG, DG Daytime, DG@Home"
                    }
                    validation={{ required: "This is a required field" }}
                    options={[
                        {
                            id: "dg",
                            label: "DG (Discipleship Group)",
                            defaultValue: false,
                        },
                        {
                            id: "PTS",
                            label: "PTS (Prepared To Serve)",
                            defaultValue: false,
                        },
                        {
                            id: "honestQuestions",
                            label: "Honest Questions",
                            defaultValue: false,
                        },
                    ]}
                    allowOther={true}
                    otherInputLabel="Event Name"
                    otherOptionName="Other CCM Event"
                /> */}
            </Form>
            {surveyFormState !== "submitted" ? (
                <Section id="notes" colorScheme="light">
                    <article
                        dangerouslySetInnerHTML={{
                            __html: data.notes?.html ?? "No Content!",
                        }}
                    />
                </Section>
            ) : null}
        </Layout>
    )
}

export default SurveyPage
