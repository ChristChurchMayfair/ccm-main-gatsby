import classNames from "classnames"
import React, { FC } from "react"
import { propTypes } from "react-spinkit"

import styles from "./important-notice.module.scss"
import Section from "./section"
import SectionText from "./section-text"

export interface Feature {
    title: string
    description: string
    buttonText?: string
    buttonHref?: string
}

interface ImportantNoticeProps {
    title: string
    lastUpdated?: string
    features?: Feature[]
    variant?: "Critical"
}

const ImportantNotice: FC<ImportantNoticeProps> = ({
    children,
    title: noticeTitle,
    lastUpdated,
    features = [],
    variant = "Normal",
}) => (
    <div className={styles.importantNoticeContainer}>
        <Section
            className={styles.importantNotice}
            fullBleed
            colorScheme="light"
        >
            <div className={styles.content}>
                <h1
                    className={classNames({
                        [styles.title]: true,
                        [styles.critical]: variant === "Critical",
                    })}
                >
                    {noticeTitle}
                </h1>
                <SectionText fullBleed className={styles.text}>
                    {children}
                    {lastUpdated !== undefined && (
                        <p
                            className={styles.lastUpdated}
                        >{`This was last updated at ${lastUpdated}.`}</p>
                    )}
                </SectionText>
                {features.length > 0 && (
                    <>
                        <hr className={styles.separator} />
                        <div className={styles.featuresContainer}>
                            {features.map(
                                (
                                    {
                                        title,
                                        description,
                                        buttonText,
                                        buttonHref,
                                    },
                                    i
                                ) => (
                                    <div key={`${i}${title}${description}`}>
                                        <h2>{title}</h2>
                                        <div>
                                            <p>{description}</p>
                                        </div>
                                        {buttonText !== undefined && (
                                            <a
                                                className={
                                                    styles.featureLinkButton
                                                }
                                                href={buttonHref}
                                            >
                                                {buttonText}
                                            </a>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
        </Section>
    </div>
)

export default ImportantNotice
