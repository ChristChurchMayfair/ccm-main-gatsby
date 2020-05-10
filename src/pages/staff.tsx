import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "../components/img"
import { sortedWithPriority } from "../utils"

const StaffPageQuery = graphql`
    query StaffPage {
        mainInfo: markdownRemark(fileAbsolutePath: { regex: "/staff.md$/" }) {
            html
            frontmatter {
                title
                headerColour
            }
        }
        staff: allSanityPerson(
            filter: {
                roles: { elemMatch: { slug: { current: { eq: "staff" } } } }
            }
        ) {
            nodes {
                id
                name
                jobTitle
                email
                bioHtml
                headshot {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`

const Staff = () => {
    const data = useStaticQuery<GatsbyTypes.StaffPageQuery>(StaffPageQuery)

    const staffNamesOrder = [
        "Matt Fuller",
        "Phil Allcock",
        "Scott Furey",
        "Nick Ashton",
        "Sharon Walsh",
        "Ali Davies",
        "Ben Slee",
        "Ellie Page",
        "James Kight",
        "Liz Hayden",
        "Sarah Farrar-Bell",
    ]

    const people = sortedWithPriority(
        data.staff.nodes,
        s => s.name!,
        staffNamesOrder
    )

    const allStaff = people.map(person => {
        const email = person.email

        return (
            <div key={person.id} className="person">
                <div className="photo" style={{ position: "relative" }}>
                    <Img
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        fluid={person.headshot?.asset?.fluid}
                    />
                </div>
                <div className="info">
                    <div className="name">{person.name!}</div>
                    <div className="title">{person.jobTitle!}</div>
                    {email != null && (
                        <div className="email">
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    )}
                    <div
                        className="bio"
                        dangerouslySetInnerHTML={{ __html: person.bioHtml! }}
                    />
                </div>
            </div>
        )
    })

    return (
        <Layout title={data.mainInfo?.frontmatter?.title} headerColour="dark">
            <section className="header-underlay"></section>
            <section className="intro wider dark">
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: data.mainInfo?.html ?? "No Content!",
                    }}
                />
            </section>

            <section className="staff">
                <div>{allStaff}</div>
            </section>
        </Layout>
    )
}

export default Staff

// I wish gatsby gave us a way to specify this in the config file or something. For now, let's keep it here.
export const globallyReusableFragments = graphql`
    fragment SanityHeadshot on SanityImage {
        asset {
            fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
            }
        }
    }
`
