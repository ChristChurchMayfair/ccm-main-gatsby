import React, { useState, ReactElement, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useForm, Controller } from "react-hook-form"
import classNames from "classnames"
import DatePicker from "react-datepicker"
import { format } from "date-fns"
// @ts-ignore
import datepickerCssUrl from "!file-loader!react-datepicker/dist/react-datepicker.min.css"
import queryString from "query-string"

import Layout from "../components/layout"
import formStyles from "../components/form.module.scss"
import Field from "../components/field"
import Section from "../components/section"
import HeaderUnderlay from "../components/header-underlay"
import SectionText from "../components/section-text"
import LazyLoadCss from "../components/lazy-load-css"

const devWarning = (
    <div className={formStyles.developmentWarning}>
        <em>
            Warning - this form currently submits to a Google Spreadsheet owned
            by{" "}
            <a href="mailto:tom.duckering@gmail.com">tom.duckering@gmail.com</a>{" "}
            and is only for test purposes. Please do not submit any data that
            you do not wish him to see!
        </em>
    </div>
)

type FormConfig = {
    googleFormId: string
    fieldNameToEntryId: {
        givenName: string
        familyName: string
        streetAddress: string
        extraAddressLine: string
        townCity: string
        postCode: string
        telephoneNumber: string
        emailAddress: string
        giftAmountInGBP: string
        giftType: string
        regularGiftFrequency: string
        regularGiftCommencementDate: string
        thisGiftIsEligibleForGiftAid: string
        allFutureGiftsAreEligibleForGiftAid: string
        retrospectivelyReclaimGiftAid: string
        retrospectiveGiftAidClaimStartDate: string
    }
    warning: ReactElement | null
}

const config: { [configName: string]: FormConfig } = {
    production: {
        googleFormId:
            "1FAIpQLSeED6ffZVCYFG5amGWUtTGWkr8EI-rbPO2i_f-z0Ur6XvTNTw",
        fieldNameToEntryId: {
            givenName: "403087895",
            familyName: "383939029",
            streetAddress: "2131927972",
            extraAddressLine: "54229700",
            townCity: "1247583245",
            postCode: "524386314",
            telephoneNumber: "899696842",
            emailAddress: "1518406431",
            giftAmountInGBP: "710981495",
            giftType: "1615869123",
            regularGiftFrequency: "2138441357",
            regularGiftCommencementDate: "825676099",
            thisGiftIsEligibleForGiftAid: "567316447",
            allFutureGiftsAreEligibleForGiftAid: "518456171",
            retrospectivelyReclaimGiftAid: "1656623006",
            retrospectiveGiftAidClaimStartDate: "546486386",
        },
        warning: null,
    },
    development: {
        googleFormId:
            "1FAIpQLSc5aNC3Kfax5kWBRTzQrhuJBehMrQPnwkugkv17k3MeMNtfcQ",
        fieldNameToEntryId: {
            givenName: "1341689296",
            familyName: "2098486112",
            streetAddress: "1905441603",
            extraAddressLine: "517339018",
            townCity: "300162044",
            postCode: "1869992928",
            telephoneNumber: "1892238525",
            emailAddress: "163193888",
            giftAmountInGBP: "1940242436",
            giftType: "482226407",
            regularGiftFrequency: "876322395",
            regularGiftCommencementDate: "1395887961",
            thisGiftIsEligibleForGiftAid: "1683708464",
            allFutureGiftsAreEligibleForGiftAid: "1965645277",
            retrospectivelyReclaimGiftAid: "633586953",
            retrospectiveGiftAidClaimStartDate: "1572694217",
        },
        warning: devWarning,
    },
}

const configName = process.env.GATSBY_GIVING_FORM_CONFIG
const formConfig = config[configName!] // want to die if this not set properly

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
    otherRegularGiftRequency: string
    regularGiftCommencementDate: Date | null
    thisGiftIsEligibleForGiftAid: boolean
    allFutureGiftsAreEligibleForGiftAid: boolean
    retrospectivelyReclaimGiftAid: boolean
    retrospectiveGiftAidClaimStartDate: Date | null
}

const emailAddressPattern = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

