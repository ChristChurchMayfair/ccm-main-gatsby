import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "../components/img"
import { sortedWithPriority } from "../utils"

const StaffPage = () => {
    const data = useStaticQuery<GatsbyTypes.StaffQuery>(graphql`
        query Staff {
            mainInfo: markdownRemark(
                fileAbsolutePath: { regex: "/staff.md$/" }
            ) {
                html
                frontmatter {
                    title
                    headerColour
                }
            }
            staff: allSanityStaff {
                nodes {
                    name
                    job_title
                    email
                    phone
                    headshot {
                        ...SanityHeadshot
                    }
                }
            }
        }
    `)

    const staffNamesOrder = ["Matt Fuller", "Phil Allcock", "Scott Furey", "Nick Ashton", "Sharon Walsh", "Ali Davies", "Ben Slee"]

    const people = sortedWithPriority(
        data.staff!.nodes,
        s => s.name!,
        staffNamesOrder
    )

    const allStaff = people.map(person => {
        const email = person!.email
        return (
            <div className="person">
                <div className="photo">
                    <Img fluid={person.headshot!.asset!.fluid} />
                </div>
                <div className="info">
                    <div className="name">{person!.name!}</div>
                    <div className="title">{person!.job_title!}</div>
                    {email != null && (
                        <div className="email">
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    )}
                    <div className="bio">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam iaculis risus sit amet ante congue, ut
                            dignissim libero gravida. Duis et diam ut mi
                            pharetra ornare eu ac felis. Morbi urna turpis,
                            cursus nec tincidunt non, facilisis non libero.
                            Vestibulum non ante id mauris tempus elementum.
                            Integer ac tempus nulla. Curabitur porta tortor ac
                            elit vestibulum, vel tempus risus sagittis. Fusce
                            vitae sapien id leo tempor volutpat ut quis metus.
                            Nunc id dui eu enim molestie euismod sit amet
                            hendrerit erat. Nam ullamcorper eros in mi mollis, a
                            viverra mauris scelerisque. Nunc volutpat maximus mi
                            finibus consequat.
                        </p>
                        <p>
                            Suspendisse tincidunt mattis ligula. Aliquam
                            vestibulum urna ac vehicula porta. Nulla venenatis
                            malesuada sapien, in tristique magna pharetra at.
                            Vivamus lacinia neque eget mauris molestie, sit amet
                            scelerisque diam condimentum. Suspendisse eu
                            placerat elit. Proin interdum, sem eget aliquet
                            vestibulum, ligula neque ullamcorper dui, eu
                            dignissim diam lorem sit amet neque. Class aptent
                            taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Sed sed arcu
                            volutpat, blandit mi sed, facilisis odio.
                        </p>
                    </div>
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

export default StaffPage

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
