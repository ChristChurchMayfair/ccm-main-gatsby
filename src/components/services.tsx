import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "./img"

import styles from "./services.module.scss"
import Section from "./section"

const Services = () => {
    const data = useStaticQuery<GatsbyTypes.ServicesQuery>(graphql`
        fragment Service on MarkdownRemark {
            id
            frontmatter {
                title
                time
                mainImage {
                    childImageSharp {
                        fluid(
                            maxWidth: 1000
                            sizes: "(max-width: 950px) 100vw, 40vw"
                        ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
        query Services {
            am: markdownRemark(
                fileAbsolutePath: { regex: "/services/morning.md$/" }
            ) {
                ...Service
            }
            pm: markdownRemark(
                fileAbsolutePath: { regex: "/services/evening.md$/" }
            ) {
                ...Service
            }
        }
    `)
    return (
        <Section id="services" className={styles.services} colorScheme="dark">
            <h1 className={styles.heading}>Our Sunday Services</h1>
            {[data.am, data.pm].map(service => {
                if (service == null) {
                    throw new Error("Impossible")
                }

                return (
                    <div key={service.id} className="service">
                        <div
                            className="photo centre"
                            style={{ position: "relative" }}
                        >
                            <Img
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                fluid={
                                    service.frontmatter!.mainImage!
                                        .childImageSharp!.fluid
                                }
                            />
                        </div>
                        <div className="title">
                            {service.frontmatter!.title}
                        </div>
                        <div className="time">{service.frontmatter!.time}</div>
                        <div
                            className="info"
                            dangerouslySetInnerHTML={{
                                __html: service.html!,
                            }}
                        />
                    </div>
                )
            })}
        </Section>
    )
}

export default Services
