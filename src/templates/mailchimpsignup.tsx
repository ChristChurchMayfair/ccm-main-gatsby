import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeaderUnderlay from "../components/header-underlay"
import Section from "../components/section"

interface Props {
    data: GatsbyTypes.MailchimpSignUpPageQuery
}

export const query = graphql`
    query MailchimpSignUpPage($id: String!) {
        mainInfo: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                hiddenValue
                action
                signupPlaceholder
                askForFirstName
                askForLastName
                askForEmailPermission
                permissionCaption
            }
        }
    }
`

const MailchimpSignUpPage: React.FC<Props> = ({ data }) => {
    var firstNameField = <></>
    if (data.mainInfo!.frontmatter!.askForFirstName) {
        firstNameField = (
            <>
                <input
                    type="text"
                    defaultValue=""
                    name="FNAME"
                    className="firstname"
                    id="mce-FNAME"
                    placeholder={"First name"}
                    required={true}
                />
                <br></br>
            </>
        )
    }

    var lastNameField = <></>
    if (data.mainInfo!.frontmatter!.askForLastName) {
        lastNameField = (
            <>
                <input
                    type="text"
                    defaultValue=""
                    name="LNAME"
                    className="lastname"
                    id="mce-LNAME"
                    placeholder={"Last name"}
                    required={true}
                />
                <br></br>
            </>
        )
    }

    var emailPermissionField = <></>
    if (data.mainInfo!.frontmatter!.askForEmailPermission) {
        emailPermissionField = (
            <>
                <fieldset
                    className="mc_fieldset gdprRequired mc-field-group"
                    name="interestgroup_field"
                >
                    <label className="checkbox subfield" htmlFor="gdpr_44254">
                        <input
                            type="checkbox"
                            id="gdpr_44254"
                            name="gdpr[44254]"
                            value="Y"
                            className="checkbox"
                        />
                        <span>{data.mainInfo?.frontmatter?.permissionCaption}</span>{" "}
                    </label>
                </fieldset>
                <br></br>
            </>
        )
    }

    return (
        <Layout title={data.mainInfo!.frontmatter!.title} headerColour="dark">
            <HeaderUnderlay colorScheme="light" />
            <Section colorScheme="light">
                <article>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.mainInfo?.html ?? "Missing content",
                        }}
                    />
                    <div id="mc_embed_signup">
                        <form
                            action={data.mainInfo?.frontmatter?.action}
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                            noValidate={false}
                        >
                            <div id="mc_embed_signup_scroll">
                                {firstNameField}
                                {lastNameField}
                                <input
                                    type="email"
                                    defaultValue=""
                                    name="EMAIL"
                                    className="email"
                                    id="mce-EMAIL"
                                    placeholder={
                                        data.mainInfo?.frontmatter
                                            ?.signupPlaceholder
                                    }
                                    required={true}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "-5000px",
                                    }}
                                    aria-hidden="true"
                                >
                                    <input
                                        type="text"
                                        name={
                                            data.mainInfo?.frontmatter
                                                ?.hiddenValue
                                        }
                                        tabIndex={-1}
                                        defaultValue=""
                                    />
                                </div>
                                {emailPermissionField}
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                />
                            </div>
                        </form>
                    </div>
                </article>
            </Section>
        </Layout>
    )
}

export default MailchimpSignUpPage
