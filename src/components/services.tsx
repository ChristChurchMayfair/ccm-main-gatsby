/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./services.module.scss"
import Section from "./section"
import Service, { Session } from "./service"
import { parseISO } from "date-fns"
import { FluidObject } from "./img"

const Services = () => {
    const data = useStaticQuery<GatsbyTypes.ServicesQuery>(graphql`
        fragment Service on MarkdownRemark {
            id
            frontmatter {
                title
                normalTime
                schedule {
                    time
                    description
                    link
                }
                description
                streamLink
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
            notice: markdownRemark(
                fileAbsolutePath: { regex: "/services/notice.md$/" }
            ) {
                html
            }
        }
    `)
    return (
        <Section id="services" colorScheme="dark">
            <div className={styles.servicesSection}>
                <h1 className={styles.heading}>Our Sunday Services</h1>
                <div
                    className={styles.serviceNotes}
                    dangerouslySetInnerHTML={{ __html: data.notice!.html! }}
                ></div>
                <div className={styles.services}>
                    {[data.am, data.pm].map(service => {
                        if (service == null) {
                            throw new Error("Impossible")
                        }

                        const schedule: Session[] =
                            service.frontmatter?.schedule?.map((s: any) => {
                                return {
                                    dateTime: parseISO(s.time!),
                                    description: s.description!,
                                    link: s.link,
                                }
                            }) ?? []

                        return (
                            <Service
                                key={service.id}
                                id={service.id}
                                name={service.frontmatter?.title as string}
                                image={
                                    service.frontmatter?.mainImage
                                        ?.childImageSharp?.fluid as FluidObject
                                }
                                htmlDescription={service.html!}
                                schedule={schedule}
                                normalTime={service.frontmatter!.normalTime!}
                                streamLink={service.frontmatter!.streamLink!}
                                description={service.frontmatter!.description!}
                            ></Service>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Services
