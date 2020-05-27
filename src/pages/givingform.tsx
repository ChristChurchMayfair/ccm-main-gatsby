import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useForm, Controller } from "react-hook-form"
import classNames from "classnames"
import DatePicker from "react-datepicker"
import { format } from "date-fns"

import Layout from "../components/layout"
import formStyles from "../components/form.module.scss"
import Field from "../components/field"

const googleFormId = "1FAIpQLSeED6ffZVCYFG5amGWUtTGWkr8EI-rbPO2i_f-z0Ur6XvTNTw"

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
    extraAddressLine?: string
    townCity: string
    postCode: string
    telephoneNumber?: string
    emailAddress?: string
    giftAmountInGBP: number
    giftType: "Standing Order" | "One Off" | "Give as you earn"
    regularGiftFrequency?: string
    otherRegularGiftRequency: string
    regularGiftCommencementDate?: Date
    thisGiftIsEligibleForGiftAid: boolean
    allFutureGiftsAreEligibleForGiftAid: boolean
    retrospectivelyReclaimGiftAid: boolean
    retrospectiveGiftAidClaimStartDate?: Date
}

const emailAddressPattern = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const datePattern = new RegExp(/\d\d\d\d-\d\d-\d\d/)

function encodeStringField(fieldName: string, fieldValue?: string | undefined) {
    if (fieldValue !== undefined) {
        return `entry.${fieldNameToEntryId[fieldName]}=${encodeURI(fieldValue)}`
    } else {
        return undefined
    }
}

function convertPayloadToGoogleFormUrl(
    giftFormData: GiftFormData,
    formId: string
): string {
    const baseUrl = "https://docs.google.com/forms/d/e/"

    const formParts = []
    formParts.push(encodeStringField("title", giftFormData.title))
    formParts.push(encodeStringField("givenName", giftFormData.givenName))
    formParts.push(encodeStringField("familyName", giftFormData.familyName))
    formParts.push(
        encodeStringField("streetAddress", giftFormData.streetAddress)
    )
    formParts.push(
        encodeStringField("extraAddressLine", giftFormData.extraAddressLine)
    )
    formParts.push(encodeStringField("townCity", giftFormData.townCity))
    formParts.push(encodeStringField("postCode", giftFormData.postCode))
    formParts.push(
        encodeStringField("telephoneNumber", giftFormData.telephoneNumber)
    )
    formParts.push(encodeStringField("emailAddress", giftFormData.emailAddress))
    formParts.push(
        encodeStringField(
            "giftAmountInGBP",
            giftFormData.giftAmountInGBP.toString()
        )
    )
    formParts.push(encodeStringField("giftType", giftFormData.giftType))

    formParts.push(
        encodeStringField(
            "regularGiftFrequency",
            giftFormData.regularGiftFrequency !== undefined &&
                giftFormData.regularGiftFrequency === "other"
                ? giftFormData.otherRegularGiftRequency
                : giftFormData.regularGiftFrequency
        )
    )

    formParts.push(
        encodeStringField(
            "regularGiftCommencementDate",
            format(
                giftFormData.regularGiftCommencementDate ?? new Date(),
                "yyyy-MM-dd"
            )
        )
    )

    formParts.push(
        encodeStringField(
            "thisGiftIsEligibleForGiftAid",
            giftFormData.thisGiftIsEligibleForGiftAid ? "true" : "false"
        )
    )

    formParts.push(
        encodeStringField(
            "allFutureGiftsAreEligibleForGiftAid",
            giftFormData.allFutureGiftsAreEligibleForGiftAid ? "true" : "false"
        )
    )

    formParts.push(
        encodeStringField(
            "retrospectivelyReclaimGiftAidForFourYears",
            giftFormData.retrospectivelyReclaimGiftAid ? "true" : "false"
        )
    )

    formParts.push(
        encodeStringField(
            "regularGiftCommencementDate",
            format(
                giftFormData.retrospectiveGiftAidClaimStartDate ?? new Date(),
                "yyyy-MM-dd"
            )
        )
    )

    const url =
        baseUrl +
        formId +
        "/formResponse?" +
        formParts.join("&") +
        "&submit=SUBMIT"

    return url
}

type PageState = "filling" | "submitting" | "submitted" | "error"

