import { generateRobotsMetaTag, RobotsMetaData } from "./robots"

test("returns default restrictive robots meta tag", () => {
    const inputRobotsMetaData: RobotsMetaData = {}

    const metaTag = generateRobotsMetaTag(inputRobotsMetaData)

    expect(metaTag).toEqual({
        property: "robots",
        content: "noindex,noimageindex,nofollow,nocache,noarchive,nosnippet",
    })
})

test("returns robots meta tag with following permitted", () => {
    const inputRobotsMetaData: RobotsMetaData = {
        allowFollowLinksOnThisPage: true,
    }

    const metaTag = generateRobotsMetaTag(inputRobotsMetaData)

    expect(metaTag).toEqual({
        property: "robots",
        content: "noindex,noimageindex,follow,nocache,noarchive,nosnippet",
    })
})

test("returns robots meta tag with following permitted", () => {
    const inputRobotsMetaData: RobotsMetaData = {
        allowCaching: true,
    }

    const metaTag = generateRobotsMetaTag(inputRobotsMetaData)

    expect(metaTag).toEqual({
        property: "robots",
        content: "noindex,noimageindex,nofollow,nosnippet",
    })
})

test("returns robots meta tag with indexing permitted", () => {
    const inputRobotsMetaData: RobotsMetaData = {
        allowIndexing: true,
    }

    const metaTag = generateRobotsMetaTag(inputRobotsMetaData)

    expect(metaTag).toEqual({
        property: "robots",
        content: "index,noimageindex,nofollow,nocache,noarchive,nosnippet",
    })
})

test("returns robots meta tag with image indexing permitted", () => {
    const inputRobotsMetaData: RobotsMetaData = {
        allowImageIndexing: true,
    }

    const metaTag = generateRobotsMetaTag(inputRobotsMetaData)

    expect(metaTag).toEqual({
        property: "robots",
        content: "noindex,nofollow,nocache,noarchive,nosnippet",
    })
})

test("returns robots meta tag with snippeting permitted", () => {
    const inputRobotsMetaData: RobotsMetaData = {
        allowPageSnippets: true,
    }

    const metaTag = generateRobotsMetaTag(inputRobotsMetaData)

    expect(metaTag).toEqual({
        property: "robots",
        content: "noindex,noimageindex,nofollow,nocache,noarchive",
    })
})

test("returns robots meta tag with all permitted", () => {
    const inputRobotsMetaData: RobotsMetaData = {
        allowPageSnippets: true,
        allowImageIndexing: true,
        allowIndexing: true,
        allowCaching: true,
        allowFollowLinksOnThisPage: true,
    }

    const metaTag = generateRobotsMetaTag(inputRobotsMetaData)

    expect(metaTag).toEqual({
        property: "robots",
        content: "index,follow",
    })
})
