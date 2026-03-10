import './App.css'
import { useState } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import About from "./pages/About"
import SideBar from './components/SideBar'

function App() {
  const [theme, setTheme] = useState("black")
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <div style={{display: "flex", backgroundColor: theme, color: theme == "black" ? "white" : "black" }}>
            <SideBar />

            <div className='aside' >
              <Header />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>

          </div>

        </BrowserRouter>
      </ThemeContext.Provider>

    </>
  )
}

export default App