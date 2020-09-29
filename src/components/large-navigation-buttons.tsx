import classnames from "classnames"
import React, { FC, ElementType, Fragment } from "react"

import styles from "./large-navigation-buttons.module.scss"
import { Link } from "gatsby"

interface ButtonConfig {
    key: string
    text: string
    route: string
    icon?: ElementType
    colourScheme: "light" | "dark"
}

interface LargeNavigationButtonsProps {
    buttonRow: Array<ButtonConfig>
}

const LargeNavigationButtons: FC<LargeNavigationButtonsProps> = ({
    buttonRow,
}) => (
    <div className={styles.row}>
        {buttonRow.map(button => {
            const Icon = button.icon ? button.icon : Fragment
            return (
                <Link
                    key={button.key}
                    to={button.route}
                    className={classnames(styles.navButton, {
                        [styles["navButton--light"]]:
                            button.colourScheme === "light",
                    })}
                >
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
