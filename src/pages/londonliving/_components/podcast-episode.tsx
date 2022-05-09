import React from "react"

import styles from "../../londonliving.module.scss"
import Img, { FluidObject } from "../../../components/img"

export type Season = {
    title: string
    episodes: Episode[]
}

export type Episode = {
    title: string
    audioUrl: string
    blurb: string
    image: FluidObject
}

const PodcastEpisode: React.FC<Episode> = ({
    title,
    audioUrl,
    blurb,
    image,
}) => (
    <div key={title} className={styles.episode}>
        <h2>{title}</h2>
        <div className={styles.blurb}>
            <p>{blurb}</p>
        </div>
        <Img className={styles.image} fluid={image} />
        <div className={styles.media}>
            <div className={styles.audio}>
                <audio controls={true} preload="metadata">
                    <source src={audioUrl} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    </div>
)

export default PodcastEpisode
