import React, { FC } from "react"
import YouTube from "react-youtube"

import styles from "./big-video.module.scss"

interface BigVideoProps {
    youTubeVideoId: string
}

const BigVideo: FC<BigVideoProps> = ({ youTubeVideoId }) => (
    <YouTube
        containerClassName={styles.container}
        className={styles.player}
        opts={{ playerVars: { autoplay: 0 } }}
        videoId={youTubeVideoId}
    />
)

export default BigVideo
