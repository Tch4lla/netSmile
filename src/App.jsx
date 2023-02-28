import './App.css'
// import './index.css'
import Navbar from './components/Navbar'
import { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Automation from './components/NavbarLinks/Automation'
import Company from './components/NavbarLinks/Company'

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path='company' element={<Company />} /> 
        </Routes>

    </div>
    </BrowserRouter>
    </>
  )
}

export default App
