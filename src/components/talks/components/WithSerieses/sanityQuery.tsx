import sanityClient from "@sanity/client"
import React, { useState, useEffect } from "react"

const ccmSanityClient = sanityClient({
    projectId: "ip162aeb",
    dataset: "production",
    useCdn: true,
})

interface SanityQueryResult<T> {
    data: T | null
    loading: boolean
    error: Error | null
}
const useSanityQuery = <T extends {}>(query: string): SanityQueryResult<T> => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        let mounted = true
        ;(async () => {
            try {
                const response = await ccmSanityClient.fetch(query)
                if (mounted) {
                    setData(response)
                    setLoading(false)
                }
            } catch (e) {
                if (e instanceof Error) {
                    if (mounted) {
                        setError(e)
                        setLoading(false)
                    }
                }
            }
        })()
        return () => {
            mounted = false
        }
    }, [query])

    return {
        data,
        loading,
        error,
    }
}

interface SanityQueryProps<T> {
    children: (result: SanityQueryResult<T>) => React.ReactNode
    query: string
}
export const SanityQuery = <T extends {}>({
    children,
    query,
}: SanityQueryProps<T>) => {
    const result = useSanityQuery<T>(query)
    return children(result)
}
