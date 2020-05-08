export type Event = {
    id: string
    name: string
}

export type Speaker = {
    id: string
    name: string
}

export type Sermon = {
    id: string
    name: string
    preachedAt: string
    url: string
    passage: string | null
    duration: number
    speakers: Array<Speaker>
    event: Event | null
}

export type Series = {
    id: string
    name: string
    subtitle: string | null
    image3x2Url: string | null
    sermons: Array<Sermon>
}
