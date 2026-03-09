import { useState } from "react"
import { Link } from "react-router-dom"
function SideBar() {
    const [toggleMenu, setToggleMenu] = useState(true)

    return (
        <>
            <nav >
                <h1 onClick={() => setToggleMenu(!toggleMenu)}>🤞</h1>
                <Link to="/">💨 {toggleMenu && <span>Dashboard</span>}</Link>
                <Link to="/about">😶‍🌫️ {toggleMenu && <span>About</span>}</Link>
                <Link to="/contact">🍾 {toggleMenu && <span>Contact</span>}</Link>
            </nav >
        </>
    )
}

export default SideBar