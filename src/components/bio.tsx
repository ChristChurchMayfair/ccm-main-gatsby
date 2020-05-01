import React from "react"
import { graphql } from "gatsby"

import Img from "./img"
import { sortedWithPriority } from "../utils"

interface Props {
    people: ReadonlyArray<GatsbyTypes.StaffProfileFragment>
    peoplePrecedenceByEmail?: Array<string> | undefined
    descriptionHtml: string
}

const Bio: React.FC<Props> = ({
    people: peopleNullable,
    descriptionHtml,
    peoplePrecedenceByEmail,
}) => {
    const people = sortedWithPriority(
        peopleNullable,
        s => s.email!,
        peoplePrecedenceByEmail ?? []
    )

    return (
        <section className="find-out-more">
            <h1>Find out more</h1>
            <div
                className="text"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
            <div className="people">
                {people.map(person => {
                    if (person == null) {
                        return null
                    }
                    return (
                        <div className="person" key={person.name}>
                            <div
                                className="photo"
                                style={{ position: "relative" }}
                            >
                                <Img
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                    }}
                                    fluid={person.headshot!.asset!.fluid}
                                    objectFit="contain"
                                    objectPosition="left center"
                                />
                            </div>
                            <div className="info">
                                <div className="name">{person.name}</div>
                                <div className="role">{person.job_title}</div>
                                <div className="email">
                                    <a href={`mailto:${person.email}`}>
                                        {person.email}
                                    </a>
                                </div>
                                {person.phone != null && (
                                    <div className="phone">
                                        <a href={`tel:${person.phone}`}>
                                            {person.phone}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export const fragments = graphql`
    fragment StaffProfile on SanityStaff {
        name
        email
        job_title
        phone
        headshot {
            asset {
                fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                }
            }
        }
    }
`

export default Bio
