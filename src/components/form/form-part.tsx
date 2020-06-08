import React from "react"
import formStyles from "./form.module.scss"
import classNames from "classnames"

type SectionStartProps = {
    name: string
    description?: string
    level: 1 | 2
    italics?: boolean
}

export const FormSectionStart: React.FC<SectionStartProps> = ({
    name,
    description,
    level,
    italics,
}) => {
    let heading = <h2>{name}</h2>
    if (level === 2) {
        heading = <h3>{name}</h3>
    }

    return (
        <>
            {heading}
            {description != null && (
                <div
                    className={classNames(formStyles.sectionInfo, {
                        [formStyles.italicised]: italics,
                    })}
                >
                    {description}
                </div>
            )}
        </>
    )
}
