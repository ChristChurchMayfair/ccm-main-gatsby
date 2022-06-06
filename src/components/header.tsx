import classnames from "classnames"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import CcmLogoFull from "../content/assets/images/ccm-logo-full.inline.svg"
import CloseMenuButton from "../content/assets/images/close-menu-button.inline.svg"
import Hamburger from "../content/assets/images/hamburger.inline.svg"

import * as styles from "./header.module.scss"

const MAX_WIDTH_MOBILE_HEADER = 968

export type HeaderColour = "light" | "dark" | "black"

interface HeaderProps {
    headerColour: HeaderColour | undefined
    blurBackground?: boolean
}
const Header: React.FC<HeaderProps> = ({ headerColour, blurBackground }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const handler = () => {
            if (window.innerWidth > MAX_WIDTH_MOBILE_HEADER) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener("resize", handler)
        return () => {
            window.removeEventListener("resize", handler)
        }
    })

    // TODO: add .current class to menuContent <a> it link is for current page

    return (
        <>
            <nav
                id="menu"
                className={classnames(styles.navBar, {
                    [styles["navBar--hidden"]]: !isMenuOpen,
                })}
            >
                <Link className={styles.navBarLogo} to="/">
                    <CcmLogoFull />
                </Link>
                <a
                    href="#"
                    className={styles.closeMenu}
                    onClick={() => {
                        setIsMenuOpen(false)
                    }}
                >
                    <CloseMenuButton />
                </a>
                <div className={styles.menuContent}>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/#midweek">Midweek</Link>
                    <Link to="/families/">Families</Link>
                    <Link to="/students/">Students</Link>
                    <Link to="/music/">Music</Link>
                    <Link to="/talks/">Talks</Link>
                </div>
            </nav>

            <header
                className={classnames(styles.mobileHeader, {
                    [styles["mobileHeader--hidden"]]: isMenuOpen,
                    [styles["mobileHeader--light"]]: headerColour === "light",
                    [styles["mobileHeader--dark"]]: headerColour === "dark",
                    [styles["mobileHeader--black"]]: headerColour === "black",
                    [styles["blurbackground"]]: blurBackground === true,
                })}
            >
                <Link className={styles.mobileHeaderLogo} to="/">
                    <CcmLogoFull />
                </Link>
                <a
                    className={styles.openMenu}
                    href="#"
                    onClick={() => {
                        setIsMenuOpen(true)
                    }}
                >
                    <Hamburger />
                </a>
            </header>

            <header
                className={classnames(styles.desktopHeader, {
                    [styles["desktopHeader--light"]]: headerColour === "light",
                    [styles["desktopHeader--dark"]]: headerColour === "dark",
                    [styles["desktopHeader--black"]]: headerColour === "black",
                    [styles["blurbackground"]]: blurBackground === true,
                })}
            >
                <Link className={styles.desktopHeaderLogo} to="/">
                    <CcmLogoFull />
                </Link>
                <div className={styles.menuContent}>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/#midweek">Midweek</Link>
                    <Link to="/families/">Families</Link>
                    <Link to="/students/">Students</Link>
                    <Link to="/music/">Music</Link>
                    <Link to="/talks/">Talks</Link>
                </div>
            </header>
        </>
    )
}

export default Header
