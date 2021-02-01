import { MetaTag } from "./open-graph"

export type RobotsMetaData = {
    allowFollowLinksOnThisPage?: boolean
    allowIndexing?: boolean
    allowImageIndexing?: boolean
    allowCaching?: boolean
    allowPageSnippets?: boolean
}

export const HiddenPageRobotsMetaData: RobotsMetaData = {
    allowFollowLinksOnThisPage: false,
    allowIndexing: false,
    allowCaching: false,
    allowPageSnippets: false,
    allowImageIndexing: false,
}

function checkSet(
    on: string | undefined,
    off: string,
    value: boolean | undefined
): string | undefined {
    if (value !== undefined && value == true) {
        return on
    }
    return off
}

export function generateRobotsMetaTag(robotsMetaData: RobotsMetaData): MetaTag {
    let content: (string | undefined)[] = []

    content.push(checkSet("index", "noindex", robotsMetaData.allowIndexing))
    content.push(
        checkSet(undefined, "noimageindex", robotsMetaData.allowImageIndexing)
    )
    content.push(
        checkSet(
            "follow",
            "nofollow",
            robotsMetaData.allowFollowLinksOnThisPage
        )
    )
    content.push(checkSet(undefined, "nocache", robotsMetaData.allowCaching))
    content.push(checkSet(undefined, "noarchive", robotsMetaData.allowCaching))
    content.push(
        checkSet(undefined, "nosnippet", robotsMetaData.allowPageSnippets)
    )

    content = content.filter(value => value !== undefined)

    return { property: "robots", content: content.join(",") }
}