function convertNameToQueryParamName(
    fieldName: string,
    lookup: { [fieldName: string]: string }
) {
    return `entry.${lookup[fieldName]}`
}

function convertPayloadToGoogleFormUrl(
    giftFormData: GiftFormData,
    formId: string,
    lookup: { [fieldName: string]: string }
): string {
    const googleFormsDateFormat = "yyyy-MM-dd"

    const options: { [key: string]: string | null } = {}

    options[convertNameToQueryParamName("givenName", lookup)] =
        giftFormData.givenName
    options[convertNameToQueryParamName("familyName", lookup)] =
        giftFormData.familyName
    options[convertNameToQueryParamName("streetAddress", lookup)] =
        giftFormData.streetAddress
    options[convertNameToQueryParamName("extraAddressLine", lookup)] =
        giftFormData.extraAddressLine
    options[convertNameToQueryParamName("townCity", lookup)] =
        giftFormData.townCity
    options[convertNameToQueryParamName("postCode", lookup)] =
        giftFormData.postCode
    options[convertNameToQueryParamName("telephoneNumber", lookup)] =
        giftFormData.telephoneNumber
    options[convertNameToQueryParamName("emailAddress", lookup)] =
        giftFormData.emailAddress
    options[
        convertNameToQueryParamName("giftAmountInGBP", lookup)
    ] = giftFormData.giftAmountInGBP.toString()
    options[convertNameToQueryParamName("giftType", lookup)] =
        giftFormData.giftType
    options[convertNameToQueryParamName("regularGiftFrequency", lookup)] =
        giftFormData.regularGiftFrequency != null &&
        giftFormData.regularGiftFrequency === "other"
            ? giftFormData.otherRegularGiftRequency
            : giftFormData.regularGiftFrequency ?? ""
    options[
        convertNameToQueryParamName("regularGiftCommencementDate", lookup)
    ] =
        giftFormData.regularGiftCommencementDate != null
            ? format(
                  giftFormData.regularGiftCommencementDate,
                  googleFormsDateFormat
              )
            : null
    options[
        convertNameToQueryParamName("thisGiftIsEligibleForGiftAid", lookup)
    ] = giftFormData.thisGiftIsEligibleForGiftAid.toString()
    options[
        convertNameToQueryParamName(
            "allFutureGiftsAreEligibleForGiftAid",
            lookup
        )
    ] = giftFormData.allFutureGiftsAreEligibleForGiftAid.toString()
    options[
        convertNameToQueryParamName("retrospectivelyReclaimGiftAid", lookup)
    ] = giftFormData.retrospectivelyReclaimGiftAid.toString()
    options[
        convertNameToQueryParamName(
            "retrospectiveGiftAidClaimStartDate",
            lookup
        )
    ] =
        giftFormData.retrospectiveGiftAidClaimStartDate != null
            ? format(
                  giftFormData.retrospectiveGiftAidClaimStartDate,
                  googleFormsDateFormat
              )
            : null
    options["submit"] = "SUBMIT"

    const baseUrl = "https://docs.google.com/forms/d/e/"
    const url = queryString.stringifyUrl(
        { url: baseUrl + formId + "/formResponse", query: options },
        { skipNull: true }
    )

    return url
}

type PageState = "filling" | "submitting" | "submitted" | "error" | "badconfig"

