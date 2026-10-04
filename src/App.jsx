import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Education from "./Education"
import Contact from "./Contact"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education & Certificates</Link>
        <Link to="/contact">Let's Connect</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App