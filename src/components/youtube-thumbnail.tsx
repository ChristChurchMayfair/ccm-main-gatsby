import React from "react"

import videoStyles from "./videos.module.scss";

interface Props {
    videoId: string | undefined
    imageIndex: number | undefined
}
const YouTubeThumbNail: React.FC<Props> = ({ videoId, imageIndex }) => {
    return (
        <div>
            <a href={`https://youtu.be/${videoId}`}>
                <img className={videoStyles.videoThumbnailImage}
                    src={`https://img.youtube.com/vi/${videoId}/${
                        imageIndex ?? 0
                    }.jpg`}
                />
            </a>
        </div>
    )
}

export default YouTubeThumbNail
