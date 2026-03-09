import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Dashboard"
import About from "./pages/About"
import Contact from "./pages/Contact"
import './App.css'
import SideBar from "./components/SideBar"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <SideBar />

          <div className="aside">
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>


      </BrowserRouter>
    </>
  )
}

export default App