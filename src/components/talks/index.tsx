import React, { useMemo, useRef, useEffect } from "react"
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import Modal from "react-modal"

import TalksApp from "./components/App"

const serviceID = "cjkqvvoxy2pyy0175cdmdy1mz"
const graphCoolURL = `https://api.graph.cool/simple/v1/${serviceID}`

interface Props {}

const Talks: React.FC<Props> = () => {
    const client = useMemo(() => {
        const httpLink = createHttpLink({
            uri: graphCoolURL,
        })

        const client = new ApolloClient({
            link: httpLink,
            cache: new InMemoryCache(),
        })
        return client
    }, [])
    const containerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const container = containerRef.current
        if (container != null) {
            Modal.setAppElement(container)
        }
    })
    return (
        <ApolloProvider client={client}>
            <div ref={containerRef}>
                <TalksApp />
            </div>
        </ApolloProvider>
    )
}

export default Talks
