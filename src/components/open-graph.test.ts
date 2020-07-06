import { OpenGraphMetaData, generateOpenGraphMetaTags } from "./open-graph"

test("returns basic open graph meta tags", () => {
    const inputOpenGraphData: OpenGraphMetaData = {
        title: "title",
        type: "website",
        url: "url",
        description: "description",
        images: [],
    }

    const result = generateOpenGraphMetaTags(inputOpenGraphData)

    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:title", content: "title" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:type", content: "website" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:url", content: "url" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([
            { property: "og:description", content: "description" },
        ])
    )

    expect(result).not.toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                property: "og:phone_number",
            }),
        ])
    )
})

test("returns optional open graph meta tags", () => {
    const inputOpenGraphData: OpenGraphMetaData = {
        title: "title",
        type: "website",
        url: "url",
        description: "description",
        images: [],
        phoneNumber: "phone number",
    }

    const result = generateOpenGraphMetaTags(inputOpenGraphData)

    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:title", content: "title" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:type", content: "website" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:url", content: "url" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([
            { property: "og:description", content: "description" },
        ])
    )

    expect(result).toEqual(
        expect.arrayContaining([
            { property: "og:phone_number", content: "phone number" },
        ])
    )
})

test("returns basic open graph meta tags with an image", () => {
    const inputOpenGraphData: OpenGraphMetaData = {
        title: "title",
        type: "website",
        url: "url",
        description: "description",
        images: [{ imageUrl: "imageUrl", imageWidth: 20, imageHeight: 30 }],
    }

    const result = generateOpenGraphMetaTags(inputOpenGraphData)

    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:title", content: "title" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:type", content: "website" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:url", content: "url" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([
            { property: "og:description", content: "description" },
        ])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:image", content: "imageUrl" }])
    )

    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:image:width", content: "20" }])
    )
    expect(result).toEqual(
        expect.arrayContaining([{ property: "og:image:height", content: "30" }])
    )
})
