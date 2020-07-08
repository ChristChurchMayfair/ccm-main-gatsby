import React from "react"
import { graphql } from "gatsby"

import Img from "./img"
import { sortedWithPriority } from "../utils"

import styles from "./bio.module.scss"
import FindOutMoreText from "./find-out-more-text"
import Section from "./section"

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
        <Section colorScheme="light">
            <div className={styles.bio}>
                <h1 className={styles.heading}>Find out more</h1>
                <FindOutMoreText innerHTML={descriptionHtml} />
                <div className={styles.people}>
                    {people.map(person => {
                        if (person == null) {
                            return null
                        }
                        return (
                            <div className={styles.person} key={person.name}>
                                <div
                                    className={styles.photo}
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
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        {person.name}
                                    </div>
                                    <div className={styles.role}>
                                        {person.jobTitle}
                                    </div>
                                    <div className={styles.email}>
                                        <a href={`mailto:${person.email}`}>
                                            {person.email}
                                        </a>
                                    </div>
                                    {/* {person.phone != null && (
                            <div className="phone">
                                <a href={`tel:${person.phone}`}>
                                    {person.phone}
                                </a>
                            </div>
                        )} */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}

export const fragments = graphql`
    fragment StaffProfile on SanityPerson {
        name
        email
        jobTitle
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
