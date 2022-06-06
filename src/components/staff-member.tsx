import { graphql } from "gatsby"
import React, { FC } from "react"

import * as styles from "./staff-member.module.scss"
import Img from "./img"

export const fragments = graphql`
    fragment StaffMember on SanityPerson {
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
`

interface StaffMemberProps extends GatsbyTypes.StaffMemberFragment {}

const StaffMember: FC<StaffMemberProps> = ({
    name,
    jobTitle,
    email,
    bioHtml,
    headshot,
}) => (
    <div className={styles.staffMember}>
        <div className={styles.photo} style={{ position: "relative" }}>
            <Img
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
                fluid={headshot?.asset?.fluid}
            />
        </div>
        <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.title}>{jobTitle}</div>
            {email != null && (
                <div className={styles.email}>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            )}
            <div
                className={styles.bio}
                dangerouslySetInnerHTML={{ __html: bioHtml! }}
            />
        </div>
    </div>
)

export default StaffMember
