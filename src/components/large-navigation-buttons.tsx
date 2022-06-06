import classnames from "classnames"
import React, { FC, ElementType, Fragment } from "react"

import * as styles from "./large-navigation-buttons.module.scss"
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
