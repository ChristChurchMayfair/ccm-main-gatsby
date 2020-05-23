import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useForm } from "react-hook-form"
import classNames from "classnames"

import Layout from "../components/layout"
import formStyles from "../components/form.module.scss"

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
    retrospectivelyReclaimGiftAidForFourYears: "1656623006",
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
    regularGiftCommencementDate?: string
    thisGiftIsEligibleForGiftAid: boolean
    allFutureGiftsAreEligibleForGiftAid: boolean
    retrospectivelyReclaimGiftAidForFourYears: boolean
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
            giftFormData.regularGiftCommencementDate
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
            giftFormData.retrospectivelyReclaimGiftAidForFourYears
                ? "true"
                : "false"
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
    const [submissionError, setSubmissionError] = useState(undefined)

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
        }
    `)

    const { register, handleSubmit, watch, errors } = useForm<GiftFormData>()

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
    const [showRegularGivingInputs, setShowRegularGivingInputs] = useState(
        false
    )
    useEffect(() => {
        setShowRegularGivingInputs(
            giftType === "Standing Order" || giftType === "Give as you earn"
        )
    }, [giftType])

    const regularGiftFrequency = watch("regularGiftFrequency")
    const [showOtherFrequencyInput, setShowOtherFrequencyInput] = useState(
        false
    )
    useEffect(() => {
        setShowOtherFrequencyInput(regularGiftFrequency === "other")
    }, [regularGiftFrequency])

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
                        <h3>Mandatory Contact Information</h3>
                        <p>
                            We need this information to help us claim gift aid
                            for your donations.
                        </p>
                        <div>
                            <h3>Name</h3>
                            <div className="name">
                                <div className={formStyles.formItemSingle}>
                                    <label className={formStyles.formItemLabel}>
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        className={classNames(
                                            formStyles.title,
                                            formStyles.formItemInput
                                        )}
                                        placeholder={"Title"}
                                        ref={register}
                                        autoComplete={"honorific-prefix"}
                                    />
                                </div>
                                <div className={formStyles.formItemSingle}>
                                    <label className={formStyles.formItemLabel}>
                                        Given Name
                                    </label>
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
                                </div>
                                <div className={formStyles.formItemSingle}>
                                    <label className={formStyles.formItemLabel}>
                                        Family Name
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        ref={register({ required: true })}
                                        className={classNames(
                                            formStyles.forname,
                                            formStyles.formItemInput
                                        )}
                                        placeholder={"Family Name"}
                                        autoComplete={"family-name"}
                                    />
                                </div>
                            </div>
                            <div className="contact">
                                <h3>Address</h3>
                                <div className="address">
                                    <div className={formStyles.formItemSingle}>
                                        <label
                                            className={formStyles.formItemLabel}
                                        >
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            name="streetAddress"
                                            ref={register({ required: true })}
                                            className={formStyles.formItemInput}
                                            placeholder={"Street Address"}
                                            autoComplete={"street-address"}
                                        />
                                    </div>
                                    <div className={formStyles.formItemSingle}>
                                        <label
                                            className={formStyles.formItemLabel}
                                        >
                                            Extra Address Info.
                                        </label>
                                        <input
                                            type="text"
                                            name="extraAddressLine"
                                            ref={register}
                                            className={formStyles.formItemInput}
                                            placeholder={"Street Address"}
                                            autoComplete={"address-line1"}
                                        />
                                    </div>
                                    <div className={formStyles.formItemSingle}>
                                        <label
                                            className={formStyles.formItemLabel}
                                        >
                                            Town or City
                                        </label>
                                        <input
                                            type="text"
                                            name="townCity"
                                            ref={register({ required: true })}
                                            className={formStyles.formItemInput}
                                            placeholder={"Town/City"}
                                            autoComplete={"address-level1"}
                                        />
                                    </div>
                                    <div className={formStyles.formItemSingle}>
                                        <label
                                            className={formStyles.formItemLabel}
                                        >
                                            Post Code
                                        </label>
                                        <input
                                            type="text"
                                            name="postCode"
                                            ref={register({ required: true })}
                                            className={formStyles.formItemInput}
                                            placeholder={"Post Code"}
                                            autoComplete={"postal-code"}
                                        />
                                    </div>
                                </div>
                                <h3>Optional Contact Information</h3>
                                <p>
                                    We may use this information to contact you
                                    in case we have any questions.
                                </p>
                                <div className={formStyles.formItemSingle}>
                                    <label className={formStyles.formItemLabel}>
                                        Telephone Number
                                    </label>
                                    <input
                                        type="text"
                                        className={formStyles.formItemInput}
                                        placeholder={
                                            "Telephone (mobile/daytime)"
                                        }
                                        autoComplete="tel"
                                        name="telephoneNumber"
                                        ref={register}
                                    />
                                </div>
                                <div className={formStyles.formItemSingle}>
                                    <label className={formStyles.formItemLabel}>
                                        Email Address
                                    </label>
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
                                    {errors.emailAddress !== undefined &&
                                        errors.emailAddress.type ===
                                            "pattern" && (
                                            <div
                                                className={
                                                    formStyles.formItemError
                                                }
                                            >
                                                Please enter a valid email
                                                address.
                                            </div>
                                        )}
                                </div>
                            </div>
                            <div>
                                <h2>Gift Details</h2>
                                <div>
                                    Our account details for BACS transfers or
                                    standing orders are:
                                    <div className={formStyles.accountDetails}>
                                        <div
                                            className={
                                                formStyles.accountDetailLabel
                                            }
                                        >
                                            Account Number
                                        </div>
                                        <div
                                            className={
                                                formStyles.accountDetailInfo
                                            }
                                        >
                                            00099436
                                        </div>
                                    </div>
                                    <div className={formStyles.accountDetails}>
                                        <div
                                            className={
                                                formStyles.accountDetailLabel
                                            }
                                        >
                                            Sort Code
                                        </div>
                                        <div
                                            className={
                                                formStyles.accountDetailInfo
                                            }
                                        >
                                            40-52-40
                                        </div>
                                    </div>
                                </div>
                                <div className={formStyles.formItemSingle}>
                                    <label className={formStyles.formItemLabel}>
                                        Gift Amount in GBP
                                    </label>
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
                                    {errors.giftAmountInGBP !== undefined &&
                                        errors.giftAmountInGBP.type ===
                                            "pattern" && (
                                            <div className={formStyles.error}>
                                                Please enter a valid gift
                                                amount. Non negative. Maximum
                                                two decimal places.
                                            </div>
                                        )}
                                </div>
                                <div
                                    className={
                                        formStyles.formItemMultipleChoice
                                    }
                                >
                                    <label className={formStyles.formItemLabel}>
                                        Gift Type
                                    </label>
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
                                                One Off
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
                                </div>
                                {showRegularGivingInputs ? (
                                    <div>
                                        <div
                                            className={
                                                formStyles.formItemSingle
                                            }
                                        >
                                            <label
                                                className={
                                                    formStyles.formItemLabel
                                                }
                                            >
                                                Gift Frequency
                                            </label>
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
                                        </div>
                                        {showOtherFrequencyInput ? (
                                            <div
                                                className={
                                                    formStyles.formItemSingle
                                                }
                                            >
                                                <label
                                                    className={
                                                        formStyles.formItemLabel
                                                    }
                                                >
                                                    Commencing from
                                                </label>
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
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        <div
                                            className={
                                                formStyles.formItemSingle
                                            }
                                        >
                                            <label
                                                className={
                                                    formStyles.formItemLabel
                                                }
                                            >
                                                Commencing from
                                            </label>
                                            <input
                                                className={
                                                    formStyles.formItemInput
                                                }
                                                type="date"
                                                placeholder={"yyyy-mm-dd"}
                                                name="regularGiftCommencementDate"
                                                ref={register({
                                                    pattern: datePattern,
                                                })}
                                            />
                                            {errors.regularGiftCommencementDate !==
                                                undefined &&
                                                errors
                                                    .regularGiftCommencementDate
                                                    .type === "pattern" && (
                                                    <div className="error">
                                                        Your must enter a valid
                                                        date of the form{" "}
                                                        {datePattern.toString()}
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                ) : (
                                    <> </>
                                )}
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
                                    <p>
                                        I am a UK taxpayer and understand that
                                        if I pay less Income Tax and/or Capital
                                        Gains Tax than the amount of Gift Aid
                                        claimed on all my donations in that tax
                                        year it is my responsibility to pay any
                                        difference.
                                    </p>
                                </div>
                                <div
                                    className={
                                        formStyles.formItemMultipleChoice
                                    }
                                >
                                    <div className={formStyles.formItemLabel}>
                                        Please select all that apply:
                                    </div>
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
                                                name="retrospectivelyReclaimGiftAidForFourYears"
                                                id="retrospectivelyReclaimGiftAidForFourYears"
                                                ref={register}
                                            />
                                            <label
                                                htmlFor="retrospectivelyReclaimGiftAidForFourYears"
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
                                </div>
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
                    <div>
                        <h2>Notes</h2>
                        <ol>
                            <li>
                                Please notify the{" "}
                                <a href="mailto:treasurer@christchurchmayfair.org">
                                    Treasurer
                                </a>{" "}
                                if you:
                                <ul>
                                    <li>Want to cancel this declaration</li>
                                    <li>Change your name or home address</li>
                                    <li>
                                        No longer pay sufficient tax on your
                                        income and/or capital gains. Gift Aid is
                                        linked to basic rate tax, currently 20%,
                                        which allows charities to reclaim 25p
                                        for every £1 donated.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                If you pay Income Tax at the higher or
                                additional rate and want to receive the
                                additional tax relief due to you, you must
                                include all your Gift Aid donations on your
                                Self-Assessment tax return or ask HM Revenue and
                                Customs to adjust your tax code.
                            </li>
                        </ol>
                    </div>
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
                    {submissionError !== undefined
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
