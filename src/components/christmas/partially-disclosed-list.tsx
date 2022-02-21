import React, { useState } from "react"
import { FC } from "react"

type Props = {
    numberOfItemsToShowByDefault: number
    styles: any
    itemTypeName?: string
}

const PartiallyDisclosedList: FC<Props> = ({
    numberOfItemsToShowByDefault,
    styles,
    itemTypeName,
    children,
}) => {
    const [showMore, setShowMore] = useState(false)

    const toggle = () => setShowMore(!showMore)

    let buttonLabel = `Show More ${itemTypeName ?? ""}`
    if (showMore) {
        buttonLabel = `Show Fewer ${itemTypeName ?? ""}`
    }

    let numberToShow = numberOfItemsToShowByDefault
    if (showMore) {
        numberToShow = 100
    }

    const childArray = React.Children.toArray(children).slice(0, numberToShow)

    let button = (
        <a className={styles.showMoreButton} onClick={toggle}>
            {buttonLabel}
        </a>
    )

    if (React.Children.count(children) <= numberOfItemsToShowByDefault) {
        button = <></>
    }

    return (
        <div className="partiallyDisclosedList">
            <div className="items">{childArray}</div>
            {button}
        </div>
    )
}

export default PartiallyDisclosedList
