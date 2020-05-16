import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import CcmLogoFull from "../content/assets/images/ccm-logo-full.inline.svg"
import CloseMenuButton from "../content/assets/images/close-menu-button.inline.svg"
import Hamburger from "../content/assets/images/hamburger.inline.svg"

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
                    <CcmLogoFull />
                </Link>
                <a
                    id="close-menu"
                    href="#"
                    onClick={() => {
                        setIsMenuOpen(false)
                    }}
                >
                    <CloseMenuButton />
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
                    <CcmLogoFull />
                </Link>
                <a
                    id="open-menu"
                    href="#"
                    onClick={() => {
                        setIsMenuOpen(true)
                    }}
                >
                    <Hamburger />
                </a>
            </header>

            <header
                id="header"
                className={`header desktop-header ${headerColour}`}
            >
                <Link className="logo" to="/">
                    <CcmLogoFull />
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