const GivingFormPage: React.FC = () => {
    const [pageState, setPageState] = useState<PageState>("filling")
    const [submissionError, setSubmissionError] = useState<Error | undefined>(
        undefined
    )

    const data = useStaticQuery<GatsbyTypes.GivingFormQuery>(graphql`
        query GivingForm {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/givingform.md$/" }
            ) {
                html
                frontmatter {
                    title
                    headerColour
                }
            }
            notes: markdownRemark(
                fileAbsolutePath: { regex: "/givingformnotes.md$/" }
            ) {
                html
            }
        }
    `)

    const { register, handleSubmit, watch, errors, control } = useForm<
        GiftFormData
    >()

    const postDataToGoogleFormApi = (data: GiftFormData) => {
        const googleSubmitFormUrl = convertPayloadToGoogleFormUrl(
            data,
            googleFormId
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
            .catch(error => {
                setSubmissionError(error)
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
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.mainInfo?.html ?? "No Content!",
                    }}
                />
                {developmentWarning}
                <div className={formStyles.givingForm}>
                    <form
                        onSubmit={handleSubmit(postDataToGoogleFormApi)}
                        method="post"
                        className="validate"
                        target="_blank"
                        noValidate={false}
                    >
                        <h3>Contact Information</h3>
                        <p>
                            <em>
                                We need this information to help us claim gift
                                aid for your donations.
                            </em>
                        </p>
                        <div>
                            <h3>Name</h3>
                            <div className="name">
                                <Field
                                    labelText="Title"
                                    labelFor="title"
                                    contextualHelp="Optional. Mr, Mrs, Miss, Dr, Revd, etc"
                                >
                                    <input
                                        type="text"
                                        name="title"
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
                                >
                                    <input
                                        type="text"
                                        name="givenName"
                                        className={classNames(
                                            formStyles.forname,
                                            formStyles.formItemInput
                                        )}
                                        placeholder={"Given Name"}
                                        ref={register({ required: true })}
                                        autoComplete={"given-name"}
                                    />
                                </Field>
                                <Field
                                    labelText="Family Name"
                                    labelFor="familyName"
                                    contextualHelp="Required"
                                >
                                    <input
                                        type="text"
                                        name="familyName"
                                        ref={register({ required: true })}
                                        className={classNames(
                                            formStyles.forname,
                                            formStyles.formItemInput
                                        )}
                                        placeholder="Family Name"
                                        autoComplete="family-name"
                                    />
                                </Field>
                            </div>
                            <div className="contact">
                                <h3>Postal Address</h3>
                                <div className="address">
                                    <Field
                                        labelText="Street Address"
                                        labelFor="streetAddress"
                                        contextualHelp="Required"
                                    >
                                        <input
                                            type="text"
                                            name="streetAddress"
                                            ref={register({ required: true })}
                                            className={formStyles.formItemInput}
                                            placeholder={"Street Address"}
                                            autoComplete={"street-address"}
                                        />
                                    </Field>
                                    <Field
                                        labelText="Extra Address Info"
                                        labelFor="etraAddressLine"
                                        contextualHelp="Optional. Flat No. etc"
                                    >
                                        <input
                                            type="text"
                                            name="extraAddressLine"
                                            ref={register}
                                            className={formStyles.formItemInput}
                                            placeholder="Extra Address info"
                                            autoComplete={"address-line1"}
                                        />
                                    </Field>
                                    <Field
                                        labelText="Town or City"
                                        labelFor="townCity"
                                        contextualHelp="Required"
                                    >
                                        <input
                                            type="text"
                                            name="townCity"
                                            ref={register({ required: true })}
                                            className={formStyles.formItemInput}
                                            placeholder="Town/City"
                                            autoComplete="address-level1"
                                        />
                                    </Field>
                                    <Field
                                        labelText="Post Code"
                                        contextualHelp="Required"
                                        labelFor="postCode"
                                    >
                                        <input
                                            type="text"
                                            name="postCode"
                                            ref={register({ required: true })}
                                            className={formStyles.formItemInput}
                                            placeholder={"Post Code"}
                                            autoComplete={"postal-code"}
                                        />
                                    </Field>
                                </div>
                                <p>
                                    <em>
                                        In case we need to contact you with a
                                        query, please provide either email or
                                        phone number.
                                    </em>
                                </p>
                                <Field
                                    labelText="Telephone Number"
                                    labelFor="telephoneNumber"
                                    contextualHelp="Optional. A daytime or mobile number"
                                >
                                    <input
                                        type="text"
                                        className={formStyles.formItemInput}
                                        placeholder={"Telephone Number"}
                                        autoComplete="tel"
                                        name="telephoneNumber"
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
                                        placeholder={"Email Address"}
                                        autoComplete="email"
                                        name="emailAddress"
                                        ref={register({
                                            pattern: emailAddressPattern,
                                            required: false,
                                        })}
                                    />
                                </Field>
                            </div>
                            <div>
                                <h2>Gift Details</h2>
                                <div>
                                    Our account details for BACS transfers or
                                    standing orders are:
                                    <Field labelText="Account Number">
                                        <div
                                            className={
                                                formStyles.accountDetailInfo
                                            }
                                        >
                                            00099436
                                        </div>
                                    </Field>
                                    <Field labelText="Sort Code">
                                        <div
                                            className={
                                                formStyles.accountDetailInfo
                                            }
                                        >
                                            40-52-40
                                        </div>
                                    </Field>
                                </div>
                                <Field
                                    labelText="Gift Amount"
                                    contextualHelp="In GBP"
                                    error={
                                        errors.giftAmountInGBP !== undefined &&
                                        errors.giftAmountInGBP.type ===
                                            "pattern"
                                            ? "Please enter a valid gift amount. Non negative. Maximum two decimal places."
                                            : undefined
                                    }
                                >
                                    <input
                                        type="text"
                                        className={formStyles.formItemInput}
                                        placeholder={"Gift amount in £"}
                                        name="giftAmountInGBP"
                                        ref={register({
                                            pattern: new RegExp(
                                                /^£?[0-9]*(.[0-9]{0,2})?$/
                                            ),
                                        })}
                                    />
                                </Field>
                                <Field
                                    labelText="Gift Type"
                                    contextualHelp="Required. Select one."
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
                                                ref={register}
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
                                                ref={register}
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
                                        >
                                            <select
                                                className={
                                                    formStyles.formItemInput
                                                }
                                                name="regularGiftFrequency"
                                                ref={register}
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
                                                <option value="other">
                                                    Other
                                                </option>
                                            </select>
                                        </Field>
                                        {showOtherFrequencyInput ? (
                                            <Field
                                                labelText="Frequency"
                                                labelFor="otherRegularGiftRequency"
                                                contextualHelp="Required."
                                            >
                                                <input
                                                    type="text"
                                                    className={
                                                        formStyles.formItemInput
                                                    }
                                                    placeholder={
                                                        "Other Frequency"
                                                    }
                                                    name="otherRegularGiftRequency"
                                                    ref={register}
                                                />
                                            </Field>
                                        ) : null}
                                        <Field
                                            labelText="Commencing from"
                                            labelFor="regularGiftCommencementDate"
                                            contextualHelp="Required."
                                            error={
                                                errors.regularGiftCommencementDate !==
                                                    undefined &&
                                                errors
                                                    .regularGiftCommencementDate
                                                    .type === "pattern"
                                                    ? `You must enter a valid date of the form ${datePattern.toString()}`
                                                    : undefined
                                            }
                                        >
                                            <Controller
                                                as={DatePicker}
                                                control={control}
                                                wrapperClassName={classNames(
                                                    formStyles.formItemInput
                                                    //formStyles.datePicker
                                                )}
                                                dateFormat="yyyy-MM-dd"
                                                // popperClassName={
                                                //     //formStyles.datePicker
                                                // }
                                                // calendarClassName={
                                                //     //formStyles.calendar
                                                // }
                                                valueName="selected" // DateSelect value's name is selected
                                                onChange={([selected]) =>
                                                    selected
                                                }
                                                name="regularGiftCommencementDate"
                                                placeholderText="Select date"
                                            />
                                        </Field>
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <h2>Gift Aid</h2>
                                <div>
                                    <p>
                                        If you are a UK taxpayer and eligible to
                                        Gift Aid your donation, please complete
                                        the declaration below. This will
                                        increase your gift by 25p for every £1
                                        given at no extra cost to you or us.
                                        Thank you.
                                    </p>
                                    <h3>Gift Aid declaration</h3>
                                    <p>You declare that:</p>
                                    <p>
                                        <em>
                                            I am a UK taxpayer and understand
                                            that if I pay less Income Tax and/or
                                            Capital Gains Tax than the amount of
                                            Gift Aid claimed on all my donations
                                            in that tax year it is my
                                            responsibility to pay any
                                            difference.
                                        </em>
                                    </p>
                                </div>
                                <Field labelText="Please select all that apply:">
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
                                                value="My gift is eligible for gift aid"
                                            />
                                            <label
                                                htmlFor="thisGiftIsEligibleForGiftAid"
                                                className={classNames(
                                                    formStyles.detailLabel,
                                                    formStyles.selectableButton
                                                )}
                                            >
                                                My gift is eligible for gift aid
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
                                                Please treat all future
                                                donations
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
                                                Retrospectively claim gift aid
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
                                        contextualHelp="How far back can we retrospectively claim gift aid for your gifts?"
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
                                            placeholderText="Select date"
                                        />
                                    </Field>
                                ) : null}
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            name="submit"
                            className={classNames(
                                formStyles.submitButton,
                                "button"
                            )}
                        />
                    </form>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.notes?.html ?? "No Content!",
                        }}
                    />
                </div>
            </article>
        </section>
    )

    const submitting = (
        <section>
            <article>Your gift infomation is being submitted.</article>
        </section>
    )
    const formSubmissionErrorMessage = (
        <section>
            <article>
                Sorry - there was an error submitting the gift form. If this
                problem persists please contact us.
                <pre>
                    {submissionError != null
                        ? submissionError.toString()
                        : "unable to display the error message"}
                </pre>
            </article>
        </section>
    )
    const submitted = (
        <section>
            <article>Your gift form was submitted successfully.</article>
        </section>
    )

    return (
        <Layout
            title={"Giving Form"}
            headerColour={data.mainInfo!.frontmatter!.headerColour}
        >
            <section className="header-underlay" />
            {pageState === "filling" && form}
            {pageState === "submitting" && submitting}
            {pageState === "submitted" && submitted}
            {pageState === "error" && formSubmissionErrorMessage}
        </Layout>
    )
}

export default GivingFormPage
