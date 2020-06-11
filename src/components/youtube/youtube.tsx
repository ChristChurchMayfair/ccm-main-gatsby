import React from "react"

import videoStyles from "./youtube.module.scss"

interface Props {
    videoId: string | undefined
    imageIndex: number | undefined
}
const YouTubeThumbNail: React.FC<Props> = ({ videoId, imageIndex }) => {
    return (
        <div>
            <a href={`https://youtu.be/${videoId}`}>
                <img
                    className={videoStyles.videoThumbnailImage}
                    src={`https://img.youtube.com/vi/${videoId}/${
                        imageIndex ?? 0
                    }.jpg`}
                />
            </a>
        </div>
    )
}

export default YouTubeThumbNail

interface GalleryProps {
    videoIds: string[]
}

export const YouTubeThumbNailGallery: React.FC<GalleryProps> = ({
    videoIds,
}) => {
    return (
        <section>
            <div className={videoStyles.videoLinks}>
                {videoIds?.map((videoId: any) => (
                    <div className={videoStyles.videoThumbnail}>
                        <h2>{"basd"}</h2>
                        <YouTubeThumbNail videoId={videoId} imageIndex={0} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export const YouTubeThumbNailSingle: React.FC<Props> = ({
    videoId,
}) => {
    return (
        <section>
            <div className={videoStyles.singleVideoThumbnail}>
                <h2>{"basd"}</h2>
                <YouTubeThumbNail videoId={videoId} imageIndex={0} />
            </div>
        </section>
    )
}
