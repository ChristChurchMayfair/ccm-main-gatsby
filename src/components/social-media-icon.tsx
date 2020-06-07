import React, { FC, ReactType } from "react"

import InstagramLogo from "../assets/icons/instagram-logo.inline.svg"
import SpotifyLogo from "../assets/icons/spotify-logo.inline.svg"
import TwitterLogo from "../assets/icons/twitter-logo.inline.svg"

import styles from "./social-media-icon.module.scss"

type SupportedPlatform = "twitter" | "instagram" | "spotify"

const svgForPlatform: Record<SupportedPlatform, ReactType> = {
    spotify: SpotifyLogo,
    instagram: InstagramLogo,
    twitter: TwitterLogo,
}

const baseUrlForPlatform: Record<SupportedPlatform, string> = {
    spotify: "https://open.spotify.com/artist/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
}

interface SocialMediaIconProps {
    platform: SupportedPlatform
    username: string
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ platform, username }) => {
    const Icon = svgForPlatform[platform]
    return (
        <a
            href={`${baseUrlForPlatform[platform]}${username}`}
            className={styles.socialMediaIcon}
        >
            <Icon />
        </a>
    )
}

export default SocialMediaIcon
