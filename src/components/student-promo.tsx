/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./student-promo.module.scss"
import Section from "./section"

const StudentPromo = () => {
    const data = useStaticQuery<GatsbyTypes.StudentPromoQuery>(graphql`
        query StudentPromo {
            studentsPromo: markdownRemark(
                fileAbsolutePath: { regex: "/students/promo.md$/" }
            ) {
                html
                frontmatter {
                    link
                }
            }
        }
    `)

    return (
        <Section
            colorScheme="custom"
            className={styles.studentPromo}
            full-bleed
        >
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Hello Freshers!</h1>
                </div>
                <div className={styles.info}>
                    <div
                        className={styles.copy}
                        dangerouslySetInnerHTML={{
                            __html: data.studentsPromo!.html!,
                        }}
                    />
                    <a
                        className={styles.button}
                        href={data.studentsPromo!.frontmatter!.link}
                    >
                        Find out more
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default StudentPromo
