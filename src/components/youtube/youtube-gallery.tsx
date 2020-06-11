import React, { useState, useEffect } from "react"

import styles from "./youtube-gallery.module.scss"
import classNames from "classnames"
import YouTube from "react-youtube"
import CloseIcon from "../../content/assets/images/close-menu-button.inline.svg"


interface VideoInfo {
    id: string
    title: string
}

interface Props {
    videoIds: VideoInfo[]
}
const YouTubeGallery: React.FC<Props> = ({ videoIds }) => {
    const [selectedVideoId, setSelectedVideoId] = useState<string | undefined>(
        undefined
    )
    const [showPlayer, setShowPlayer] = useState(false)

    useEffect(() => {
        setShowPlayer(selectedVideoId !== undefined)
    }, [selectedVideoId])

    return (
        <div className={styles.gallery}>
            <div className={styles.thumbnails}>
                {videoIds.map(videoInfo => {
                    return (
                        <div key={videoInfo.id}>
                            <h3>{videoInfo.title}</h3>
                                <img onClick={() => setSelectedVideoId(videoInfo.id)}
                                    className={styles.videoThumbnailImage}
                                    src={`https://img.youtube.com/vi/${videoInfo.id}/${0}.jpg`}
                                />
                        </div>
                    )
                })}
            </div>
            <div
                className={classNames(styles.player, {
                    [styles.playerVisible]: showPlayer,
                })}
            >
                <a className={styles.playerCloseIcon} onClick={() => setSelectedVideoId(undefined)}><CloseIcon/></a>
                <YouTube className={styles.youtubePlayer} opts={{playerVars: {autoplay: 1}}} videoId={selectedVideoId}></YouTube>
            </div>
        </div>
    )
}

export default YouTubeGallery