const GivingFormPage: React.FC = () => {
    const [formState, setPageState] = useState<PageState>("filling")

    const data = useStaticQuery<GatsbyTypes.GivingFormQuery>(graphql`
        query GivingForm {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/givingform/main.md$/" }
            ) {
                html
                frontmatter {
                    title
                    headerColour
                }
            }
            notes: markdownRemark(
                fileAbsolutePath: { regex: "/givingform/notes.md$/" }
            ) {
                html
            }
        }
    `)

    useEffect(() => {
        if (formConfig == null) {
            setPageState("badconfig")
        }
    })

    const { register, handleSubmit, watch, errors, control } = useForm<
        GiftFormData
    >()

    const postDataToGoogleFormApi = (data: GiftFormData) => {
        const googleSubmitFormUrl = convertPayloadToGoogleFormUrl(
            data,
            formConfig.googleFormId,
            formConfig.fieldNameToEntryId
        )
        setPageState("submitting")
        fetch(googleSubmitFormUrl, {
            method: "POST",
            mode: "no-cors",
            redirect: "follow",
            referrer: "no-referrer",
        })
            .then(() => {
                setPageState("submitted")
            })
            .catch(() => {
                setPageState("error")
            })
    }

    const giftType = watch("giftType")
    const showRegularGivingInputs =
        giftType === "Standing Order" || giftType === "Give as you earn"

    const regularGiftFrequency = watch("regularGiftFrequency")

    const showOtherFrequencyInput = regularGiftFrequency === "other"

    const retrospectivelyReclaimGiftAid = watch("retrospectivelyReclaimGiftAid")
    const showRetrospectiveGiftAidDatePicker = retrospectivelyReclaimGiftAid

    const form = (
        <Section>
            <LazyLoadCss url={datepickerCssUrl} />
            <article>
                {formConfig?.warning ?? null}
                <div className={formStyles.givingForm}>
                    <form
                        onSubmit={handleSubmit(postDataToGoogleFormApi)}
                        method="post"
                        className="validate"
                        target="_blank"
                        noValidate={false}
                    >
                        <h2>Information About You</h2>
                        <div className={formStyles.sectionInfo}>
                            We need this information to help us claim gift aid
                            for your donations.
                        </div>
                        <div>
                            <h3>Name</h3>
                            <Field
                                labelText="Given Name"
                                labelFor="givenName"
                                contextualHelp="Required"
                                error={errors?.givenName?.message}
                            >
                                <input
                                    type="text"
                                    name="givenName"
                                    id="givenName"
                                    className={classNames(
                                        formStyles.forname,
                                        formStyles.formItemInput
                                    )}
                                    placeholder="Given Name"
                                    ref={register({
                                        required:
                                            "You must provide a given name.",
                                    })}
                                    autoComplete="given-name"
                                />
                            </Field>
                            <Field
                                labelText="Family Name"
                                labelFor="familyName"
                                contextualHelp="Required"
                                error={errors?.familyName?.message}
                            >
                                <input
                                    type="text"
                                    name="familyName"
                                    id="familyName"
                                    ref={register({
                                        required:
                                            "You must provide a family name.",
                                    })}
                                    className={classNames(
                                        formStyles.forname,
                                        formStyles.formItemInput
                                    )}
                                    placeholder="Family Name"
                                    autoComplete="family-name"
                                />
                            </Field>

                            <h3>Home Address</h3>
                            <div className="address">
                                <Field
                                    labelText="Street Address"
                                    labelFor="streetAddress"
                                    contextualHelp="Required"
                                    error={errors?.streetAddress?.message}
                                >
                                    <input
                                        type="text"
                                        name="streetAddress"
                                        id="streetAddress"
                                        ref={register({
                                            required:
                                                "You must provide a street address.",
                                        })}
                                        className={formStyles.formItemInput}
                                        placeholder="Street Address"
                                        autoComplete="street-address"
                                    />
                                </Field>
                                <Field
                                    labelText="Extra Address Info"
                                    labelFor="extraAddressLine"
                                    contextualHelp="Optional. Flat No. etc"
                                    error={errors?.extraAddressLine?.message}
                                >
                                    <input
                                        type="text"
                                        name="extraAddressLine"
                                        id="extraAddressLine"
                                        ref={register}
                                        className={formStyles.formItemInput}
                                        placeholder="Extra Address info"
                                        autoComplete="address-line1"
                                    />
                                </Field>
                                <Field
                                    labelText="Town or City"
                                    labelFor="townCity"
                                    contextualHelp="Required"
                                    error={errors?.townCity?.message}
                                >
                                    <input
                                        type="text"
                                        name="townCity"
                                        id="townCity"
                                        ref={register({
                                            required:
                                                "You must provide a town or city.",
                                        })}
                                        className={formStyles.formItemInput}
                                        placeholder="Town/City"
                                        autoComplete="address-level1"
                                    />
                                </Field>
                                <Field
                                    labelText="Post Code"
                                    contextualHelp="Required"
                                    labelFor="postCode"
                                    error={errors?.postCode?.message}
                                >
                                    <input
                                        type="text"
                                        name="postCode"
                                        id="postCode"
                                        ref={register({
                                            required:
                                                "You must enter a postcode.",
                                        })}
                                        className={formStyles.formItemInput}
                                        placeholder="Post Code"
                                        autoComplete="postal-code"
                                    />
                                </Field>
                                <Field
                                    labelText="Country"
                                    contextualHelp="We only support declarations for residents of the UK. See Notes below."
                                    error={undefined}
                                    className={formStyles.hideOnMobile}
                                >
                                    <div
                                        className={formStyles.accountDetailInfo}
                                    >
                                        United Kingdom
                                    </div>
                                </Field>
                            </div>
                            <h3>Contact Information</h3>
                            <div className={formStyles.sectionInfo}>
                                In case we need to contact you with a query,
                                please provide either an email address or
                                telephone number.
                            </div>
                            <Field
                                labelText="Telephone Number"
                                labelFor="telephoneNumber"
                                contextualHelp="Optional. A daytime or mobile number"
                                error={errors?.telephoneNumber?.message}
                            >
                                <input
                                    type="text"
                                    className={formStyles.formItemInput}
                                    placeholder="Telephone Number"
                                    autoComplete="tel"
                                    name="telephoneNumber"
                                    id="telephoneNumber"
                                    ref={register}
                                />
                            </Field>
                            <Field
                                labelText="Email Address"
                                contextualHelp="Optional"
                                labelFor="emailAddress"
                                error={errors.emailAddress?.message}
                            >
                                <input
                                    type="text"
                                    className={formStyles.formItemInput}
                                    placeholder="Email Address"
                                    autoComplete="email"
                                    name="emailAddress"
                                    id="emailAddress"
                                    ref={register({
                                        pattern: {
                                            value: emailAddressPattern,
                                            message:
                                                "Please enter a valid email address.",
                                        },
                                    })}
                                />
                            </Field>
                            <h2>Gift Details</h2>
                            <div className={formStyles.sectionInfo}>
                                Tell us about your gift.
                            </div>
                            <Field
                                labelText="Gift Amount"
                                labelFor="giftAmountInGBP"
                                contextualHelp="In GBP. Find our bank account details in the Notes below."
                                error={errors.giftAmountInGBP?.message}
                            >
                                <input
                                    type="text"
                                    className={formStyles.formItemInput}
                                    placeholder="Gift amount in £"
                                    name="giftAmountInGBP"
                                    id="giftAmountInGBP"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message:
                                                "You must provide a gift amount.",
                                        },
                                        validate: {
                                            mustBeGBPOrPlainNumber: (
                                                value: string
                                            ) =>
                                                value.startsWith("£") ||
                                                !isNaN(parseFloat(value)) ||
                                                "The value must be GBP",
                                            positive: (value: string) =>
                                                parseFloat(
                                                    value.replace(/^£/, "")
                                                ) > 0.0 ||
                                                "The gift must be a positive number.",
                                            maxTwoDecimalPlaces: (
                                                value: string
                                            ) =>
                                                !value.includes(".") ||
                                                value.split(".")[1].length <=
                                                    2 ||
                                                "The gift must have, at most, two decimal places",
                                        },
                                    })}
                                />
                            </Field>
                            <Field
                                labelText="Gift Type"
                                contextualHelp="Required. Select one."
                                error={errors.giftType?.message}
                            >
                                <div
                                    className={
                                        formStyles.formItemMultipleChoiceChoices
                                    }
                                >
                                    <div>
                                        <input
                                            type="radio"
                                            id="oneoff"
                                            value="One Off"
                                            name="giftType"
                                            ref={register({
                                                required: true,
                                            })}
                                        />
                                        <label
                                            htmlFor="oneoff"
                                            className={classNames(
                                                formStyles.detailLabel,
                                                formStyles.selectableButton
                                            )}
                                        >
                                            One-Off
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="standingorder"
                                            value="Standing Order"
                                            name="giftType"
                                            ref={register}
                                        />
                                        <label
                                            htmlFor="standingorder"
                                            className={classNames(
                                                formStyles.detailLabel,
                                                formStyles.selectableButton
                                            )}
                                        >
                                            Standing Order
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="gaye"
                                            name="giftType"
                                            ref={register({
                                                required:
                                                    "You must select a gift type.",
                                            })}
                                            value="Give as you earn"
                                        />
                                        <label
                                            htmlFor="gaye"
                                            className={classNames(
                                                formStyles.detailLabel,
                                                formStyles.selectableButton
                                            )}
                                        >
                                            Give-As-You-Earn (GAYE)
                                        </label>
                                    </div>
                                </div>
                            </Field>
                            {showRegularGivingInputs ? (
                                <div>
                                    <Field
                                        labelText="Gift Frequency"
                                        contextualHelp="Required."
                                        error={
                                            errors?.regularGiftFrequency
                                                ?.message
                                        }
                                    >
                                        <select
                                            className={formStyles.formItemInput}
                                            name="regularGiftFrequency"
                                            id="regularGiftFrequency"
                                            ref={register({
                                                required: true,
                                            })}
                                        >
                                            <option value="weekly">
                                                Weekly
                                            </option>
                                            <option value="monthly">
                                                Monthly
                                            </option>
                                            <option value="quarterly">
                                                Quarterly
                                            </option>
                                            <option value="annually">
                                                Annually
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </Field>
                                    {showOtherFrequencyInput ? (
                                        <Field
                                            labelText="Frequency"
                                            labelFor="otherRegularGiftRequency"
                                            contextualHelp="Required."
                                            error={
                                                errors?.otherRegularGiftRequency
                                                    ?.message
                                            }
                                        >
                                            <input
                                                type="text"
                                                className={
                                                    formStyles.formItemInput
                                                }
                                                placeholder="Other Frequency"
                                                name="otherRegularGiftRequency"
                                                id="otherRegularGiftRequency"
                                                ref={register({
                                                    required:
                                                        'You must provide an "other" frequency or select a different frequency.',
                                                })}
                                            />
                                        </Field>
                                    ) : null}
                                    <Field
                                        labelText="Commencing from"
                                        labelFor="regularGiftCommencementDate"
                                        contextualHelp="Required. The date from which your regular giving began."
                                        error={
                                            errors.regularGiftCommencementDate
                                                ?.message
                                        }
                                    >
                                        <Controller
                                            as={DatePicker}
                                            control={control}
                                            calendarClassName={classNames(
                                                formStyles.datePicker
                                            )}
                                            className={formStyles.dateInput}
                                            dateFormat="yyyy-MM-dd"
                                            valueName="selected"
                                            onChange={([selected]) => selected}
                                            name="regularGiftCommencementDate"
                                            id="regularGiftCommencementDate"
                                            placeholderText="Select date"
                                            rules={{
                                                required:
                                                    "You must provide a date.",
                                            }}
                                        />
                                    </Field>
                                </div>
                            ) : null}
                            <h2>Gift Aid</h2>
                            <div className={formStyles.sectionInfo}>
                                If you are a UK taxpayer and eligible to Gift
                                Aid your donation, please complete the
                                declaration below. This will increase your gift
                                by 25p for every £1 given at no extra cost to
                                you or us. Thank you.
                            </div>
                            <h3>Your Declaration</h3>
                            <div className={formStyles.declaration}>
                                I am a UK taxpayer and understand that if I pay
                                less Income Tax and/or Capital Gains Tax than
                                the amount of Gift Aid claimed on all my
                                donations in that tax year it is my
                                responsibility to pay any difference.
                            </div>
                            <Field
                                labelText="On which of your gifts should we claim Gift Aid?"
                                contextualHelp="Please select all that apply:"
                                error={
                                    errors?.thisGiftIsEligibleForGiftAid
                                        ?.message
                                }
                            >
                                <div
                                    className={
                                        formStyles.formItemMultipleChoiceChoices
                                    }
                                >
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="thisGiftIsEligibleForGiftAid"
                                            id="thisGiftIsEligibleForGiftAid"
                                            ref={register}
                                        />
                                        <label
                                            htmlFor="thisGiftIsEligibleForGiftAid"
                                            className={classNames(
                                                formStyles.detailLabel,
                                                formStyles.selectableButton
                                            )}
                                        >
                                            Claim Gift Aid On{" "}
                                            <strong>This</strong> Gift
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            name="allFutureGiftsAreEligibleForGiftAid"
                                            id="allFutureGiftsAreEligibleForGiftAid"
                                            ref={register}
                                        />
                                        <label
                                            htmlFor="allFutureGiftsAreEligibleForGiftAid"
                                            className={classNames(
                                                formStyles.detailLabel,
                                                formStyles.selectableButton,
                                                "button"
                                            )}
                                        >
                                            Claim Gift Aid On{" "}
                                            <strong>Future</strong> Gifts
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            name="retrospectivelyReclaimGiftAid"
                                            id="retrospectivelyReclaimGiftAid"
                                            ref={register}
                                        />
                                        <label
                                            htmlFor="retrospectivelyReclaimGiftAid"
                                            className={classNames(
                                                formStyles.detailLabel,
                                                formStyles.selectableButton,
                                                "button"
                                            )}
                                        >
                                            Claim Gift Aid On{" "}
                                            <strong>Previous</strong> Gifts
                                        </label>
                                    </div>
                                </div>
                            </Field>
                            {showRetrospectiveGiftAidDatePicker ? (
                                <Field
                                    labelText="Claim Gift Aid back to"
                                    labelFor="retrospectiveGiftAidClaimStartDate"
                                    error={
                                        errors
                                            .retrospectiveGiftAidClaimStartDate
                                            ?.message
                                    }
                                    contextualHelp="Required. How far back can we retrospectively claim gift aid for your previous gifts?"
                                >
                                    <Controller
                                        as={DatePicker}
                                        control={control}
                                        wrapperClassName={classNames(
                                            formStyles.formItemInput
                                        )}
                                        className={formStyles.dateInput}
                                        dateFormat="yyyy-MM-dd"
                                        maxDate={new Date()} //Can't select beyond today
                                        valueName="selected" // DateSelect value's name is selected
                                        onChange={([selected]) => selected}
                                        name="retrospectiveGiftAidClaimStartDate"
                                        id="retrospectiveGiftAidClaimStartDate"
                                        placeholderText="Select date"
                                        rules={{
                                            required:
                                                "You must provide a date.",
                                        }}
                                    />
                                </Field>
                            ) : null}
                        </div>
                        <Field error={undefined}>
                            <input
                                type="submit"
                                value={
                                    formState === "submitting"
                                        ? "Submitting..."
                                        : "Submit"
                                }
                                name="submit"
                                id="submit"
                                className={classNames(
                                    formStyles.submitButton,
                                    "button"
                                )}
                                disabled={formState === "submitting"}
                            />
                            {formState === "error" && (
                                <div className={formStyles.formSubmissionError}>
                                    There was an error submitting the form.
                                    Please try again and if the problem persists
                                    contact the technical help as listed in the
                                    Notes section at the bottom of the page.
                                </div>
                            )}
                        </Field>
                    </form>
                </div>
            </article>
        </Section>
    )

    const submitted = (
        <Section>
            <article>
                <h2>Giving Form Submitted</h2>
                <p>Your information was submitted successfully. Thank you.</p>
                <p>
                    If you wish to submit this form again, please refresh or
                    reload the page.
                </p>
            </article>
        </Section>
    )

    const badlyConfiguredForm = (
        <Section>
            <article>
                <h2>Form Configuration Error</h2>
                <p>Sorry. There is a problem with the form configuration.</p>
                <p>
                    The config name is:{" "}
                    <code>
                        {process.env.GATSBY_GIVING_FORM_CONFIG ?? "undefined"}
                    </code>
                </p>
                <p>
                    Please inform the technical contact listed at the bottom of
                    this page.
                </p>
            </article>
        </Section>
    )

    return (
        <Layout
            title="Giving Form"
            headerColour={data.mainInfo!.frontmatter!.headerColour}
        >
            <HeaderUnderlay />
            <Section intro wider dark className="intro wider dark">
                <SectionText
                    intro
                    dark
                    dangerouslySetInnerHTML={{
                        __html: data.mainInfo?.html ?? "No Content!",
                    }}
                />
            </Section>
            {formState === "badconfig" ? badlyConfiguredForm : null}
            {formState === "submitted" ? submitted : form}
            {formState !== "submitted" ? (
                <Section id="notes">
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

export default GivingFormPage
