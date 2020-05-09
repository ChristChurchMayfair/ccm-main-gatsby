import React, { useRef, useEffect } from "react"
import Modal from "react-modal"

import TalksApp from "./components/App"

interface Props {}

const Talks: React.FC<Props> = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const container = containerRef.current
        if (container != null) {
            Modal.setAppElement(container)
        }
    })
    return (
        <div ref={containerRef}>
            <TalksApp />
        </div>
    )
}

export default Talks
