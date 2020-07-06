export type OpenGraphImage = {
    imageUrl: string
    imageSecureUrl?: string
    imageType?: string
    imageWidth?: number
    imageHeight?: number
    imageAlternativeText?: string
}

export type OpenGraphMetaData = {
    title: string
    type: string
    url: string
    description: string
    images: OpenGraphImage[]
    email?: string
    phoneNumber?: string
    siteName?: string
}

export type MetaTag = JSX.IntrinsicElements["meta"]

function generateOpenGraphImageMetaTags(imageData: OpenGraphImage): MetaTag[] {
    return [
        { property: "og:image", content: imageData.imageUrl },
        {
            property: "og:image:width",
            content: imageData.imageWidth?.toString(),
        },
        {
            property: "og:image:height",
            content: imageData.imageHeight?.toString(),
        },
    ]
}

export function generateOpenGraphMetaTags(data: OpenGraphMetaData): MetaTag[] {
    let basicMetaData: MetaTag[] = [
        { property: "og:title", content: data.title },
        { property: "og:type", content: data.type },
        { property: "og:url", content: data.url },
        { property: "og:description", content: data.description },
        { property: "og:site_name", content: data.siteName },
        { property: "og:phone_number", content: data.phoneNumber },
        { property: "og:email", content: data.email },
    ]

    const imageMetaTags = data.images.flatMap(imageData =>
        generateOpenGraphImageMetaTags(imageData)
    )

    basicMetaData = basicMetaData.concat(imageMetaTags)

    return basicMetaData.filter(
        tag => tag.content != null || tag.content === ""
    )
}
