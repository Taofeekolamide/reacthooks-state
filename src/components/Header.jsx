import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import { BiMoon, BiSun } from "react-icons/bi"

function Header() {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <header>
                <div className='searchbar'>🔍<input type="text" />✖️</div>
                <button>Login</button>
                
                <span onClick={() => setTheme(theme == "black" ? "white" : "black")}>
                    {theme == "black" ? <BiMoon /> : <BiSun />}
                </span>

            </header>
        </>
    )
}

export default Header