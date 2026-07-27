import React from 'react'
import './styles/Global.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import HelpNSupport from './pages/HelpNSupport'

function App() {
  return (
    <div className='page'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/help-support' element={<HelpNSupport />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
