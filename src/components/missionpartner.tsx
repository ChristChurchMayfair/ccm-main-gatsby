import React, { FC } from "react"

import styles from "./missionpartner.module.scss"
import Img, { FluidObject } from "./img"
import classNames from "classnames"

type MissionPartnerProps = {
    name: string
    title: string
    id: string
    html: string
    image: FluidObject
    imageOrientation?: string
}

const MissionPartner: FC<MissionPartnerProps> = ({
    name,
    title,
    html,
    image,
    id,
    imageOrientation,
}) => {
    return (
        <div
            className={classNames(styles.missionpartner, {
                [styles["missionpartner--landscape"]]:
                    imageOrientation === "landscape",
            })}
            id={id}
        >
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
                <div className={styles.name}>{name}</div>
                <div className={styles.title}>{title}</div>
                <div
                    className={styles.bio}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export default MissionPartner
