import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { FluidObject } from "gatsby-image"

interface Props {
    people: Array<{
        name: string
        titleRole: string
        email: string
        phoneNumber: string | undefined
        headshot: FluidObject | GatsbyTypes.SanityImageFluid
    }>
    descriptionHtml: string
}

const Bio: React.FC<Props> = ({ people, descriptionHtml }) => {
    return (
        <section className="find-out-more">
            <h1>Find out more</h1>
            <div
                className="text"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
            <div className="people">
                {people.map(person => {
                    return (
                        <div className="person" key={person.name}>
                            <div
                                className="photo"
                                style={{
                                    position: "relative",
                                }}
                            >
                                <Img
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                    }}
                                    // @ts-ignore SanityImageFluid isn't quite compatible but it actually works fine
                                    fluid={person.headshot}
                                    objectFit="contain"
                                    objectPosition="left center"
                                />
                            </div>
                            <div className="info">
                                <div className="name">{person.name}</div>
                                <div className="role">{person.titleRole}</div>
                                <div className="email">
                                    <a href={`mailto:${person.email}`}>
                                        {person.email}
                                    </a>
                                </div>
                                <div className="phone">
                                    <a href={`tel:${person.phoneNumber}`}>
                                        {person.phoneNumber}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Bio
