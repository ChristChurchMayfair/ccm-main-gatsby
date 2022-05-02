/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC } from "react"

import styles from "./alum.module.scss"
import Img, { FluidObject } from "../img"

type AlumProps = {
    name: string
    years: string
    role: string
    html: string
    image: FluidObject
}

const Alum: FC<AlumProps> = ({ name, role, years, html, image }) => {
    return (
        <div className={styles.alum}>
            <div className={styles.photo} style={{ position: "relative" }}>
                <Img
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    fluid={image}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.titleline}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.years}>{years}</span>
                    <span className={styles.role}>{role}</span>
                </div>

                <div
                    className={styles.bio}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export default Alum
