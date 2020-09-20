import React, { FC } from "react"

import Img, { FluidObject } from "../../../components/img"
import Section from "../../../components/section"

import styles from "../welcome.module.scss"
import { graphql, Link } from "gatsby"

export const fragments = graphql`
    fragment ChristianityOrCCMSection on MarkdownRemark {
        frontmatter {
            christianityImage {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            ccmImage {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

interface ChristianityOrCCMSectionProps {
    christianityImage: FluidObject
    ccmImage: FluidObject
}

const ChristianityOrCCMSection: FC<ChristianityOrCCMSectionProps> = ({
    christianityImage,
    ccmImage,
}) => (
    <Section colorScheme="light" infoPanel>
        <div className={styles.christianityOrCCMContainer}>
            <div>
                <Link to="/christianfaith">
                    <Img fluid={christianityImage} />
                </Link>
                <Link to="/christianfaith">
                    Tell me more about the Christian faith
                </Link>
            </div>
            <div>
                <a href="#about-ccm">
                    <Img fluid={ccmImage} />
                </a>
                <a href="#about-ccm">Tell me more about the church</a>
            </div>
        </div>
    </Section>
)

export default ChristianityOrCCMSection
