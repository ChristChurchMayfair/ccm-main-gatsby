import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useForm, Controller } from "react-hook-form"
import classNames from "classnames"
import DatePicker from "react-datepicker"
import { format } from "date-fns"
import "react-datepicker/dist/react-datepicker.css"
import queryString from "query-string"

import Layout from "../components/layout"
import formStyles from "../components/form.module.scss"
import Field from "../components/field"

const developmentWarning = (
    <div>
        <em>
            Warning - this form currently submits to a CCM GSuite Google
            Spreadsheet owned by{" "}
            <a href="mailto:tom@christchurchmayfair.org">
                tom@christchurchmayfair.org
            </a>{" "}
            and is only for test purposes. Please do not submit any data that
            you do not wish him to see!
        </em>
    </div>
)

const fieldNameToEntryId: { [fieldName: string]: string } = {
    title: "1412836924",
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
}

type GiftFormData = {
    title: string
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

const datePattern = new RegExp(/\d\d\d\d-\d\d-\d\d/)

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

    options[convertNameToQueryParamName("title", lookup)] = giftFormData.title
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

type PageState = "filling" | "submitting" | "submitted" | "error"

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
                    googleFormId
                }
            }
            notes: markdownRemark(
                fileAbsolutePath: { regex: "/givingform/notes.md$/" }
            ) {
                html
            }
        }
    `)

    const { register, handleSubmit, watch, errors, control } = useForm<
        GiftFormData
    >()

    const googleFormId = data.mainInfo!.frontmatter!.googleFormId!

    const postDataToGoogleFormApi = (data: GiftFormData) => {
        const googleSubmitFormUrl = convertPayloadToGoogleFormUrl(
            data,
            googleFormId,
            fieldNameToEntryId
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
        <section>
            <article>
                {developmentWarning}
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
                                labelText="Title"
                                labelFor="title"
                                contextualHelp="Optional. Mr, Mrs, Miss, Dr, Revd, etc"
                                error={errors.title?.message}
                            >
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className={classNames(
                                        formStyles.title,
                                        formStyles.formItemInput
                                    )}
                                    placeholder="Title"
                                    ref={register}
                                    autoComplete="honorific-prefix"
                                />
                            </Field>
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
                                error={
                                    errors.emailAddress !== undefined &&
                                    errors.emailAddress.type === "pattern"
                                        ? "Please enter a valid email address."
                                        : undefined
                                }
                            >
                                <input
                                    type="text"
                                    className={formStyles.formItemInput}
                                    placeholder="Email Address"
                                    autoComplete="email"
                                    name="emailAddress"
                                    id="emailAddress"
                                    ref={register({
                                        pattern: emailAddressPattern,
                                        required: false,
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
                                error={
                                    errors.giftAmountInGBP !== undefined &&
                                    errors.giftAmountInGBP.type === "pattern"
                                        ? "Please enter a valid gift amount. Non negative. Maximum two decimal places."
                                        : undefined
                                }
                            >
                                <input
                                    type="text"
                                    className={formStyles.formItemInput}
                                    placeholder="Gift amount in £"
                                    name="giftAmountInGBP"
                                    id="giftAmountInGBP"
                                    ref={register({
                                        pattern: {
                                            value: new RegExp(
                                                /^£?[0-9]*(.[0-9]{0,2})?$/
                                            ),
                                            message:
                                                "You must provide a positive currency value.",
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
                                                    "Please select a gift type.",
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
                                                ref={register}
                                            />
                                        </Field>
                                    ) : null}
                                    <Field
                                        labelText="Commencing from"
                                        labelFor="regularGiftCommencementDate"
                                        contextualHelp="Required. The date from which your regular giving began."
                                        error={
                                            errors.regularGiftCommencementDate !==
                                                undefined &&
                                            errors.regularGiftCommencementDate
                                                .type === "pattern"
                                                ? `You must enter a valid date of the form ${datePattern.toString()}`
                                                : undefined
                                        }
                                    >
                                        <Controller
                                            as={DatePicker}
                                            control={control}
                                            calendarClassName={classNames(
                                                formStyles.datePicker
                                            )}
                                            dateFormat="yyyy-MM-dd"
                                            valueName="selected"
                                            onChange={([selected]) => selected}
                                            name="regularGiftCommencementDate"
                                            id="regularGiftCommencementDate"
                                            placeholderText="Select date"
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
                                labelText="Please select all that apply:"
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
                                    labelFor="regularGiftCommencementDate"
                                    error={
                                        errors.regularGiftCommencementDate !==
                                            undefined &&
                                        errors.regularGiftCommencementDate
                                            .type === "pattern"
                                            ? `You must enter a valid date of the form ${datePattern.toString()}`
                                            : undefined
                                    }
                                    contextualHelp="Required. How far back can we retrospectively claim gift aid for your previous gifts?"
                                >
                                    <Controller
                                        as={DatePicker}
                                        control={control}
                                        wrapperClassName={classNames(
                                            formStyles.formItemInput
                                        )}
                                        dateFormat="yyyy-MM-dd"
                                        maxDate={new Date()} //Can't select beyond today
                                        valueName="selected" // DateSelect value's name is selected
                                        onChange={([selected]) => selected}
                                        name="retrospectiveGiftAidClaimStartDate"
                                        id="retrospectiveGiftAidClaimStartDate"
                                        placeholderText="Select date"
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
                                    contact the technical help as listed below.
                                </div>
                            )}
                        </Field>
                    </form>
                </div>
            </article>
        </section>
    )

    const submitted = (
        <section>
            <article>
                <p>Your gift form was submitted successfully.</p>
                <p>Thank you.</p>
            </article>
        </section>
    )

    return (
        <Layout
            title="Giving Form"
            headerColour={data.mainInfo!.frontmatter!.headerColour}
        >
            <section className="header-underlay" />
            <section className="intro wider dark">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.mainInfo?.html ?? "No Content!",
                    }}
                />
            </section>
            {formState === "submitted" ? submitted : form}
            <section id="notes">
                <article
                    dangerouslySetInnerHTML={{
                        __html: data.notes?.html ?? "No Content!",
                    }}
                />
            </section>
        </Layout>
    )
}

export default GivingFormPage
