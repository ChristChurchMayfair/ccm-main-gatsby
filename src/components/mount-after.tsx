import React, { useState, useEffect } from "react"

interface Props {
    delayMs: number
    children: React.ReactNode
}

const MountAfter: React.FC<Props> = ({ delayMs, children }) => {
    const [display, setDisplay] = useState(false)
    useEffect(() => {
        const id = setTimeout(() => {
            setDisplay(true)
        }, delayMs)
        return () => {
            clearTimeout(id)
        }
    }, [delayMs])
    return <>{display ? children : null}</>
}

export default MountAfter
