/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classnames from "classnames"
import React, { FC, ElementType, Fragment } from "react"

import styles from "./large-navigation-buttons.module.scss"
import { Link } from "gatsby"

interface ButtonConfig {
    key: string
    text: string
    route: string
    icon?: ElementType
    image?: string
    colourScheme: "light" | "dark"
    onClick?: () => void
}

interface LargeNavigationButtonsProps {
    buttonRow: Array<ButtonConfig>
}

const LargeNavigationButtons: FC<LargeNavigationButtonsProps> = ({
    buttonRow,
}) => (
    <div className={styles.row}>
        {buttonRow.map(button => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            const Icon = button.icon ?? Fragment
            return (
                <Link
                    key={button.key}
                    to={button.route}
                    className={classnames(styles.navButton, {
                        [styles["navButton--light"]]:
                            button.colourScheme === "light",
                        [styles["navButton--with-image"]]: Boolean(
                            button.image
                        ),
                    })}
                    onClick={button.onClick}
                >
                    {Boolean(button.image) && (
                        <img
                            src={button.image}
                            alt={button.text}
                            className={styles.image}
                        />
                    )}
                    <div>
                        {Boolean(button.icon) && (
                            <Icon className={styles.icon} />
                        )}
                        <p>{button.text}</p>
                    </div>
                </Link>
            )
        })}
    </div>
)

export default LargeNavigationButtons
