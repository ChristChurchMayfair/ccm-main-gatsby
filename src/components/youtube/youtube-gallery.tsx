import React, { useState, useEffect } from "react"

import styles from "./youtube-gallery.module.scss"
import classNames from "classnames"
import YouTube from "react-youtube"
import CloseIcon from "../../content/assets/images/close-menu-button.inline.svg"
import PlayIcon from "./play.inline.svg"

interface VideoInfo {
    id: string
    title: string
    description?: string
}

export interface VideoSection {
    title: string
    videos: VideoInfo[]
}

interface Props {
    videoSections: VideoSection[]
}
const YouTubeGallery: React.FC<Props> = ({ videoSections }) => {
    const [selectedVideo, setSelectedVideo] = useState<VideoInfo | undefined>(
        undefined
    )
    const [showPlayer, setShowPlayer] = useState(false)

    useEffect(() => {
        setShowPlayer(selectedVideo !== undefined)
    }, [selectedVideo])

    return (
        <div className={styles.gallery}>
            {videoSections.map(videoSection => {
                return (
                    <div
                        key={videoSection.title}
                        className={classNames(styles.gallerySection, {
                            [styles.gallerySectionVisible]:
                                showPlayer === false,
                        })}
                    >
                        <h2>{videoSection.title}</h2>
                        <div className={styles.thumbnails}>
                            {videoSection.videos.map((videoInfo: VideoInfo) => {
                                return (
                                    <div
                                        key={videoInfo.id}
                                        className={styles.videoInfo}
                                        onClick={() =>
                                            setSelectedVideo(videoInfo)
                                        }
                                    >
                                        <h3>{videoInfo.title}</h3>
                                        <div
                                            className={styles.videoDescription}
                                        >
                                            {videoInfo.description}
                                        </div>
                                        <div
                                            className={
                                                styles.videoThumbnailImage
                                            }
                                        >
                                            <img
                                                src={`https://img.youtube.com/vi/${
                                                    videoInfo.id
                                                }/${0}.jpg`}
                                            />
                                            <div
                                                className={
                                                    styles.playIconContainer
                                                }
                                            >
                                                <PlayIcon />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <div
                className={classNames(styles.player, {
                    [styles.playerVisible]: showPlayer,
                })}
            >
                <a
                    className={styles.playerCloseIcon}
                    onClick={() => setSelectedVideo(undefined)}
                >
                    <CloseIcon />
                </a>
                <h2>{selectedVideo?.title}</h2>
                <div className={styles.youtubePlayer}>
                    <YouTube
                        opts={{ playerVars: { autoplay: 1 } }}
                        videoId={selectedVideo?.id}
                    />
                </div>
            </div>
        </div>
    )
}

export default YouTubeGallery
