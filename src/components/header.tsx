import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import ccmLogoFull from "../content/assets/images/ccm-logo-full.svg"
import closeMenuButton from "../content/assets/images/close-menu-button.svg"
import hamburger from "../content/assets/images/hamburger.svg"

const MAX_WIDTH_MOBILE_HEADER = 968

interface Props {
    headerColour: string | undefined
}
const Header: React.FC<Props> = ({ headerColour }) => {
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
    return (
        <>
            <nav id="menu" style={isMenuOpen ? { visibility: "visible" } : {}}>
                <Link className="logo" to="/">
                    <svg viewBox="0 0 720 162">
                        <use xlinkHref={`${ccmLogoFull}#full-logo`} />
                    </svg>
                </Link>
                <a
                    id="close-menu"
                    href="#"
                    onClick={() => {
                        setIsMenuOpen(false)
                    }}
                >
                    <svg id="close-menu-icon" viewBox="0 0 100 100">
                        <use xlinkHref={`${closeMenuButton}#close-button`} />
                    </svg>
                </a>
                <div id="menu-content">
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/#midweek">Midweek</Link>
                    <Link to="/families/">Families</Link>
                    <Link to="/students/">Students</Link>
                    <Link to="/music/">Music</Link>
                    <Link to="/talks/">Talks</Link>
                </div>
            </nav>

            <header
                id="mobile-header"
                className={`header mobile-header ${headerColour ?? ""}`}
                style={isMenuOpen ? { display: "none" } : {}}
            >
                <Link className="logo" to="/">
                    <svg viewBox="0 0 720 162">
                        <use xlinkHref={`${ccmLogoFull}#full-logo`} />
                    </svg>
                </Link>
                <a
                    id="open-menu"
                    href="#"
                    onClick={() => {
                        setIsMenuOpen(true)
                    }}
                >
                    <svg id="open-menu-icon" viewBox="0 0 100 100">
                        <use xlinkHref={`${hamburger}#hamburger`} />
                    </svg>
                </a>
            </header>

            <header
                id="header"
                className={`header desktop-header ${headerColour}`}
            >
                <Link className="logo" to="/">
                    <svg viewBox="0 0 720 162">
                        <use xlinkHref={`${ccmLogoFull}#full-logo`} />
                    </svg>
                </Link>
                <div id="menu-content">
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
