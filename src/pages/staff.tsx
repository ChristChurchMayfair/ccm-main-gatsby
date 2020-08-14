import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { sortedWithPriority } from "../utils"
import HeaderUnderlay from "../components/header-underlay"
import Section from "../components/section"
import SectionText from "../components/section-text"

import styles from "./staff.module.scss"
import StaffMember from "../components/staff-member"

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
                ...StaffMember
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
        "Ben Slee",
        "Ellie Page",
        "James Kight",
        "Liz Hayden",
        "Sarah Farrar-Bell",
    ]

    const staffMembers = sortedWithPriority(
        data.staff.nodes,
        s => s.name!,
        staffNamesOrder
    )

    return (
        <Layout title={data.mainInfo?.frontmatter?.title} headerColour="dark">
            <HeaderUnderlay colorScheme="light" />
            <Section intro wider colorScheme="dark">
                <SectionText
                    intro
                    dangerouslySetInnerHTML={{
                        __html: data.mainInfo?.html ?? "No Content!",
                    }}
                />
            </Section>
            <Section colorScheme="light">
                <div className={styles.staffMembersContainer}>
                    {staffMembers.map(staffMember => (
                        <StaffMember key={staffMember.id} {...staffMember} />
                    ))}
                </div>
            </Section>
        </Layout>
    )
}

export default Staff
