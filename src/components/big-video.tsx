/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
