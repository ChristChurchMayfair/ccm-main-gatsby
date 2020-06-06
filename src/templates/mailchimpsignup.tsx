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
            }
        }
    }
`

const MailchimpSignUpPage: React.FC<Props> = ({ data }) => {
    return (
        <Layout title={data.mainInfo!.frontmatter!.title} headerColour="dark">
            <HeaderUnderlay />
            <Section>
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
