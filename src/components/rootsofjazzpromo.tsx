import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./rootsofjazz.module.scss"
import LondonLivingLogo from "../content/londonliving/LL_logo.inline.svg"
import Section from "./section"

const RootsOfJazzPromo = () => {
    const data = useStaticQuery<GatsbyTypes.RootsOfJazzPromoQuery>(graphql`
        query RootsOfJazzPromo {
            londonLiving: markdownRemark(
                fileAbsolutePath: { regex: "/_events/rootsofjazz.md$/" }
            ) {
                html
            }
        }
    `)

    return (
        <Section
            colorScheme="custom"
            className={styles.rootsOfJazzPromo}
            full-bleed
        >
            <div>
                <div className={styles.header}>
                    <div className={styles.the}>the</div>
                    <div className={styles.roots}>roots</div>
                    <div className={styles.of}>of</div>
                    <div className={styles.jazz}>jazz</div>
                </div>
                <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                        __html: data.londonLiving!.html!,
                    }}
                />
                <div className={styles.buttons}>
                    <a
                        className={styles.button}
                        href="https://ccmayfair.churchsuite.co.uk/events/ybe0nr2r"
                    >
                        Buy Tickets
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default RootsOfJazzPromo
